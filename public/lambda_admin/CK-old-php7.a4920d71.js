import{C as s}from"./ck.c9c8ed17.js";import{E as p}from"./ckeditor.c5fafd0a.js";import{m as c}from"./_mixin.bcbb50b5.js";import{a as u}from"./entry.07ce20b5.js";import{Z as n,a4 as r,$ as g,U as a}from"./vue.94d6394d.js";import"./ant.01c818db.js";import"./common.c0c079f4.js";import"./moment.8b5e7d95.js";import"./ag.01cba310.js";import"./lodash.1dddd912.js";import"./numeral.fd2a7c31.js";import"./cryptoJs.33cead7e.js";const f={mixins:[c],components:{ckeditor:s.component},data(){return{editor:p,editorConfig:{toolbar:{items:["heading","|","bold","italic","|","link","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed"],shouldNotGroupWhenFull:!0},placeholder:""}}},created(){this.meta.editorType=="article"?this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","|","bold","italic","|","link","|","bulletedList","numberedList","|","heading","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed","imageUpload","ckfinder","|"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}}:this.meta.editorType=="full"&&(this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","findAndReplace","|","alignment","bold","italic","link","|","linkImage","blockQuote","code","codeBlock","|","fontBackgroundColor","fontColor","fontFamily","fontSize","heading","|","removeHighlight","highlight","|","horizontalLine","htmlEmbed","|","imageTextAlternative","toggleImageCaption","uploadImage","imageInsert","resizeImage","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","|","indent","outdent","|","numberedList","bulletedList","|","pageBreak","removeFormat","|","specialCharacters","restrictedEditingException","strikethrough","subscript","superscript","|","insertTable","tableColumn","tableRow","mergeTableCells","toggleTableCaption","tableCellProperties","tableProperties","|","mediaEmbed","ckfinder","|","sourceEditing"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}})},methods:{onBlur(e){},onFocus(e){},onReady(e){this.model.form[this.model.component]||(this.model.form[this.model.component]="123")}}};function b(e,o,h,k,l,i){const d=a("ckeditor"),m=a("lambda-form-item");return n(),r(m,{label:e.label,name:e.model.component,meta:e.meta},{default:g(()=>[(n(),r(d,{ref:"ckeditor",editor:l.editor,modelValue:e.model.form[e.model.component],"onUpdate:modelValue":o[0]||(o[0]=t=>e.model.form[e.model.component]=t),config:l.editorConfig,key:e.meta.editorType,placeholder:e.placeholder,disabled:e.disabled,onReady:i.onReady,onBlur:o[1]||(o[1]=t=>i.onBlur(t)),onFocus:o[2]||(o[2]=t=>i.onFocus(t))},null,8,["editor","modelValue","config","placeholder","disabled","onReady"]))]),_:1},8,["label","name","meta"])}const Q=u(f,[["render",b]]);export{Q as default};
