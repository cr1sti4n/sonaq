(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46338cb2"],{"54c7":function(t,e,n){"use strict";var r=n("a0f6"),i=n.n(r);i.a},7514:function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(5),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r(r.P+r.F*s,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},a0f6:function(t,e,n){},a9f8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return d}));var r=n("b775");function i(t){return Object(r["a"])({url:"/auth/user/test",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/auth/user/themes",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/auth/user/initTest",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/auth/user/markedQuestion",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/auth/user/answerQuestion",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/auth/user/finzalizePractice",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/auth/user/suspendPractice",method:"post",data:t})}function d(){return Object(r["a"])({url:"/auth/user/test",method:"get"})}},e067:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-col",{attrs:{span:2}},[n("el-card",[n("el-table",{staticClass:"table_number",staticStyle:{width:"100%"},attrs:{data:t.table_number_question,border:""}},[n("el-table-column",{attrs:{fit:"",align:"center",label:"# Pregunta"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:t.index_question_current==e.row.index?"primary":"",round:""},on:{click:function(n){return t.setQuestion(e.row.index)}}},[t._v(t._s(e.row.number))])]}}])})],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:20}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"btn-l txt2"},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("Pregunta "+t._s(t.index_question_current+1)+" de "+t._s(t.form.questions.length))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("Pregunta Id "+t._s(t.question_current.id))])]),t._v(" "),n("el-checkbox",{staticClass:"txt",on:{change:t.changeMark},model:{value:t.question_current.marked,callback:function(e){t.$set(t.question_current,"marked",e)},expression:"question_current.marked"}},[n("i",{staticClass:"el-icon-s-flag"}),t._v(" Marca\n          ")]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Anterior",placement:"top"}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-arrow-left",circle:""},on:{click:function(e){return t.nextQuestion(-1)}}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Siguiente",placement:"top"}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-arrow-right",circle:""},on:{click:function(e){return t.nextQuestion(1)}}})],1),t._v(" "),n("el-button",{staticClass:"btn-r",attrs:{type:"text"}},[t._v("Notas")]),t._v(" "),n("el-button",{staticClass:"btn-r",attrs:{type:"text"}},[t._v("Tutorial")])],1),t._v(" "),n("div",{staticClass:"question-container"},[n("p",{domProps:{innerHTML:t._s(t.question_current.question)}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("p",[t._v("¿ Cuál de los siguientes es el diagnóstico más probable ?")]),t._v(" "),n("el-radio-group",{attrs:{disabled:t.question_current.answered},model:{value:t.question_current.option_selected,callback:function(e){t.$set(t.question_current,"option_selected",e)},expression:"question_current.option_selected"}},[t._l(t.question_current.options,(function(e,r){return[n("el-radio",{key:"op-"+r,staticClass:"radio",attrs:{label:e.id},on:{change:function(n){return t.changeOption(e)}}},[t._v(t._s(e.label))]),t._v(" "),n("br",{key:"br-"+r})]}))],2),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"primary",disabled:!t.question_current.option_selected||t.question_current.answered},on:{click:t.replyQuestion}},[t._v("Responder")]),t._v(" "),n("br")],1),t._v(" "),t.question_current.answered&&t.question_current.option_selected_obj?[n("el-row",[n("el-col",{staticClass:"box",attrs:{span:24}},[n("el-row",[n("el-col",{attrs:{span:9}},[n("p",{class:[1==t.question_current.option_selected_obj.is_correct?"green":"red"]},[t._v(" "+t._s(t.question_current.option_selected_obj.is_correct_text)+" ")]),t._v(" "),n("p",[t._v("Respuesta correcta: "+t._s(t.question_correct_opion.label))])]),t._v(" "),n("el-col",{attrs:{span:3}}),t._v(" "),n("el-col",{attrs:{span:6}}),t._v(" "),n("el-col",{attrs:{span:6}})],1)],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-col",{attrs:{span:24}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("Explicación")]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.question_current.answer)}})],1)],1)]:t._e(),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"footer clearfix"},[n("el-col",{attrs:{span:12}},[2===t.form.mode?n("p",[t._v(" Tiempo: "),n("strong",[n("Timer",{ref:"timer",attrs:{time:t.time_practice},on:{finish:t.finishTimer}})],1)]):n("p"),t._v(" "),n("span",[t._v(t._s(t.form.mode_text))])]),t._v(" "),n("el-col",{staticClass:"btns-footer",attrs:{span:12}},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loader_btn,expression:"loader_btn"}],attrs:{type:"warning",round:""},on:{click:t.suspend}},[t._v("Suspender")]),t._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loader_btn,expression:"loader_btn"}],attrs:{type:"danger",round:""},on:{click:t.finalize}},[t._v("Finalizar")])],1)],1)],2)],1)],1)],1)},i=[],o=(n("96cf"),n("3b8d")),s=(n("7514"),n("a9f8")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("strong",[t._v(t._s(" "+t.horas+" :  "+t.minutos+" :  "+t.segundos+" "))])},u=[],c=(n("c5f6"),{name:"Timer",props:{time:{type:Number,default:0}},data:function(){return{dias:"",horas:"",minutos:"",segundos:""}},watch:{minutos:function(t){4===parseInt(t)&&this.$alert("Te quedan menos de 5 minutos para terminar la prueba.","Tiempo restante",{confirmButtonText:"OK",callback:function(t){}})}},mounted:function(){},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{initTimer:function(){var t=new Date,e=new Date(t);e.setSeconds(t.getSeconds()+this.time),this.countdown(e)},getTime:function(t){var e=new Date,n=(new Date(t)-e+1e3)/1e3,r=("0"+Math.floor(n%60)).slice(-2),i=("0"+Math.floor(n/60%60)).slice(-2),o=("0"+Math.floor(n/3600%24)).slice(-2),s=Math.floor(n/86400);return{seconds:r,minutes:i,hours:o,days:s,time:n}},countdown:function(t){var e=this,n=this,r=setInterval((function(){var i=n.getTime(t);n.horas=i.hours,n.minutos=i.minutes,n.segundos=i.seconds,i.time<=1&&(clearInterval(r),n.$emit("finish",e.row))}),1e3)},getRemainingSeconds:function(){var t=3600*parseInt(this.horas),e=60*parseInt(this.minutos),n=parseInt(this.segundos);return t+e+n}}}),l=c,d=n("2877"),f=Object(d["a"])(l,a,u,!1,null,"5b35e9de",null),_=f.exports,m={name:"InitPractice",components:{Timer:_},data:function(){return{loader_btn:!1,checkedMark:!1,radio:3,table_number_question:[],chronometer:null,contador:{h:0,m:0,s:0},form:{},index_question_current:0}},computed:{question_current:function(){return this.form.questions[this.index_question_current]?this.form.questions[this.index_question_current]:{}},question_correct_opion:function(){return this.form.questions[this.index_question_current]?this.form.questions[this.index_question_current].options.find((function(t){return!0===t.is_correct})):{}},time_practice:function(){return 1===this.form.mode?this.form.time:this.form.remaining_time}},mounted:function(){},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initForm();case 2:return t.next=4,this.getPractice();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{initTimer:function(){this.$refs.timer.initTimer()},changeOption:function(t){this.question_current.option_selected_obj=t},nextQuestion:function(t){var e=this.index_question_current+t;e>this.form.questions.length-1||e<0?this.index_question_current=0:this.index_question_current=e},setQuestion:function(t){this.index_question_current=t},initFormatterPractice:function(){this.table_number_question=this.form.questions.map((function(t,e){return{number:e+1,index:e}}))},initForm:function(){this.form={id:null,mode:null,max_num_question:null,questions:[],time:null,mode_text:null,remaining_time:null}},getPractice:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=parseInt(this.$route.params.testid),t.next=3,Object(s["d"])({id:e}).then((function(t){n.form=t.data.data,n.initFormatterPractice()})).catch((function(){n.$message.error("Ocurrio un error inesperado.")}));case 3:if(2!==this.form.mode){t.next=8;break}return t.next=6,this.initTimer();case 6:t.next=9;break;case 8:this.initChronometer();case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changeMark:function(){var t=this,e=this.form.id,n=this.question_current.id,r=this.question_current.marked;Object(s["f"])({test_id:e,question_id:n,value:r}).then((function(t){console.log(t.data)})).catch((function(){t.$message.error("Ocurrio un error inesperado.")}))},initChronometer:function(){var t=this;this.chronometer=setInterval((function(){t.contador.s++}),1e3)},finishTimer:function(){this.finalizeRequest()},replyQuestion:function(){var t=this;this.question_current.answered=!0;var e=this.form.test_result_id,n=this.question_current.id,r=this.question_current.option_selected_obj.id,i=this.question_correct_opion.id,o=r===i?1:0;Object(s["a"])({test_result_id:e,question_id:n,option_selected:r,option_correct:i,correct:o}).then((function(t){console.log(t.data)})).catch((function(){t.$message.error("Ocurrio un error inesperado.")}))},suspend:function(){var t=this;t.$confirm("¿ Esta seguro que desea suspender la practica ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancelar",type:"warning"}).then((function(){t.suspendRequest()})).catch((function(){}))},suspendRequest:function(){var t=this,e=this;e.loader_btn=!0,Object(s["g"])(this.formatBodyRequest()).then((function(t){e.$message.warning("Se ha suspendido su practica."),e.exit()})).catch((function(){t.$message.error("Ocurrio un error inesperado.")}))},finalize:function(){var t=this;t.$confirm("¿ Esta seguro que desea finalizar la practica ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancelar",type:"warning"}).then((function(){t.finalizeRequest()})).catch((function(){}))},formatBodyRequest:function(){return{id:this.form.id,mode:this.form.mode,real_time:this.contador.s,remaining_time:2===this.form.mode?this.$refs.timer.getRemainingSeconds():0}},finalizeRequest:function(){var t=this,e=this;e.loader_btn=!0,Object(s["c"])(this.formatBodyRequest()).then((function(t){e.$message.warning("Se ha finalizado su practica."),e.exit()})).catch((function(){t.$message.error("Ocurrio un error inesperado.")}))},exit:function(){var t=this;t.$store.dispatch("tagsView/delView",t.$route).then((function(e){e.visitedViews;t.$router.push({name:"ListPractice"})}))}}},h=m,p=(n("54c7"),Object(d["a"])(h,r,i,!1,null,"c9b49c48",null));e["default"]=p.exports}}]);