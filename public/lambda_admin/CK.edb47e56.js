import{C as s,a as c}from"./ck.2be2f711.js";import{m as p}from"./_mixin.a35eaa81.js";import{a as u}from"./entry.e3cd167a.js";import{Y as l,a0 as n,$ as g,V as r}from"./vue.3f3be479.js";import"./ant.44dab1d6.js";import"./common.194e1616.js";import"./moment.8b5e7d95.js";import"./lodash.7f89dc3c.js";import"./numeral.30e81b7f.js";import"./cryptoJs.b278cf6a.js";const b={mixins:[p],components:{ckeditor:s.component},data(){return{editor:c,editorConfig:{toolbar:{items:["heading","|","bold","italic","|","link","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed"],shouldNotGroupWhenFull:!0},placeholder:""}}},created(){this.meta.editorType=="article"?this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","|","bold","italic","|","link","|","bulletedList","numberedList","|","heading","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed","imageUpload","ckfinder","|"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}}:this.meta.editorType=="full"&&(this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","findAndReplace","|","alignment","bold","italic","link","|","linkImage","blockQuote","code","codeBlock","|","fontBackgroundColor","fontColor","fontFamily","fontSize","heading","|","removeHighlight","highlight","|","horizontalLine","htmlEmbed","|","imageTextAlternative","toggleImageCaption","uploadImage","imageInsert","resizeImage","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","|","indent","outdent","|","numberedList","bulletedList","|","pageBreak","removeFormat","|","specialCharacters","restrictedEditingException","strikethrough","subscript","superscript","|","insertTable","tableColumn","tableRow","mergeTableCells","toggleTableCaption","tableCellProperties","tableProperties","|","mediaEmbed","ckfinder","|","sourceEditing"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}})},methods:{onBlur(e){},onFocus(e){},onReady(e){}}};function f(e,t,h,k,i,o){const a=r("ckeditor"),d=r("lambda-form-item");return l(),n(d,{label:e.label,name:e.model.component,meta:e.meta},{default:g(()=>[(l(),n(a,{ref:"ckeditor",editor:i.editor,modelValue:e.model.form[e.model.component],"onUpdate:modelValue":t[0]||(t[0]=m=>e.model.form[e.model.component]=m),config:i.editorConfig,key:e.meta.editorType,placeholder:e.placeholder,disabled:e.disabled,onReady:o.onReady,onBlur:o.onBlur,onFocus:o.onFocus},null,8,["editor","modelValue","config","placeholder","disabled","onReady","onBlur","onFocus"]))]),_:1},8,["label","name","meta"])}const L=u(b,[["render",f]]);export{L as default};
