"use strict";(self["webpackChunkwyq_shopping"]=self["webpackChunkwyq_shopping"]||[]).push([[866],{7866:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl,alt:""},on:{click:t.getPic}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgCode,expression:"msgCode"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码",type:"text"},domProps:{value:t.msgCode},on:{input:function(e){e.target.composing||(t.msgCode=e.target.value)}}}),e("button",{on:{click:t.getCode}},[t._v(" "+t._s(t.second===t.totalSeconds?"获取验证码":t.second+"s后重新发送")+" ")])])]),e("div",{staticClass:"login-btn",on:{click:t.loginFn}},[t._v("登录")])])],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}],a=s(5720);const n=()=>a.A.get("/captcha/image"),r=(t,e,s)=>a.A.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:s}}),c=(t,e)=>a.A.post("/passport/login",{form:{isParty:!1,partyData:{},mobile:t,smsCode:e}});var l=s(3518),d={name:"LoginIndex",data(){return{picUrl:"",picKey:"",picCode:"",phone:"",totalSeconds:60,second:60,timer:null,msgCode:""}},created(){this.getPic()},methods:{...(0,l.PY)("user",["setUserInfo"]),async loginFn(){if(!this.validPhonePic())return;if(!/^\d{6}$/.test(this.msgCode))return void this.$toast("请输入正确的手机验证码");const t=await c(this.phone,this.msgCode);console.log(t.data),this.setUserInfo(t.data),console.log(this.$store.state.user.userInfo),this.$toast("登录成功"),this.$route.query.returnPath?this.$router.replace(this.$route.query.returnPath):this.$router.replace("/")},validPhonePic(){return/^1[3-9]\d{9}$/.test(this.phone)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("请输入正确的图形验证码"),!1):(this.$toast("请输入正确的手机号"),!1)},async getCode(){this.validPhonePic()&&(this.timer||this.second!==this.totalSeconds||(await r(this.phone,this.picKey,this.picCode),this.$toast("验证码已发送，请注意查收"),this.timer=setInterval((()=>{this.second--,this.second<=0&&(this.second=this.totalSeconds,clearInterval(this.timer),this.timer=null)}),1e3)))},async getPic(){const t=await n();console.log(t),this.picUrl=t.data.base64,this.picKey=t.data.key}},destroyed(){clearInterval(this.timer)}},h=d,p=s(1656),u=(0,p.A)(h,i,o,!1,null,"ab7b8a88",null),m=u.exports}}]);
//# sourceMappingURL=866.83b49954.js.map