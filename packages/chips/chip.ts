import {
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Platform} from '@angular/cdk/platform';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {MDCComponent} from '@angular-mdc/web/base';
import {MdcRipple, MDCRippleCapableSurface} from '@angular-mdc/web/ripple';
import {
  MdcIcon,
  MdcIconLocation,
  MDC_ICON_LOCATION,
  MdcIconRegistry
} from '@angular-mdc/web/icon';
import {
  MdcChipSetParentComponent,
  MdcChipInteractionEvent,
  MdcChipNavigationEvent,
  MdcChipRemovalEvent,
  MdcChipSelectionEvent
} from './chip-config';
import {MdcChipPrimaryAction, MdcChipText} from './chip-directives';

import {MDCRippleFoundation, MDCRippleAdapter} from '@material/ripple';
import {
  MDCChipAdapter,
  MDCChipFoundation
} from '@material/chips';

/**
 * Injection token used to provide the parent MdcChipSet component to MdcChip.
 */
export const MDC_CHIPSET_PARENT_COMPONENT =
  new InjectionToken<MdcChipSetParentComponent>('MDC_CHIPSET_PARENT_COMPONENT');

let nextUniqueId = 0;

@Component({
  selector: 'mdc-chip-checkmark',
  exportAs: 'mdcChipCheckmark',
  host: {
    'class': 'mdc-chip__checkmark'
  },
  template: `
  <svg class="mdc-chip__checkmark-svg"
    viewBox="-2 -3 30 30"
    focusable="false">
    <path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
  </svg>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdcChipCheckmark {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}

@Component({
  selector: 'mdc-chip',
  exportAs: 'mdcChip',
  host: {
    '[id]': 'id',
    'role': 'row',
    'class': 'mdc-chip',
    '[class.mdc-chip--selected]': 'selected',
    '[class.mdc-chip--touch]': 'touch',
    '(click)': '_handleInteraction($event)',
    '(keydown)': '_onKeydown($event)',
    '(focusin)': '_onFocusIn($event)',
    '(focusout)': '_onFocusOut($event)',
  },
  templateUrl: 'chip.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MdcRipple]
})
export class MdcChip extends MDCComponent<MDCChipFoundation> implements AfterViewInit, OnDestroy,
  MDCRippleCapableSurface {
  /** Emits whenever the component is destroyed. */
  private _destroyed = new Subject<void>();

  _root!: Element;

  private _id = `mdc-chip-${nextUniqueId++}`;
  @Input() selected?: boolean;

  /** The unique ID of the chip. */
  get id(): string {
    return this._id;
  }

  get leadingIcon(): MdcChipIcon | undefined {
    return this._icons.find((_: MdcChipIcon) => _.leading);
  }

  get trailingIcon(): MdcChipIcon | undefined {
    return this._icons.find((_: MdcChipIcon) => _.trailing);
  }

  @Input() label?: string;

  @Input()
  get filter(): boolean {
    return this._filter;
  }
  set filter(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._filter) {
      this._filter = newValue;
    }
  }
  private _filter = false;

  @Input()
  get choice(): boolean {
    return this._choice;
  }
  set choice(value: boolean) {
    this._choice = coerceBooleanProperty(value);
  }
  private _choice = false;

  @Input()
  get input(): boolean {
    return this._input;
  }
  set input(value: boolean) {
    this._input = coerceBooleanProperty(value);
  }
  private _input = false;

  /** Determines whether or not the chip displays the remove styling and emits (removed) events. */
  @Input()
  get removable(): boolean {
    return this._removable;
  }
  set removable(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._removable) {
      this._removable = value;
      this._foundation.setShouldRemoveOnTrailingIconClick(this._removable);
    }
  }
  private _removable = true;

  @Input()
  get touch(): boolean {
    return this._touch;
  }
  set touch(value: boolean) {
    this._touch = coerceBooleanProperty(value);
  }
  private _touch: boolean = false;

  /** Whether the chip ripple is disabled. */
  @Input()
  get disableRipple(): boolean {
    return this._disableRipple;
  }
  set disableRipple(value: boolean) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  private _disableRipple = false;

  /** The value of the chip. Defaults to the content inside `<mdc-chip>` tags. */
  @Input()
  get value(): string | undefined {
    return this._value ?? this._root.textContent ?? undefined;
  }
  set value(value: string | undefined) {
    this._value = value;
  }
  protected _value?: string;

  /** Emitted when the chip is interacted with. */
  @Output() readonly interactionEvent: EventEmitter<MdcChipInteractionEvent>
    = new EventEmitter<MdcChipInteractionEvent>();

  /** Emitted when the chip is selected or deselected. */
  @Output() readonly selectionChange: EventEmitter<MdcChipSelectionEvent> =
    new EventEmitter<MdcChipSelectionEvent>();

  /** Emitted as chip navigation event. */
  @Output() readonly navigationEvent: EventEmitter<MdcChipNavigationEvent> =
    new EventEmitter<MdcChipNavigationEvent>();

  /** Emitted when trailing icon is interacted with. */
  @Output() readonly trailingIconInteraction: EventEmitter<MdcChipInteractionEvent>
    = new EventEmitter<MdcChipInteractionEvent>();

  /** Emitted when a chip is to be removed. */
  @Output() readonly removalEvent: EventEmitter<MdcChipRemovalEvent>
    = new EventEmitter<MdcChipRemovalEvent>();

  @ContentChild(MdcChipCheckmark, {static: false}) _checkmark?: MdcChipCheckmark;
  @ContentChildren(forwardRef(() => MdcChipIcon), {descendants: true}) _icons!: QueryList<MdcChipIcon>;
  @ViewChild(MdcChipPrimaryAction, {static: true}) _primaryAction!: MdcChipPrimaryAction;
  @ViewChild(MdcChipText, {static: true}) _chipText!: MdcChipText;

  getDefaultFoundation() {
    const adapter: MDCChipAdapter = {
      addClass: (className: string) => this._root.classList.add(className),
      removeClass: (className: string) => this._root.classList.remove(className),
      hasClass: (className: string) => this._root.classList.contains(className),
      /**fix these properties to reflect whatever the fuck this thing is asking for */
      isTrailingActionNavigable: () => false,
      notifyEditStart: () => null,
      notifyEditFinish: () => null,
      removeTrailingActionFocus: () => false,
      addClassToLeadingIcon: (className: string) =>
        this.leadingIcon?.elementRef?.nativeElement?.classList?.add(className),
      removeClassFromLeadingIcon: (className: string) =>
        this.leadingIcon?.elementRef?.nativeElement?.classList?.remove(className),
      eventTargetHasClass: (target: EventTarget | null, className: string) =>
        (target && (target as Element).classList) ? (target as Element).classList.contains(className) : false,
      focusPrimaryAction: () => this._primaryAction._root.focus(),
      focusTrailingAction: () => this.trailingIcon?.elementRef?.nativeElement?.focus(),
      notifyInteraction: () => this.interactionEvent.emit({
        chipId: this._id,
        value: this._value
      }),
      notifySelection: (selected: boolean, chipSetShouldIgnore: boolean) =>
        this.selectionChange.emit({
          chipId: this._id,
          selected: selected,
          value: this._value,
          shouldIgnore: chipSetShouldIgnore
        }),
      notifyNavigation: (key: string, source: any) =>
        this.navigationEvent.emit({
          chipId: this.id,
          value: this._value,
          key: key,
          source: source
        }),
      notifyTrailingIconInteraction: () => this.trailingIconInteraction.emit({
        chipId: this.id,
        value: this._value
      }),
      notifyRemoval: () => this.removalEvent.emit({
        chipId: this.id,
        value: this._value,
        removedAnnouncement: null
      }),
      getComputedStyleValue: (propertyName: string) =>
        this._platform.isBrowser ? window.getComputedStyle(this._root).getPropertyValue(propertyName) : '',
      setStyleProperty: (propertyName: string, value: string) =>
        (<HTMLElement>this._root).style.setProperty(propertyName, value),
      hasLeadingIcon: () => !!this.leadingIcon,
      setPrimaryActionAttr: (attr: string, value: string) => this._primaryAction._root.setAttribute(attr, value),
      getRootBoundingClientRect: () => this._root.getBoundingClientRect(),
      getCheckmarkBoundingClientRect: () =>
        this._checkmark?.elementRef?.nativeElement?.getBoundingClientRect() ?? null,
      isRTL: () => typeof window !== 'undefined' ?
        window.getComputedStyle(this._root).getPropertyValue('direction') === 'rtl' : false,
      getAttribute: (attr: string) => this._root.getAttribute(attr)
    };
    return new MDCChipFoundation(adapter);
  }

  constructor(
    private _platform: Platform,
    private _ngZone: NgZone,
    private _changeDetectorRef: ChangeDetectorRef,
    private _ripple: MdcRipple,
    public elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MDC_CHIPSET_PARENT_COMPONENT) private _parent: MdcChipSetParentComponent) {
    super(elementRef);

    this._root = this.elementRef.nativeElement;
    this._ripple = this._createRipple();
    this._ripple.init();
  }

  ngAfterViewInit(): void {
    this._foundation.init();
    this._setVariantFromChipSet();
    this._loadListeners();
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();

    this._ripple?.destroy();
    this._foundation?.destroy();
  }

  setSelectedFromChipSet(selected: boolean, shouldNotifyClients: boolean): void {
    this._foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
  }

  /** Allows for programmatic focusing of the chip. */
  focus(): void {
    this.focusPrimaryAction();
  }

  focusPrimaryAction(): void {
    this._foundation.focusPrimaryAction();
  }

  focusTrailingAction(): void {
    this._foundation.focusTrailingAction();
  }

  removeFocus(): void {
    this._foundation.removeFocus();
  }

  /**
   * Allows for programmatic removal of the chip.
   * Informs any listeners of the removal request. Does not remove the chip from the DOM.
   */
  remove(): void {
    if (this.removable) {
      this._foundation.beginExit();
    }
  }

  _handleInteraction(evt: KeyboardEvent | MouseEvent): void {
    this._foundation.handleTrailingActionInteraction();
  }

  _onKeydown(evt: KeyboardEvent): void {
    this._foundation.handleTrailingActionInteraction();
    this._foundation.handleKeydown(evt);
  }

  _onFocusIn(evt: FocusEvent): void {
    this._foundation.handleFocusIn(evt);
  }

  _onFocusOut(evt: FocusEvent): void {
    this._foundation.handleFocusOut(evt);
  }

  _handleTrailingIconInteraction(evt: KeyboardEvent | MouseEvent): void {
    this._foundation.handleTrailingActionInteraction();
  }

  private _createRipple(): MdcRipple {
    const adapter: MDCRippleAdapter = {
      ...MdcRipple.createAdapter(this),
      computeBoundingRect: () => this._foundation.getDimensions(),
      isSurfaceDisabled: () => this._disableRipple
    };
    return new MdcRipple(this.elementRef, new MDCRippleFoundation(adapter));
  }

  private _setVariantFromChipSet(): void {
    if (this._parent) {
      this.input = this._parent.input;
      this.filter = this._parent.filter;
      this.choice = this._parent.choice;

      this._changeDetectorRef.detectChanges();
    }
  }

  private _loadListeners(): void {
    this._ngZone.runOutsideAngular(() =>
      fromEvent<TransitionEvent>(this._root, 'transitionend')
        .pipe(takeUntil(this._destroyed))
        .subscribe(evt => this._ngZone.run(() => this._foundation.handleTransitionEnd(evt))));
  }
}

@Component({
  selector: 'mdc-chip-icon, [mdcChipIcon]',
  exportAs: 'mdcChipIcon',
  host: {
    'class': 'mdc-chip__icon',
    '[attr.role]': 'trailing ? "button" : "img"',
    '[attr.tabindex]': 'trailing ? 1 : -1',
    '[class.mdc-chip__icon--leading]': 'leading',
    '[class.mdc-chip__icon--trailing]': 'trailing',
    '[class.mdc-chip__trailing-action]': 'trailing',
    '(click)': '_onIconInteraction($event)',
    '(keydown)': '_onIconInteraction($event)'
  },
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdcChipIcon extends MdcIcon {
  @Input()
  get leading(): boolean {
    return this._leading;
  }
  set leading(value: boolean) {
    this._leading = coerceBooleanProperty(value);
  }
  private _leading: boolean = false;

  @Input()
  get trailing(): boolean {
    return this._trailing;
  }
  set trailing(value: boolean) {
    this._trailing = coerceBooleanProperty(value);
  }
  private _trailing: boolean = false;

  constructor(
    private _parentChip: MdcChip,
    elementRef: ElementRef<HTMLElement>,
    iconRegistry: MdcIconRegistry,
    @Attribute('aria-hidden') ariaHidden: string,
    @Inject(MDC_ICON_LOCATION) location?: MdcIconLocation) {
    super(elementRef, iconRegistry, ariaHidden, location);
  }

  _onIconInteraction(evt: KeyboardEvent | MouseEvent): void {
    if (this.trailing) {
      this._parentChip._handleTrailingIconInteraction(evt);
    }
  }
}
