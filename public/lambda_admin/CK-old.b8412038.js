import{C as s}from"./ck.660397d8.js";import{E as p}from"./ckeditor.13c70d99.js";import{m as c}from"./_mixin.4f22079c.js";import{a as u}from"./entry.f00561da.js";import{Z as n,a1 as r,a0 as g,W as a}from"./vue.65c51cdf.js";import"./ant.770c87db.js";import"./common.72b693eb.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.d251a0a5.js";import"./numeral.1f6cf9d6.js";import"./cryptoJs.f0105b17.js";const f={mixins:[c],components:{ckeditor:s.component},data(){return{editor:p,editorConfig:{toolbar:{items:["heading","|","bold","italic","|","link","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed"],shouldNotGroupWhenFull:!0},placeholder:""}}},created(){this.meta.editorType=="article"?this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","|","bold","italic","|","link","|","bulletedList","numberedList","|","heading","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed","imageUpload","ckfinder","|"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}}:this.meta.editorType=="full"&&(this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","findAndReplace","|","alignment","bold","italic","link","|","linkImage","blockQuote","code","codeBlock","|","fontBackgroundColor","fontColor","fontFamily","fontSize","heading","|","removeHighlight","highlight","|","horizontalLine","htmlEmbed","|","imageTextAlternative","toggleImageCaption","uploadImage","imageInsert","resizeImage","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","|","indent","outdent","|","numberedList","bulletedList","|","pageBreak","removeFormat","|","specialCharacters","restrictedEditingException","strikethrough","subscript","superscript","|","insertTable","tableColumn","tableRow","mergeTableCells","toggleTableCaption","tableCellProperties","tableProperties","|","mediaEmbed","ckfinder","|","sourceEditing"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}})},methods:{onBlur(e){},onFocus(e){},onReady(e){this.model.form[this.model.component]||(this.model.form[this.model.component]="123")}}};function b(e,o,h,k,l,i){const d=a("ckeditor"),m=a("lambda-form-item");return n(),r(m,{label:e.label,name:e.model.component,meta:e.meta},{default:g(()=>[(n(),r(d,{ref:"ckeditor",editor:l.editor,modelValue:e.model.form[e.model.component],"onUpdate:modelValue":o[0]||(o[0]=t=>e.model.form[e.model.component]=t),config:l.editorConfig,key:e.meta.editorType,placeholder:e.placeholder,disabled:e.disabled,onReady:i.onReady,onBlur:o[1]||(o[1]=t=>i.onBlur(t)),onFocus:o[2]||(o[2]=t=>i.onFocus(t))},null,8,["editor","modelValue","config","placeholder","disabled","onReady"]))]),_:1},8,["label","name","meta"])}const Q=u(f,[["render",b]]);export{Q as default};
