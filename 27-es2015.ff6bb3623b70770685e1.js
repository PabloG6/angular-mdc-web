(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{MhMS:function(e,i,t){"use strict";t.r(i),t.d(i,"RippleModule",(function(){return h}));var a=t("d2mR"),n=t("tyNb"),o=t("leug"),r=t("fXoL"),c=t("LuDt"),p=t("w0pw"),m=t("4G1d"),l=t("uwiL"),d=t("K/Dc"),s=t("dkiD");const b=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Ripple",description:'Ripple provides components (or any element) with a material "ink ripple" interaction effect.',references:[{name:"Material Design guidelines: Ripple",url:"https://material.io/design/interaction/states.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md"}],mdcUrls:[{name:"Sass Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/README.md#sass-apis"}],code:"import {MdcRippleModule} from '@angular-mdc/web/ripple';",sass:"@use '@material/ripple/mdc-ripple';\n@use '@material/ripple';"}}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,i){var t;1&e&&r.tc(o.b,!0),2&e&&r.nc(t=r.ac())&&(i._componentViewer=t.first)},decls:1,vars:0,template:function(e,i){1&e&&r.Mb(0,"component-viewer")},directives:[c.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{ngOnInit(){this._componentApi.docApi={sections:[{header:"MdcRipple",selectors:["mdc-ripple"],exportedAs:"mdcRipple",categories:[{name:"Properties",items:[{name:"attachTo: Element",summary:"Attach the ripple surface to an element."},{name:"primary: boolean",summary:"Colors the ripple with the primary theme color."},{name:"secondary: boolean",summary:"Colors the ripple with the secondary theme color."},{name:"disabled: boolean",summary:"Disable the ripple ink."},{name:"unbounded: boolean",summary:"Whether or not the ripple is unbounded (e.g.: checkbox or radio buttons)."}]}]}]}}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,i){var t;1&e&&r.tc(o.a,!0),2&e&&r.nc(t=r.ac())&&(i._componentApi=t.first)},decls:1,vars:0,template:function(e,i){1&e&&r.Mb(0,"component-api")},directives:[p.a],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.exampleRipple={html:'<div #rippleExample mdcRipple [attachTo]="demodiv"\n    [disabled]="disabled.checked">\n  <div #demodiv>\n    Click me\n  </div>\n</div>'},this.examplePrimary={html:'<div mdcRipple [attachTo]="demoPrimary" primary>\n  <div #demoPrimary>\n    Primary Color\n  </div>\n</div>'},this.exampleSecondary={html:'<div mdcRipple [attachTo]="demoSecondary" secondary>\n  <div #demoSecondary>\n    Secondary Color\n  </div>\n</div>'}}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],decls:25,vars:7,consts:[[1,"demo-content"],[1,"demo-layout__row"],["disabled",""],["mdcRipple","",3,"attachTo","disabled"],["rippleExample",""],[1,"demo-layout--center",2,"height","200px","width","100%"],["demodiv",""],[3,"example"],["mdcRipple","","primary","",3,"attachTo"],["demoPrimary",""],["mdcRipple","","secondary","",3,"attachTo"],["demoSecondary",""]],template:function(e,i){if(1&e&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"mdc-form-field"),r.Mb(3,"mdc-checkbox",null,2),r.Rb(5,"label"),r.wc(6,"Disable ripple"),r.Qb(),r.Qb(),r.Qb(),r.Rb(7,"div",3,4),r.Rb(9,"div",5,6),r.wc(11," Click me "),r.Qb(),r.Qb(),r.Mb(12,"example-viewer",7),r.Qb(),r.Rb(13,"div",0),r.Rb(14,"div",8),r.Rb(15,"div",5,9),r.wc(17," Primary Color "),r.Qb(),r.Qb(),r.Mb(18,"example-viewer",7),r.Qb(),r.Rb(19,"div",0),r.Rb(20,"div",10),r.Rb(21,"div",5,11),r.wc(23," Secondary Color "),r.Qb(),r.Qb(),r.Mb(24,"example-viewer",7),r.Qb()),2&e){const e=r.oc(4),t=r.oc(10),a=r.oc(16),n=r.oc(22);r.Bb(7),r.ic("attachTo",t)("disabled",e.checked),r.Bb(5),r.ic("example",i.exampleRipple),r.Bb(2),r.ic("attachTo",a),r.Bb(4),r.ic("example",i.examplePrimary),r.Bb(2),r.ic("attachTo",n),r.Bb(4),r.ic("example",i.exampleSecondary)}},directives:[m.a,l.a,d.a,s.a],encapsulation:2}),e})()}]}];let u=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(i){return new(i||e)},imports:[[n.e.forChild(b)],n.e]}),e})(),h=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(i){return new(i||e)},imports:[[a.a,u]]}),e})()}}]);