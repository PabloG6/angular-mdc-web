function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var i=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"K/Dc":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("f6B5"),a=n("Hj8T"),r=n("+O8G"),o=n("MpN4"),s=n("kNUa"),c=n("fXoL"),l=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this._ripple=t,this.elementRef=n,this._primary=!1,this._secondary=!1,this._disabled=!1,this._unbounded=!1,this._root=this.elementRef.nativeElement,this._ripple=this._createRipple()}return _createClass(e,[{key:"ngOnChanges",value:function(e){e.primary&&this.attachTo&&(this._primary?this.attachTo.classList.add("mdc-ripple-surface--primary"):this.attachTo.classList.remove("mdc-ripple-surface--primary")),e.secondary&&this.attachTo&&(this._secondary?this.attachTo.classList.add("mdc-ripple-surface--accent"):this.attachTo.classList.remove("mdc-ripple-surface--accent"))}},{key:"ngAfterViewInit",value:function(){this._ripple.init()}},{key:"ngOnDestroy",value:function(){this._ripple.destroy()}},{key:"_createRipple",value:function(){var e=this,t=Object.assign(Object.assign({},r.a.createAdapter(this)),{addClass:function(t){var n,i;return null===(i=null===(n=e.attachTo)||void 0===n?void 0:n.classList)||void 0===i?void 0:i.add(t)},computeBoundingRect:function(){var t,n;return null!==(n=null===(t=e.attachTo)||void 0===t?void 0:t.getBoundingClientRect())&&void 0!==n?n:{top:0,right:0,bottom:0,left:0,width:0,height:0}},isSurfaceActive:function(){return Object(o.b)(e.attachTo,":active")},isSurfaceDisabled:function(){return e._disabled},isUnbounded:function(){return e._unbounded},removeClass:function(t){var n,i;return null===(i=null===(n=e.attachTo)||void 0===n?void 0:n.classList)||void 0===i?void 0:i.remove(t)},updateCssVariable:function(t,n){var i,a;return null===(a=null===(i=e.attachTo)||void 0===i?void 0:i.style)||void 0===a?void 0:a.setProperty(t,n)},registerInteractionHandler:function(t,n){var i;return null===(i=e.attachTo)||void 0===i?void 0:i.addEventListener(t,n,Object(a.d)())},deregisterInteractionHandler:function(t,n){var i;return null===(i=e.attachTo)||void 0===i?void 0:i.removeEventListener(t,n,Object(a.d)())}});return new r.a(this.elementRef,new s.a(t))}},{key:"attachTo",get:function(){return this._attachTo},set:function(e){var t,n;this._attachTo=e,null===(n=null===(t=this._attachTo)||void 0===t?void 0:t.classList)||void 0===n||n.add("mdc-ripple-surface")}},{key:"primary",get:function(){return this._primary},set:function(e){this._primary=Object(i.b)(e)}},{key:"secondary",get:function(){return this._secondary},set:function(e){this._secondary=Object(i.b)(e)}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(i.b)(e)}},{key:"unbounded",get:function(){return this._unbounded},set:function(e){this._unbounded=Object(i.b)(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Lb(r.a),c.Lb(c.l))},e.\u0275dir=c.Gb({type:e,selectors:[["","mdcRipple",""],["mdc-ripple"]],inputs:{attachTo:"attachTo",primary:"primary",secondary:"secondary",disabled:"disabled",unbounded:"unbounded"},features:[c.Ab([r.a]),c.zb]}),e}()},YROV:function(e,t){e.exports=function(e){var t={className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"},n={className:"number",begin:"#[0-9A-Fa-f]+"};return{case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{className:"selector-tag",begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance:0},{className:"selector-pseudo",begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{className:"selector-pseudo",begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},t,{className:"attribute",begin:"\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal:"[^\\s]"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:":",end:";",contains:[t,n,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"meta",begin:"!important"}]},{begin:"@(page|font-face)",lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",returnBegin:!0,keywords:"and or not only",contains:[{begin:"@[a-z-]+",className:"keyword"},t,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,n,e.CSS_NUMBER_MODE]}]}}},jctj:function(e,t){e.exports=function(e){var t={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},n={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},i=e.inherit(n,{begin:"\\(",end:"\\)"}),a=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),r=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),o={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[n,r,a,i,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[n,i,r,a]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},t,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[o],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[o],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},o]}]}}},kDKR:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("fXoL"),a=n("3Pt+"),r=n("f6B5"),o=n("CBIf"),s=["*"],c={provide:a.h,useExisting:Object(i.T)((function(){return d})),multi:!0},l=0,d=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this._changeDetectorRef=t,this.elementRef=n,this._name="mdc-radio-group-".concat(l++),this._value=null,this._isInitialized=!1,this._selected=null,this._required=!1,this._disabled=!1,this._controlValueAccessorChangeFn=function(){},this.onTouched=function(){},this.change=new i.n}return _createClass(e,[{key:"_checkSelectedRadioButton",value:function(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}},{key:"ngAfterContentInit",value:function(){this._isInitialized=!0}},{key:"_touch",value:function(){this.onTouched&&this.onTouched()}},{key:"_updateRadioButtonNames",value:function(){var e=this;this._radios&&this._radios.forEach((function(t){t.name=e.name,t.markForCheck()}))}},{key:"_updateSelectedRadioFromValue",value:function(){var e=this;this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach((function(t){t.checked=e.value===t.value,t.checked&&(e._selected=t)})))}},{key:"_markRadiosForCheck",value:function(){this._radios&&this._radios.forEach((function(e){return e.markForCheck()}))}},{key:"_updateDisableRadioState",value:function(e){this._radios&&this._radios.forEach((function(t){return t.disabled=e}))}},{key:"writeValue",value:function(e){this.value=e,this._changeDetectorRef.markForCheck()}},{key:"registerOnChange",value:function(e){this._controlValueAccessorChangeFn=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=Object(r.b)(e),this._changeDetectorRef.markForCheck()}},{key:"emitChangeEvent",value:function(){this._isInitialized&&this.change.emit(new o.c(this._selected,this._value))}},{key:"name",get:function(){return this._name},set:function(e){this._name=e,this._updateRadioButtonNames()}},{key:"value",get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}},{key:"selected",get:function(){return this._selected},set:function(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(r.b)(e),this._markRadiosForCheck()}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(r.b)(e),this._updateDisableRadioState(this._disabled),this._markRadiosForCheck()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Lb(i.h),i.Lb(i.l))},e.\u0275cmp=i.Fb({type:e,selectors:[["mdc-radio-group"],["","mdcRadioGroup",""]],contentQueries:function(e,t,n){var a;1&e&&i.Eb(n,o.b,!0),2&e&&i.nc(a=i.ac())&&(t._radios=a)},hostAttrs:["role","radiogroup"],hostVars:1,hostBindings:function(e,t){2&e&&i.Cb("name",null)},inputs:{name:"name",value:"value",selected:"selected",required:"required",disabled:"disabled"},outputs:{change:"change"},exportAs:["mdcRadioGroup"],features:[i.Ab([c,{provide:o.a,useExisting:e}])],ngContentSelectors:s,decls:1,vars:0,template:function(e,t){1&e&&(i.hc(),i.gc(0))},encapsulation:2,changeDetection:0}),e}()},r0Rl:function(e,t){e.exports=function(e){var t={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"},n={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},i={begin:"\\(",end:/\)/,keywords:t,contains:["self",e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.NUMBER_MODE]},a={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,i]},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},s={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},c={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"css"}},l={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]};return o.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,c,l,r,e.REGEXP_MODE],{aliases:["ts"],keywords:t,contains:[{className:"meta",begin:/^\s*['"]use strict['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,c,l,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+e.IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.IDENT_RE},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:["self",e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[\{;]/,excludeEnd:!0,keywords:t,contains:["self",e.inherit(e.TITLE_MODE,{begin:"[A-Za-z$_][0-9A-Za-z$_]*"}),a],illegal:/%/,relevance:0},{beginKeywords:"constructor",end:/[\{;]/,excludeEnd:!0,contains:["self",a]},{begin:/module\./,keywords:{built_in:"module"},relevance:0},{beginKeywords:"module",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},{begin:/\$[(.]/},{begin:"\\."+e.IDENT_RE,relevance:0},n,i]}}},tJqG:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var i={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},a={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function r(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}function o(e,t){if(r(e)&&t in i){var n=e.document.createElement("div"),a=i[t],o=a.standard;return o in n.style?o:a.prefixed}return t}function s(e,t){if(r(e)&&t in a){var n=e.document.createElement("div"),i=a[t];return i.cssProperty in n.style?i.standard:i.prefixed}return t}},tluB:function(e,t){e.exports=function(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}},ywDi:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var i,a=n("mrSG"),r=n("fXoL"),o=n("3Pt+"),s=n("Hj8T"),c=n("f6B5"),l=n("m9I9"),d={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},u={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},h=function(e){function t(n){return e.call(this,Object(a.a)(Object(a.a)({},t.defaultAdapter),n))||this}return Object(a.c)(t,e),Object.defineProperty(t,"strings",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.setChecked=function(e){this.adapter_.setNativeControlChecked(e),this.updateAriaChecked_(e),this.updateCheckedStyling_(e)},t.prototype.setDisabled=function(e){this.adapter_.setNativeControlDisabled(e),e?this.adapter_.addClass(d.DISABLED):this.adapter_.removeClass(d.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked_(t.checked),this.updateCheckedStyling_(t.checked)},t.prototype.updateCheckedStyling_=function(e){e?this.adapter_.addClass(d.CHECKED):this.adapter_.removeClass(d.CHECKED)},t.prototype.updateAriaChecked_=function(e){this.adapter_.setNativeControlAttr(u.ARIA_CHECKED_ATTR,""+!!e)},t}(l.a),b=n("kNUa"),f=n("MpN4"),p=n("sEbM"),m=n("+O8G"),g=n("fTo0"),_=n("4G1d"),v=["input"],y=["thumbUnderlay"],k={provide:o.h,useExisting:Object(r.T)((function(){return w})),multi:!0},E=function e(t,n){_classCallCheck(this,e),this.source=t,this.checked=n},C=0,w=((i=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,a,o){var s;return _classCallCheck(this,n),(s=t.call(this,a))._changeDetectorRef=e,s.ripple=i,s.elementRef=a,s._parentFormField=o,s._uniqueId="mdc-switch-".concat(++C),s._initialized=!1,s.id=s._uniqueId,s.name=null,s.tabIndex=0,s.value=null,s._checked=!1,s._disabled=!1,s._required=!1,s.ariaLabel=null,s.ariaLabelledby=null,s.change=new r.n,s._onChange=function(e){},s._onTouched=function(){},s._root=s.elementRef.nativeElement,s._parentFormField&&o.elementRef.nativeElement.classList.add("mdc-form-field"),s}return _createClass(n,[{key:"getDefaultFoundation",value:function(){var e=this;if(this._initialized)return new h({addClass:function(t){return e._getHostElement().classList.add(t)},removeClass:function(t){return e._getHostElement().classList.remove(t)},setNativeControlChecked:function(t){return e._getInputElement().checked=t},setNativeControlDisabled:function(t){return e._getInputElement().disabled=t},setNativeControlAttr:function(t,n){return e._getInputElement().setAttribute(t,n)}})}},{key:"ngAfterViewInit",value:function(){var e=this;this._initialized=!0,this.ripple=this._createRipple(),this.ripple.init(),this._asyncBuildFoundation().then((function(){e._foundation.init(),e.setDisabledState(e._inputElement.nativeElement.disabled)}))}},{key:"ngOnDestroy",value:function(){this.ripple.destroy(),this.destroy()}},{key:"_asyncBuildFoundation",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._foundation=this.getDefaultFoundation();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"onChange",value:function(e){e.stopPropagation(),this._foundation.handleChange(e),this._checked=this._inputElement.nativeElement.checked,this._foundation.setChecked(this._checked),this._emitChangeEvent(),this._changeDetectorRef.markForCheck()}},{key:"onInputClick",value:function(e){e.stopPropagation()}},{key:"onBlur",value:function(){this._onTouched()}},{key:"writeValue",value:function(e){this.checked=!!e}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"toggle",value:function(){this.checked=!this.checked,this._onChange(this.checked)}},{key:"setDisabledState",value:function(e){var t,n=Object(c.b)(e);n!==this._disabled&&(this._disabled=n,null===(t=this._foundation)||void 0===t||t.setDisabled(n),this._changeDetectorRef.markForCheck())}},{key:"focus",value:function(){this._inputElement.nativeElement.focus()}},{key:"_createRipple",value:function(){var e=this,t=this.thumbUnderlay.nativeElement,n=Object.assign(Object.assign({},m.a.createAdapter(this)),{addClass:function(e){return t.classList.add(e)},computeBoundingRect:function(){return t.getBoundingClientRect()},deregisterInteractionHandler:function(t,n){return e._inputElement.nativeElement.removeEventListener(t,n,Object(s.d)())},isSurfaceActive:function(){return Object(f.b)(e._inputElement.nativeElement,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(t,n){return e._inputElement.nativeElement.addEventListener(t,n,Object(s.d)())},removeClass:function(e){return t.classList.remove(e)},updateCssVariable:function(e,n){return t.style.setProperty(e,n)}});return new m.a(this.elementRef,new b.a(n))}},{key:"_emitChangeEvent",value:function(){this._onChange(this.checked),this.change.emit(new E(this,this.checked))}},{key:"_getInputElement",value:function(){return this._inputElement.nativeElement}},{key:"_getHostElement",value:function(){return this.elementRef.nativeElement}},{key:"checked",get:function(){return this._checked},set:function(e){this.disabled||(this._checked=Object(c.b)(e),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){this.setDisabledState(e)}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(c.b)(e)}},{key:"inputId",get:function(){return"".concat(this.id||this._uniqueId,"-input")}}]),n}(p.a)).\u0275fac=function(e){return new(e||i)(r.Lb(r.h),r.Lb(m.a),r.Lb(r.l),r.Lb(_.a,8))},i.\u0275cmp=r.Fb({type:i,selectors:[["mdc-switch"]],viewQuery:function(e,t){var n;1&e&&(r.tc(v,!0),r.zc(y,!0)),2&e&&(r.nc(n=r.ac())&&(t._inputElement=n.first),r.nc(n=r.ac())&&(t.thumbUnderlay=n.first))},hostAttrs:[1,"mdc-switch"],hostVars:5,hostBindings:function(e,t){1&e&&r.Zb("focus",(function(){return t._inputElement.nativeElement.focus()})),2&e&&(r.Ub("id",t.id),r.Db("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled))},inputs:{id:"id",name:"name",tabIndex:"tabIndex",value:"value",checked:"checked",disabled:"disabled",required:"required",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},outputs:{change:"change"},features:[r.Ab([k,{provide:g.a,useExisting:i},m.a]),r.yb],decls:6,vars:8,consts:[[1,"mdc-switch__track"],[1,"mdc-switch__thumb-underlay"],["thumbUnderlay",""],[1,"mdc-switch__thumb"],["type","checkbox","role","switch",1,"mdc-switch__native-control",3,"id","tabIndex","disabled","required","checked","blur","click","change"],["input",""]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.Rb(1,"div",1,2),r.Mb(3,"div",3),r.Rb(4,"input",4,5),r.Zb("blur",(function(){return t.onBlur()}))("click",(function(e){return t.onInputClick(e)}))("change",(function(e){return t.onChange(e)})),r.Qb(),r.Qb()),2&e&&(r.Bb(4),r.ic("id",t.inputId)("tabIndex",t.tabIndex)("disabled",t.disabled)("required",t.required)("checked",t.checked),r.Cb("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby))},encapsulation:2,changeDetection:0}),i)}}]);