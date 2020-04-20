function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{MhMS:function(e,i,t){"use strict";t.r(i),t.d(i,"RippleModule",(function(){return R}));var n,a,o,c,r,l=t("d2mR"),p=t("tyNb"),m=t("leug"),s=t("fXoL"),d=t("LuDt"),b=t("w0pw"),u=t("4G1d"),h=t("uwiL"),f=t("K/Dc"),v=t("dkiD"),y=[{path:"",component:(o=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Ripple",description:'Ripple provides components (or any element) with a material "ink ripple" interaction effect.',references:[{name:"Material Design guidelines: Ripple",url:"https://material.io/design/interaction/states.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md"}],mdcUrls:[{name:"Sass Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md#sass-apis"}],code:"import {MdcRippleModule} from '@angular-mdc/web/ripple';",sass:"@use '@material/ripple/mdc-ripple';\n@use '@material/ripple';"}}}]),e}(),o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s.Fb({type:o,selectors:[["ng-component"]],viewQuery:function(e,i){var t;1&e&&s.tc(m.b,!0),2&e&&s.nc(t=s.ac())&&(i._componentViewer=t.first)},decls:1,vars:0,template:function(e,i){1&e&&s.Mb(0,"component-viewer")},directives:[d.a],encapsulation:2}),o),children:[{path:"",redirectTo:"api"},{path:"api",component:(a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentApi.docApi={sections:[{header:"MdcRipple",selectors:["mdc-ripple"],exportedAs:"mdcRipple",categories:[{name:"Properties",items:[{name:"attachTo: Element",summary:"Attach the ripple surface to an element."},{name:"primary: boolean",summary:"Colors the ripple with the primary theme color."},{name:"secondary: boolean",summary:"Colors the ripple with the secondary theme color."},{name:"disabled: boolean",summary:"Disable the ripple ink."},{name:"unbounded: boolean",summary:"Whether or not the ripple is unbounded (e.g.: checkbox or radio buttons)."}]}]}]}}}]),e}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Fb({type:a,selectors:[["ng-component"]],viewQuery:function(e,i){var t;1&e&&s.tc(m.a,!0),2&e&&s.nc(t=s.ac())&&(i._componentApi=t.first)},decls:1,vars:0,template:function(e,i){1&e&&s.Mb(0,"component-api")},directives:[b.a],encapsulation:2}),a)},{path:"examples",component:(n=function e(){_classCallCheck(this,e),this.exampleRipple={html:'<div #rippleExample mdcRipple [attachTo]="demodiv"\n    [disabled]="disabled.checked">\n  <div #demodiv>\n    Click me\n  </div>\n</div>'},this.examplePrimary={html:'<div mdcRipple [attachTo]="demoPrimary" primary>\n  <div #demoPrimary>\n    Primary Color\n  </div>\n</div>'},this.exampleSecondary={html:'<div mdcRipple [attachTo]="demoSecondary" secondary>\n  <div #demoSecondary>\n    Secondary Color\n  </div>\n</div>'}},n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Fb({type:n,selectors:[["ng-component"]],decls:25,vars:7,consts:[[1,"demo-content"],[1,"demo-layout__row"],["disabled",""],["mdcRipple","",3,"attachTo","disabled"],["rippleExample",""],[1,"demo-layout--center",2,"height","200px","width","100%"],["demodiv",""],[3,"example"],["mdcRipple","","primary","",3,"attachTo"],["demoPrimary",""],["mdcRipple","","secondary","",3,"attachTo"],["demoSecondary",""]],template:function(e,i){if(1&e&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"mdc-form-field"),s.Mb(3,"mdc-checkbox",null,2),s.Rb(5,"label"),s.wc(6,"Disable ripple"),s.Qb(),s.Qb(),s.Qb(),s.Rb(7,"div",3,4),s.Rb(9,"div",5,6),s.wc(11," Click me "),s.Qb(),s.Qb(),s.Mb(12,"example-viewer",7),s.Qb(),s.Rb(13,"div",0),s.Rb(14,"div",8),s.Rb(15,"div",5,9),s.wc(17," Primary Color "),s.Qb(),s.Qb(),s.Mb(18,"example-viewer",7),s.Qb(),s.Rb(19,"div",0),s.Rb(20,"div",10),s.Rb(21,"div",5,11),s.wc(23," Secondary Color "),s.Qb(),s.Qb(),s.Mb(24,"example-viewer",7),s.Qb()),2&e){var t=s.oc(4),n=s.oc(10),a=s.oc(16),o=s.oc(22);s.Bb(7),s.ic("attachTo",n)("disabled",t.checked),s.Bb(5),s.ic("example",i.exampleRipple),s.Bb(2),s.ic("attachTo",a),s.Bb(4),s.ic("example",i.examplePrimary),s.Bb(2),s.ic("attachTo",o),s.Bb(4),s.ic("example",i.exampleSecondary)}},directives:[u.a,h.a,f.a,v.a],encapsulation:2}),n)}]}],w=((r=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:r}),r.\u0275inj=s.Ib({factory:function(e){return new(e||r)},imports:[[p.e.forChild(y)],p.e]}),r),R=((c=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:c}),c.\u0275inj=s.Ib({factory:function(e){return new(e||c)},imports:[[l.a,w]]}),c)}}]);