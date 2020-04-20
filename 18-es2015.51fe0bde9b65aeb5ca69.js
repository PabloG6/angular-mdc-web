(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{fPXS:function(e,n,i){"use strict";i.r(n),i.d(n,"FormFieldModule",(function(){return R}));var t=i("d2mR"),c=i("tyNb"),o=i("leug"),l=i("fXoL"),a=i("LuDt"),d=i("w0pw"),r=i("9UYg"),m=i("4G1d"),b=i("6D23"),s=i("OA+s"),f=i("dkiD"),p=i("uwiL"),u=i("CBIf"),h=i("ywDi");const w=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Form Fields",description:"MDC Form Field aligns an MDC Web form field (for example, a checkbox)\n      with its label and makes it RTL-aware. It also activates a ripple effect\n      upon interacting with the label.",references:[{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/README.md"}],code:"import {MdcFormFieldModule} from '@angular-mdc/web/form-field';",sass:"@use '@material/form-field/mdc-form-field';\n@use '@material/form-field';",tabs:[{label:"Api",route:"./api"},{label:"Examples",route:"./examples"}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,n){var i;1&e&&l.tc(o.b,!0),2&e&&l.nc(i=l.ac())&&(n._componentViewer=i.first)},decls:1,vars:0,template:function(e,n){1&e&&l.Mb(0,"component-viewer")},directives:[a.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{ngOnInit(){this._componentApi.docApi={sections:[{header:"MdcFormField",selectors:["mdc-form-field"],exportedAs:"mdcFormField",categories:[{name:"Properties",items:[{name:"fluid: boolean",summary:"Width expands and contracts as the screen size changes."},{name:"alignEnd: boolean",summary:"Position the input after the label."}]}]}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,n){var i;1&e&&l.tc(o.a,!0),2&e&&l.nc(i=l.ac())&&(n._componentApi=i.first)},decls:1,vars:0,template:function(e,n){1&e&&l.Mb(0,"component-api")},directives:[d.a],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.example1={html:'<mdc-form-field fluid>\n  <mdc-text-field label="First name" outlined required></mdc-text-field>\n  <mdc-helper-text persistent validation>*Required</mdc-helper-text>\n</mdc-form-field>'},this.example2={html:"<mdc-form-field>\n  <mdc-checkbox></mdc-checkbox>\n  <label>Checkbox</label>\n</mdc-form-field>"},this.example3={html:"<mdc-form-field>\n  <mdc-radio></mdc-radio>\n  <label>Radio</label>\n</mdc-form-field>"},this.example4={html:"<mdc-form-field>\n  <mdc-switch></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Fb({type:e,selectors:[["ng-component"]],decls:49,vars:8,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","",3,"click"],["fluid",""],["demoFluid",""],["label","First name","outlined","","required",""],["persistent","","validation",""],[3,"example"],["demofield",""],["formfieldradio",""],["demoradio1",""],["demoformswitch",""]],template:function(e,n){if(1&e){const e=l.Sb();l.Rb(0,"div",0),l.Rb(1,"h3",1),l.wc(2,"Text Field - Fluid"),l.Qb(),l.Rb(3,"div",2),l.Rb(4,"button",3),l.Zb("click",(function(){l.pc(e);const n=l.oc(7);return n.fluid=!n.fluid})),l.wc(5),l.Qb(),l.Qb(),l.Rb(6,"mdc-form-field",4,5),l.Mb(8,"mdc-text-field",6),l.Rb(9,"mdc-helper-text",7),l.wc(10,"*Required"),l.Qb(),l.Qb(),l.Mb(11,"example-viewer",8),l.Qb(),l.Rb(12,"div",0),l.Rb(13,"h3",1),l.wc(14,"Checkbox"),l.Qb(),l.Rb(15,"div",2),l.Rb(16,"button",3),l.Zb("click",(function(){l.pc(e);const n=l.oc(19);return n.alignEnd=!n.alignEnd})),l.wc(17),l.Qb(),l.Qb(),l.Rb(18,"mdc-form-field",null,9),l.Mb(20,"mdc-checkbox"),l.Rb(21,"label"),l.wc(22,"Checkbox"),l.Qb(),l.Qb(),l.Mb(23,"example-viewer",8),l.Qb(),l.Rb(24,"div",0),l.Rb(25,"h3",1),l.wc(26,"Radio"),l.Qb(),l.Rb(27,"div",2),l.Rb(28,"button",3),l.Zb("click",(function(){l.pc(e);const n=l.oc(31);return n.alignEnd=!n.alignEnd})),l.wc(29),l.Qb(),l.Qb(),l.Rb(30,"mdc-form-field",null,10),l.Mb(32,"mdc-radio",null,11),l.Rb(34,"label"),l.wc(35,"Radio"),l.Qb(),l.Qb(),l.Mb(36,"example-viewer",8),l.Qb(),l.Rb(37,"div",0),l.Rb(38,"h3",1),l.wc(39,"Switch"),l.Qb(),l.Rb(40,"div",2),l.Rb(41,"button",3),l.Zb("click",(function(){l.pc(e);const n=l.oc(44);return n.alignEnd=!n.alignEnd})),l.wc(42),l.Qb(),l.Qb(),l.Rb(43,"mdc-form-field",null,12),l.Mb(45,"mdc-switch"),l.Rb(46,"label"),l.wc(47,"off/on"),l.Qb(),l.Qb(),l.Mb(48,"example-viewer",8),l.Qb()}if(2&e){const e=l.oc(7),i=l.oc(19),t=l.oc(31),c=l.oc(44);l.Bb(5),l.yc("Fluid: ",e.fluid?"On":"Off",""),l.Bb(6),l.ic("example",n.example1),l.Bb(6),l.yc("Align End: ",i.alignEnd?"On":"Off",""),l.Bb(6),l.ic("example",n.example2),l.Bb(6),l.yc("Align End: ",t.alignEnd?"On":"Off",""),l.Bb(7),l.ic("example",n.example3),l.Bb(6),l.yc("Align End: ",c.alignEnd?"On":"Off",""),l.Bb(6),l.ic("example",n.example4)}},directives:[r.a,m.a,b.a,s.a,f.a,p.a,u.b,h.a],encapsulation:2}),e})()}]}];let x=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(n){return new(n||e)},imports:[[c.e.forChild(w)],c.e]}),e})(),R=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(n){return new(n||e)},imports:[[t.a,x]]}),e})()}}]);