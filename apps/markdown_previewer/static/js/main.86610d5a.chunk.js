(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(12)},12:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),o=n(3),i=n(5),d=n(4),c=n(6),l=n(0),u=n.n(l),s=n(10),h=n.n(s),f=(n(17),n(7)),b=n.n(f),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).renderer=new b.a.Renderer,n.renderer.link=function(e,t,n){return"\n                <a href='".concat(e,"' target=_blank>").concat(n,"</a>\n            ")},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){console.log("Preview: render");var e=b()(this.props.markdownText,{renderer:this.renderer,breaks:!0});return u.a.createElement("div",null,u.a.createElement("div",{id:"preview-title"},"Preview"),u.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:e}}))}}]),t}(u.a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"title"},"Markdown")}}]),t}(u.a.Component),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={markdown:""},n.loadDefaultMarkdown=n.loadDefaultMarkdown.bind(Object(a.a)(Object(a.a)(n))),n.handleChange=n.handleChange.bind(Object(a.a)(Object(a.a)(n))),n.updateText=n.updateText.bind(Object(a.a)(Object(a.a)(n))),n.loadDefaultMarkdownForCodepen=n.loadDefaultMarkdownForCodepen.bind(Object(a.a)(Object(a.a)(n))),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"updateText",value:function(e){this.setState({markdown:e}),this.props.updatePreview(e)}},{key:"handleChange",value:function(e){this.updateText(e.target.value)}},{key:"loadDefaultMarkdownForCodepen",value:function(){this.updateText("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)")}},{key:"loadDefaultMarkdown",value:function(){var e=this;console.log("Editr: start loading default text");fetch("markdown-by-default").then(function(e){return e.text()}).then(function(t){console.log("Editor: default text loaded"),e.updateText(t)}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){console.log("Editor: did mount"),this.loadDefaultMarkdown()}},{key:"render",value:function(){return console.log("Editor: render"),u.a.createElement("textarea",{id:"editor",value:this.state.markdown,onChange:this.handleChange})}}]),t}(u.a.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"markdown"},u.a.createElement(w,null),u.a.createElement(m,{updatePreview:this.props.updatePreview}))}}]),t}(u.a.Component),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={markdownText:""},n.updatePreview=n.updatePreview.bind(Object(a.a)(Object(a.a)(n))),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"updatePreview",value:function(e){console.log("App: updatePreview"),this.setState({markdownText:e})}},{key:"render",value:function(){return console.log("App: render"),u.a.createElement("div",null,u.a.createElement(k,{updatePreview:this.updatePreview}),u.a.createElement(p,{markdownText:this.state.markdownText}))}}]),t}(u.a.Component);h.a.render(u.a.createElement(v,null),document.getElementById("root"))},17:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.86610d5a.chunk.js.map