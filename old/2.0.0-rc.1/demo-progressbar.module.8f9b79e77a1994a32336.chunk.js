webpackJsonp(["demo-progressbar.module"],{"0UI1":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-bs4-progressbar-stacked',\n  templateUrl: './stacked.html'\n})\nexport class DemoProgressbarStackedBs4Component {\n  type: string;\n  stacked: any[] = [];\n\n  constructor() {\n    this.randomStacked();\n  }\n\n  randomStacked(): void {\n    let types = ['success', 'info', 'warning', 'danger'];\n\n    this.stacked = [];\n    let n = Math.floor(Math.random() * 4 + 1);\n    for (let i = 0; i < n; i++) {\n      let index = Math.floor(Math.random() * 4);\n      let value = Math.floor(Math.random() * 27 + 3);\n      this.stacked.push({\n        value,\n        type: types[index],\n        label: value + ' %'\n      });\n    }\n  }\n}\n"},"7XEd":function(n,l){n.exports='<div class="row">\n  <div class="col-sm-4">\n    <progressbar class="progress" [value]="55" [max]="100"></progressbar>\n  </div>\n  <div class="col-sm-4">\n    <progressbar class="progress progress-striped" [value]="22" [max]="100" type="warning">22%</progressbar>\n  </div>\n  <div class="col-sm-4">\n    <progressbar class="progress progress-striped active" [max]="200" [value]="166" type="danger"><i>166 / 200</i></progressbar>\n  </div>\n</div>\n'},FRdR:function(n,l){n.exports='<progressbar class="progress progress-striped progress-animated" [max]="max" [value]="dynamic">\n  <span style="color:white; white-space:nowrap;">{{dynamic}} / {{max}}</span>\n</progressbar>\n\n<small><em>No animation</em></small>\n<progressbar class="progress progress-success" [value]="dynamic" [max]="100" type="success"><b>{{dynamic}}%</b></progressbar>\n\n<small><em>Object (changes type based on value)</em></small>\n<progressbar class="progress progress-striped progress-animated" [value]="dynamic" [max]="max" [type]="type">\n  {{type}} <i *ngIf="showWarning">!!! Watch out !!!</i>\n</progressbar>\n<br>\n<button type="button" class="btn btn-sm btn-primary" (click)="random()">Randomize</button>\n'},GJfx:function(n,l){n.exports='<progressbar [max]="max" [value]="dynamic">\n  <span style="color:white; white-space:nowrap;">{{dynamic}} / {{max}}</span>\n</progressbar>\n\n<small><em>No animation</em></small>\n<progressbar [animate]="false" [value]="dynamic" type="success"><b>{{dynamic}}%</b></progressbar>\n\n<small><em>Object (changes type based on value)</em></small>\n<progressbar class="progress-striped active" [value]="dynamic" [type]="type">\n  {{type}} <i *ngIf="showWarning">!!!Watch out !!!</i>\n</progressbar>\n\n<button type="button" class="btn btn-sm btn-primary" (click)="random()">Randomize</button>\n'},LdbQ:function(n,l){n.exports='<progressbar class="progress-striped active"  [value]="136" type="danger"><i>136 / 150</i></progressbar>\n'},RD98:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-bs4-progressbar-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoProgressbarDynamicBs4Component {\n  max: number = 200;\n  showWarning: boolean;\n  dynamic: number;\n  type: string;\n\n  constructor() {\n    this.random();\n  }\n\n  random(): void {\n    let value = Math.floor(Math.random() * 100 + 1);\n    let type: string;\n\n    if (value < 25) {\n      type = 'success';\n    } else if (value < 50) {\n      type = 'info';\n    } else if (value < 75) {\n      type = 'warning';\n    } else {\n      type = 'danger';\n    }\n\n    this.showWarning = type === 'danger' || type === 'warning';\n    this.dynamic = value;\n    this.type = type;\n  }\n}\n"},TfXu:function(n,l){n.exports="// RECOMMENDED (doesn't work with system.js)\nimport { ProgressbarModule } from 'ngx-bootstrap/progressbar';\n// or\nimport { ProgressbarModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [ProgressbarModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},V8X4:function(n,l){n.exports="import { Component } from '@angular/core';\nimport { ProgressbarConfig } from 'ngx-bootstrap/progressbar';\n\n// such override allows to keep some initial values\n\nexport function getProgressbarConfig(): ProgressbarConfig {\n  return Object.assign(new ProgressbarConfig(), { animate: false, max: 150 });\n}\n\n@Component({\n  selector: 'demo-progressbar-config',\n  templateUrl: './config.html',\n  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]\n})\nexport class DemoProgressbarConfigComponent {}\n"},VNHC:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-progressbar-stacked',\n  templateUrl: './stacked.html'\n})\nexport class DemoProgressbarStackedComponent {\n  type: string;\n  stacked: any[] = [];\n\n  constructor() {\n    this.randomStacked();\n  }\n\n  randomStacked(): void {\n    let types = ['success', 'info', 'warning', 'danger'];\n\n    this.stacked = [];\n    let n = Math.floor(Math.random() * 4 + 1);\n    for (let i = 0; i < n; i++) {\n      let index = Math.floor(Math.random() * 4);\n      let value = Math.floor(Math.random() * 27 + 3);\n      this.stacked.push({\n        value,\n        type: types[index],\n        label: value + ' %'\n      });\n    }\n  }\n}\n"},VbBM:function(n,l){n.exports='<div class="row">\n  <div class="col-sm-4">\n    <progressbar [value]="55"></progressbar>\n  </div>\n  <div class="col-sm-4">\n    <progressbar class="progress-striped" [value]="22" type="warning">22%</progressbar>\n  </div>\n  <div class="col-sm-4">\n    <progressbar class="progress-striped active" max="200" [value]="166" type="danger"><i>166 / 200</i></progressbar>\n  </div>\n</div>\n'},ZNFH:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("/oeL"),r=function(){return function(){}}(),u=e("urbl"),a=e("QUTT"),o=e("PJTy"),s=e("v1cn"),i=e("qEIf"),c=e("rNzy"),p=e("LfeD"),m=e("lgdf"),d=e("Jggs"),g=e("c+jj"),_=e("qbdv"),b=e("WJQO"),f=function(){return function(){}}(),y=function(){function n(){this.max=200,this.random()}return n.prototype.random=function(){var n,l=Math.floor(100*Math.random()+1);n=l<25?"success":l<50?"info":l<75?"warning":"danger",this.showWarning="danger"===n||"warning"===n,this.dynamic=l,this.type=n},n.ctorParameters=function(){return[]},n}(),v=function(){function n(){this.stacked=[],this.randomStacked()}return n.prototype.randomStacked=function(){var n=["success","info","warning","danger"];this.stacked=[];for(var l=Math.floor(4*Math.random()+1),e=0;e<l;e++){var t=Math.floor(4*Math.random()),r=Math.floor(27*Math.random()+3);this.stacked.push({value:r,type:n[t],label:r+" %"})}},n.ctorParameters=function(){return[]},n}(),h=function(){function n(){this.addClass=!0,this.bars=[],this._max=100}return Object.defineProperty(n.prototype,"max",{get:function(){return this._max},set:function(n){this._max=n,this.bars.forEach(function(n){n.recalculatePercentage()})},enumerable:!0,configurable:!0}),n.prototype.addBar=function(n){this.animate||(n.transition="none"),this.bars.push(n)},n.prototype.removeBar=function(n){this.bars.splice(this.bars.indexOf(n),1)},n.decorators=[{type:t.o,args:[{selector:"bs-progress, [progress]"}]}],n.ctorParameters=function(){return[]},n.propDecorators={animate:[{type:t.z}],max:[{type:t.t,args:["attr.max"]},{type:t.z}],addClass:[{type:t.t,args:["class.progress"]}]},n}(),x=e("UGXk"),w=function(){function n(n){this.percent=0,this.progress=n}return Object.defineProperty(n.prototype,"value",{get:function(){return this._value},set:function(n){(n||0===n)&&(this._value=n,this.recalculatePercentage())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"setBarWidth",{get:function(){return this.recalculatePercentage(),this.isBs3?"":this.percent},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBs3",{get:function(){return Object(x.a)()},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.progress.addBar(this)},n.prototype.ngOnDestroy=function(){this.progress.removeBar(this)},n.prototype.recalculatePercentage=function(){this.percent=+(this.value/this.progress.max*100).toFixed(2);var n=this.progress.bars.reduce(function(n,l){return n+l.percent},0);n>100&&(this.percent-=n-100)},n.decorators=[{type:t.l,args:[{selector:"bar",template:'<div class="progress-bar" style="min-width: 0;" role="progressbar" [ngClass]="type && \'progress-bar-\' + type + \' bg-\' + type" [ngStyle]="{width: (isBs3 ? (percent < 100 ? percent : 100) + \'%\' : \'100%\'), transition: transition}" aria-valuemin="0" [attr.aria-valuenow]="value" [attr.aria-valuetext]="percent.toFixed(0) + \'%\'" [attr.aria-valuemax]="max"> <ng-content></ng-content> </div> '}]}],n.ctorParameters=function(){return[{type:h,decorators:[{type:t.s}]}]},n.propDecorators={type:[{type:t.z}],value:[{type:t.z}],setBarWidth:[{type:t.t,args:["style.width.%"]}]},n}(),k=function(){function n(){this.animate=!0,this.max=100}return n.decorators=[{type:t.w}],n.ctorParameters=function(){return[]},n}(),P=function(){function n(n){this.isStacked=!1,Object.assign(this,n)}return Object.defineProperty(n.prototype,"value",{set:function(n){this.isStacked=Array.isArray(n),this._value=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBs3",{get:function(){return Object(b.b)()},enumerable:!0,configurable:!0}),n.decorators=[{type:t.l,args:[{selector:"progressbar",template:'<div progress [animate]="animate" [max]="max" [style.width]="!isBs3 ? \'100%\' : \'auto\'"> <bar [type]="type" [value]="_value" *ngIf="!isStacked"> <ng-content></ng-content> </bar> <ng-template [ngIf]="isStacked"> <bar *ngFor="let item of _value" [type]="item.type" [value]="item.value">{{ item.label }} </bar> </ng-template> </div> ',styles:["\n    :host {\n      width: 100%;\n    }\n  "]}]}],n.ctorParameters=function(){return[{type:k}]},n.propDecorators={animate:[{type:t.z}],max:[{type:t.z}],type:[{type:t.z}],value:[{type:t.z}]},n}(),C=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[k]}},n.decorators=[{type:t.D,args:[{imports:[_.c],declarations:[h,w,P],exports:[h,w,P]}]}],n.ctorParameters=function(){return[]},n}();function M(){return Object.assign(new k,{animate:!1,max:150})}var B=function(){return function(){}}(),S=function(){return function(){}}(),O=function(){function n(){this.max=200,this.random()}return n.prototype.random=function(){var n,l=Math.floor(100*Math.random()+1);n=l<25?"success":l<50?"info":l<75?"warning":"danger",this.showWarning="danger"===n||"warning"===n,this.dynamic=l,this.type=n},n.ctorParameters=function(){return[]},n}(),j=function(){function n(){this.stacked=[],this.randomStacked()}return n.prototype.randomStacked=function(){var n=["success","info","warning","danger"];this.stacked=[];for(var l=Math.floor(4*Math.random()+1),e=0;e<l;e++){var t=Math.floor(4*Math.random()),r=Math.floor(27*Math.random()+3);this.stacked.push({value:r,type:n[t],label:r+" %"})}},n.ctorParameters=function(){return[]},n}(),D=e("SY0Y"),I=e("EWuz"),R=e("bZLq"),W=e("vN/N"),z=[{name:"Usage",anchor:"usage",outlet:D.a,content:{doc:e("TfXu")}},{name:"Examples",anchor:"examples",outlet:I.a,content:[{title:"Static",anchor:"bs3-static",component:e("khht"),html:e("VbBM"),outlet:f},{title:"Dynamic",anchor:"bs3-dynamic",component:e("oKxZ"),html:e("GJfx"),outlet:y},{title:"Stacked",anchor:"bs3-stacked",component:e("VNHC"),html:e("bOLo"),outlet:v},{title:"Configuring defaults",anchor:"bs3-config",component:e("V8X4"),html:e("LdbQ"),outlet:B}]},{name:"API Reference",anchor:"api-reference",outlet:R.a,content:[{title:"ProgressbarComponent",anchor:"progressbar-component",outlet:W.b},{title:"ProgressDirective",anchor:"progress-directive",outlet:W.b},{title:"BarComponent",anchor:"bar-component",outlet:W.b},{title:"ProgressbarConfig",anchor:"progress-config",outlet:W.c}]}],N=[{name:"Usage",anchor:"usage",outlet:D.a,content:{doc:e("TfXu")}},{name:"Examples",anchor:"examples",outlet:I.a,content:[{title:"Static",anchor:"bs4-static",component:e("nf1m"),html:e("7XEd"),outlet:S},{title:"Dynamic",anchor:"bs4-dynamic",component:e("RD98"),html:e("FRdR"),outlet:O},{title:"Stacked",anchor:"bs4-stacked",component:e("0UI1"),html:e("rxQt"),outlet:j}]},{name:"API Reference",anchor:"api-reference",outlet:R.a,content:[{title:"ProgressbarComponent",anchor:"progressbar-component",outlet:W.b},{title:"ProgressDirective",anchor:"progress-directive",outlet:W.b},{title:"BarComponent",anchor:"bar-component",outlet:W.b},{title:"ProgressbarConfig",anchor:"progress-config",outlet:W.c}]}],U=e("W6cK"),F=function(){function n(n){this.injector=n,this.name="Progressbar",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/progressbar",this.componentContentBs3=z,this.componentContentBs4=N,this._injectors=new Map}return n.prototype.sectionInjections=function(n){if(this._injectors.has(n))return this._injectors.get(n);var l=t.O.resolveAndCreate([{provide:U.a,useValue:n}],this.injector);return this._injectors.set(n,l),l},Object.defineProperty(n.prototype,"isBs3",{get:function(){return"undefined"!=typeof PR&&setTimeout(function(){return PR.prettyPrint()},10),Object(b.b)()},enumerable:!0,configurable:!0}),n.ctorParameters=function(){return[{type:t.y}]},n}(),Z=t._19({encapsulation:2,styles:[],data:{}});function E(n){return t._45(0,[(n()(),t._22(0,null,null,1,"docs-section",[],null,null,null,p.b,p.a)),t._20(49152,null,0,m.a,[t.y],{content:[0,"content"]},null)],function(n,l){n(l,1,0,l.component.componentContentBs3)},null)}function X(n){return t._45(0,[(n()(),t._22(0,null,null,1,"docs-section",[],null,null,null,p.b,p.a)),t._20(49152,null,0,m.a,[t.y],{content:[0,"content"]},null)],function(n,l){n(l,1,0,l.component.componentContentBs4)},null)}function A(n){return t._45(2,[(n()(),t._22(0,null,null,11,"demo-section",[],null,null,null,d.b,d.a)),t._20(49152,null,0,g.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(n()(),t._43(0,["\n  "])),(n()(),t._22(0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t._43(null,["Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."])),(n()(),t._43(0,["\n\n  "])),(n()(),t._16(16777216,null,0,1,null,E)),t._20(16384,null,0,_.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(0,["\n  "])),(n()(),t._16(16777216,null,0,1,null,X)),t._20(16384,null,0,_.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(0,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){var e=l.component;n(l,1,0,e.name,e.src,e.isBs3?e.componentContentBs3:e.componentContentBs4),n(l,7,0,e.isBs3),n(l,10,0,!e.isBs3)},null)}var L=t._17("progressbar-section",F,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"progressbar-section",[],null,null,null,A,Z)),t._20(49152,null,0,F,[t.y],null,null)],null,null)},{},{},[]),q=t._19({encapsulation:2,styles:[],data:{}});function T(n){return t._45(0,[(n()(),t._22(0,null,null,6,"div",[["aria-valuemin","0"],["class","progress-bar"],["role","progressbar"],["style","min-width: 0;"]],[[1,"aria-valuenow",0],[1,"aria-valuetext",0],[1,"aria-valuemax",0]],null,null,null,null)),t._20(278528,null,0,_.k,[t.A,t.B,t.p,t.P],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._20(278528,null,0,_.q,[t.B,t.p,t.P],{ngStyle:[0,"ngStyle"]},null),t._38({width:0,transition:1}),(n()(),t._43(null,[" "])),t._34(null,0),(n()(),t._43(null,[" "])),(n()(),t._43(null,[" "]))],function(n,l){var e=l.component;n(l,1,0,"progress-bar",e.type&&"progress-bar-"+e.type+" bg-"+e.type),n(l,2,0,n(l,3,0,e.isBs3?(e.percent<100?e.percent:100)+"%":"100%",e.transition))},function(n,l){var e=l.component;n(l,0,0,e.value,e.percent.toFixed(0)+"%",e.max)})}t._17("bar",w,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"bar",[],[[4,"width","%"]],null,null,T,q)),t._20(245760,null,0,w,[h],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,t._35(l,1).setBarWidth)})},{type:"type",value:"value"},{},["*"]);var V=t._19({encapsulation:0,styles:["[_nghost-%COMP%] {\n      width: 100%;\n    }"],data:{}});function J(n){return t._45(0,[(n()(),t._22(0,null,null,4,"bar",[],[[4,"width","%"]],null,null,T,q)),t._20(245760,null,0,w,[h],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._43(0,[" "])),t._34(0,0),(n()(),t._43(0,[" "]))],function(n,l){var e=l.component;n(l,1,0,e.type,e._value)},function(n,l){n(l,0,0,t._35(l,1).setBarWidth)})}function Q(n){return t._45(0,[(n()(),t._22(0,null,null,2,"bar",[],[[4,"width","%"]],null,null,T,q)),t._20(245760,null,0,w,[h],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._43(0,[""," "]))],function(n,l){n(l,1,0,l.context.$implicit.type,l.context.$implicit.value)},function(n,l){n(l,0,0,t._35(l,1).setBarWidth),n(l,2,0,l.context.$implicit.label)})}function G(n){return t._45(0,[(n()(),t._43(null,[" "])),(n()(),t._16(16777216,null,null,1,null,Q)),t._20(802816,null,0,_.m,[t._4,t.Z,t.A],{ngForOf:[0,"ngForOf"]},null),(n()(),t._43(null,[" "]))],function(n,l){n(l,2,0,l.component._value)},null)}function H(n){return t._45(0,[(n()(),t._22(0,null,null,8,"div",[["progress",""]],[[4,"width",null],[1,"max",0],[2,"progress",null]],null,null,null,null)),t._20(16384,null,0,h,[],{animate:[0,"animate"],max:[1,"max"]},null),(n()(),t._43(null,[" "])),(n()(),t._16(16777216,null,null,1,null,J)),t._20(16384,null,0,_.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(null,[" "])),(n()(),t._16(16777216,null,null,1,null,G)),t._20(16384,null,0,_.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(null,[" "])),(n()(),t._43(null,[" "]))],function(n,l){var e=l.component;n(l,1,0,e.animate,e.max),n(l,4,0,!e.isStacked),n(l,7,0,e.isStacked)},function(n,l){n(l,0,0,l.component.isBs3?"auto":"100%",t._35(l,1).max,t._35(l,1).addClass)})}t._17("progressbar",P,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"progressbar",[],null,null,null,H,V)),t._20(49152,null,0,P,[k],null,null)],null,null)},{animate:"animate",max:"max",type:"type",value:"value"},{},["*"]);var K=t._19({encapsulation:2,styles:[],data:{}});function $(n){return t._45(0,[(n()(),t._22(0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,4,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,1,"progressbar",[],null,null,null,H,V)),t._20(49152,null,0,P,[k],{value:[0,"value"]},null),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,5,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,2,"progressbar",[["class","progress-striped"],["type","warning"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._43(0,["22%"])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,6,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,3,"progressbar",[["class","progress-striped active"],["max","200"],["type","danger"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._22(0,null,0,1,"i",[],null,null,null,null,null)),(n()(),t._43(null,["166 / 200"])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,5,0,55);n(l,11,0,"warning",22);n(l,18,0,"200","danger",166)},null)}var Y=t._17("demo-progressbar-static",f,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-progressbar-static",[],null,null,null,$,K)),t._20(49152,null,0,f,[],null,null)],null,null)},{},{},[]),nn=t._19({encapsulation:2,styles:[],data:{}});function ln(n){return t._45(0,[(n()(),t._22(0,null,null,1,"i",[],null,null,null,null,null)),(n()(),t._43(null,["!!!Watch out !!!"]))],null,null)}function en(n){return t._45(0,[(n()(),t._22(0,null,null,5,"progressbar",[],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],value:[1,"value"]},null),(n()(),t._43(0,["\n  "])),(n()(),t._22(0,null,0,1,"span",[["style","color:white; white-space:nowrap;"]],null,null,null,null,null)),(n()(),t._43(null,[""," / ",""])),(n()(),t._43(0,["\n"])),(n()(),t._43(null,["\n\n"])),(n()(),t._22(0,null,null,2,"small",[],null,null,null,null,null)),(n()(),t._22(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),t._43(null,["No animation"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,3,"progressbar",[["type","success"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{animate:[0,"animate"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._22(0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t._43(null,["","%"])),(n()(),t._43(null,["\n\n"])),(n()(),t._22(0,null,null,2,"small",[],null,null,null,null,null)),(n()(),t._22(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),t._43(null,["Object (changes type based on value)"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,5,"progressbar",[["class","progress-striped active"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._43(0,["\n  "," "])),(n()(),t._16(16777216,null,0,1,null,ln)),t._20(16384,null,0,_.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(0,["\n"])),(n()(),t._43(null,["\n\n"])),(n()(),t._22(0,null,null,1,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0,r=n.component;"click"===l&&(t=!1!==r.random()&&t);return t},null,null)),(n()(),t._43(null,["Randomize"])),(n()(),t._43(null,["\n"]))],function(n,l){var e=l.component;n(l,1,0,e.max,e.dynamic);n(l,12,0,!1,"success",e.dynamic),n(l,21,0,e.type,e.dynamic),n(l,24,0,e.showWarning)},function(n,l){var e=l.component;n(l,4,0,e.dynamic,e.max),n(l,14,0,e.dynamic),n(l,22,0,e.type)})}var tn=t._17("demo-progressbar-dynamic",y,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-progressbar-dynamic",[],null,null,null,en,nn)),t._20(49152,null,0,y,[],null,null)],null,null)},{},{},[]),rn=t._19({encapsulation:2,styles:[],data:{}});function un(n){return t._45(0,[(n()(),t._22(0,null,null,4,"div",[["class","row col-lg-12"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,1,"progressbar",[["class","progress"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],value:[1,"value"]},null),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,4,"div",[["class","row col-md-12"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,1,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0,r=n.component;"click"===l&&(t=!1!==r.randomStacked()&&t);return t},null,null)),(n()(),t._43(null,["Randomize"])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,3,0,100,l.component.stacked)},null)}var an=t._17("demo-progressbar-stacked",v,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-progressbar-stacked",[],null,null,null,un,rn)),t._20(49152,null,0,v,[],null,null)],null,null)},{},{},[]),on=t._19({encapsulation:2,styles:[],data:{}});function sn(n){return t._45(0,[(n()(),t._22(0,null,null,1,"i",[],null,null,null,null,null)),(n()(),t._43(null,["!!! Watch out !!!"]))],null,null)}function cn(n){return t._45(0,[(n()(),t._22(0,null,null,5,"progressbar",[["class","progress progress-striped progress-animated"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],value:[1,"value"]},null),(n()(),t._43(0,["\n  "])),(n()(),t._22(0,null,0,1,"span",[["style","color:white; white-space:nowrap;"]],null,null,null,null,null)),(n()(),t._43(null,[""," / ",""])),(n()(),t._43(0,["\n"])),(n()(),t._43(null,["\n\n"])),(n()(),t._22(0,null,null,2,"small",[],null,null,null,null,null)),(n()(),t._22(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),t._43(null,["No animation"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,3,"progressbar",[["class","progress progress-success"],["type","success"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._22(0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t._43(null,["","%"])),(n()(),t._43(null,["\n\n"])),(n()(),t._22(0,null,null,2,"small",[],null,null,null,null,null)),(n()(),t._22(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),t._43(null,["Object (changes type based on value)"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,5,"progressbar",[["class","progress progress-striped progress-animated"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._43(0,["\n  "," "])),(n()(),t._16(16777216,null,0,1,null,sn)),t._20(16384,null,0,_.n,[t._4,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t._43(0,["\n"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,1,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0,r=n.component;"click"===l&&(t=!1!==r.random()&&t);return t},null,null)),(n()(),t._43(null,["Randomize"])),(n()(),t._43(null,["\n"]))],function(n,l){var e=l.component;n(l,1,0,e.max,e.dynamic);n(l,12,0,100,"success",e.dynamic),n(l,21,0,e.max,e.type,e.dynamic),n(l,24,0,e.showWarning)},function(n,l){var e=l.component;n(l,4,0,e.dynamic,e.max),n(l,14,0,e.dynamic),n(l,22,0,e.type)})}var pn=t._17("demo-bs4-progressbar-dynamic",O,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-bs4-progressbar-dynamic",[],null,null,null,cn,on)),t._20(49152,null,0,O,[],null,null)],null,null)},{},{},[]),mn=t._19({encapsulation:2,styles:[],data:{}});function dn(n){return t._45(0,[(n()(),t._22(0,null,null,4,"div",[["class","row col-lg-12"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,1,"progressbar",[["class","progress"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],value:[1,"value"]},null),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t._43(null,["\n"])),(n()(),t._22(0,null,null,4,"div",[["class","row col-md-12"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,1,"button",[["class","btn btn-sm btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0,r=n.component;"click"===l&&(t=!1!==r.randomStacked()&&t);return t},null,null)),(n()(),t._43(null,["Randomize"])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,3,0,100,l.component.stacked)},null)}var gn=t._17("demo-bs4-progressbar-stacked",j,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-bs4-progressbar-stacked",[],null,null,null,dn,mn)),t._20(49152,null,0,j,[],null,null)],null,null)},{},{},[]),_n=t._19({encapsulation:2,styles:[],data:{}});function bn(n){return t._45(0,[(n()(),t._22(0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,4,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,1,"progressbar",[["class","progress"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],value:[1,"value"]},null),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,5,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,2,"progressbar",[["class","progress progress-striped"],["type","warning"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._43(0,["22%"])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n  "])),(n()(),t._22(0,null,null,6,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),t._43(null,["\n    "])),(n()(),t._22(0,null,null,3,"progressbar",[["class","progress progress-striped active"],["type","danger"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{max:[0,"max"],type:[1,"type"],value:[2,"value"]},null),(n()(),t._22(0,null,0,1,"i",[],null,null,null,null,null)),(n()(),t._43(null,["166 / 200"])),(n()(),t._43(null,["\n  "])),(n()(),t._43(null,["\n"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,5,0,100,55);n(l,11,0,100,"warning",22);n(l,18,0,200,"danger",166)},null)}var fn=t._17("demo-bs4-progressbar-static",S,function(n){return t._45(0,[(n()(),t._22(0,null,null,1,"demo-bs4-progressbar-static",[],null,null,null,bn,_n)),t._20(49152,null,0,S,[],null,null)],null,null)},{},{},[]),yn=t._19({encapsulation:2,styles:[],data:{}});function vn(n){return t._45(0,[(n()(),t._22(0,null,null,3,"progressbar",[["class","progress-striped active"],["type","danger"]],null,null,null,H,V)),t._20(49152,null,0,P,[k],{type:[0,"type"],value:[1,"value"]},null),(n()(),t._22(0,null,0,1,"i",[],null,null,null,null,null)),(n()(),t._43(null,["136 / 150"])),(n()(),t._43(null,["\n"]))],function(n,l){n(l,1,0,"danger",136)},null)}var hn=t._17("demo-progressbar-config",B,function(n){return t._45(0,[(n()(),t._22(0,null,null,2,"demo-progressbar-config",[],null,null,null,vn,yn)),t._40(5120,null,k,M,[]),t._20(49152,null,0,B,[],null,null)],null,null)},{},{},[]),xn=e("bm2B"),wn=e("zNK2"),kn=e("BkNc"),Pn=e("5bcs"),Cn=e("yroR"),Mn=e("XH7w"),Bn=e("bqLD");e.d(l,"DemoProgressbarModuleNgFactory",function(){return Sn});var Sn=t._18(r,[],function(n){return t._32([t._33(512,t.m,t._14,[[8,[u.a,a.a,o.a,s.a,i.a,c.a,L,Y,tn,an,pn,gn,fn,hn]],[3,t.m],t.G]),t._33(4608,_.p,_.o,[t.C]),t._33(4608,xn.z,xn.z,[]),t._33(4608,wn.a,wn.a,[_.i,kn.n]),t._33(4608,Pn.a,Pn.a,[]),t._33(4608,U.a,U.a,[]),t._33(4608,k,k,[]),t._33(512,_.c,_.c,[]),t._33(512,xn.w,xn.w,[]),t._33(512,xn.k,xn.k,[]),t._33(512,Cn.a,Cn.a,[]),t._33(512,W.d,W.d,[]),t._33(512,kn.q,kn.q,[[2,kn.v],[2,kn.n]]),t._33(512,I.b,I.b,[]),t._33(512,R.b,R.b,[]),t._33(512,D.b,D.b,[]),t._33(512,Mn.a,Mn.a,[]),t._33(512,Bn.a,Bn.a,[]),t._33(512,C,C,[]),t._33(512,r,r,[]),t._33(1024,kn.l,function(){return[[{path:"",component:F}]]},[])])})},bOLo:function(n,l){n.exports='<div class="row col-lg-12">\n  <progressbar class="progress" [value]="stacked" [max]="100"></progressbar>\n</div>\n<br>\n<div class="row col-md-12">\n  <button type="button" class="btn btn-sm btn-primary" (click)="randomStacked()">Randomize</button>\n</div>\n'},khht:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-progressbar-static',\n  templateUrl: './static.html'\n})\nexport class DemoProgressbarStaticComponent {}\n"},nf1m:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-bs4-progressbar-static',\n  templateUrl: './static.html'\n})\nexport class DemoProgressbarStaticBs4Component {}\n"},oKxZ:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-progressbar-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoProgressbarDynamicComponent {\n  max: number = 200;\n  showWarning: boolean;\n  dynamic: number;\n  type: string;\n\n  constructor() {\n    this.random();\n  }\n\n  random(): void {\n    let value = Math.floor(Math.random() * 100 + 1);\n    let type: string;\n\n    if (value < 25) {\n      type = 'success';\n    } else if (value < 50) {\n      type = 'info';\n    } else if (value < 75) {\n      type = 'warning';\n    } else {\n      type = 'danger';\n    }\n\n    this.showWarning = type === 'danger' || type === 'warning';\n    this.dynamic = value;\n    this.type = type;\n  }\n}\n"},rxQt:function(n,l){n.exports='<div class="row col-lg-12">\n  <progressbar class="progress" [value]="stacked" [max]="100"></progressbar>\n</div>\n<br>\n<div class="row col-md-12">\n    <button type="button" class="btn btn-sm btn-primary" (click)="randomStacked()">Randomize</button>\n</div>\n'}});