"use strict";(self["webpackChunkvue_3_webpack_boilerplate_v2"]=self["webpackChunkvue_3_webpack_boilerplate_v2"]||[]).push([[924],{924:function(e,l,s){s.r(l),s.d(l,{default:function(){return E}});var a=s(252);function t(e,l,s,t,o,i){const n=(0,a.up)("XhrFileUpload",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(n,{"post-url":"/api/Documents/UploadArticleDocuments"})])}var o=s(963),i=s(577);const n=e=>((0,a.dD)("data-v-e27ff2de"),e=e(),(0,a.Cn)(),e),r={class:"file-upload-widget"},d={class:"container"},c={class:"row"},p=n((()=>(0,a._)("div",{class:"text-center"},[(0,a._)("h5",null,"Upload een nieuw bestand")],-1))),u={class:"text-center"},f=n((()=>(0,a._)("p",null,"Klik of sleep een document naar onderstaand vak.",-1))),g=n((()=>(0,a._)("div",{class:"row"},null,-1))),h={key:0,class:"card"},v=n((()=>(0,a._)("div",{class:"card-header"},"Uploading",-1))),m={class:"card-body"},b={class:"list-group"},_=n((()=>(0,a._)("div",{class:"col-1 list-image img-block"},[(0,a._)("i",{class:"fa-solid fa-cloud-arrow-up fa-2x"})],-1))),k={class:"col-10 list-info"},w={class:"list-title-block"},F={class:"title mb-3"},D={key:0},U={key:1},y=["onClick"],C=n((()=>(0,a._)("span",{class:"btn-icon"},[(0,a._)("i",{class:"fa-solid fa-xmark"})],-1))),x=[C],I={key:1,class:"card"},M=n((()=>(0,a._)("div",{class:"card-header"},"Completed",-1))),q={class:"card-body"},P={class:"list-group"},O=["onClick"],T=n((()=>(0,a._)("div",{class:"col-1 list-image img-block"},[(0,a._)("i",{class:"fa-solid fa-cloud-arrow-up fa-2x"})],-1))),z={class:"col-10 list-info"},X={class:"list-title-block"},$={class:"title mb-3"},A=n((()=>(0,a._)("button",{class:"btn btn-success btn-square rounded-pill mt-3 mb-3"},[(0,a._)("span",{class:"btn-icon"},[(0,a._)("i",{class:"fa-solid fa-check"})])],-1))),H={class:"card-footer align-middle text-center"};function R(e,l,s,t,n,C){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",d,[(0,a._)("div",c,[p,(0,a._)("div",u,[(0,a._)("div",{class:"upload-here",onDrop:l[1]||(l[1]=(0,o.iM)((function(){return C.handleDragDropUpload&&C.handleDragDropUpload(...arguments)}),["stop","prevent"])),onDragenter:l[2]||(l[2]=(0,o.iM)((()=>{}),["stop","prevent"])),onDragleave:l[3]||(l[3]=(0,o.iM)((()=>{}),["stop","prevent"])),onDragover:l[4]||(l[4]=(0,o.iM)((()=>{}),["stop","prevent"]))},[f,(0,a._)("div",{class:"upload-area-padding",onClick:l[0]||(l[0]=function(){return C.browseForFiles&&C.browseForFiles(...arguments)})})],32)])]),g,(0,a._)("div",null,[n.progressIndicators.length>0?((0,a.wg)(),(0,a.iD)("div",h,[v,(0,a._)("div",m,[(0,a._)("ul",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.progressIndicators,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:l,class:"list-group-item d-flex"},[_,(0,a._)("div",k,[(0,a._)("div",w,[(0,a._)("h5",F,(0,i.zw)(e.name),1)]),e.error?((0,a.wg)(),(0,a.iD)("div",U,(0,i.zw)("Upload error: "+e.message),1)):((0,a.wg)(),(0,a.iD)("div",D,(0,i.zw)(e.value<100?`Uploading... (${e.value}%)`:"Uploaded, Processing..."),1))]),(0,a._)("button",{class:"btn btn-outline-success btn-square rounded-pill mt-3 mb-3",onClick:(0,o.iM)((l=>C.cancelUpload(e)),["prevent"])},x,8,y)])))),128))])])])):(0,a.kq)("",!0),n.completedFiles.length>0?((0,a.wg)(),(0,a.iD)("div",I,[M,(0,a._)("div",q,[(0,a._)("ul",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.completedFiles,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:l,class:"list-group-item d-flex",onClick:l=>C.visitUrl(e.downloadPage)},[T,(0,a._)("div",z,[(0,a._)("div",X,[(0,a._)("h5",$,(0,i.zw)(e.name),1)]),(0,a.Uk)(" Upload Complete! ")]),A],8,O)))),128))])]),(0,a._)("div",H,[n.completedFiles.length>0?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn btn-success w-50",onClick:l[5]||(l[5]=(0,o.iM)((e=>n.completedFiles=[]),["prevent"]))}," Clear All ")):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)])]),(0,a._)("input",{ref:"browse",type:"file",class:"hidden",multiple:"",onChange:l[6]||(l[6]=function(){return C.onFilesUploaded&&C.onFilesUploaded(...arguments)})},null,544)])}var K=s(516),S=s(12),Y={name:"XhrFileUpload",props:{postUrl:{type:String,default:""},additionalFormParams:{type:Array,default:()=>[]},shouldVisitUrls:{type:Boolean,default:!1},parentCallback:{type:Function}},data(){return{completedFiles:[],progressIndicators:[],debouncedCallback:(0,S.Ds)((function(e){this.parentCallback(e)}),700)}},computed:{uploadingFiles:function(){return this.progressIndicators.length},uploading:function(){return this.uploadingFiles>0}},methods:{viewMyFiles:function(){this.$router.push("/f")},browseForFiles:function(){this.$refs.browse.click()},onFilesUploaded:function(e){let l=this.$refs.browse,s=l.files.length;for(let a=0;a<s;a++){let e=l.files[a],s={value:0,fileRef:e,name:e.name};this.progressIndicators.push(s),this.uploadFile(e,s)}},handleDragDropUpload:function(e){for(let l=0;l<e.dataTransfer.files.length;l++){let s=e.dataTransfer.files[l],a={value:0,fileRef:s,name:s.name,error:!1,message:""};this.progressIndicators.push(a),this.uploadFile(s,a)}},cancelUpload:function(e){let l=this;e.xhr.abort(),l.progressIndicators.splice(l.progressIndicators.indexOf(e),1)},uploadFile:function(e,l){let s=this,a=new XMLHttpRequest;l.xhr=a,a.open("POST","https://api.something.com"+this.postUrl),a.setRequestHeader("Authorization",(0,K.he)()),a.onload=function(){200===a.status?(s.progressIndicators.splice(s.progressIndicators.indexOf(l),1),(0,S.xY)(a.responseText)?s.debouncedCallback():s.debouncedCallback(JSON.parse(a.responseText)),s.completedFiles.push({name:l.name})):(l.error=!0,s.$set(l,"message",a.responseText))},a.upload.onprogress=function(e){e.lengthComputable&&(l.value=Math.floor(e.loaded/e.total*100))};let t=new FormData;t.append("file",e),this.additionalFormParams.length>0&&this.additionalFormParams.forEach((e=>{t.append(Object.keys(e),Object.values(e))})),a.send(t)},visitUrl:function(e){this.shouldVisitUrls&&window.open(e,"_blank")}}},j=s(744);const L=(0,j.Z)(Y,[["render",R],["__scopeId","data-v-e27ff2de"]]);var V=L,Z={name:"XhrFileUploadPlayground",components:{XhrFileUpload:V},data(){return{isLoading:!0}}};const B=(0,j.Z)(Z,[["render",t]]);var E=B}}]);