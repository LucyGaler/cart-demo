"use strict";(self["webpackChunkwyq_shopping"]=self["webpackChunkwyq_shopping"]||[]).push([[797],{7797:function(t,s,o){o.r(s),o.d(s,{default:function(){return l}});o(4114);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.goodsName,"show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item",on:{click:function(s){return t.sortTypeClick("all")}}},[t._v("综合")]),s("div",{staticClass:"sort-item",on:{click:function(s){return t.sortTypeClick("sales")}}},[t._v("销量")]),s("div",{staticClass:"sort-item",on:{click:function(s){return t.sortTypeClick("price")}}},[t._v("价格 ")])]),t.goodsList.length>0?s("div",{staticClass:"goods-list"},t._l(t.goodsList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1):t._e()],1)},r=[],i=o(6734),a=o(4194),n={name:"SearchIndex",components:{GoodsItem:i.A},computed:{goodsName(){return this.$route.query.key||""}},data(){return{goodsList:[],sortType:"all",sortPrice:"0",categoryId:"0",page:1}},created(){this.categoryId=this.$route.query.categoryId||"0",this.getList()},methods:{sortTypeClick(t){this.sortType=t,this.getList()},async getList(){const t=await(0,a.F5)(this.sortType,this.sortPrice,this.categoryId,this.goodsName,this.page);this.goodsList=t.data.list.data}}},c=n,u=o(1656),d=(0,u.A)(c,e,r,!1,null,"58b02b56",null),l=d.exports},4194:function(t,s,o){o.d(s,{F5:function(){return r},_P:function(){return i},xA:function(){return a}});var e=o(5720);const r=(t,s,o,r,i)=>e.A.get("/goods/list",{params:{sortType:t,sortPrice:s,categoryId:o,goodsName:r,page:i}}),i=t=>e.A.get("/goods/detail",{params:{goodsId:t}}),a=(t,s)=>e.A.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=797.5d2979b9.js.map