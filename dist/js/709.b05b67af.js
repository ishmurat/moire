(self["webpackChunkmoire"]=self["webpackChunkmoire"]||[]).push([[709],{9414:function(e){(function(t,r){e.exports=r()})(0,(function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,r){"use strict";function n(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var a=r(2),o=r(0),i=r.n(o);t.a=function(e,t){var o=t.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var s=e.getElementsByTagName("input");if(1!==s.length)throw new Error("v-mask directive requires 1 input, found "+s.length);e=s[0]}e.oninput=function(t){if(t.isTrusted){var i=e.selectionEnd,s=e.value[i-1];for(e.value=r.i(a.a)(e.value,o.mask,!0,o.tokens);i<e.value.length&&e.value.charAt(i-1)!==s;)i++;e===document.activeElement&&(e.setSelectionRange(i,i),setTimeout((function(){e.setSelectionRange(i,i)}),0)),e.dispatchEvent(n("input"))}};var l=r.i(a.a)(e.value,o.mask,!0,o.tokens);l!==e.value&&(e.value=l,e.dispatchEvent(n("input")))}},function(e,t,r){"use strict";var n=r(6),a=r(5);t.a=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(t)?r.i(a.a)(n.a,t,i)(e,t,o,i):r.i(n.a)(e,t,o,i)}},function(e,t,r){"use strict";function n(e){e.component(l.a.name,l.a),e.directive("mask",i.a)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=r.n(a),i=r(1),s=r(7),l=r.n(s);r.d(t,"TheMask",(function(){return l.a})),r.d(t,"mask",(function(){return i.a})),r.d(t,"tokens",(function(){return o.a})),r.d(t,"version",(function(){return d}));var d="0.11.1";t.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=r(0),o=r.n(a),i=r(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;e=r.i(i.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,r){"use strict";function n(e,t,r){return t=t.sort((function(e,t){return e.length-t.length})),function(n,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<t.length;){var s=t[i];i++;var l=t[i];if(!(l&&e(n,l,!0,r).length>s.length))return e(n,s,o,r)}return""}}t.a=n},function(e,t,r){"use strict";function n(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];e=e||"",t=t||"";for(var a=0,o=0,i="";a<t.length&&o<e.length;){var s=t[a],l=n[s],d=e[o];l&&!l.escape?(l.pattern.test(d)&&(i+=l.transform?l.transform(d):d,a++),o++):(l&&l.escape&&(a++,s=t[a]),r&&(i+=s),d===s&&o++,a++)}for(var u="";a<t.length&&r;){s=t[a];if(n[s]){u="";break}u+=s,a++}return i+u}t.a=n},function(e,t,r){var n=r(8)(r(4),r(9),null,null);e.exports=n.exports},function(e,t){e.exports=function(e,t,r,n){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r),n){var l=s.computed||(s.computed={});Object.keys(n).forEach((function(e){var t=n[e];l[e]=function(){return t}}))}return{esModule:a,exports:o,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,r){e.exports=r(3)}])}))},3093:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(3396),a=r(7139),o=r(9242);const i={class:"breadcrumbs"},s=["onClick"];function l(e,t,r,l,d,u){return(0,n.wg)(),(0,n.iD)("ul",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.crumbs,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"breadcrumbs__item",key:e.key},[(0,n.wy)((0,n._)("a",{class:"breadcrumbs__link"},(0,a.zw)(e.title),513),[[o.F8,!e.force]]),(0,n.wy)((0,n._)("a",{class:"breadcrumbs__link",href:"#",onClick:(0,o.iM)((t=>u.goto(e)),["prevent"])},(0,a.zw)(e.title),9,s),[[o.F8,e.force]])])))),128))])}r(7658);var d={name:"BaseBreadcrumbs",props:["crumbs"],methods:{goto(e){e.force&&this.$router.push({name:e.route,query:e.params})}}},u=r(89);const c=(0,u.Z)(d,[["render",l]]);var p=c},8026:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(3396),a=r(7139);const o={class:"cart__orders"},i=(0,n._)("br",null,null,-1),s={class:"cart__total"};function l(e,t,r,l,d,u){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("ul",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.cartInfo,(t=>((0,n.wg)(),(0,n.iD)("li",{class:"cart__order",key:t.id},[(0,n._)("h3",null,(0,a.zw)(t.product.title),1),(0,n._)("div",null,[(0,n._)("b",null,(0,a.zw)(e.numberFormat(t.product.price*(t.quantity||t.amount)))+" ₽",1),i,(0,n.Uk)((0,a.zw)(t.quantity||t.amount)+" шт. ",1)]),(0,n._)("span",null,"Артикул: "+(0,a.zw)(t.product.id),1)])))),128))]),(0,n._)("div",s,[(0,n._)("p",null,[(0,n.Uk)(" Доставка: "),(0,n._)("b",null,(0,a.zw)(r.delivery),1)]),(0,n._)("p",null,[(0,n.Uk)(" Итого: "),(0,n._)("b",null,(0,a.zw)(e.countProductsString(u.productsCount)),1),(0,n.Uk)(" на сумму "),(0,n._)("b",null,(0,a.zw)(e.numberFormat(u.totalPrice))+" ₽",1)])])])}var d=r(4693),u={name:"CartContentList",components:{},props:["cartInfo","delivery"],model:{},data(){return{}},computed:{productsCount(){return this.cartInfo.length},totalPrice(){return this.cartInfo.reduce(((e,t)=>e+t.product.price*(t.quantity||t.amount)),0)}},mixins:[d.ZP]},c=r(89);const p=(0,c.Z)(u,[["render",l]]);var m=p},9709:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ye}});var n=r(3396),a=r(9242),o=r(7139);const i={class:"content container"},s={class:"content__top"},l=(0,n._)("div",{class:"content__row"},[(0,n._)("h1",{class:"content__title"},"Оформление заказа")],-1),d={class:"cart"},u={class:"cart__field"},c={class:"cart__data"},p={class:"cart__options"},m=(0,n._)("h3",{class:"cart__title"},"Доставка",-1),f=(0,n._)("h3",{class:"cart__title"},"Оплата",-1),v={class:"cart__block"},h={class:"cart__button button button--primery button__order-create",type:"submit"},y={style:{"text-align":"center"}},_={key:0,class:"cart__error form__error-block"},g=(0,n._)("h4",null,"Заявка не отправлена!",-1);function w(e,t,r,w,k,b){const D=(0,n.up)("ProductBreadcrumbs"),I=(0,n.up)("BaseFormText"),C=(0,n.up)("BaseFormPhone"),V=(0,n.up)("BaseFormTextArea"),x=(0,n.up)("DeliveriesRadioInputs"),P=(0,n.up)("PaymentsRadioInputs"),F=(0,n.up)("CartContent"),E=(0,n.up)("SpinnerSpring");return(0,n.wg)(),(0,n.iD)("main",i,[(0,n._)("div",s,[(0,n.Wm)(D,{crumbs:b.breadcrumbsData},null,8,["crumbs"]),l]),(0,n._)("section",d,[(0,n._)("form",{class:"cart__form form",action:"#",onSubmit:t[6]||(t[6]=(0,a.iM)((e=>b.order()),["prevent"]))},[(0,n._)("div",u,[(0,n._)("div",c,[(0,n.Wm)(I,{title:"ФИО",placeholder:"Введите ваше полное имя",type:"text",pid:"order-name",error:k.formError.name,modelValue:k.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>k.formData.name=e)},null,8,["error","modelValue"]),(0,n.Wm)(I,{title:"Адрес доставки",placeholder:"Введите ваш адрес",type:"text",pid:"order-address",error:k.formError.address,modelValue:k.formData.address,"onUpdate:modelValue":t[1]||(t[1]=e=>k.formData.address=e)},null,8,["error","modelValue"]),(0,n.Wm)(C,{title:"Телефон",placeholder:"Введите ваш телефон",type:"tel",pid:"order-phone",error:k.formError.phone,modelValue:k.formData.phone,"onUpdate:modelValue":t[2]||(t[2]=e=>k.formData.phone=e)},null,8,["error","modelValue"]),(0,n.Wm)(I,{title:"Email",placeholder:"Введите ваш Email",type:"email",pid:"order-email",error:k.formError.email,modelValue:k.formData.email,"onUpdate:modelValue":t[3]||(t[3]=e=>k.formData.email=e)},null,8,["error","modelValue"]),(0,n.Wm)(V,{title:"Комментарий к заказу",placeholder:"Ваши пожелания",pid:"order-comments",error:k.formError.comments,modelValue:k.formData.comments,"onUpdate:modelValue":t[4]||(t[4]=e=>k.formData.comments=e)},null,8,["error","modelValue"])]),(0,n._)("div",p,[m,(0,n.Wm)(x,{delivery:k.delivery,onChange:b.updateDelivery},null,8,["delivery","onChange"]),f,(0,n.Wm)(P,{paymentId:k.paymentId,"onUpdate:paymentId":t[5]||(t[5]=e=>k.paymentId=e),"delivery-id":b.deliveryId},null,8,["paymentId","delivery-id"])])]),(0,n._)("div",v,[(0,n.Wm)(F,{"cart-info":e.products,delivery:b.deliveryCaption},null,8,["cart-info","delivery"]),(0,n._)("button",h,[(0,n._)("span",null,[(0,n.Uk)(" Оформить заказ "),(0,n.Wm)(E,{class:"spinner spinner--creating-order",visible:k.orderCreating,size:"medium",color:"white"},null,8,["visible"])])]),(0,n.wy)((0,n._)("p",y," Заявка отправлена! ",512),[[a.F8,k.orderCreated]])]),k.formErrorMessage?((0,n.wg)(),(0,n.iD)("div",_,[g,(0,n._)("p",null,(0,o.zw)(k.formErrorMessage),1)])):(0,n.kq)("",!0)],32)])])}r(7658);var k=r(3093);const b=["type","name","placeholder","id"];function D(e,t,r,o,i,s){const l=(0,n.up)("BaseFormField");return(0,n.wg)(),(0,n.j4)(l,{title:e.title,error:e.error,pid:e.pid},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{class:"form__input","onUpdate:modelValue":t[0]||(t[0]=t=>e.dataValue=t),type:r.type,name:e.pid,placeholder:e.placeholder,id:e.pid},null,8,b),[[a.YZ,e.dataValue]])])),_:1},8,["title","error","pid"])}const I=["for"],C={class:"form__value"},V={key:0,class:"form__error"};function x(e,t,r,a,i,s){return(0,n.wg)(),(0,n.iD)("label",{class:"form__label",for:r.pid},[(0,n.WI)(e.$slots,"default"),(0,n._)("span",C,(0,o.zw)(r.title),1),r.error?((0,n.wg)(),(0,n.iD)("span",V,(0,o.zw)(r.error),1)):(0,n.kq)("",!0)],8,I)}var P={name:"BaseFormField",props:["pid","title","error"]},F=r(89);const E=(0,F.Z)(P,[["render",x]]);var T=E,Z={name:"BaseFormText",components:{BaseFormField:T},props:["title","error","placeholder","modelValue","pid"],emits:["update:modelValue"],computed:{dataValue:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}}},z={props:{type:{default:"text"}},mixins:[Z]};const A=(0,F.Z)(z,[["render",D]]);var U=A;const B=["placeholder","name","id"];function R(e,t,r,o,i,s){const l=(0,n.up)("BaseFormField");return(0,n.wg)(),(0,n.j4)(l,{pid:e.pid,title:e.title,error:e.error},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("textarea",{class:"form__input form__input--area","onUpdate:modelValue":t[0]||(t[0]=t=>e.dataValue=t),placeholder:e.placeholder,name:e.pid,id:e.pid},null,8,B),[[a.nr,e.dataValue]])])),_:1},8,["pid","title","error"])}var $={name:"BaseFormTextArea",mixins:[Z]};const M=(0,F.Z)($,[["render",R]]);var N=M;const S=["name","placeholder","id"];function O(e,t,r,o,i,s){const l=(0,n.up)("BaseFormField"),d=(0,n.Q2)("mask");return(0,n.wg)(),(0,n.j4)(l,{title:e.title,error:e.error,pid:e.pid},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{class:"form__input","onUpdate:modelValue":t[0]||(t[0]=t=>e.dataValue=t),type:"tel",name:e.pid,placeholder:e.placeholder,id:e.pid},null,8,S),[[a.nr,e.dataValue],[d,r.mask]])])),_:1},8,["title","error","pid"])}var W=r(9414),j={props:{mask:{default:"+7 (###) ###-##-##"}},mixins:[Z],directives:{mask:W.mask}};const q=(0,F.Z)(j,[["render",O]]);var K=q,L=r(8026),Y=r(65);const H={class:"cart__options options"},G=["for"],Q=["id","value"],X={class:"options__value"};function J(e,t,r,i,s,l){return(0,n.wg)(),(0,n.iD)("ul",H,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.deliveries,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"options__item",key:e.id},[(0,n._)("label",{class:"options__label",for:`delivery-item-${e.id}`},[(0,n.wy)((0,n._)("input",{class:"options__radio sr-only",type:"radio",name:"delivery",id:`delivery-item-${e.id}`,value:e.id,"onUpdate:modelValue":t[0]||(t[0]=e=>l.currentDeliveryId=e)},null,8,Q),[[a.G2,l.currentDeliveryId]]),(0,n._)("span",X,[(0,n.Uk)((0,o.zw)(e.altCaption)+" ",1),(0,n._)("b",null,(0,o.zw)(e.caption.toLocaleLowerCase()),1)])],8,G)])))),128))])}var ee=r(3448),te=r(4693),re=r(1445),ne={name:"DeliveriesRadioInputs",props:["delivery"],emits:["change"],data(){return{deliveries:[]}},computed:{currentDeliveryId:{get(){return this.delivery?.id},set(e){const t=this.deliveries?.find((t=>t.id===e));this.$emit("change",t)}}},methods:{...(0,Y.nv)(["addNotification"]),loadDeliveries(){(0,ee.A4)().then((e=>{const t=e.data;t.length&&(this.deliveries=t.map((e=>({id:e.id,price:e.price,caption:this.deliveryFormat(e),altCaption:1===e.id?e.title:"Курьером"}))))})).catch((e=>{console.log(e);const t=e.response?.data?.error?.message;this.addNotification({text:"Ошибка загрузки вариантов доставки: "+re.R0.find((t=>t.code==e.response.status))?.caption??t,type:"error"})}))}},watch:{deliveries(){this.currentDeliveryId||(this.currentDeliveryId=this.deliveries[0].id)}},mixins:[te.ZP],created(){this.loadDeliveries()}};const ae=(0,F.Z)(ne,[["render",J]]);var oe=ae;const ie={class:"cart__options options"},se=["for"],le=["id","value"],de={class:"options__value"};function ue(e,t,r,i,s,l){return(0,n.wg)(),(0,n.iD)("ul",ie,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.payments,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"options__item",key:e.id},[(0,n._)("label",{class:"options__label",for:`payment-item-${e.id}`},[(0,n.wy)((0,n._)("input",{class:"options__radio sr-only",type:"radio",name:"payment",id:`payment-item-${e.id}`,value:e.id,"onUpdate:modelValue":t[0]||(t[0]=e=>l.currentPaymentId=e)},null,8,le),[[a.G2,l.currentPaymentId]]),(0,n._)("span",de,(0,o.zw)(e.caption),1)],8,se)])))),128))])}var ce={name:"PaymentsRadioInputs",props:["paymentId","deliveryId"],emits:["update:paymentId"],computed:{currentPaymentId:{get(){return this.paymentId||this.payments?.length&&this.payments[0].id},set(e){this.$emit("update:paymentId",e)}}},data(){return{payments:[]}},watch:{deliveryId(){this.loadPayments()},payments(){this.currentPaymentId=this.payments[0]?.id}},methods:{...(0,Y.nv)(["addNotification"]),loadPayments(){(0,ee.fA)(this.deliveryId).then((e=>{const t=e.data;t.length&&(this.payments=t.map((e=>({id:e.id,caption:e.title}))))})).catch((e=>{console.log(e);const t=e.response?.data?.error?.message;this.addNotification({text:"Ошибка загрузки способов оплаты: "+re.R0.find((t=>t.code==e.response.status))?.caption??t,type:"error"})}))}}};const pe=(0,F.Z)(ce,[["render",ue]]);var me=pe,fe=r(8455),ve={name:"OrderView",data(){return{formError:{},formErrorMessage:"",formData:{},delivery:{},paymentId:null,orderCreated:!1,orderCreating:!1,orderCreatingFailed:!1,orderCreatingError:{}}},computed:{breadcrumbsData(){return[{title:"Каталог",route:"catalog",force:!0},{title:"Корзина",route:"cart",force:!0},{title:"Оформление заказа"}]},...(0,Y.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice",productsCount:"cartProductsCount",userAccessKey:"userAccessKey"}),deliveryCaption(){return this.delivery.caption},deliveryId(){return this.delivery.id},phoneProcessed(){let e=this.formData.phone??"";return e.trim().replace(/[^+\d]/g,"")}},methods:{...(0,Y.nv)(["addNotification"]),updateDelivery(e){this.delivery=e},startCreating(){this.orderCreating=!0,this.orderCreatingFailed=!1,clearTimeout(this.createOrderTimer)},stopCreating(){this.orderCreating=!1},order(){this.startCreating(),this.createOrderTimer=setTimeout((()=>{const e={...this.formData,phone:this.phoneProcessed,deliveryTypeId:this.delivery.id,paymentTypeId:this.paymentId,userAccessKey:this.userAccessKey};(0,ee.Gn)(e).then((e=>{this.orderCreated=!0,this.$store.commit("resetCart"),this.$store.commit("updateOrderInfo",e.data),this.addNotification({text:"Заказ успешно оформлен",type:"notify"}),this.$router.push({name:"orderInfo",params:{id:e.data.id}})})).catch((e=>{console.log("Ошибка:"),console.log(e),this.formError=e.response.data.error.request||{},this.formErrorMessage=e.response.data.error.message,this.addNotification({text:re.R0.find((t=>t.code==e.response.status))?.caption??e.response.statusText,type:"error"})})).finally((()=>this.stopCreating()))}),1e3)}},components:{ProductBreadcrumbs:k.Z,BaseFormText:U,BaseFormTextArea:N,CartContent:L.Z,DeliveriesRadioInputs:oe,PaymentsRadioInputs:me,BaseFormPhone:K,SpinnerSpring:fe.Z}};const he=(0,F.Z)(ve,[["render",w]]);var ye=he}}]);
//# sourceMappingURL=709.b05b67af.js.map