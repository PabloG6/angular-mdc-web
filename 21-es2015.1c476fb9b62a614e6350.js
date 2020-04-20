(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{goFH:function(e,t,a){"use strict";a.r(t),a.d(t,"ImageListModule",(function(){return x}));var i=a("d2mR"),s=a("tyNb"),m=a("leug"),n=a("fXoL"),o=a("LuDt"),c=a("w0pw"),p=a("OtPg"),r=a("9UYg"),g=a("dEKC"),l=a("ofXK"),d=a("dkiD");function b(e,t){if(1&e&&(n.Rb(0,"mdc-image-list-item"),n.Rb(1,"mdc-image-list-image-aspect"),n.Mb(2,"img",11),n.Qb(),n.Rb(3,"mdc-image-list-supporting"),n.Rb(4,"span",12),n.wc(5,"Text label"),n.Qb(),n.Qb(),n.Qb()),2&e){const e=t.$implicit;n.Bb(2),n.kc("src","https://material-components-web.appspot.com/images/photos/3x2/",e+1,".jpg",n.qc)}}function h(e,t){if(1&e&&(n.Rb(0,"mdc-image-list-item"),n.Mb(1,"img",11),n.Rb(2,"mdc-image-list-supporting"),n.Rb(3,"span",12),n.wc(4,"Text label"),n.Qb(),n.Qb(),n.Qb()),2&e){const e=t.$implicit;n.Bb(1),n.jc("src",e.image,n.qc)}}const u=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Image List",description:"MDC Image List provides a RTL-aware Material Design image list component. An Image List consists of several items, each containing an image and optionally supporting content (i.e. a text label).",references:[{name:"Material Design guidelines: Image Lists",url:"https://material.io/design/components/image-lists.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-image-list/README.md"}],mdcUrls:[{name:"Sass Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-image-list/README.md#sass-mixins"}],code:"import {MdcImageListModule} from '@angular-mdc/web/image-list';",sass:"@use '@material/image-list/mdc-image-list';\n@use '@material/image-list';"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var a;1&e&&n.tc(m.b,!0),2&e&&n.nc(a=n.ac())&&(t._componentViewer=a.first)},decls:1,vars:0,template:function(e,t){1&e&&n.Mb(0,"component-viewer")},directives:[o.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{ngOnInit(){this._componentApi.docApi={sections:[{header:"MdcImageList",selectors:["mdc-image-list"],exportedAs:"mdcImageList",categories:[{name:"Properties",items:[{name:"masonry: boolean",summary:"Indicates that this Image List should use the Masonry variant."},{name:"textProtection: boolean",summary:"Indicates that supporting content should be positioned in a scrim overlaying each image (instead of positioned separately under each image)."}]}]},{header:"MdcImageListItem",summary:"Mandatory. Indicates each item in an Image List.",selectors:["mdc-image-list-item","mdcImageListItem"],exportedAs:"mdcImageListItem"},{header:"MdcImageListImageAspect",summary:"Optional. Parent of each item's image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio.",selectors:["mdc-image-list-image-aspect","mdcImageListImageAspect"],exportedAs:"mdcImageListImageAspect"},{header:"MdcImageListImage",summary:"Mandatory. Indicates the image element in each item.",selectors:["mdc-image-list-image","mdcImageListImage"],exportedAs:"mdcImageListImage"},{header:"MdcImageListSupporting",summary:"Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels.",selectors:["mdc-image-list-supporting","mdcImageListSupporting"],exportedAs:"mdcImageListSupporting"},{header:"MdcImageListLabel",summary:"Optional. Indicates the text label in each item, if the Image List contains text labels.",selectors:["mdc-image-list-label","mdcImageListLabel"],exportedAs:"mdcImageListLabel"}]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var a;1&e&&n.tc(m.a,!0),2&e&&n.nc(a=n.ac())&&(t._componentApi=a.first)},decls:1,vars:0,template:function(e,t){1&e&&n.Mb(0,"component-api")},directives:[c.a],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.images=Array.from(Array(15),(e,t)=>t),this.masonryImages=[{image:"https://material-components-web.appspot.com/images/photos/3x2/16.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/1.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/1.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/2.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/3.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/2.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/4.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/3.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/5.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/4.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/6.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/5.jpg"},{image:"https://material-components-web.appspot.com/images/photos/2x3/7.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/6.jpg"},{image:"https://material-components-web.appspot.com/images/photos/3x2/7.jpg"}],this.exampleStandard={html:'<mdc-image-list class="standard-image-list image-list--rounded-corners">\n  <mdc-image-list-item *ngFor="let i of images">\n    <mdc-image-list-image-aspect>\n      <img mdcImageListImage src="<image goes here>" />\n    </mdc-image-list-image-aspect>\n    <mdc-image-list-supporting>\n      <span mdcImageListLabel>Text label</span>\n    </mdc-image-list-supporting>\n  </mdc-image-list-item>\n</mdc-image-list>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_image-list.scss"},this.exampleMasonry={html:'<mdc-image-list masonry class="masonry-image-list">\n  <mdc-image-list-item *ngFor="let item of masonryImages">\n    <img mdcImageListImage src="{{item.image}}" />\n    <mdc-image-list-supporting>\n      <span mdcImageListLabel>Text label</span>\n    </mdc-image-list-supporting>\n  </mdc-image-list-item>\n</mdc-image-list>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_image-list.scss"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Fb({type:e,selectors:[["ng-component"]],decls:23,vars:6,consts:[[1,"demo-content"],[1,"demo-content__headline"],["highlight","@use '@material/image-list';\n\n.my-image-list {\n  @include image-list.standard-columns(5);\n}\n\n@media (max-width: 599px) {\n  .my-image-list {\n    @include image-list.standard-columns(3);\n  }\n}"],[1,"demo-layout__row"],["mdc-button","",3,"click"],[1,"standard-image-list","image-list--rounded-corners"],["demolist",""],[4,"ngFor","ngForOf"],[3,"example"],["masonry","",1,"masonry-image-list"],["demomasonry",""],["mdcImageListImage","",3,"src"],["mdcImageListLabel",""]],template:function(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div",0),n.Rb(1,"h3",1),n.wc(2,"Standard Image List"),n.Qb(),n.wc(3," Images in a Standard Image list are constrained to 1:1 aspect ratio by default this can be overridden using the mdc-image-list-aspect mixin documented below. "),n.Rb(4,"pre"),n.Mb(5,"code",2),n.Qb(),n.Rb(6,"div",3),n.Rb(7,"button",4),n.Zb("click",(function(){n.pc(e);const t=n.oc(10);return t.textProtection=!t.textProtection})),n.wc(8),n.Qb(),n.Qb(),n.Rb(9,"mdc-image-list",5,6),n.uc(11,b,6,1,"mdc-image-list-item",7),n.Qb(),n.Mb(12,"example-viewer",8),n.Qb(),n.Rb(13,"div",0),n.Rb(14,"h3",1),n.wc(15,"Masonry Image List"),n.Qb(),n.Rb(16,"div",3),n.Rb(17,"button",4),n.Zb("click",(function(){n.pc(e);const t=n.oc(20);return t.textProtection=!t.textProtection})),n.wc(18),n.Qb(),n.Qb(),n.Rb(19,"mdc-image-list",9,10),n.uc(21,h,5,1,"mdc-image-list-item",7),n.Qb(),n.Mb(22,"example-viewer",8),n.Qb()}if(2&e){const e=n.oc(10),a=n.oc(20);n.Bb(8),n.yc("Text Protection: ",e.textProtection?"On":"Off",""),n.Bb(3),n.ic("ngForOf",t.images),n.Bb(1),n.ic("example",t.exampleStandard),n.Bb(6),n.yc("Text Protection: ",a.textProtection?"On":"Off",""),n.Bb(3),n.ic("ngForOf",t.masonryImages),n.Bb(1),n.ic("example",t.exampleMasonry)}},directives:[p.b,r.a,g.a,l.j,d.a,g.d,g.c,g.b,g.f,g.e],encapsulation:2}),e})()}]}];let I=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[s.e.forChild(u)],s.e]}),e})(),x=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[i.a,I]]}),e})()}}]);