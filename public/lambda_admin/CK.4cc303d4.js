import{C as s,a as c}from"./ck.3254ddaf.js";import{m as p}from"./_mixin.eef67487.js";import{a as u}from"./entry.f4b9eee7.js";import{Z as l,a1 as n,a0 as g,W as r}from"./vue.65c51cdf.js";import"./ant.e036270e.js";import"./common.c40c4e6a.js";import"./moment.8b5e7d95.js";import"./ag.ab39fb93.js";import"./lodash.888217fe.js";import"./numeral.4dda2596.js";import"./cryptoJs.61df0830.js";const b={mixins:[p],components:{ckeditor:s.component},data(){return{editor:c,editorConfig:{toolbar:{items:["heading","|","bold","italic","|","link","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed"],shouldNotGroupWhenFull:!0},placeholder:""}}},created(){this.meta.editorType=="article"?this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","|","bold","italic","|","link","|","bulletedList","numberedList","|","heading","|","blockQuote","|","insertTable","|","indent","outdent","|","mediaEmbed","imageUpload","ckfinder","|"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}}:this.meta.editorType=="full"&&(this.editorConfig={toolbar:{items:["undo","redo","|","selectAll","findAndReplace","|","alignment","bold","italic","link","|","linkImage","blockQuote","code","codeBlock","|","fontBackgroundColor","fontColor","fontFamily","fontSize","heading","|","removeHighlight","highlight","|","horizontalLine","htmlEmbed","|","imageTextAlternative","toggleImageCaption","uploadImage","imageInsert","resizeImage","imageStyle:inline","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter","imageStyle:alignBlockLeft","imageStyle:alignBlockRight","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","|","indent","outdent","|","numberedList","bulletedList","|","pageBreak","removeFormat","|","specialCharacters","restrictedEditingException","strikethrough","subscript","superscript","|","insertTable","tableColumn","tableRow","mergeTableCells","toggleTableCaption","tableCellProperties","tableProperties","|","mediaEmbed","ckfinder","|","sourceEditing"],shouldNotGroupWhenFull:!0},ckfinder:{uploadUrl:"/vendor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json"}})},methods:{onBlur(e){},onFocus(e){},onReady(e){}}};function f(e,t,h,k,i,o){const a=r("ckeditor"),d=r("lambda-form-item");return l(),n(d,{label:e.label,name:e.model.component,meta:e.meta},{default:g(()=>[(l(),n(a,{ref:"ckeditor",editor:i.editor,modelValue:e.model.form[e.model.component],"onUpdate:modelValue":t[0]||(t[0]=m=>e.model.form[e.model.component]=m),config:i.editorConfig,key:e.meta.editorType,placeholder:e.placeholder,disabled:e.disabled,onReady:o.onReady,onBlur:o.onBlur,onFocus:o.onFocus},null,8,["editor","modelValue","config","placeholder","disabled","onReady","onBlur","onFocus"]))]),_:1},8,["label","name","meta"])}const U=u(b,[["render",f]]);export{U as default};
