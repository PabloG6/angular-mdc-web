function _classCallCheck(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,s){for(var e=0;e<s.length;e++){var t=s[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,s,e){return s&&_defineProperties(n.prototype,s),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{q7s6:function(n,s,e){"use strict";e.r(s),e.d(s,"SnackbarModule",(function(){return g}));var t,a,o,i,c,r=e("d2mR"),b=e("tyNb"),l=e("leug"),m=e("fXoL"),u=e("LuDt"),d=e("w0pw"),p=e("aXvW"),k=e("9UYg"),h=e("dkiD"),f=[{path:"",component:(o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Snackbars",description:"Snackbars provide brief messages about app processes at the bottom of the screen.",references:[{name:"Material Design guidelines: Snackbars",url:"https://material.io/design/components/snackbars.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-snackbar/README.md"}],mdcUrls:[{name:"Sass Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-snackbar/README.md#sass-mixins"}],code:"import {MdcSnackbarModule} from '@angular-mdc/web/snackbar';",sass:"@use '@material/snackbar/mdc-snackbar';\n@use '@material/snackbar';"}}}]),n}(),o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=m.Fb({type:o,selectors:[["ng-component"]],viewQuery:function(n,s){var e;1&n&&m.tc(l.b,!0),2&n&&m.nc(e=m.ac())&&(s._componentViewer=e.first)},decls:1,vars:0,template:function(n,s){1&n&&m.Mb(0,"component-viewer")},directives:[u.a],encapsulation:2}),o),children:[{path:"",redirectTo:"api"},{path:"api",component:(a=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){this._componentApi.docApi={sections:[{header:"MdcSnackbar (Service)",summary:"Service to open MDC snackbars.",categories:[{name:"Properties",items:[{name:"afterDismiss: Observable<MdcSnackbarDismissReason>",summary:"Gets an observable that is notified when the snackbar is finished closing.",summaryCode:"/** Event that is emitted when a snackbar is dismissed. */\nexport interface MdcSnackbarDismissReason {\n  /** Whether the snackbar was dismissed using the action button. */\n  action: boolean;\n\n  /** Whether the snackbar was dismissed using the dismiss icon button. */\n  dismiss: boolean;\n}"}]},{name:"Methods",items:[{name:"open(message: string)",summary:"Open snackbar with message."},{name:"open(message: string, action: string)",summary:"Opens snackbar message and action."},{name:"open(message: string, action: string, config?: MdcSnackbarConfig)",summary:"Opens the snackbar with optional configuration."}]},{name:"MdcSnackbarConfig",items:[{name:"timeoutMs?: number",summary:"Value must be between 4000 and 10000 or an error will be thrown. Defaults to 5000 (5 seconds)."},{name:"stacked?: boolean",summary:"Positions the action button/icon below the label instead of alongside it. Defaults to false."},{name:"leading?: boolean",summary:"Positions the snackbar on the leading edge of the screen."},{name:"trailing?: boolean",summary:"Positions the snackbar on the trailing (right) edge of the screen."},{name:"direction?: string",summary:"The layout direction of the snackbar content. Default is 'ltr'."},{name:"dismiss?: boolean",summary:'Show dismiss ("X") icon. Default is false.'},{name:"closeOnEscape?: boolean",summary:"Whether the snackbar closes when it is focused and the user presses the ESC key. Default is true."},{name:"classes?: string | string[]",summary:"Add a CSS class or an array of classes."},{name:"actionClasses?: string | string[]",summary:"Add a CSS class or an array of classes to the action button."},{name:"dismissClasses?: string | string[]",summary:"Add a CSS class or an array of classes to the action icon."},{name:"politeness?: AriaLivePoliteness",summary:"The politeness level for the screen reader announcement. Default is 'polite'"}]}]}]}}}]),n}(),a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=m.Fb({type:a,selectors:[["ng-component"]],viewQuery:function(n,s){var e;1&n&&m.tc(l.a,!0),2&n&&m.nc(e=m.ac())&&(s._componentApi=e.first)},decls:1,vars:0,template:function(n,s){1&n&&m.Mb(0,"component-api")},directives:[d.a],encapsulation:2}),a)},{path:"examples",component:(t=function(){function n(s){_classCallCheck(this,n),this.snackbar=s,this.exampleHeader="import { MdcSnackbar } from '@angular-mdc/web';\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(private snackbar: MdcSnackbar) { }\n",this.exampleCustomTS="import { MdcSnackbar } from '@angular-mdc/web';\n\ninterface CustomClasses {\n  classes: string | string[];\n  actionClasses: string | string[];\n  dismissClasses: string | string[];\n}\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(private snackbar: MdcSnackbar) { }\n\n  openCustom(customClasses: CustomClasses) {\n    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {\n      dismiss: true,\n      classes: customClasses.classes,\n      actionClasses: customClasses.actionClasses,\n      dismissClasses: customClasses.dismissClasses\n    });\n  }\n}",this.exampleSnackbar={html:'<button mdc-button raised (click)="simple()">Simple</button>\n\n<button mdc-button raised (click)="withAction()">With Action</button>\n\n<button mdc-button raised (click)="dismissIcon()">Dismiss Icon</button>\n\n<button mdc-button raised (click)="dismissIconOnly()">Icon Only</button>\n\n<button mdc-button raised (click)="stacked()">Stacked</button>\n\n<button mdc-button raised (click)="maxTimeout()">Max Timeout</button>',ts:"".concat(this.exampleHeader,"\n  simple() {\n    const snackbarRef = this.snackbar.open('Marked as favorite.');\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  withAction() {\n    const snackbarRef = this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry');\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  dismissIcon() {\n    const snackbarRef = this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {\n      dismiss: true\n    });\n\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  dismissIconOnly() {\n    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, undefined, {\n      dismiss: true\n    });\n  }\n\n  stacked() {\n    const snackbarRef = this.snackbar.open(\n      `This item already has the label \"travel\". You can add a new label.`,\n      'Add a new label', {\n        stacked: true,\n        dismiss: true\n      });\n\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  maxTimeout() {\n    const snackbarRef = this.snackbar.open(`Can't send photo. Retry in 10 seconds.`, 'Retry', {\n      timeoutMs: 10000\n    });\n\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n}")},this.exampleAlign={html:'<button mdc-button raised (click)="openLeading()">Leading</button>\n\n<button mdc-button raised (click)="openTrailing()">Trailing</button>\n\n<button mdc-button raised (click)="openRtl()">RTL</button>',ts:"".concat(this.exampleHeader,"\n  openLeading(): void {\n    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {\n      leading: true\n    });\n  }\n\n  openTrailing(): void {\n    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {\n      trailing: true\n    });\n  }\n\n  openRtl(): void {\n    this.snackbar.open('My content is right to left', 'Ok', {\n      direction: 'rtl'\n    });\n  }\n}")},this.exampleCustom={html:"<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--shape-radius'})\">Shaped</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--elevation'})\">Elevation</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--viewport-margin'})\">Viewport Margin</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--max-width'})\">Max-Width</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--min-width'})\">Min-Width</button>",ts:"import { MdcSnackbar } from '@angular-mdc/web';\n\ninterface CustomClasses {\n  classes: string | string[];\n  actionClasses: string | string[];\n  dismissClasses: string | string[];\n}\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(private snackbar: MdcSnackbar) { }\n\n  openCustom(customClasses: CustomClasses) {\n    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {\n      dismiss: true,\n      classes: customClasses.classes\n    });\n  }\n}",sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_snackbar.scss"},this.exampleTheme={html:"<button mdc-button raised\n  (click)=\"openCustom({classes: 'custom-snackbar--fill-color'})\">Fill Color</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({classes: 'custom-snackbar--label-ink-color'})\">Ink Color</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({classes: ['custom-snackbar--fill-color', 'custom-snackbar--label-ink-color']})\">Fill/Ink Color</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({actionClasses: 'mdc-button--outlined'})\">Action Outlined</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({dismissClasses: 'demo-icon-button-custom'})\">Custom Dismiss Icon</button>",ts:this.exampleCustomTS,sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_snackbar.scss"}}return _createClass(n,[{key:"simple",value:function(){this.snackbar.open("Marked as favorite.").afterDismiss().subscribe((function(n){console.log("The snack-bar was dismissed: ".concat(n))}))}},{key:"withAction",value:function(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry").afterDismiss().subscribe((function(n){console.log("The snack-bar was dismissed: ".concat(n))}))}},{key:"dismissIcon",value:function(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{dismiss:!0}).afterDismiss().subscribe((function(n){console.log("The snack-bar was dismissed: ".concat(n))}))}},{key:"dismissIconOnly",value:function(){this.snackbar.open("Can't send photo. Retry in 5 seconds.",void 0,{dismiss:!0})}},{key:"stacked",value:function(){this.snackbar.open('This item already has the label "travel". You can add a new label.',"Add a new label",{stacked:!0,dismiss:!0}).afterDismiss().subscribe((function(n){console.log("The snack-bar was dismissed: ".concat(n))}))}},{key:"maxTimeout",value:function(){this.snackbar.open("Can't send photo. Retry in 10 seconds.","Retry",{timeoutMs:1e4}).afterDismiss().subscribe((function(n){console.log("The snack-bar was dismissed: ".concat(n))}))}},{key:"openLeading",value:function(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{leading:!0})}},{key:"openTrailing",value:function(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{trailing:!0})}},{key:"openRtl",value:function(){this.snackbar.open("My content is right to left","Ok",{direction:"rtl"})}},{key:"openCustom",value:function(n){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{dismiss:!0,classes:n.classes,actionClasses:n.actionClasses,dismissClasses:n.dismissClasses})}}]),n}(),t.\u0275fac=function(n){return new(n||t)(m.Lb(p.a))},t.\u0275cmp=m.Fb({type:t,selectors:[["ng-component"]],decls:73,vars:4,consts:[[1,"demo-content"],[1,"demo-layout__row"],[1,"demo-container"],["mdc-button","","raised","",3,"click"],[3,"example"],[1,"demo-content__headline"]],template:function(n,s){1&n&&(m.Rb(0,"div",0),m.Rb(1,"div",1),m.Rb(2,"div",2),m.Rb(3,"button",3),m.Zb("click",(function(){return s.simple()})),m.wc(4,"Simple"),m.Qb(),m.Qb(),m.Rb(5,"div",2),m.Rb(6,"button",3),m.Zb("click",(function(){return s.withAction()})),m.wc(7,"With Action"),m.Qb(),m.Qb(),m.Rb(8,"div",2),m.Rb(9,"button",3),m.Zb("click",(function(){return s.dismissIcon()})),m.wc(10,"Dismiss Icon"),m.Qb(),m.Qb(),m.Rb(11,"div",2),m.Rb(12,"button",3),m.Zb("click",(function(){return s.dismissIconOnly()})),m.wc(13,"Icon Only"),m.Qb(),m.Qb(),m.Rb(14,"div",2),m.Rb(15,"button",3),m.Zb("click",(function(){return s.stacked()})),m.wc(16,"Stacked"),m.Qb(),m.Qb(),m.Rb(17,"div",2),m.Rb(18,"button",3),m.Zb("click",(function(){return s.maxTimeout()})),m.wc(19,"Max Timeout"),m.Qb(),m.Qb(),m.Qb(),m.Mb(20,"example-viewer",4),m.Qb(),m.Rb(21,"div",0),m.Rb(22,"div",1),m.Rb(23,"div",2),m.Rb(24,"button",3),m.Zb("click",(function(){return s.openLeading()})),m.wc(25,"Leading"),m.Qb(),m.Qb(),m.Rb(26,"div",2),m.Rb(27,"button",3),m.Zb("click",(function(){return s.openTrailing()})),m.wc(28,"Trailing"),m.Qb(),m.Qb(),m.Rb(29,"div",2),m.Rb(30,"button",3),m.Zb("click",(function(){return s.openRtl()})),m.wc(31,"RTL"),m.Qb(),m.Qb(),m.Qb(),m.Mb(32,"example-viewer",4),m.Qb(),m.Rb(33,"div",0),m.Rb(34,"h3",5),m.wc(35,"Custom"),m.Qb(),m.Rb(36,"div",1),m.Rb(37,"div",2),m.Rb(38,"button",3),m.Zb("click",(function(){return s.openCustom({classes:"custom-snackbar--shape-radius"})})),m.wc(39,"Shaped"),m.Qb(),m.Qb(),m.Rb(40,"div",2),m.Rb(41,"button",3),m.Zb("click",(function(){return s.openCustom({classes:"custom-snackbar--elevation"})})),m.wc(42,"Elevation"),m.Qb(),m.Qb(),m.Rb(43,"div",2),m.Rb(44,"button",3),m.Zb("click",(function(){return s.openCustom({classes:"custom-snackbar--viewport-margin"})})),m.wc(45,"Viewport Margin"),m.Qb(),m.Qb(),m.Rb(46,"div",2),m.Rb(47,"button",3),m.Zb("click",(function(){return s.openCustom({classes:"custom-snackbar--max-width"})})),m.wc(48,"Max-Width"),m.Qb(),m.Qb(),m.Rb(49,"div",2),m.Rb(50,"button",3),m.Zb("click",(function(){return s.openCustom({classes:"custom-snackbar--min-width"})})),m.wc(51,"Min-Width"),m.Qb(),m.Qb(),m.Qb(),m.Mb(52,"example-viewer",4),m.Qb(),m.Rb(53,"div",0),m.Rb(54,"h3",5),m.wc(55,"Theme"),m.Qb(),m.Rb(56,"div",1),m.Rb(57,"div",2),m.Rb(58,"button",3),m.Zb("click",(function(){return s.openCustom({classes:"custom-snackbar--fill-color"})})),m.wc(59,"Fill Color"),m.Qb(),m.Qb(),m.Rb(60,"div",2),m.Rb(61,"button",3),m.Zb("click",(function(){return s.openCustom({classes:"custom-snackbar--label-ink-color"})})),m.wc(62,"Ink Color"),m.Qb(),m.Qb(),m.Rb(63,"div",2),m.Rb(64,"button",3),m.Zb("click",(function(){return s.openCustom({classes:["custom-snackbar--fill-color","custom-snackbar--label-ink-color"]})})),m.wc(65,"Fill/Ink Color"),m.Qb(),m.Qb(),m.Rb(66,"div",2),m.Rb(67,"button",3),m.Zb("click",(function(){return s.openCustom({actionClasses:"mdc-button--outlined"})})),m.wc(68,"Action Outlined"),m.Qb(),m.Qb(),m.Rb(69,"div",2),m.Rb(70,"button",3),m.Zb("click",(function(){return s.openCustom({dismissClasses:"demo-icon-button-custom"})})),m.wc(71,"Icon Color"),m.Qb(),m.Qb(),m.Qb(),m.Mb(72,"example-viewer",4),m.Qb()),2&n&&(m.Bb(20),m.ic("example",s.exampleSnackbar),m.Bb(12),m.ic("example",s.exampleAlign),m.Bb(20),m.ic("example",s.exampleCustom),m.Bb(20),m.ic("example",s.exampleTheme))},directives:[k.a,h.a],encapsulation:2}),t)}]}],C=((c=function n(){_classCallCheck(this,n)}).\u0275mod=m.Jb({type:c}),c.\u0275inj=m.Ib({factory:function(n){return new(n||c)},imports:[[b.e.forChild(f)],b.e]}),c),g=((i=function n(){_classCallCheck(this,n)}).\u0275mod=m.Jb({type:i}),i.\u0275inj=m.Ib({factory:function(n){return new(n||i)},imports:[[r.a,C]]}),i)}}]);