"use strict";(self["webpackChunkvue_3_webpack_boilerplate_v2"]=self["webpackChunkvue_3_webpack_boilerplate_v2"]||[]).push([[8],{8:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var o=l(252);function g(e,t,l,g,a,n){const i=(0,o.up)("Toggle",!0);return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{modelValue:a.isToggled,"onUpdate:modelValue":t[0]||(t[0]=e=>a.isToggled=e)},null,8,["modelValue"])])}function a(e,t,l,g,a,n){return(0,o.wg)(),(0,o.iD)("div",null,[a.toggleState?((0,o.wg)(),(0,o.iD)("i",{key:0,class:"fa-solid fa-sort-down",onClick:t[0]||(t[0]=e=>n.toggle())})):((0,o.wg)(),(0,o.iD)("i",{key:1,class:"fa-solid fa-caret-right",onClick:t[1]||(t[1]=e=>n.toggle())}))])}var n={props:{toggled:{type:Boolean,default:!1}},data(){return{toggleState:this.toggled}},methods:{toggle(){this.toggleState=!this.toggleState,this.$emit("toggle",this.toggleState)}}},i=l(744);const r=(0,i.Z)(n,[["render",a]]);var s=r,u={name:"TogglePlayground",components:{Toggle:s},data(){return{isToggled:!0}}};const d=(0,i.Z)(u,[["render",g]]);var c=d}}]);