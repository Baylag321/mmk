import{C as s,a as c}from"./ck.660397d8.js";import{m as p}from"./_mixin.90da006c.js";import{a as u}from"./entry.b42421c5.js";import{Z as l,a1 as n,a0 as g,W as a}from"./vue.65c51cdf.js";import"./ant.770c87db.js";import"./common.72b693eb.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const h={mixins:[p],components:{ckeditor:s.component},data(){return{editor:c,editorConfig:{toolbar:{items:["heading","|","bold","italic","|","link","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed"],shouldNotGroupWhenFull:!0},placeholder:""},value:""}},created(){this.meta.editorType=="article"?this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","|","bold","italic","|","link","|","bulletedList","numberedList","|","heading","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed","imageUpload","ckfinder","|"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}}:this.meta.editorType=="full"&&(this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","findAndReplace","|","alignment","bold","italic","link","|","linkImage","blockQuote","code","codeBlock","|","fontBackgroundColor","fontColor","fontFamily","fontSize","heading","|","removeHighlight","highlight","|","horizontalLine","htmlEmbed","|","imageTextAlternative","toggleImageCaption","uploadImage","imageInsert","resizeImage","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","|","indent","outdent","|","numberedList","bulletedList","|","pageBreak","removeFormat","|","specialCharacters","restrictedEditingException","strikethrough","subscript","superscript","|","insertTable","tableColumn","tableRow","mergeTableCells","toggleTableCaption","tableCellProperties","tableProperties","|","mediaEmbed","ckfinder","|","sourceEditing"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}})},methods:{onBlur(e){},onFocus(e){},onReady(e){},init(){this.model.form[this.model.component]!==null&&this.model.form[this.model.component]!==""&&(this.value=decodeURIComponent(escape(atob(this.model.form[this.model.component]))))},changeFormData(){this.model.form[this.model.component]=btoa(this.value)}},mounted(){this.init()},watch:{itemValue(e,o){(o&&!e||e&&!o)&&(e?this.init():this.value=null)}}};function f(e,o,b,k,t,i){const r=a("ckeditor"),d=a("lambda-form-item");return l(),n(d,{label:e.label,name:e.model.component,meta:e.meta},{default:g(()=>[(l(),n(r,{ref:"ckeditor",editor:t.editor,modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=m=>t.value=m),config:t.editorConfig,key:e.meta.editorType,placeholder:e.placeholder,disabled:e.disabled,onReady:i.onReady,onBlur:i.onBlur,onFocus:i.onFocus,onChange:i.changeFormData},null,8,["editor","modelValue","config","placeholder","disabled","onReady","onBlur","onFocus","onChange"]))]),_:1},8,["label","name","meta"])}const U=u(h,[["render",f]]);export{U as default};
