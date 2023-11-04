var On=Object.defineProperty;var Jn=(g,t,i)=>t in g?On(g,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):g[t]=i;var U=(g,t,i)=>(Jn(g,typeof t!="symbol"?t+"":t,i),i),Pn=(g,t,i)=>{if(!t.has(g))throw TypeError("Cannot "+i)};var vn=(g,t,i)=>{if(t.has(g))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(g):t.set(g,i)};var hn=(g,t,i)=>(Pn(g,t,"access private method"),i);import{e as Bn,O as mn,U as xn,C as kn,S as wn,a as _n,A as dn}from"../chunks/article-main-header.9d852d06.js";import{s as Gt,n as Ut}from"../chunks/scheduler.e108d1fd.js";import{S as Kt,i as Yt,g as r,r as mt,s as h,m as Wt,H as K,h as c,j as $,u as xt,c as u,y as f,n as Zt,B as Y,f as y,k as l,a as Xt,v as kt,x as s,d as it,t as st,w as wt,C as on,D as ln,b as Nn,p as Wn}from"../chunks/index.2b92d2ca.js";function Zn({params:g}){switch(g.slug){case _n:return{path:_n};case wn:return{path:wn};case kn:return{path:kn};case xn:return{path:xn};case mn:return{path:mn};default:throw Bn(404,"Not found")}}const Ki=Object.freeze(Object.defineProperty({__proto__:null,load:Zn},Symbol.toStringTag,{value:"Module"}));function Tn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let en=Tn();function zn(g){en=g}const An=/[&<>"']/,Un=new RegExp(An.source,"g"),Rn=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fn=new RegExp(Rn.source,"g"),Qn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jn=g=>Qn[g];function nt(g,t){if(t){if(An.test(g))return g.replace(Un,jn)}else if(Rn.test(g))return g.replace(Fn,jn);return g}const Gn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kn(g){return g.replace(Gn,(t,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const Yn=/(^|[^\[])\^/g;function R(g,t){g=typeof g=="string"?g:g.source,t=t||"";const i={replace:(n,e)=>(e=typeof e=="object"&&"source"in e?e.source:e,e=e.replace(Yn,"$1"),g=g.replace(n,e),i),getRegex:()=>new RegExp(g,t)};return i}function Vn(g){try{g=encodeURI(g).replace(/%25/g,"%")}catch{return null}return g}const un={exec:()=>null};function Mn(g,t){const i=g.replace(/\|/g,(a,o,p)=>{let d=!1,k=o;for(;--k>=0&&p[k]==="\\";)d=!d;return d?"|":" |"}),n=i.split(/ \|/);let e=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;e<n.length;e++)n[e]=n[e].trim().replace(/\\\|/g,"|");return n}function bn(g,t,i){const n=g.length;if(n===0)return"";let e=0;for(;e<n;){const a=g.charAt(n-e-1);if(a===t&&!i)e++;else if(a!==t&&i)e++;else break}return g.slice(0,n-e)}function Xn(g,t){if(g.indexOf(t[1])===-1)return-1;let i=0;for(let n=0;n<g.length;n++)if(g[n]==="\\")n++;else if(g[n]===t[0])i++;else if(g[n]===t[1]&&(i--,i<0))return n;return-1}function En(g,t,i,n){const e=t.href,a=t.title?nt(t.title):null,o=g[1].replace(/\\([\[\]])/g,"$1");if(g[0].charAt(0)!=="!"){n.state.inLink=!0;const p={type:"link",raw:i,href:e,title:a,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,p}return{type:"image",raw:i,href:e,title:a,text:nt(o)}}function ei(g,t){const i=g.match(/^(\s+)(?:```)/);if(i===null)return t;const n=i[1];return t.split(`
`).map(e=>{const a=e.match(/^\s+/);if(a===null)return e;const[o]=a;return o.length>=n.length?e.slice(n.length):e}).join(`
`)}class pn{constructor(t){U(this,"options");U(this,"rules");U(this,"lexer");this.options=t||en}space(t){const i=this.rules.block.newline.exec(t);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(t){const i=this.rules.block.code.exec(t);if(i){const n=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?n:bn(n,`
`)}}}fences(t){const i=this.rules.block.fences.exec(t);if(i){const n=i[0],e=ei(n,i[3]||"");return{type:"code",raw:n,lang:i[2]?i[2].trim().replace(this.rules.inline._escapes,"$1"):i[2],text:e}}}heading(t){const i=this.rules.block.heading.exec(t);if(i){let n=i[2].trim();if(/#$/.test(n)){const e=bn(n,"#");(this.options.pedantic||!e||/ $/.test(e))&&(n=e.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const i=this.rules.block.hr.exec(t);if(i)return{type:"hr",raw:i[0]}}blockquote(t){const i=this.rules.block.blockquote.exec(t);if(i){const n=i[0].replace(/^ *>[ \t]?/gm,""),e=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(n);return this.lexer.state.top=e,{type:"blockquote",raw:i[0],tokens:a,text:n}}}list(t){let i=this.rules.block.list.exec(t);if(i){let n=i[1].trim();const e=n.length>1,a={type:"list",raw:"",ordered:e,start:e?+n.slice(0,-1):"",loose:!1,items:[]};n=e?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=e?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",d="",k=!1;for(;t;){let v=!1;if(!(i=o.exec(t))||this.rules.block.hr.test(t))break;p=i[0],t=t.substring(p.length);let b=i[2].split(`
`,1)[0].replace(/^\t+/,V=>" ".repeat(3*V.length)),w=t.split(`
`,1)[0],D=0;this.options.pedantic?(D=2,d=b.trimStart()):(D=i[2].search(/[^ ]/),D=D>4?1:D,d=b.slice(D),D+=i[1].length);let L=!1;if(!b&&/^ *$/.test(w)&&(p+=w+`
`,t=t.substring(w.length+1),v=!0),!v){const V=new RegExp(`^ {0,${Math.min(3,D-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),de=new RegExp(`^ {0,${Math.min(3,D-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ge=new RegExp(`^ {0,${Math.min(3,D-1)}}(?:\`\`\`|~~~)`),E=new RegExp(`^ {0,${Math.min(3,D-1)}}#`);for(;t;){const se=t.split(`
`,1)[0];if(w=se,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),ge.test(w)||E.test(w)||V.test(w)||de.test(t))break;if(w.search(/[^ ]/)>=D||!w.trim())d+=`
`+w.slice(D);else{if(L||b.search(/[^ ]/)>=4||ge.test(b)||E.test(b)||de.test(b))break;d+=`
`+w}!L&&!w.trim()&&(L=!0),p+=se+`
`,t=t.substring(se.length+1),b=w.slice(D)}}a.loose||(k?a.loose=!0:/\n *\n *$/.test(p)&&(k=!0));let J=null,F;this.options.gfm&&(J=/^\[[ xX]\] /.exec(d),J&&(F=J[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:p,task:!!J,checked:F,loose:!1,text:d,tokens:[]}),a.raw+=p}a.items[a.items.length-1].raw=p.trimEnd(),a.items[a.items.length-1].text=d.trimEnd(),a.raw=a.raw.trimEnd();for(let v=0;v<a.items.length;v++)if(this.lexer.state.top=!1,a.items[v].tokens=this.lexer.blockTokens(a.items[v].text,[]),!a.loose){const b=a.items[v].tokens.filter(D=>D.type==="space"),w=b.length>0&&b.some(D=>/\n.*\n/.test(D.raw));a.loose=w}if(a.loose)for(let v=0;v<a.items.length;v++)a.items[v].loose=!0;return a}}html(t){const i=this.rules.block.html.exec(t);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(t){const i=this.rules.block.def.exec(t);if(i){const n=i[1].toLowerCase().replace(/\s+/g," "),e=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline._escapes,"$1"):i[3];return{type:"def",tag:n,raw:i[0],href:e,title:a}}}table(t){const i=this.rules.block.table.exec(t);if(i){if(!/[:|]/.test(i[2]))return;const n={type:"table",raw:i[0],header:Mn(i[1]).map(e=>({text:e,tokens:[]})),align:i[2].replace(/^\||\| *$/g,"").split("|"),rows:i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let e=n.align.length,a,o,p,d;for(a=0;a<e;a++){const k=n.align[a];k&&(/^ *-+: *$/.test(k)?n.align[a]="right":/^ *:-+: *$/.test(k)?n.align[a]="center":/^ *:-+ *$/.test(k)?n.align[a]="left":n.align[a]=null)}for(e=n.rows.length,a=0;a<e;a++)n.rows[a]=Mn(n.rows[a],n.header.length).map(k=>({text:k,tokens:[]}));for(e=n.header.length,o=0;o<e;o++)n.header[o].tokens=this.lexer.inline(n.header[o].text);for(e=n.rows.length,o=0;o<e;o++)for(d=n.rows[o],p=0;p<d.length;p++)d[p].tokens=this.lexer.inline(d[p].text);return n}}}lheading(t){const i=this.rules.block.lheading.exec(t);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(t){const i=this.rules.block.paragraph.exec(t);if(i){const n=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const i=this.rules.block.text.exec(t);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(t){const i=this.rules.inline.escape.exec(t);if(i)return{type:"escape",raw:i[0],text:nt(i[1])}}tag(t){const i=this.rules.inline.tag.exec(t);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(t){const i=this.rules.inline.link.exec(t);if(i){const n=i[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=bn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Xn(i[2],"()");if(o>-1){const d=(i[0].indexOf("!")===0?5:4)+i[1].length+o;i[2]=i[2].substring(0,o),i[0]=i[0].substring(0,d).trim(),i[3]=""}}let e=i[2],a="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e);o&&(e=o[1],a=o[3])}else a=i[3]?i[3].slice(1,-1):"";return e=e.trim(),/^</.test(e)&&(this.options.pedantic&&!/>$/.test(n)?e=e.slice(1):e=e.slice(1,-1)),En(i,{href:e&&e.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},i[0],this.lexer)}}reflink(t,i){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=i[e.toLowerCase()],!e){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return En(n,e,n[0],this.lexer)}}emStrong(t,i,n=""){let e=this.rules.inline.emStrong.lDelim.exec(t);if(!e||e[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(e[1]||e[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...e[0]].length-1;let p,d,k=o,v=0;const b=e[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(b.lastIndex=0,i=i.slice(-1*t.length+e[0].length-1);(e=b.exec(i))!=null;){if(p=e[1]||e[2]||e[3]||e[4]||e[5]||e[6],!p)continue;if(d=[...p].length,e[3]||e[4]){k+=d;continue}else if((e[5]||e[6])&&o%3&&!((o+d)%3)){v+=d;continue}if(k-=d,k>0)continue;d=Math.min(d,d+k+v);const w=[...t].slice(0,o+e.index+d+1).join("");if(Math.min(o,d)%2){const L=w.slice(1,-1);return{type:"em",raw:w,text:L,tokens:this.lexer.inlineTokens(L)}}const D=w.slice(2,-2);return{type:"strong",raw:w,text:D,tokens:this.lexer.inlineTokens(D)}}}}codespan(t){const i=this.rules.inline.code.exec(t);if(i){let n=i[2].replace(/\n/g," ");const e=/[^ ]/.test(n),a=/^ /.test(n)&&/ $/.test(n);return e&&a&&(n=n.substring(1,n.length-1)),n=nt(n,!0),{type:"codespan",raw:i[0],text:n}}}br(t){const i=this.rules.inline.br.exec(t);if(i)return{type:"br",raw:i[0]}}del(t){const i=this.rules.inline.del.exec(t);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(t){const i=this.rules.inline.autolink.exec(t);if(i){let n,e;return i[2]==="@"?(n=nt(i[1]),e="mailto:"+n):(n=nt(i[1]),e=n),{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let i;if(i=this.rules.inline.url.exec(t)){let n,e;if(i[2]==="@")n=nt(i[0]),e="mailto:"+n;else{let a;do a=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(a!==i[0]);n=nt(i[0]),i[1]==="www."?e="http://"+i[0]:e=i[0]}return{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const i=this.rules.inline.text.exec(t);if(i){let n;return this.lexer.state.inRawBlock?n=i[0]:n=nt(i[0]),{type:"text",raw:i[0],text:n}}}}const T={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:un,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};T._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;T._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;T.def=R(T.def).replace("label",T._label).replace("title",T._title).getRegex();T.bullet=/(?:[*+-]|\d{1,9}[.)])/;T.listItemStart=R(/^( *)(bull) */).replace("bull",T.bullet).getRegex();T.list=R(T.list).replace(/bull/g,T.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+T.def.source+")").getRegex();T._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";T._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;T.html=R(T.html,"i").replace("comment",T._comment).replace("tag",T._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();T.lheading=R(T.lheading).replace(/bull/g,T.bullet).getRegex();T.paragraph=R(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.blockquote=R(T.blockquote).replace("paragraph",T.paragraph).getRegex();T.normal={...T};T.gfm={...T.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};T.gfm.table=R(T.gfm.table).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.gfm.paragraph=R(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",T.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.pedantic={...T.normal,html:R(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",T._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:un,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:R(T.normal._paragraph).replace("hr",T.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",T.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const x={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:un,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:un,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};x._punctuation="\\p{P}$+<=>`^|~";x.punctuation=R(x.punctuation,"u").replace(/punctuation/g,x._punctuation).getRegex();x.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;x.anyPunctuation=/\\[punct]/g;x._escapes=/\\([punct])/g;x._comment=R(T._comment).replace("(?:-->|$)","-->").getRegex();x.emStrong.lDelim=R(x.emStrong.lDelim,"u").replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimAst=R(x.emStrong.rDelimAst,"gu").replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimUnd=R(x.emStrong.rDelimUnd,"gu").replace(/punct/g,x._punctuation).getRegex();x.anyPunctuation=R(x.anyPunctuation,"gu").replace(/punct/g,x._punctuation).getRegex();x._escapes=R(x._escapes,"gu").replace(/punct/g,x._punctuation).getRegex();x._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;x._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;x.autolink=R(x.autolink).replace("scheme",x._scheme).replace("email",x._email).getRegex();x._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;x.tag=R(x.tag).replace("comment",x._comment).replace("attribute",x._attribute).getRegex();x._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;x._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;x._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;x.link=R(x.link).replace("label",x._label).replace("href",x._href).replace("title",x._title).getRegex();x.reflink=R(x.reflink).replace("label",x._label).replace("ref",T._label).getRegex();x.nolink=R(x.nolink).replace("ref",T._label).getRegex();x.reflinkSearch=R(x.reflinkSearch,"g").replace("reflink",x.reflink).replace("nolink",x.nolink).getRegex();x.normal={...x};x.pedantic={...x.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R(/^!?\[(label)\]\((.*?)\)/).replace("label",x._label).getRegex(),reflink:R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",x._label).getRegex()};x.gfm={...x.normal,escape:R(x.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};x.gfm.url=R(x.gfm.url,"i").replace("email",x.gfm._extended_email).getRegex();x.breaks={...x.gfm,br:R(x.br).replace("{2,}","*").getRegex(),text:R(x.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Lt{constructor(t){U(this,"tokens");U(this,"options");U(this,"state");U(this,"tokenizer");U(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||en,this.options.tokenizer=this.options.tokenizer||new pn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:T.normal,inline:x.normal};this.options.pedantic?(i.block=T.pedantic,i.inline=x.pedantic):this.options.gfm&&(i.block=T.gfm,this.options.breaks?i.inline=x.breaks:i.inline=x.gfm),this.tokenizer.rules=i}static get rules(){return{block:T,inline:x}}static lex(t,i){return new Lt(i).lex(t)}static lexInline(t,i){return new Lt(i).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let i;for(;i=this.inlineQueue.shift();)this.inlineTokens(i.src,i.tokens);return this.tokens}blockTokens(t,i=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(p,d,k)=>d+"    ".repeat(k.length));let n,e,a,o;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(n=p.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=e.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(a=t,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const d=t.slice(1);let k;this.options.extensions.startBlock.forEach(v=>{k=v.call({lexer:this},d),typeof k=="number"&&k>=0&&(p=Math.min(p,k))}),p<1/0&&p>=0&&(a=t.substring(0,p+1))}if(this.state.top&&(n=this.tokenizer.paragraph(a))){e=i[i.length-1],o&&e.type==="paragraph"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n),o=a.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&e.type==="text"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let n,e,a,o=t,p,d,k;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)v.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,p.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(d||(k=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(n=v.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.emStrong(t,o,k)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),i.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),i.push(n);continue}if(a=t,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const b=t.slice(1);let w;this.options.extensions.startInline.forEach(D=>{w=D.call({lexer:this},b),typeof w=="number"&&w>=0&&(v=Math.min(v,w))}),v<1/0&&v>=0&&(a=t.substring(0,v+1))}if(n=this.tokenizer.inlineText(a)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(k=n.raw.slice(-1)),d=!0,e=i[i.length-1],e&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(t){const v="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return i}}class fn{constructor(t){U(this,"options");this.options=t||en}code(t,i,n){var a;const e=(a=(i||"").match(/^\S*/))==null?void 0:a[0];return t=t.replace(/\n$/,"")+`
`,e?'<pre><code class="language-'+nt(e)+'">'+(n?t:nt(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:nt(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,i){return t}heading(t,i,n){return`<h${i}>${t}</h${i}>
`}hr(){return`<hr>
`}list(t,i,n){const e=i?"ol":"ul",a=i&&n!==1?' start="'+n+'"':"";return"<"+e+a+`>
`+t+"</"+e+`>
`}listitem(t,i,n){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,i){return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+i+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,i){const n=i.header?"th":"td";return(i.align?`<${n} align="${i.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,i,n){const e=Vn(t);if(e===null)return n;t=e;let a='<a href="'+t+'"';return i&&(a+=' title="'+i+'"'),a+=">"+n+"</a>",a}image(t,i,n){const e=Vn(t);if(e===null)return n;t=e;let a=`<img src="${t}" alt="${n}"`;return i&&(a+=` title="${i}"`),a+=">",a}text(t){return t}}class Cn{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,i,n){return""+n}image(t,i,n){return""+n}br(){return""}}class Ht{constructor(t){U(this,"options");U(this,"renderer");U(this,"textRenderer");this.options=t||en,this.options.renderer=this.options.renderer||new fn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Cn}static parse(t,i){return new Ht(i).parse(t)}static parseInline(t,i){return new Ht(i).parseInline(t)}parse(t,i=!0){let n="";for(let e=0;e<t.length;e++){const a=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const o=a,p=this.options.extensions.renderers[o.type].call({parser:this},o);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=p||"";continue}}switch(a.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=a;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Kn(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=a;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=a;let p="",d="";for(let v=0;v<o.header.length;v++)d+=this.renderer.tablecell(this.parseInline(o.header[v].tokens),{header:!0,align:o.align[v]});p+=this.renderer.tablerow(d);let k="";for(let v=0;v<o.rows.length;v++){const b=o.rows[v];d="";for(let w=0;w<b.length;w++)d+=this.renderer.tablecell(this.parseInline(b[w].tokens),{header:!1,align:o.align[w]});k+=this.renderer.tablerow(d)}n+=this.renderer.table(p,k);continue}case"blockquote":{const o=a,p=this.parse(o.tokens);n+=this.renderer.blockquote(p);continue}case"list":{const o=a,p=o.ordered,d=o.start,k=o.loose;let v="";for(let b=0;b<o.items.length;b++){const w=o.items[b],D=w.checked,L=w.task;let J="";if(w.task){const F=this.renderer.checkbox(!!D);k?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=F+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=F+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:F+" "}):J+=F+" "}J+=this.parse(w.tokens,k),v+=this.renderer.listitem(J,L,!!D)}n+=this.renderer.list(v,p,d);continue}case"html":{const o=a;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=a;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=a,p=o.tokens?this.parseInline(o.tokens):o.text;for(;e+1<t.length&&t[e+1].type==="text";)o=t[++e],p+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=i?this.renderer.paragraph(p):p;continue}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(t,i){i=i||this.renderer;let n="";for(let e=0;e<t.length;e++){const a=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){n+=o||"";continue}}switch(a.type){case"escape":{const o=a;n+=i.text(o.text);break}case"html":{const o=a;n+=i.html(o.text);break}case"link":{const o=a;n+=i.link(o.href,o.title,this.parseInline(o.tokens,i));break}case"image":{const o=a;n+=i.image(o.href,o.title,o.text);break}case"strong":{const o=a;n+=i.strong(this.parseInline(o.tokens,i));break}case"em":{const o=a;n+=i.em(this.parseInline(o.tokens,i));break}case"codespan":{const o=a;n+=i.codespan(o.text);break}case"br":{n+=i.br();break}case"del":{const o=a;n+=i.del(this.parseInline(o.tokens,i));break}case"text":{const o=a;n+=i.text(o.text);break}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class rn{constructor(t){U(this,"options");this.options=t||en}preprocess(t){return t}postprocess(t){return t}}U(rn,"passThroughHooks",new Set(["preprocess","postprocess"]));var cn,yn,gn,qn;class ti{constructor(...t){vn(this,cn);vn(this,gn);U(this,"defaults",Tn());U(this,"options",this.setOptions);U(this,"parse",hn(this,cn,yn).call(this,Lt.lex,Ht.parse));U(this,"parseInline",hn(this,cn,yn).call(this,Lt.lexInline,Ht.parseInline));U(this,"Parser",Ht);U(this,"parser",Ht.parse);U(this,"Renderer",fn);U(this,"TextRenderer",Cn);U(this,"Lexer",Lt);U(this,"lexer",Lt.lex);U(this,"Tokenizer",pn);U(this,"Hooks",rn);this.use(...t)}walkTokens(t,i){var e,a;let n=[];for(const o of t)switch(n=n.concat(i.call(this,o)),o.type){case"table":{const p=o;for(const d of p.header)n=n.concat(this.walkTokens(d.tokens,i));for(const d of p.rows)for(const k of d)n=n.concat(this.walkTokens(k.tokens,i));break}case"list":{const p=o;n=n.concat(this.walkTokens(p.items,i));break}default:{const p=o;(a=(e=this.defaults.extensions)==null?void 0:e.childTokens)!=null&&a[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{n=n.concat(this.walkTokens(p[d],i))}):p.tokens&&(n=n.concat(this.walkTokens(p.tokens,i)))}}return n}use(...t){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const e={...n};if(e.async=this.defaults.async||e.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const o=i.renderers[a.name];o?i.renderers[a.name]=function(...p){let d=a.renderer.apply(this,p);return d===!1&&(d=o.apply(this,p)),d}:i.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=i[a.level];o?o.unshift(a.tokenizer):i[a.level]=[a.tokenizer],a.start&&(a.level==="block"?i.startBlock?i.startBlock.push(a.start):i.startBlock=[a.start]:a.level==="inline"&&(i.startInline?i.startInline.push(a.start):i.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(i.childTokens[a.name]=a.childTokens)}),e.extensions=i),n.renderer){const a=this.defaults.renderer||new fn(this.defaults);for(const o in n.renderer){const p=n.renderer[o],d=o,k=a[d];a[d]=(...v)=>{let b=p.apply(a,v);return b===!1&&(b=k.apply(a,v)),b||""}}e.renderer=a}if(n.tokenizer){const a=this.defaults.tokenizer||new pn(this.defaults);for(const o in n.tokenizer){const p=n.tokenizer[o],d=o,k=a[d];a[d]=(...v)=>{let b=p.apply(a,v);return b===!1&&(b=k.apply(a,v)),b}}e.tokenizer=a}if(n.hooks){const a=this.defaults.hooks||new rn;for(const o in n.hooks){const p=n.hooks[o],d=o,k=a[d];rn.passThroughHooks.has(o)?a[d]=v=>{if(this.defaults.async)return Promise.resolve(p.call(a,v)).then(w=>k.call(a,w));const b=p.call(a,v);return k.call(a,b)}:a[d]=(...v)=>{let b=p.apply(a,v);return b===!1&&(b=k.apply(a,v)),b}}e.hooks=a}if(n.walkTokens){const a=this.defaults.walkTokens,o=n.walkTokens;e.walkTokens=function(p){let d=[];return d.push(o.call(this,p)),a&&(d=d.concat(a.call(this,p))),d}}this.defaults={...this.defaults,...e}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}}cn=new WeakSet,yn=function(t,i){return(n,e)=>{const a={...e},o={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const p=hn(this,gn,qn).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(d=>t(d,o)).then(d=>o.walkTokens?Promise.all(this.walkTokens(d,o.walkTokens)).then(()=>d):d).then(d=>i(d,o)).then(d=>o.hooks?o.hooks.postprocess(d):d).catch(p);try{o.hooks&&(n=o.hooks.preprocess(n));const d=t(n,o);o.walkTokens&&this.walkTokens(d,o.walkTokens);let k=i(d,o);return o.hooks&&(k=o.hooks.postprocess(k)),k}catch(d){return p(d)}}},gn=new WeakSet,qn=function(t,i){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const e="<p>An error occurred:</p><pre>"+nt(n.message+"",!0)+"</pre>";return i?Promise.resolve(e):e}if(i)return Promise.reject(n);throw n}};const Qt=new ti;function C(g,t){return Qt.parse(g,t)}C.options=C.setOptions=function(g){return Qt.setOptions(g),C.defaults=Qt.defaults,zn(C.defaults),C};C.getDefaults=Tn;C.defaults=en;C.use=function(...g){return Qt.use(...g),C.defaults=Qt.defaults,zn(C.defaults),C};C.walkTokens=function(g,t){return Qt.walkTokens(g,t)};C.parseInline=Qt.parseInline;C.Parser=Ht;C.parser=Ht.parse;C.Renderer=fn;C.TextRenderer=Cn;C.Lexer=Lt;C.lexer=Lt.lex;C.Tokenizer=pn;C.Hooks=rn;C.parse=C;C.options;C.setOptions;C.use;C.walkTokens;C.parseInline;Ht.parse;Lt.lex;const ni=`
  \`\`\`
    var name = "John";

    var numString = "22";

    var num = Number(numString);
  \`\`\`
`,ii='\n  ```\n    var num = "27";\n    var num2 = num * 1;\n  ```\n',si=`
  \`\`\`
    function hoistedVariable() {
      console.log(a); // This will be undefined

      a = 4;

      console.log(a); // This is 4

      var a;
    }
  \`\`\`
`,ai=`
  \`\`\`
    function makeAdder(x) {

      function add(y) {
        return x + y;
      }

      return add;
    }

    var plusTwo = makeAdder(2);

    plusTwo(3); // This results in 5 -> 2(value of x) + 3(value of y)
  \`\`\`
`,oi=`
  \`\`\`
    if (!Number.isNaN) {
      Number.isNaN = function isNaN(x) {
        return x !== x;
      };
    }
  \`\`\`
`;function li(g){let t,i,n,e,a,o="Up and going",p,d,k=`The first statement that I ever heard in regards to JavaScript was the phrase &quot;
			<strong>Dumb kid brother</strong>&quot;. It has been close to 7 years since I started coding
			seriously and I still do not understand, how the world&#39;s most widely used language that rules
			the entire web space, works?`,v,b,w=`The intention behind creating these articles is to mainly learn and treat them as a point of
			reference to solidify my understanding of <i>JavaScript</i>. This by chance, also happens to
			be the first blog that I have ever written and I am hoping I can turn this into a hobby.`,D,L,J="Up and Going",F,V,de=`The first part of this series <strong>(You don&#39;t know JS)</strong> was a general introduction
			to programming and a discussion of some aspects of <i>JavaScript</i>. There are few topics
			that caught my attention.
			<a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&amp;%20going/README.md#you-dont-know-js-up--going" target="_blank">YDKJS</a> <ul class="blog-list-elements"><li>Coercion</li> <li>Typed values not typed variables</li> <li>Equality</li> <li>Hoisting</li> <li>Closure</li> <li>Polyfilling</li> <li>Transpiling</li></ul>`,ge,E,se="Coercion",De,H,ve,Q,P="<li>Explicit coercion</li> <li>Implicit coercion</li>",ae,X,Le=`Explicit conversion is straightforward. We know the current type of the value and the\r
				resultant type it is converted to.`,ee,oe,te,he=C(ni)+"",Ee,A,le=`The conversion in the above cases is explicit. We know that the <code>name</code> variable
				is a <code>string</code> and so is the variable <code>numString</code>. In the third case
				the
				<code>string</code> type is explicity converted to a <code>number</code>.`,Ie,B,_e=`Implicit conversion on the other hand is quite interesting and we will experience an
				interesting quality of implicit conversion in the <strong>Equality</strong>
				section. The conversion is not very apparent and can cause confusion in code if not written properly.`,ue,M,ne,be=C(ii)+"",ze,q,ie=`The conversion in the first case is explicit, we know that num is a string. In the second\r
				case the value of num is coerced into a number.`,Ze,W,N="Typed values not typed variables",Ae,O,z=`<p>There is a neat way to learn the type of a variable in JavaScript. It&#39;s the <code>typeof()</code>
				operator. When checking the type of a variable, JavaScript looks at the value of the variable
				and not the variable itself. The variables in JavaScript are merely containers of types.</p>`,S,me,Pe="Equality",G,re,Be=`<p>Equality in JavaScript comes in two flavors <code>==</code> and <code>===</code>. The
				easiest way to understand these would be that <code>==</code> checks for equality with
				coercion and
				<code>===</code> does not allow coercion, which is often called &quot;strict equality&quot;</p> <p>For the past 7 years I believed that the difference between <code>==</code> and
				<code>===</code> is that strict equality checked the reference and the other checked the value.
				I was missing the understanding of the word coercion! I still do think that the avoiding == makes
				sense when working with other people. Somewhere down the line people can make mistakes.</p>`,ce,xe,I="Hoisting",Re,ye,Te,Ue=`On declaring a variable in JavaScript, it's made available throughout the entire scope it\r
				was declared in. JavaScript hoists that variable to the top and it's available to the entire\r
				scope. The same works for functions. Variable hoisting can cause a lot of confusion and it's\r
				better to avoid it. The best approach is to use JavaScript in "strict" mode and use let for\r
				variable declaration.`,Rt,Ge,Ce,Ft=C(si)+"",ht,ke,_t=`In the above example, on calling the function <code>hoistedVariable</code> we notice that
				the variable until initialized prints a value of <code>undefined</code>. The declaration of
				the variable
				<code>a</code> is on the last line but, due to hoisting in JavaScript, the variable is available
				throughout the scope.`,jt,He,Fe="Closure",qt,je,pe,Ot=`One can think of Closure as a way to "remember" a function's scope, like variables, even\r
				after the function has finished executing. The best way to explain closure is through an\r
				example`,ut,fe,yt,Vt=C(ai)+"",$e,at,Tt=`In the above example even after it&#39;s execution the returned function value is saved in the
				<code>plusTwo</code> variable, which is basically holding a <code>function</code> type.
				Calling
				<code>plusTwo</code> remembers the original value passed in, which was 2.`,Se,Ye,Ct="Polyfilling",Ve,Ne,ot,Xe=`Polyfilling refers to taking the definition of a newer feature and producing a piece of code
				that&#39;s equivalent to the behavior, but is able to run in older JavaScript environments. As
				an example, ES6 deprecated the utility <code>isNan(...)</code> which was buggy and replaced
				it with
				<code>Number.isNan(...)</code>. The example below polyfills the function for older
				environments.`,qe,pt,lt,Oe=C(oi)+"",ft;return i=new dn({}),{c(){t=r("div"),mt(i.$$.fragment),n=h(),e=r("div"),a=r("h1"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.innerHTML=w,D=h(),L=r("div"),L.textContent=J,F=h(),V=r("div"),V.innerHTML=de,ge=h(),E=r("div"),E.textContent=se,De=h(),H=r("div"),ve=Wt(`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),Q=r("ol"),Q.innerHTML=P,ae=h(),X=r("p"),X.textContent=Le,ee=h(),oe=r("div"),te=new K(!1),Ee=h(),A=r("p"),A.innerHTML=le,Ie=h(),B=r("p"),B.innerHTML=_e,ue=h(),M=r("div"),ne=new K(!1),ze=h(),q=r("p"),q.textContent=ie,Ze=h(),W=r("div"),W.textContent=N,Ae=h(),O=r("div"),O.innerHTML=z,S=h(),me=r("div"),me.textContent=Pe,G=h(),re=r("div"),re.innerHTML=Be,ce=h(),xe=r("div"),xe.textContent=I,Re=h(),ye=r("div"),Te=r("p"),Te.textContent=Ue,Rt=h(),Ge=r("div"),Ce=new K(!1),ht=h(),ke=r("p"),ke.innerHTML=_t,jt=h(),He=r("div"),He.textContent=Fe,qt=h(),je=r("div"),pe=r("p"),pe.textContent=Ot,ut=h(),fe=r("div"),yt=new K(!1),$e=h(),at=r("p"),at.innerHTML=Tt,Se=h(),Ye=r("div"),Ye.textContent=Ct,Ve=h(),Ne=r("div"),ot=r("p"),ot.innerHTML=Xe,qe=h(),pt=r("div"),lt=new K(!1),this.h()},l(we){t=c(we,"DIV",{class:!0});var Je=$(t);xt(i.$$.fragment,Je),n=u(Je),e=c(Je,"DIV",{class:!0});var j=$(e);a=c(j,"H1",{"data-svelte-h":!0}),f(a)!=="svelte-16bxzce"&&(a.textContent=o),p=u(j),d=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-d234l5"&&(d.innerHTML=k),v=u(j),b=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-f75zlw"&&(b.innerHTML=w),D=u(j),L=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(L)!=="svelte-1i0c26i"&&(L.textContent=J),F=u(j),V=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(V)!=="svelte-1au80is"&&(V.innerHTML=de),ge=u(j),E=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(E)!=="svelte-1gz8uxg"&&(E.textContent=se),De=u(j),H=c(j,"DIV",{class:!0});var Z=$(H);ve=Zt(Z,`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),Q=c(Z,"OL",{class:!0,"data-svelte-h":!0}),f(Q)!=="svelte-l4ajwa"&&(Q.innerHTML=P),ae=u(Z),X=c(Z,"P",{"data-svelte-h":!0}),f(X)!=="svelte-1w03sfk"&&(X.textContent=Le),ee=u(Z),oe=c(Z,"DIV",{class:!0});var et=$(oe);te=Y(et,!1),et.forEach(y),Ee=u(Z),A=c(Z,"P",{"data-svelte-h":!0}),f(A)!=="svelte-1oow4wt"&&(A.innerHTML=le),Ie=u(Z),B=c(Z,"P",{"data-svelte-h":!0}),f(B)!=="svelte-1d2klvl"&&(B.innerHTML=_e),ue=u(Z),M=c(Z,"DIV",{class:!0});var Mt=$(M);ne=Y(Mt,!1),Mt.forEach(y),ze=u(Z),q=c(Z,"P",{"data-svelte-h":!0}),f(q)!=="svelte-1ulolye"&&(q.textContent=ie),Z.forEach(y),Ze=u(j),W=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(W)!=="svelte-il2h6u"&&(W.textContent=N),Ae=u(j),O=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(O)!=="svelte-t53yhc"&&(O.innerHTML=z),S=u(j),me=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(me)!=="svelte-zkjv4w"&&(me.textContent=Pe),G=u(j),re=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(re)!=="svelte-cdu7ip"&&(re.innerHTML=Be),ce=u(j),xe=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(xe)!=="svelte-1m8q6hv"&&(xe.textContent=I),Re=u(j),ye=c(j,"DIV",{class:!0});var Me=$(ye);Te=c(Me,"P",{"data-svelte-h":!0}),f(Te)!=="svelte-d8fbjs"&&(Te.textContent=Ue),Rt=u(Me),Ge=c(Me,"DIV",{class:!0});var rt=$(Ge);Ce=Y(rt,!1),rt.forEach(y),ht=u(Me),ke=c(Me,"P",{"data-svelte-h":!0}),f(ke)!=="svelte-jz2io5"&&(ke.innerHTML=_t),Me.forEach(y),jt=u(j),He=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(He)!=="svelte-1mj3tvz"&&(He.textContent=Fe),qt=u(j),je=c(j,"DIV",{class:!0});var Qe=$(je);pe=c(Qe,"P",{"data-svelte-h":!0}),f(pe)!=="svelte-udzufc"&&(pe.textContent=Ot),ut=u(Qe),fe=c(Qe,"DIV",{class:!0});var ct=$(fe);yt=Y(ct,!1),ct.forEach(y),$e=u(Qe),at=c(Qe,"P",{"data-svelte-h":!0}),f(at)!=="svelte-1lv6grx"&&(at.innerHTML=Tt),Qe.forEach(y),Se=u(j),Ye=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(Ye)!=="svelte-1dn8ynz"&&(Ye.textContent=Ct),Ve=u(j),Ne=c(j,"DIV",{class:!0});var gt=$(Ne);ot=c(gt,"P",{"data-svelte-h":!0}),f(ot)!=="svelte-180pjs4"&&(ot.innerHTML=Xe),qe=u(gt),pt=c(gt,"DIV",{class:!0});var Ke=$(pt);lt=Y(Ke,!1),Ke.forEach(y),gt.forEach(y),j.forEach(y),Je.forEach(y),this.h()},h(){l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(L,"class","blog-sub-header"),l(V,"class","blog-paragraph"),l(E,"class","blog-sub-header"),l(Q,"class","blog-list-elements"),te.a=null,l(oe,"class","blog-code-block"),ne.a=null,l(M,"class","blog-code-block"),l(H,"class","blog-paragraph"),l(W,"class","blog-sub-header"),l(O,"class","blog-paragraph"),l(me,"class","blog-sub-header"),l(re,"class","blog-paragraph"),l(xe,"class","blog-sub-header"),Ce.a=null,l(Ge,"class","blog-code-block"),l(ye,"class","blog-paragraph"),l(He,"class","blog-sub-header"),yt.a=null,l(fe,"class","blog-code-block"),l(je,"class","blog-paragraph"),l(Ye,"class","blog-sub-header"),lt.a=null,l(pt,"class","blog-code-block"),l(Ne,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","up-and-going-container svelte-ofy7lw")},m(we,Je){Xt(we,t,Je),kt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,D),s(e,L),s(e,F),s(e,V),s(e,ge),s(e,E),s(e,De),s(e,H),s(H,ve),s(H,Q),s(H,ae),s(H,X),s(H,ee),s(H,oe),te.m(he,oe),s(H,Ee),s(H,A),s(H,Ie),s(H,B),s(H,ue),s(H,M),ne.m(be,M),s(H,ze),s(H,q),s(e,Ze),s(e,W),s(e,Ae),s(e,O),s(e,S),s(e,me),s(e,G),s(e,re),s(e,ce),s(e,xe),s(e,Re),s(e,ye),s(ye,Te),s(ye,Rt),s(ye,Ge),Ce.m(Ft,Ge),s(ye,ht),s(ye,ke),s(e,jt),s(e,He),s(e,qt),s(e,je),s(je,pe),s(je,ut),s(je,fe),yt.m(Vt,fe),s(je,$e),s(je,at),s(e,Se),s(e,Ye),s(e,Ve),s(e,Ne),s(Ne,ot),s(Ne,qe),s(Ne,pt),lt.m(Oe,pt),ft=!0},p:Ut,i(we){ft||(it(i.$$.fragment,we),ft=!0)},o(we){st(i.$$.fragment,we),ft=!1},d(we){we&&y(t),wt(i)}}}class ri extends Kt{constructor(t){super(),Yt(this,t,null,li,Gt,{})}}const ci=`
\`\`\`
    function foo () {
        var a = 9;

        function bar () {
            console.log (a);
        }

        return bar;
    }

    var baz = foo ();
    baz(); // Closure on bar
\`\`\`
`,di=`
\`\`\`
    function foo () {
        var a = 2;

        function bar () {
            console.log(a);
        }

        baz(bar);// passed as value
    }

    function baz (fn) {
        fn(); // Closure here!
    }
\`\`\`
`,hi=`
\`\`\`
    var a = 10;
    setTimeout(function time() {
        console.log(a);
    }, 1000);
\`\`\`
`,ui=`
\`\`\`
    function moduleExample() {
        var a = 10;
        var b = 5;

        function printA() {
            console.log(a);
        }

        function printB() {
            console.log(b);
        }

        return {
            printA: printA,
            printB: printB
        };
    }

    var m = moduleExample();

    // closure over the variables
    // a and b
    m.printA();
    m.printB();
\`\`\`
`;function pi(g){let t,i,n,e,a,o="Closure",p,d,k=`Closure in JavaScript is, when a function is able to remember and access its lexical scope\r
			even when the function is executing outside is lexical scope.`,v,b,w,D=C(ci)+"",L,J,F=`In the above example the function <code>bar</code> has closure over the scope of
			<code>foo</code>. This is because <code>bar</code> is declared inside the scope of
			<code>foo</code>. To better understand this we could use the analogy of
			<a href="/blog/ydkjs/scopes_and_hoisting#concentric-circle" target="_blank">concentric circles</a>
			.The lexical scope that forms those concentric circles is closely related to closures. So, looking
			at closures through the lens of the circle analogy, we would look at it inside-out. The inner most
			<i>scope/circle</i>
			has closure over all the other <i>scopes/circles</i>. Another fascinating thing about closures
			is the persistence of the scope of a function even after execution. Generally, when a block of
			scope finishes execution, it is garbage collected and it&#39;s not present in memory, but closures
			allow some magic to happen!`,V,de,ge=`There are some other forms of closure that can be a little indirect. A great example would be
			when a function is passed by value to another function, and executed from the scope of that
			function. To better state that - <b>Any way in which a function can be passed around as value and be invoked in other
				locations, are all examples of closures</b>. Example below!`,E,se,De,H=C(di)+"",ve,Q,P="Closures are everywhere and one of the best examples is the <code>setTimeOut</code> function.",ae,X,Le,ee=C(hi)+"",oe,te,he=`In the above <code>setTimeout</code> example, the function<code>timer</code> has a scope
			closure over the global scope, it remembers the value <code>a</code> from the global scope. We
			pass the function
			<code>timer</code>
			as a parameter to the <code>setTimeout</code>, which is nothing but a functionReference and
			that function has closure over the global scope. This opens up a new world. Everytime I look
			at some JavaScript code, I see closures now!`,Ee,A,le="Modules",Ie,B,_e=`Modules are the one of the most prominent and powerful examples of closures. Specially,\r
			starting from ES6.`,ue,M,ne,be=C(ui)+"",ze,q,ie=`Modules are functions itself and this example is in a way similar to the fist closure example.\r
			The only difference being that in the case of a module it returns an object with multiple\r
			functions that have closure over the scope of the module function.`,Ze,W,N="That ends part two of YDKJS! I have learnt quite a bit, let's keep rolling.",Ae;return i=new dn({}),{c(){t=r("div"),mt(i.$$.fragment),n=h(),e=r("div"),a=r("h1"),a.textContent=o,p=h(),d=r("div"),d.textContent=k,v=h(),b=r("div"),w=new K(!1),L=h(),J=r("div"),J.innerHTML=F,V=h(),de=r("div"),de.innerHTML=ge,E=h(),se=r("div"),De=new K(!1),ve=h(),Q=r("div"),Q.innerHTML=P,ae=h(),X=r("div"),Le=new K(!1),oe=h(),te=r("div"),te.innerHTML=he,Ee=h(),A=r("div"),A.textContent=le,Ie=h(),B=r("div"),B.textContent=_e,ue=h(),M=r("div"),ne=new K(!1),ze=h(),q=r("div"),q.textContent=ie,Ze=h(),W=r("div"),W.textContent=N,this.h()},l(O){t=c(O,"DIV",{class:!0});var z=$(t);xt(i.$$.fragment,z),n=u(z),e=c(z,"DIV",{class:!0});var S=$(e);a=c(S,"H1",{"data-svelte-h":!0}),f(a)!=="svelte-ttwwp"&&(a.textContent=o),p=u(S),d=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-1h62583"&&(d.textContent=k),v=u(S),b=c(S,"DIV",{class:!0});var me=$(b);w=Y(me,!1),me.forEach(y),L=u(S),J=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(J)!=="svelte-87t3fc"&&(J.innerHTML=F),V=u(S),de=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(de)!=="svelte-1dhjz52"&&(de.innerHTML=ge),E=u(S),se=c(S,"DIV",{class:!0});var Pe=$(se);De=Y(Pe,!1),Pe.forEach(y),ve=u(S),Q=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(Q)!=="svelte-v7a7fy"&&(Q.innerHTML=P),ae=u(S),X=c(S,"DIV",{class:!0});var G=$(X);Le=Y(G,!1),G.forEach(y),oe=u(S),te=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(te)!=="svelte-1kt1d4n"&&(te.innerHTML=he),Ee=u(S),A=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(A)!=="svelte-1emixw3"&&(A.textContent=le),Ie=u(S),B=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-40eyps"&&(B.textContent=_e),ue=u(S),M=c(S,"DIV",{class:!0});var re=$(M);ne=Y(re,!1),re.forEach(y),ze=u(S),q=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(q)!=="svelte-1ukx7mk"&&(q.textContent=ie),Ze=u(S),W=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(W)!=="svelte-lun0om"&&(W.textContent=N),S.forEach(y),z.forEach(y),this.h()},h(){l(d,"class","blog-paragraph"),w.a=null,l(b,"class","blog-code-block"),l(J,"class","blog-paragraph"),l(de,"class","blog-paragraph"),De.a=null,l(se,"class","blog-code-block"),l(Q,"class","blog-paragraph"),Le.a=null,l(X,"class","blog-code-block"),l(te,"class","blog-paragraph"),l(A,"class","blog-sub-header"),l(B,"class","blog-paragraph"),ne.a=null,l(M,"class","blog-code-block"),l(q,"class","blog-paragraph"),l(W,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","closure-container svelte-18ejxyl")},m(O,z){Xt(O,t,z),kt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),w.m(D,b),s(e,L),s(e,J),s(e,V),s(e,de),s(e,E),s(e,se),De.m(H,se),s(e,ve),s(e,Q),s(e,ae),s(e,X),Le.m(ee,X),s(e,oe),s(e,te),s(e,Ee),s(e,A),s(e,Ie),s(e,B),s(e,ue),s(e,M),ne.m(be,M),s(e,ze),s(e,q),s(e,Ze),s(e,W),Ae=!0},p:Ut,i(O){Ae||(it(i.$$.fragment,O),Ae=!0)},o(O){st(i.$$.fragment,O),Ae=!1},d(O){O&&y(t),wt(i)}}}class fi extends Kt{constructor(t){super(),Yt(this,t,null,pi,Gt,{})}}const gi="\n```\n    var num = 3;\n```\n",vi=`
\`\`\`
    Variable declaration
    |---Identifier (a)
    |---Assignment expression
        |---Numerical literal(2)
\`\`\`
`,bi=`
\`\`\`
    var num = 2;
    // JS looks at this as two steps below
    var num;
    num = 2;
\`\`\`
`,mi=`
\`\`\`
    function test() {
        var a = 10;

        function test2() {
            var a = 20; // Shadows outer scope
            console.log(a);
        }

        test2();
    }
\`\`\`
`,xi=`
\`\`\`
    function foo(num) {
        var num2 = num;
        return num + num2;
    }

    var ans = foo(2);
\`\`\`
`,ki=`
\`\`\`

    var num3 = 5;
    function outer(num) {
        var num2 = num + 4;

        function inner() {
            console.log(num, num2, num3);
        }

        inner();
    }
    
    outer(2);
\`\`\`
`,wi="\n```\n    a = 2;\n    var a;\n    console.log(a); // Prints 2 \n```\n";function _i(g){let t,i,n,e,a;return{c(){t=on("svg"),i=on("circle"),n=on("circle"),e=on("circle"),a=on("circle"),this.h()},l(o){t=ln(o,"svg",{height:!0,width:!0});var p=$(t);i=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),$(i).forEach(y),n=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),$(n).forEach(y),e=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),$(e).forEach(y),a=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),$(a).forEach(y),p.forEach(y),this.h()},h(){l(i,"cx","100"),l(i,"cy","100"),l(i,"r","80"),l(i,"stroke","#475c6c"),l(i,"stroke-width","2"),l(i,"fill","none"),l(n,"cx","100"),l(n,"cy","100"),l(n,"r","60"),l(n,"stroke","#8a8583"),l(n,"stroke-width","2"),l(n,"fill","none"),l(e,"cx","100"),l(e,"cy","100"),l(e,"r","40"),l(e,"stroke","#eed7a1"),l(e,"stroke-width","2"),l(e,"fill","none"),l(a,"cx","100"),l(a,"cy","100"),l(a,"r","20"),l(a,"stroke","#cd8b62"),l(a,"stroke-width","2"),l(a,"fill","none"),l(t,"height","200"),l(t,"width","200")},m(o,p){Xt(o,t,p),s(t,i),s(t,n),s(t,e),s(t,a)},p:Ut,i:Ut,o:Ut,d(o){o&&y(t)}}}class yi extends Kt{constructor(t){super(),Yt(this,t,null,_i,Gt,{})}}function Ti(g){let t,i,n,e,a,o="Scopes and Hoisting",p,d,k=`This book is awesome! I wish I had read it sooner. Most programming languages that I have
			used, I never spent the time to fully understand the depths of it. With YDKJS, I aim to break
			that trend and truly understand how JavaScript works!<br/><br/>`,v,b,w=`The second part of this book covers some very interesting topics which mainly revolve around\r
			scopes, hoisting and closure. Since this is going to be a longer article in comparison, I will\r
			move closure to a separate article.`,D,L,J="Scope and Compiler theory",F,V,de=`Scope refers to a well defined set of rules that allow us to store variables in some location
			and access them from that location. In order to understand how this works we need to
			understand some basic <b>Compiler theory</b>`,ge,E,se=`JavaScript is considered to be an interpreted language but that would be wrong. It undergoes
			compilation just mere mircoseconds before execution. Understanding those performance
			improvements that make it compile so quickly was a little beyond the topics in this book but,
			I definitely would like to revisit and understand those improvements (An article for the
			future). Getting back to compilation. Any compiled language undergoes three main steps during
			its compilation process.
			<ol class="blog-list-elements"><li>Tokenizing/Lexing</li> <li>Parsing</li> <li>Code generation</li></ol>`,De,H,ve=`<b>Tokenizing</b> involves taking a string of characters and breaking down it into meaningful chunks
			called tokens. Lexing is synonmous to Tokenization with a difference of stateful parsing. If the
			tokenization involves some kind of state based approach then it would be called Lexing.`,Q,P,ae,X=C(gi)+"",Le,ee,oe=`The above example when tokenized might get broken down into <code>var</code>, <code>a</code>,
			<code>=</code>, <code>3</code>, <code>;</code>`,te,he,Ee=`<b>Parsing</b> uses the array of tokens and creates a nested tree, which is called an Abstract
			syntax tree. For the above example <code>var num = 3;</code> it might create a tree structure that
			could look like this.`,A,le,Ie,B=C(vi)+"",_e,ue,M=`Finally the last step, <b>Code generation</b> - It takes the Abstract syntax tree and creates executable
			code.`,ne,be,ze=`There is much more to the compilation process that I need to learn. Truly understanding a\r
			language requires some serious work! One step at a time! We'll get there!`,q,ie,Ze="More on scope",W,N,Ae=`There are three important members involved in understanding scope
			<ol class="blog-list-elements"><li>Engine</li> <li>Compiler</li> <li>Scope</li></ol>
			Engine runs from start to finish. From variable declaration to program execution. Compiler handles
			the dirty work. Parsing code and code generation. Sope holds a lookup list for all the declrations
			(variables, functions etc..)`,O,z,S,me,Pe="var num = 2;",G,re,Be,ce=C(bi)+"",xe,I,Re=`Looking at the example above, the compiler declares a variable at this step if it has not been
			declared yet. Compiler queries the scope and asks if the variable <code>num</code> was declared,
			if it was then it moves on and does not declare a variable but if there isn&#39;t a variable declared
			then it declares one. This part is pretty interesting in JavaScript, it allows us to declare the
			same variable multiple times. In a nested scope this would be termed shadowing, where it overwrites
			the value declared in the outerscope. The example below explains shadowing.`,ye,Te,Ue,Rt=C(mi)+"",Ge,Ce,Ft=`Going back to the two parts involved in variable declaration and assignment, there&#39;s an
			interesting lookup concept that JavaScript performs. The easier version is - When a variable
			appears on the left side of an assignment the compiler does a <b>LHS</b> lookup and when it&#39;s on
			the right side of the assignment it does a RHS lookup. A LHS lookup looks for the variable container
			itself but the RHS lookup is merely getting the value of the variable. LHS lookups can be a bit
			tricky. As always, examples help!`,ht,ke,_t,jt=C(xi)+"",He,Fe,qt=`Let&#39;s break it down.
			<div class="blog-paragraph"><b>List of LHS lookups</b> <ul><li>ans =</li> <li>num = (this is interesting, it&#39;s the pararmeter passed to the function)</li> <li>num2 =</li></ul> <b>List of RHS lookups</b> <ul><li>foo</li> <li>= num</li> <li>num +</li> <li>+ num2</li></ul></div>
			Discussing lookups further, it gets even more interesting when nested scopes are involved. When
			searching for a variable, JavaScript considers all scopes. It starts with the inner most and keeps
			looking for variable<b>containers / values</b> in all the scopes that the current scope is enclosed
			in. This is where it chooses between a LHS and RHS lookup.`,je,pe,Ot="That was just the first Chapter from the book. Phew!",ut,fe,yt="Lexical scope",Vt,$e,at=`JavaScript uses the lexical scope and so do most programming languages. Scope as defined\r
			earlier is a means of finding a declared identifier and Lexing examines a string of characters\r
			and gives it semantic meaning. So lexical scope is the scope defined during the time of\r
			lexing.`,Tt,Se,Ye=`In order to understand the idea of lexical scope it's important to understand how a lookup\r
			works in JavaScript. Like always, let's start with an example.`,Ct,Ve,Ne,ot=C(ki)+"",Xe,qe,pt=`In the example above we have three different scopes
			<ol><li>Global scope where outer function is declared</li> <li>Scope of the outer function</li> <li>Scope of the inner function</li></ol>
			It&#39;s ideal to look at this from inside out. When the
			<code>console.log(num, num2)</code>
			executes the engine goes looking for the two identifiers. It searches for <code>num</code>
			first in the scope of function <code>inner</code> and cannot find it, the next available scope
			is the scope of the function <code>outer</code> and there it finds the variable
			<code>num</code>. It does a similar lookup for the variable <code>num2</code> and finds it in
			the scope of outer. But the variable <code>num3</code> it finds in the global scope, the same scope
			where the outer function is called. The way I look at scope look ups is the way concentric circles
			are drawn, they have neat boundaries and they do not intersect.`,lt,Oe,ft,we,Je=`Understanding of scope directly relates to understanding
			<b>The Principle of least privilege</b> - Expose only what is minimally necessary, and hide everything
			else. These concentric division allow us to enclose variables and functions within scopes and not
			expose it in a global context. What does that accomplish? It avoids collisions! Makes sure that
			two identifiers intended for different usecases do not stomp on each other.`,j,Z,et="<b>SCOPE -&gt; PRINCIPLE OF LEAST PRIVILEGE -&gt; COLLISION AVOIDANCE</b>",Mt,Me,rt="Hoisting",Qe,ct,gt=`Hoisting in JavaScript refers to the process of moving the function and variables to the the\r
			top of the code from where they were declared. This is one of the crucial parts of JavaScript,\r
			I mean for developers. Not understanding hoisting can lead to writing code that's hard to\r
			decipher.`,Ke,Et,Jt,Pt=C(wi)+"",Bt,zt,tn=`In the above example even though we would expect it to print undefined, it prints 2. Why? If
			we go back to the definition above, the <code>var a;</code> gets hoisted and placed on the
			top. So the first statement that executes is the declaration of that variable, by the time it
			gets to <code>a = 2;</code> the variable exists, so it assigns the value to 2 that container. Another
			important thing to note here it that between a variable and a function, functions get hoisted first!`,vt,It,nn=`This chapter has been really interesting so far. There's one last topic left to discuss and I\r
			will be doing that in the next article.`,bt;return i=new dn({}),Oe=new yi({}),{c(){t=r("div"),mt(i.$$.fragment),n=h(),e=r("div"),a=r("h1"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.textContent=w,D=h(),L=r("div"),L.textContent=J,F=h(),V=r("div"),V.innerHTML=de,ge=h(),E=r("div"),E.innerHTML=se,De=h(),H=r("div"),H.innerHTML=ve,Q=h(),P=r("div"),ae=new K(!1),Le=h(),ee=r("div"),ee.innerHTML=oe,te=h(),he=r("div"),he.innerHTML=Ee,A=h(),le=r("div"),Ie=new K(!1),_e=h(),ue=r("div"),ue.innerHTML=M,ne=h(),be=r("div"),be.textContent=ze,q=h(),ie=r("div"),ie.textContent=Ze,W=h(),N=r("div"),N.innerHTML=Ae,O=h(),z=r("div"),S=Wt("If we were to go back to the example of a simple variable declaration "),me=r("code"),me.textContent=Pe,G=Wt(`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),re=r("div"),Be=new K(!1),xe=h(),I=r("div"),I.innerHTML=Re,ye=h(),Te=r("div"),Ue=new K(!1),Ge=h(),Ce=r("div"),Ce.innerHTML=Ft,ht=h(),ke=r("div"),_t=new K(!1),He=h(),Fe=r("div"),Fe.innerHTML=qt,je=h(),pe=r("div"),pe.textContent=Ot,ut=h(),fe=r("div"),fe.textContent=yt,Vt=h(),$e=r("div"),$e.textContent=at,Tt=h(),Se=r("div"),Se.textContent=Ye,Ct=h(),Ve=r("div"),Ne=new K(!1),Xe=h(),qe=r("div"),qe.innerHTML=pt,lt=h(),mt(Oe.$$.fragment),ft=h(),we=r("div"),we.innerHTML=Je,j=h(),Z=r("div"),Z.innerHTML=et,Mt=h(),Me=r("div"),Me.textContent=rt,Qe=h(),ct=r("div"),ct.textContent=gt,Ke=h(),Et=r("div"),Jt=new K(!1),Bt=h(),zt=r("div"),zt.innerHTML=tn,vt=h(),It=r("div"),It.textContent=nn,this.h()},l(We){t=c(We,"DIV",{class:!0});var Nt=$(t);xt(i.$$.fragment,Nt),n=u(Nt),e=c(Nt,"DIV",{class:!0});var m=$(e);a=c(m,"H1",{"data-svelte-h":!0}),f(a)!=="svelte-3i70d5"&&(a.textContent=o),p=u(m),d=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-1c4zecq"&&(d.innerHTML=k),v=u(m),b=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-18czcds"&&(b.textContent=w),D=u(m),L=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(L)!=="svelte-2up3yp"&&(L.textContent=J),F=u(m),V=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(V)!=="svelte-5zllcz"&&(V.innerHTML=de),ge=u(m),E=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(E)!=="svelte-13nancv"&&(E.innerHTML=se),De=u(m),H=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-1mzbrig"&&(H.innerHTML=ve),Q=u(m),P=c(m,"DIV",{class:!0});var $t=$(P);ae=Y($t,!1),$t.forEach(y),Le=u(m),ee=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ee)!=="svelte-1we0e0z"&&(ee.innerHTML=oe),te=u(m),he=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(he)!=="svelte-1lvnh79"&&(he.innerHTML=Ee),A=u(m),le=c(m,"DIV",{class:!0});var sn=$(le);Ie=Y(sn,!1),sn.forEach(y),_e=u(m),ue=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ue)!=="svelte-19lyqfn"&&(ue.innerHTML=M),ne=u(m),be=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(be)!=="svelte-1ag31e0"&&(be.textContent=ze),q=u(m),ie=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ie)!=="svelte-1ysabik"&&(ie.textContent=Ze),W=u(m),N=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(N)!=="svelte-mxfe5q"&&(N.innerHTML=Ae),O=u(m),z=c(m,"DIV",{class:!0});var St=$(z);S=Zt(St,"If we were to go back to the example of a simple variable declaration "),me=c(St,"CODE",{"data-svelte-h":!0}),f(me)!=="svelte-xlrv0q"&&(me.textContent=Pe),G=Zt(St,`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),re=c(St,"DIV",{class:!0});var dt=$(re);Be=Y(dt,!1),dt.forEach(y),St.forEach(y),xe=u(m),I=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(I)!=="svelte-1efdofv"&&(I.innerHTML=Re),ye=u(m),Te=c(m,"DIV",{class:!0});var At=$(Te);Ue=Y(At,!1),At.forEach(y),Ge=u(m),Ce=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Ce)!=="svelte-17vyc53"&&(Ce.innerHTML=Ft),ht=u(m),ke=c(m,"DIV",{class:!0});var _=$(ke);_t=Y(_,!1),_.forEach(y),He=u(m),Fe=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Fe)!=="svelte-1hhuaj3"&&(Fe.innerHTML=qt),je=u(m),pe=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(pe)!=="svelte-nv7ukz"&&(pe.textContent=Ot),ut=u(m),fe=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(fe)!=="svelte-1cuqjru"&&(fe.textContent=yt),Vt=u(m),$e=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f($e)!=="svelte-bpjzwy"&&($e.textContent=at),Tt=u(m),Se=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Se)!=="svelte-25yo3g"&&(Se.textContent=Ye),Ct=u(m),Ve=c(m,"DIV",{class:!0});var Dt=$(Ve);Ne=Y(Dt,!1),Dt.forEach(y),Xe=u(m),qe=c(m,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),f(qe)!=="svelte-6j4ehz"&&(qe.innerHTML=pt),lt=u(m),xt(Oe.$$.fragment,m),ft=u(m),we=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(we)!=="svelte-s454o8"&&(we.innerHTML=Je),j=u(m),Z=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Z)!=="svelte-yoft6x"&&(Z.innerHTML=et),Mt=u(m),Me=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Me)!=="svelte-1m8q6hv"&&(Me.textContent=rt),Qe=u(m),ct=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ct)!=="svelte-7yzfiu"&&(ct.textContent=gt),Ke=u(m),Et=c(m,"DIV",{class:!0});var an=$(Et);Jt=Y(an,!1),an.forEach(y),Bt=u(m),zt=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(zt)!=="svelte-1y0jscx"&&(zt.innerHTML=tn),vt=u(m),It=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(It)!=="svelte-1hwghwk"&&(It.textContent=nn),m.forEach(y),Nt.forEach(y),this.h()},h(){l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(L,"class","blog-sub-header"),l(V,"class","blog-paragraph"),l(E,"class","blog-paragraph"),l(H,"class","blog-paragraph"),ae.a=null,l(P,"class","blog-code-block"),l(ee,"class","blog-paragraph"),l(he,"class","blog-paragraph"),Ie.a=null,l(le,"class","blog-code-block"),l(ue,"class","blog-paragraph"),l(be,"class","blog-paragraph"),l(ie,"class","blog-sub-header"),l(N,"class","blog-paragraph"),Be.a=null,l(re,"class","blog-code-block"),l(z,"class","blog-paragraph"),l(I,"class","blog-paragraph"),Ue.a=null,l(Te,"class","blog-code-block"),l(Ce,"class","blog-paragraph"),_t.a=null,l(ke,"class","blog-code-block"),l(Fe,"class","blog-paragraph"),l(pe,"class","blog-paragraph"),l(fe,"class","blog-sub-header"),l($e,"class","blog-paragraph"),l(Se,"class","blog-paragraph"),Ne.a=null,l(Ve,"class","blog-code-block"),l(qe,"class","blog-paragraph"),l(qe,"id","concentric-circle"),l(we,"class","blog-paragraph"),l(Z,"class","blog-paragraph"),l(Me,"class","blog-sub-header"),l(ct,"class","blog-paragraph"),Jt.a=null,l(Et,"class","blog-code-block"),l(zt,"class","blog-paragraph"),l(It,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","scopes-and-closure-container svelte-1v5cf8r")},m(We,Nt){Xt(We,t,Nt),kt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,D),s(e,L),s(e,F),s(e,V),s(e,ge),s(e,E),s(e,De),s(e,H),s(e,Q),s(e,P),ae.m(X,P),s(e,Le),s(e,ee),s(e,te),s(e,he),s(e,A),s(e,le),Ie.m(B,le),s(e,_e),s(e,ue),s(e,ne),s(e,be),s(e,q),s(e,ie),s(e,W),s(e,N),s(e,O),s(e,z),s(z,S),s(z,me),s(z,G),s(z,re),Be.m(ce,re),s(e,xe),s(e,I),s(e,ye),s(e,Te),Ue.m(Rt,Te),s(e,Ge),s(e,Ce),s(e,ht),s(e,ke),_t.m(jt,ke),s(e,He),s(e,Fe),s(e,je),s(e,pe),s(e,ut),s(e,fe),s(e,Vt),s(e,$e),s(e,Tt),s(e,Se),s(e,Ct),s(e,Ve),Ne.m(ot,Ve),s(e,Xe),s(e,qe),s(e,lt),kt(Oe,e,null),s(e,ft),s(e,we),s(e,j),s(e,Z),s(e,Mt),s(e,Me),s(e,Qe),s(e,ct),s(e,Ke),s(e,Et),Jt.m(Pt,Et),s(e,Bt),s(e,zt),s(e,vt),s(e,It),bt=!0},p:Ut,i(We){bt||(it(i.$$.fragment,We),it(Oe.$$.fragment,We),bt=!0)},o(We){st(i.$$.fragment,We),st(Oe.$$.fragment,We),bt=!1},d(We){We&&y(t),wt(i),wt(Oe)}}}class Ci extends Kt{constructor(t){super(),Yt(this,t,null,Ti,Gt,{})}}const Ii=`
\`\`\`
    var strPrimitive = "I am a string";
    typeof strPrimitive;							// "string"
    strPrimitive instanceof String;					// false

    var strObject = new String( "I am a string" );
    typeof strObject; 								// "object"
    strObject instanceof String;					// true

    // inspect the object sub-type
    Object.prototype.toString.call( strObject );
\`\`\`
`,$i=`
\`\`\`
    function anotherFunction() { /*..*/ }

    var anotherObject = {
        c: true
    };

    var anotherArray = [];

    var myObject = {
        a: 2,
        b: anotherObject,	// reference, not a copy!
        c: anotherArray,	// another reference!
        d: anotherFunction
    };

    anotherArray.push( anotherObject, myObject );
\`\`\`
`,Si="\n```\n    var newObj = JSON.parse( JSON.stringify( someObj ) );\n```\n";function Di(g){let t,i,n,e,a,o="Objects",p,d,k=`Everything in JavaScript is an <code>object</code> - A misconception I have been living with.
			<code>objects</code> are the building blocks in JavaScript but they are one of the 6 primary
			types.
			<div><code>string</code>, <code>number</code>, <code>boolean</code>,
				<code>null</code>,
				<code>undefined</code>, <code>object</code></div>`,v,b,w=`Everything in JavaScript is not an <code>object</code> but there are some some object
			sub-types, which are also referred to as complex primitives. <code>function</code> for example
			is a callable object, and they are referred to as the &quot;first class&quot;. <code>Arrays</code> are
			also <code>objects</code> with extra behavior and data is organization is more structured. So,
			what is the difference between a primitive <code>string</code> and an <code>object</code> <code>String</code>`,D,L,J="Built-in objects",F,V,de=`There are multiple <code>object</code> sub-types which are referred to as built-in objects.
			<div><code>String</code>, <code>Number</code>, <code>Boolean</code>,
				<code>Object</code>, <code>Function</code>, <code>Array</code>,
				<code>Date</code>, <code>RegExp</code>, <code>Error</code></div>
			Each of these
			<code>objects</code> can be used as a contructor. Upon invocation it creates a new
			<code>object</code> of the specified type.`,ge,E,se,De=C(Ii)+"",H,ve,Q=`The example above clearly demarcates the difference between a primitive and an
			<code>object</code> type. The primitive variable is not an instance of the <code>String</code> <code>object</code> type but is just a primitive literal. But, in order to perform any
			operations on the the primitive variable it needs to be wrapped in the <code>object</code> type.
			JavaScript handles coercing the value and we do not have to handle that manually.`,P,ae,X="Contents of an object",Le,ee,oe=`The contents of an <code>object</code> consist of values (which can be any type) stored at
			specific named locations which are called properties. When we declare an <code>object</code> the
			properties are not literally stored in the container. The property names are stored in the container
			and those act as references to the where the value is stored.`,te,he,Ee=`There are two ways in which one can access <code>object</code> properties.
			<ol class="blog-list-elements"><li><code>.</code> operator</li> <li><code>[ ]</code> operator</li></ol>
			The
			<code>.</code> operator requires the properties to meet the <code>identifier</code> naming
			standards, whereas the <code>[ ]</code> operator can take any <b>UTF-8/unicode</b> compatible string.`,A,le,Ie="Duplicating objects",B,_e,ue=`Duplicating <code>objects</code> in JavaScript can be tricky. In general there are two modes
			of copying <code>objects</code> <ol class="blog-list-elements"><li>Shallow copy</li> <li>Deep copy</li></ol>
			Shallow copy creates a new<code>object</code> with the same references and values that the
			original <code>object</code> had. Deep copy on the other hand create new references where
			modifying the newly created <code>object</code> does not modify the original
			<code>object</code>.`,M,ne,be="Not everything can be deep copied in JavaScript. Let's look at an example.",ze,q,ie,Ze=C($i)+"",W,N,Ae=`The above example creates a circular dependency. <code>myObject</code> has a reference of
			<code>anotherArray</code> and <code>anotherArray</code> has a reference of
			<code>myObject</code>. When trying to make a deep copy of <code>myObj</code> there are some
			considerations. Do we stop as soon as we find the cylical dependency? How do we deep copy a
			function ? These issues make deep copying difficult and for certain <code>objects</code> deep
			copying does not exist. But, there are certain <code>objects</code> that can be deep copied
			and to know which <code>object</code> , we could do something like this.`,O,z,S,me=C(Si)+"",Pe,G,re=`When an<code>object</code> is JSON-safe(can be serialized to a JSON string and then re-parsed
			to an <code>object</code> with same structure) it can be deep copied.`,Be;return i=new dn({}),{c(){t=r("div"),mt(i.$$.fragment),n=h(),e=r("div"),a=r("h1"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.innerHTML=w,D=h(),L=r("div"),L.textContent=J,F=h(),V=r("div"),V.innerHTML=de,ge=h(),E=r("div"),se=new K(!1),H=h(),ve=r("div"),ve.innerHTML=Q,P=h(),ae=r("div"),ae.textContent=X,Le=h(),ee=r("div"),ee.innerHTML=oe,te=h(),he=r("div"),he.innerHTML=Ee,A=h(),le=r("div"),le.textContent=Ie,B=h(),_e=r("div"),_e.innerHTML=ue,M=h(),ne=r("div"),ne.textContent=be,ze=h(),q=r("div"),ie=new K(!1),W=h(),N=r("div"),N.innerHTML=Ae,O=h(),z=r("div"),S=new K(!1),Pe=h(),G=r("div"),G.innerHTML=re,this.h()},l(ce){t=c(ce,"DIV",{class:!0});var xe=$(t);xt(i.$$.fragment,xe),n=u(xe),e=c(xe,"DIV",{class:!0});var I=$(e);a=c(I,"H1",{"data-svelte-h":!0}),f(a)!=="svelte-1os1ssi"&&(a.textContent=o),p=u(I),d=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-6f8u7p"&&(d.innerHTML=k),v=u(I),b=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-kfolhs"&&(b.innerHTML=w),D=u(I),L=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(L)!=="svelte-1ne7xc4"&&(L.textContent=J),F=u(I),V=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(V)!=="svelte-1kd7iyb"&&(V.innerHTML=de),ge=u(I),E=c(I,"DIV",{class:!0});var Re=$(E);se=Y(Re,!1),Re.forEach(y),H=u(I),ve=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ve)!=="svelte-16nuv56"&&(ve.innerHTML=Q),P=u(I),ae=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ae)!=="svelte-16wez9v"&&(ae.textContent=X),Le=u(I),ee=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ee)!=="svelte-y4relm"&&(ee.innerHTML=oe),te=u(I),he=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(he)!=="svelte-1ic1k41"&&(he.innerHTML=Ee),A=u(I),le=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(le)!=="svelte-uy212c"&&(le.textContent=Ie),B=u(I),_e=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(_e)!=="svelte-5fived"&&(_e.innerHTML=ue),M=u(I),ne=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ne)!=="svelte-8wh7q"&&(ne.textContent=be),ze=u(I),q=c(I,"DIV",{class:!0});var ye=$(q);ie=Y(ye,!1),ye.forEach(y),W=u(I),N=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(N)!=="svelte-5gt4vt"&&(N.innerHTML=Ae),O=u(I),z=c(I,"DIV",{class:!0});var Te=$(z);S=Y(Te,!1),Te.forEach(y),Pe=u(I),G=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(G)!=="svelte-1lkjbvc"&&(G.innerHTML=re),I.forEach(y),xe.forEach(y),this.h()},h(){l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(L,"class","blog-sub-header"),l(V,"class","blog-paragraph"),se.a=null,l(E,"class","blog-code-block"),l(ve,"class","blog-paragraph"),l(ae,"class","blog-sub-header"),l(ee,"class","blog-paragraph"),l(he,"class","blog-paragraph"),l(le,"class","blog-sub-header"),l(_e,"class","blog-paragraph"),l(ne,"class","blog-paragraph"),ie.a=null,l(q,"class","blog-code-block"),l(N,"class","blog-paragraph"),S.a=null,l(z,"class","blog-code-block"),l(G,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","objects_container svelte-17riu38")},m(ce,xe){Xt(ce,t,xe),kt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,D),s(e,L),s(e,F),s(e,V),s(e,ge),s(e,E),se.m(De,E),s(e,H),s(e,ve),s(e,P),s(e,ae),s(e,Le),s(e,ee),s(e,te),s(e,he),s(e,A),s(e,le),s(e,B),s(e,_e),s(e,M),s(e,ne),s(e,ze),s(e,q),ie.m(Ze,q),s(e,W),s(e,N),s(e,O),s(e,z),S.m(me,z),s(e,Pe),s(e,G),Be=!0},p:Ut,i(ce){Be||(it(i.$$.fragment,ce),Be=!0)},o(ce){st(i.$$.fragment,ce),Be=!1},d(ce){ce&&y(t),wt(i)}}}class Li extends Kt{constructor(t){super(),Yt(this,t,null,Di,Gt,{})}}const Hi=`
\`\`\`
    function foo() {
        console.log( this.a );
    }

    var a = 2;

    foo(); // 2
\`\`\`
`,ji=`
 \`\`\`
    function foo() {
        console.log(a);
    }

    var obj = {
        a: 2,
        foo: foo
    };

    obj.foo();
 \`\`\`
 `,Vi=`
  \`\`\`
    function foo(a) {
        this.a = a
    }

    var bar = new foo(10);
    console.log(bar.a); // 10
  \`\`\`
  `,Mi=`
\`\`\`
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2,
        foo: foo
    };

    var bar = obj.foo;
    var a = "Global scope";

    bar(); // call-site without decoration
\`\`\`
`,Ei=`
\`\`\`{
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2
    };

    var bar = function() {
        foo.call(obj);
    };

    bar();// 2
    bar.call(window); // 2

\`\`\`
`,zi=`
\`\`\`
    function foo(something) {
        console.log(this.a, something);
        return this.a + something;
    }

    function bind(fn, obj) {
        return function() {
            return fn.apply(obj, arguments);
        };
    }

    var obj = {
        a: 2
    };

    var bar = bind(foo, obj);

    var b = bar(3); // 2 3
    console.log(b); // 5
\`\`\`
`,Ai=`
\`\`\`
    function foo(something) {
        console.log(this.a, something);
        return this.a + something;
    }

    var obj = {
        a: 2
    };

    var bar = foo.bind(obj);

    var b = bar(3);
    console.log(b);
\`\`\`
`;function Ri(g){let t,i,n,e,a,o="Understanding This",p,d,k=`The first time I was introduced to the keyword <code>this</code>, there was only confusion. My
			confusion stemmed from the question, what really is <code>this</code>? We were learning the
			programming language<b>C#</b> and <code>this</code> referred to the class reference. Even
			though it&#39;s easier to grasp the concept in the context of a language like <b>C#</b>, I still
			found it a bit confusing. Now, years later reading about the <code>this</code> keyword in JavaScript
			brought back those memories.`,v,b,w=`The <code>this</code> keyword in JavaScript has a very different usecase. Carrying the idea of
			the class reference in <b>C#</b> to functions in JavaScript created a misconception for me
			personally and it is quite common among developers too. I assumed the <code>this</code> reference
			in a function referred to the function itself.`,D,L,J=`<code>this</code> is not an author time binding, but a runtime binding. The binding has
			nothing to do with where the function is declared, but everything to do with where and how the
			function is called. When a function gets invoked in JavaScript, it creates an activation
			record, which is also known as an execution context. This record contains information about
			<ul class="blog-list-elements"><li>Where the function was called from</li> <li>How the function was invoked</li> <li>What parameters were passed, etc.</li></ul>
			Amongst that list of properties in the execution context there is another one, which is the
			<code>this</code> reference and that&#39;s used for the duration of the function execution. To
			understand how <code>this</code> gets bound, we need to understand the rules that govern the behavior.`,F,V,de="Rules for <code>this</code> binding",ge,E,se=`There are four rules that explain how the <code>this</code> binding works.
			<ol class="blog-list-elements"><li>Default binding</li> <li>Implicit binding</li> <li>Explicit binding</li> <li>New binding</li></ol>`,De,H,ve="Default binding",Q,P,ae,X,Le="Default binding",ee,oe,te,he=C(Hi)+"",Ee,A,le=`The call-site in the above example is in the global context and this resolves to the global\r
				context.`,Ie,B,_e="Implicit binding",ue,M,ne,be,ze="object",q,ie,Ze="object",W,N,Ae="obj",O,z,S,me=C(ji)+"",Pe,G,re=`The way<code>foo</code> gets referenced in the<code>obj</code> does not imply that it is
				owned by the said <code>object</code>. Since, there exists a context <code>object</code>
				that references the function at the call-site, the implicit binding rules state that the
				<code>function</code> is owned by the context <code>object</code>.`,Be,ce,xe=`When <code>this</code> gets implicity bound the context becomes synonmous with the owning
				<code>object</code>. In the above case <code>this.a</code> is synonmous with
				<code>obj.a</code>`,I,Re,ye="Explicit binding",Te,Ue,Rt=`Explicit binding allows us to explicitly state the <code>object</code> that would act as the
			context <code>object</code> for the function that&#39;s invoked. In order to achieve this, every
			function in JavaScript is provided with utilities and two of them are.
			<ol class="blog-list-elements"><li><code>call</code></li> <li><code>apply</code></li></ol>
			The first parameter of the above utilities is an<code>object</code> which is implied that it
			is used for the <code>this</code> binding. When a simple primitive (<code>string</code>,
			<code>number</code> ..) gets passed it is wrapped in it&#39;s <code>object</code> form and this is
			referred to as <b>Boxing</b>.`,Ge,Ce,Ft="<code>new</code> binding",ht,ke,_t=`JavaScript <code>new</code> operator unlike the <code>new</code> operator found in object
			oriented programming languages does not call a <code>function</code> that has a constructor
			but instead makes a contructor call that returns a new <code>object</code>. What&#39;s important
			to us here is the idea of <code>this</code> binding through the usage of the <code>new</code>
			operator.`,jt,He,Fe,qt=C(Vi)+"",je,pe,Ot=`The example above contructs a new <code>object</code> and binds that new <code>object</code>
			to the call of <code>foo</code>. This sums up all the rules for binding <code>this</code> but,
			there is an order of precedence.`,ut,fe,yt="Order of precedence",Vt,$e,at=`The order of precedence is somewhat like this
			<ol class="blog-list-elements"><li>If the <code>new</code> operator is used, use the newly created <code>object</code></li> <li>If the call-site uses <code>call</code> or <code>apply</code> use the specified
					<code>object</code></li> <li>If called with a context <code>object</code> then use that <code>object</code></li> <li>Finally, the default binding</li></ol>`,Tt,Se,Ye="Lost bindings - Hard binding",Ct,Ve,Ne=`Bindings sometime can get lost, which usually implies that it's fallen back to the default\r
			binding.`,ot,Xe,qe,pt=C(Mi)+"",lt,Oe,ft=`In the above example the function <code>foo()</code> is implicity bound to the
			<code>object obj</code> which in turn is assigned to the variable <code>bar</code>. When
			<code>bar</code> is invoked, it&#39;s invoked without any decoration and it&#39;s just another
			reference to <code>foo</code>. There is a fix for such a scenario and we call it Hard binding`,we,Je,j="Hard binding",Z,et,Mt="Hard binding is a variation around the explicit binding which seals the binding.",Me,rt,Qe,ct=C(Ei)+"",gt,Ke,Et=`The function <code>bar()</code> calls foo with an explicit bind intention and sets
			<code>obj</code> to be the <code>this</code> context. No matter how we invoke <code>bar</code>
			after this, it always binds <code>obj</code> to the function <code>foo</code>&#39;s
			<code>this</code> context. This type of binding is explicit and strong and that&#39;s why it&#39;s
			referred to as <b>Hard binding</b>. Another way to express this pattern is to create a
			reusable helper method.`,Jt,Pt,Bt,zt=C(zi)+"",tn,vt,It="Since hard binding is such a common pattern, it's provided as a built-in utility as of ES5.",nn,bt,We,Nt=C(Ai)+"",m,$t,sn="That&#39;s a general idea of the <code>this</code> keyword, phew!",St;return i=new dn({}),{c(){t=r("div"),mt(i.$$.fragment),n=h(),e=r("div"),a=r("h1"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.innerHTML=w,D=h(),L=r("div"),L.innerHTML=J,F=h(),V=r("div"),V.innerHTML=de,ge=h(),E=r("div"),E.innerHTML=se,De=h(),H=r("div"),H.textContent=ve,Q=h(),P=r("div"),ae=Wt(`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),X=r("b"),X.textContent=Le,ee=Wt(`. An example!\r
			`),oe=r("div"),te=new K(!1),Ee=h(),A=r("div"),A.textContent=le,Ie=h(),B=r("div"),B.textContent=_e,ue=h(),M=r("div"),ne=Wt("This rule determines if the call-site has a context "),be=r("code"),be.textContent=ze,q=Wt(` which can also be\r
			referred to as the owning object. In the example below that context `),ie=r("code"),ie.textContent=Ze,W=Wt(` is\r
			`),N=r("code"),N.textContent=Ae,O=h(),z=r("div"),S=new K(!1),Pe=h(),G=r("div"),G.innerHTML=re,Be=h(),ce=r("div"),ce.innerHTML=xe,I=h(),Re=r("div"),Re.textContent=ye,Te=h(),Ue=r("div"),Ue.innerHTML=Rt,Ge=h(),Ce=r("div"),Ce.innerHTML=Ft,ht=h(),ke=r("div"),ke.innerHTML=_t,jt=h(),He=r("div"),Fe=new K(!1),je=h(),pe=r("div"),pe.innerHTML=Ot,ut=h(),fe=r("div"),fe.textContent=yt,Vt=h(),$e=r("div"),$e.innerHTML=at,Tt=h(),Se=r("div"),Se.textContent=Ye,Ct=h(),Ve=r("div"),Ve.textContent=Ne,ot=h(),Xe=r("div"),qe=new K(!1),lt=h(),Oe=r("div"),Oe.innerHTML=ft,we=h(),Je=r("div"),Je.textContent=j,Z=h(),et=r("div"),et.textContent=Mt,Me=h(),rt=r("div"),Qe=new K(!1),gt=h(),Ke=r("div"),Ke.innerHTML=Et,Jt=h(),Pt=r("div"),Bt=new K(!1),tn=h(),vt=r("div"),vt.textContent=It,nn=h(),bt=r("div"),We=new K(!1),m=h(),$t=r("div"),$t.innerHTML=sn,this.h()},l(dt){t=c(dt,"DIV",{class:!0});var At=$(t);xt(i.$$.fragment,At),n=u(At),e=c(At,"DIV",{class:!0});var _=$(e);a=c(_,"H1",{"data-svelte-h":!0}),f(a)!=="svelte-14q1hfy"&&(a.textContent=o),p=u(_),d=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-kz4lmi"&&(d.innerHTML=k),v=u(_),b=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-1hs8980"&&(b.innerHTML=w),D=u(_),L=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(L)!=="svelte-19qb0p4"&&(L.innerHTML=J),F=u(_),V=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(V)!=="svelte-bbtnld"&&(V.innerHTML=de),ge=u(_),E=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(E)!=="svelte-1231oos"&&(E.innerHTML=se),De=u(_),H=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-g9a91e"&&(H.textContent=ve),Q=u(_),P=c(_,"DIV",{class:!0});var Dt=$(P);ae=Zt(Dt,`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),X=c(Dt,"B",{"data-svelte-h":!0}),f(X)!=="svelte-1y3shn8"&&(X.textContent=Le),ee=Zt(Dt,`. An example!\r
			`),oe=c(Dt,"DIV",{class:!0});var an=$(oe);te=Y(an,!1),an.forEach(y),Ee=u(Dt),A=c(Dt,"DIV",{class:!0,"data-svelte-h":!0}),f(A)!=="svelte-8avcu5"&&(A.textContent=le),Dt.forEach(y),Ie=u(_),B=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-mu8xb6"&&(B.textContent=_e),ue=u(_),M=c(_,"DIV",{class:!0});var tt=$(M);ne=Zt(tt,"This rule determines if the call-site has a context "),be=c(tt,"CODE",{"data-svelte-h":!0}),f(be)!=="svelte-s6nf5f"&&(be.textContent=ze),q=Zt(tt,` which can also be\r
			referred to as the owning object. In the example below that context `),ie=c(tt,"CODE",{"data-svelte-h":!0}),f(ie)!=="svelte-s6nf5f"&&(ie.textContent=Ze),W=Zt(tt,` is\r
			`),N=c(tt,"CODE",{"data-svelte-h":!0}),f(N)!=="svelte-vvasqx"&&(N.textContent=Ae),O=u(tt),z=c(tt,"DIV",{class:!0});var In=$(z);S=Y(In,!1),In.forEach(y),Pe=u(tt),G=c(tt,"DIV",{class:!0,"data-svelte-h":!0}),f(G)!=="svelte-1u26aq3"&&(G.innerHTML=re),Be=u(tt),ce=c(tt,"DIV",{class:!0,"data-svelte-h":!0}),f(ce)!=="svelte-1pd2x54"&&(ce.innerHTML=xe),tt.forEach(y),I=u(_),Re=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Re)!=="svelte-15pd8q3"&&(Re.textContent=ye),Te=u(_),Ue=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ue)!=="svelte-19lb28g"&&(Ue.innerHTML=Rt),Ge=u(_),Ce=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ce)!=="svelte-1gams9s"&&(Ce.innerHTML=Ft),ht=u(_),ke=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ke)!=="svelte-1jy3h5k"&&(ke.innerHTML=_t),jt=u(_),He=c(_,"DIV",{class:!0});var $n=$(He);Fe=Y($n,!1),$n.forEach(y),je=u(_),pe=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(pe)!=="svelte-jkk5u5"&&(pe.innerHTML=Ot),ut=u(_),fe=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(fe)!=="svelte-3baxvp"&&(fe.textContent=yt),Vt=u(_),$e=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f($e)!=="svelte-5anpcm"&&($e.innerHTML=at),Tt=u(_),Se=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Se)!=="svelte-w7xtgf"&&(Se.textContent=Ye),Ct=u(_),Ve=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ve)!=="svelte-1h8kfrd"&&(Ve.textContent=Ne),ot=u(_),Xe=c(_,"DIV",{class:!0});var Sn=$(Xe);qe=Y(Sn,!1),Sn.forEach(y),lt=u(_),Oe=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Oe)!=="svelte-1bt0v8s"&&(Oe.innerHTML=ft),we=u(_),Je=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Je)!=="svelte-1h8jj0c"&&(Je.textContent=j),Z=u(_),et=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(et)!=="svelte-pfj1ln"&&(et.textContent=Mt),Me=u(_),rt=c(_,"DIV",{class:!0});var Dn=$(rt);Qe=Y(Dn,!1),Dn.forEach(y),gt=u(_),Ke=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ke)!=="svelte-ui5am2"&&(Ke.innerHTML=Et),Jt=u(_),Pt=c(_,"DIV",{class:!0});var Ln=$(Pt);Bt=Y(Ln,!1),Ln.forEach(y),tn=u(_),vt=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(vt)!=="svelte-1vqldzj"&&(vt.textContent=It),nn=u(_),bt=c(_,"DIV",{class:!0});var Hn=$(bt);We=Y(Hn,!1),Hn.forEach(y),m=u(_),$t=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f($t)!=="svelte-l9usji"&&($t.innerHTML=sn),_.forEach(y),At.forEach(y),this.h()},h(){l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(L,"class","blog-paragraph"),l(V,"class","blog-sub-header"),l(E,"class","blog-paragraph"),l(H,"class","blog-sub-header"),te.a=null,l(oe,"class","blog-code-block"),l(A,"class","blog-paragraph"),l(P,"class","blog-paragraph"),l(B,"class","blog-sub-header"),S.a=null,l(z,"class","blog-code-block"),l(G,"class","blog-paragraph"),l(ce,"class","blog-paragraph"),l(M,"class","blog-paragraph"),l(Re,"class","blog-sub-header"),l(Ue,"class","blog-paragraph"),l(Ce,"class","blog-sub-header"),l(ke,"class","blog-paragraph"),Fe.a=null,l(He,"class","blog-code-block"),l(pe,"class","blog-paragraph"),l(fe,"class","blog-sub-header"),l($e,"class","blog-paragraph"),l(Se,"class","blog-sub-header"),l(Ve,"class","blog-paragraph"),qe.a=null,l(Xe,"class","blog-code-block"),l(Oe,"class","blog-paragraph"),l(Je,"class","blog-sub-header"),l(et,"class","blog-paragraph"),Qe.a=null,l(rt,"class","blog-code-block"),l(Ke,"class","blog-paragraph"),Bt.a=null,l(Pt,"class","blog-code-block"),l(vt,"class","blog-paragraph"),We.a=null,l(bt,"class","blog-code-block"),l($t,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","understanding_this_container svelte-1aivc9z")},m(dt,At){Xt(dt,t,At),kt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,D),s(e,L),s(e,F),s(e,V),s(e,ge),s(e,E),s(e,De),s(e,H),s(e,Q),s(e,P),s(P,ae),s(P,X),s(P,ee),s(P,oe),te.m(he,oe),s(P,Ee),s(P,A),s(e,Ie),s(e,B),s(e,ue),s(e,M),s(M,ne),s(M,be),s(M,q),s(M,ie),s(M,W),s(M,N),s(M,O),s(M,z),S.m(me,z),s(M,Pe),s(M,G),s(M,Be),s(M,ce),s(e,I),s(e,Re),s(e,Te),s(e,Ue),s(e,Ge),s(e,Ce),s(e,ht),s(e,ke),s(e,jt),s(e,He),Fe.m(qt,He),s(e,je),s(e,pe),s(e,ut),s(e,fe),s(e,Vt),s(e,$e),s(e,Tt),s(e,Se),s(e,Ct),s(e,Ve),s(e,ot),s(e,Xe),qe.m(pt,Xe),s(e,lt),s(e,Oe),s(e,we),s(e,Je),s(e,Z),s(e,et),s(e,Me),s(e,rt),Qe.m(ct,rt),s(e,gt),s(e,Ke),s(e,Jt),s(e,Pt),Bt.m(zt,Pt),s(e,tn),s(e,vt),s(e,nn),s(e,bt),We.m(Nt,bt),s(e,m),s(e,$t),St=!0},p:Ut,i(dt){St||(it(i.$$.fragment,dt),St=!0)},o(dt){st(i.$$.fragment,dt),St=!1},d(dt){dt&&y(t),wt(i)}}}class qi extends Kt{constructor(t){super(),Yt(this,t,null,Ri,Gt,{})}}function Oi(g){let t,i;return t=new Li({}),{c(){mt(t.$$.fragment)},l(n){xt(t.$$.fragment,n)},m(n,e){kt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){wt(t,n)}}}function Ji(g){let t,i;return t=new qi({}),{c(){mt(t.$$.fragment)},l(n){xt(t.$$.fragment,n)},m(n,e){kt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){wt(t,n)}}}function Pi(g){let t,i;return t=new fi({}),{c(){mt(t.$$.fragment)},l(n){xt(t.$$.fragment,n)},m(n,e){kt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){wt(t,n)}}}function Bi(g){let t,i;return t=new Ci({}),{c(){mt(t.$$.fragment)},l(n){xt(t.$$.fragment,n)},m(n,e){kt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){wt(t,n)}}}function Ni(g){let t,i;return t=new ri({}),{c(){mt(t.$$.fragment)},l(n){xt(t.$$.fragment,n)},m(n,e){kt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){wt(t,n)}}}function Wi(g){let t,i,n,e;const a=[Ni,Bi,Pi,Ji,Oi],o=[];function p(d,k){return d[0].path===_n?0:d[0].path===wn?1:d[0].path===kn?2:d[0].path===xn?3:d[0].path===mn?4:-1}return~(i=p(g))&&(n=o[i]=a[i](g)),{c(){t=r("div"),n&&n.c(),this.h()},l(d){t=c(d,"DIV",{class:!0});var k=$(t);n&&n.l(k),k.forEach(y),this.h()},h(){l(t,"class","blog-container")},m(d,k){Xt(d,t,k),~i&&o[i].m(t,null),e=!0},p(d,[k]){let v=i;i=p(d),i!==v&&(n&&(Wn(),st(o[v],1,1,()=>{o[v]=null}),Nn()),~i?(n=o[i],n||(n=o[i]=a[i](d),n.c()),it(n,1),n.m(t,null)):n=null)},i(d){e||(it(n),e=!0)},o(d){st(n),e=!1},d(d){d&&y(t),~i&&o[i].d()}}}function Zi(g,t,i){let{data:n}=t;return g.$$set=e=>{"data"in e&&i(0,n=e.data)},[n]}class Yi extends Kt{constructor(t){super(),Yt(this,t,Zi,Wi,Gt,{data:0})}}export{Yi as component,Ki as universal};
