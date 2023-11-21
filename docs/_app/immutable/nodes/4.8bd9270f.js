var qn=Object.defineProperty;var Jn=(g,t,i)=>t in g?qn(g,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):g[t]=i;var Y=(g,t,i)=>(Jn(g,typeof t!="symbol"?t+"":t,i),i),Pn=(g,t,i)=>{if(!t.has(g))throw TypeError("Cannot "+i)};var vn=(g,t,i)=>{if(t.has(g))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(g):t.set(g,i)};var hn=(g,t,i)=>(Pn(g,t,"access private method"),i);import{e as Bn,O as mn,U as xn,C as wn,S as kn,a as _n,A as dn}from"../chunks/article-main-header.3f8783d1.js";import{s as Yt,n as Gt}from"../chunks/scheduler.e108d1fd.js";import{S as Xt,i as en,g as r,r as Rt,s as h,m as zt,H as U,h as c,j as D,u as Ot,c as u,y as f,n as At,B as F,f as y,k as l,a as tn,v as qt,x as a,d as $t,t as St,w as Jt,C as on,D as ln,b as Nn,p as Wn}from"../chunks/index.2b92d2ca.js";function Zn({params:g}){switch(g.slug){case _n:return{path:_n};case kn:return{path:kn};case wn:return{path:wn};case xn:return{path:xn};case mn:return{path:mn};default:throw Bn(404,"Not found")}}const Xi=Object.freeze(Object.defineProperty({__proto__:null,load:Zn},Symbol.toStringTag,{value:"Module"}));function Tn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let nn=Tn();function zn(g){nn=g}const An=/[&<>"']/,Un=new RegExp(An.source,"g"),Rn=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fn=new RegExp(Rn.source,"g"),Qn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vn=g=>Qn[g];function Dt(g,t){if(t){if(An.test(g))return g.replace(Un,Vn)}else if(Rn.test(g))return g.replace(Fn,Vn);return g}const Gn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kn(g){return g.replace(Gn,(t,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const Yn=/(^|[^\[])\^/g;function J(g,t){g=typeof g=="string"?g:g.source,t=t||"";const i={replace:(n,e)=>(e=typeof e=="object"&&"source"in e?e.source:e,e=e.replace(Yn,"$1"),g=g.replace(n,e),i),getRegex:()=>new RegExp(g,t)};return i}function Hn(g){try{g=encodeURI(g).replace(/%25/g,"%")}catch{return null}return g}const un={exec:()=>null};function Mn(g,t){const i=g.replace(/\|/g,(s,o,p)=>{let d=!1,w=o;for(;--w>=0&&p[w]==="\\";)d=!d;return d?"|":" |"}),n=i.split(/ \|/);let e=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;e<n.length;e++)n[e]=n[e].trim().replace(/\\\|/g,"|");return n}function bn(g,t,i){const n=g.length;if(n===0)return"";let e=0;for(;e<n;){const s=g.charAt(n-e-1);if(s===t&&!i)e++;else if(s!==t&&i)e++;else break}return g.slice(0,n-e)}function Xn(g,t){if(g.indexOf(t[1])===-1)return-1;let i=0;for(let n=0;n<g.length;n++)if(g[n]==="\\")n++;else if(g[n]===t[0])i++;else if(g[n]===t[1]&&(i--,i<0))return n;return-1}function En(g,t,i,n){const e=t.href,s=t.title?Dt(t.title):null,o=g[1].replace(/\\([\[\]])/g,"$1");if(g[0].charAt(0)!=="!"){n.state.inLink=!0;const p={type:"link",raw:i,href:e,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,p}return{type:"image",raw:i,href:e,title:s,text:Dt(o)}}function ei(g,t){const i=g.match(/^(\s+)(?:```)/);if(i===null)return t;const n=i[1];return t.split(`
`).map(e=>{const s=e.match(/^\s+/);if(s===null)return e;const[o]=s;return o.length>=n.length?e.slice(n.length):e}).join(`
`)}class pn{constructor(t){Y(this,"options");Y(this,"rules");Y(this,"lexer");this.options=t||nn}space(t){const i=this.rules.block.newline.exec(t);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(t){const i=this.rules.block.code.exec(t);if(i){const n=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?n:bn(n,`
`)}}}fences(t){const i=this.rules.block.fences.exec(t);if(i){const n=i[0],e=ei(n,i[3]||"");return{type:"code",raw:n,lang:i[2]?i[2].trim().replace(this.rules.inline._escapes,"$1"):i[2],text:e}}}heading(t){const i=this.rules.block.heading.exec(t);if(i){let n=i[2].trim();if(/#$/.test(n)){const e=bn(n,"#");(this.options.pedantic||!e||/ $/.test(e))&&(n=e.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const i=this.rules.block.hr.exec(t);if(i)return{type:"hr",raw:i[0]}}blockquote(t){const i=this.rules.block.blockquote.exec(t);if(i){const n=i[0].replace(/^ *>[ \t]?/gm,""),e=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=e,{type:"blockquote",raw:i[0],tokens:s,text:n}}}list(t){let i=this.rules.block.list.exec(t);if(i){let n=i[1].trim();const e=n.length>1,s={type:"list",raw:"",ordered:e,start:e?+n.slice(0,-1):"",loose:!1,items:[]};n=e?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=e?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",d="",w=!1;for(;t;){let v=!1;if(!(i=o.exec(t))||this.rules.block.hr.test(t))break;p=i[0],t=t.substring(p.length);let b=i[2].split(`
`,1)[0].replace(/^\t+/,E=>" ".repeat(3*E.length)),k=t.split(`
`,1)[0],V=0;this.options.pedantic?(V=2,d=b.trimStart()):(V=i[2].search(/[^ ]/),V=V>4?1:V,d=b.slice(V),V+=i[1].length);let H=!1;if(!b&&/^ *$/.test(k)&&(p+=k+`
`,t=t.substring(k.length+1),v=!0),!v){const E=new RegExp(`^ {0,${Math.min(3,V-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),me=new RegExp(`^ {0,${Math.min(3,V-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Ie=new RegExp(`^ {0,${Math.min(3,V-1)}}(?:\`\`\`|~~~)`),$=new RegExp(`^ {0,${Math.min(3,V-1)}}#`);for(;t;){const se=t.split(`
`,1)[0];if(k=se,this.options.pedantic&&(k=k.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Ie.test(k)||$.test(k)||E.test(k)||me.test(t))break;if(k.search(/[^ ]/)>=V||!k.trim())d+=`
`+k.slice(V);else{if(H||b.search(/[^ ]/)>=4||Ie.test(b)||$.test(b)||me.test(b))break;d+=`
`+k}!H&&!k.trim()&&(H=!0),p+=se+`
`,t=t.substring(se.length+1),b=k.slice(V)}}s.loose||(w?s.loose=!0:/\n *\n *$/.test(p)&&(w=!0));let B=null,X;this.options.gfm&&(B=/^\[[ xX]\] /.exec(d),B&&(X=B[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:p,task:!!B,checked:X,loose:!1,text:d,tokens:[]}),s.raw+=p}s.items[s.items.length-1].raw=p.trimEnd(),s.items[s.items.length-1].text=d.trimEnd(),s.raw=s.raw.trimEnd();for(let v=0;v<s.items.length;v++)if(this.lexer.state.top=!1,s.items[v].tokens=this.lexer.blockTokens(s.items[v].text,[]),!s.loose){const b=s.items[v].tokens.filter(V=>V.type==="space"),k=b.length>0&&b.some(V=>/\n.*\n/.test(V.raw));s.loose=k}if(s.loose)for(let v=0;v<s.items.length;v++)s.items[v].loose=!0;return s}}html(t){const i=this.rules.block.html.exec(t);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(t){const i=this.rules.block.def.exec(t);if(i){const n=i[1].toLowerCase().replace(/\s+/g," "),e=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline._escapes,"$1"):i[3];return{type:"def",tag:n,raw:i[0],href:e,title:s}}}table(t){const i=this.rules.block.table.exec(t);if(i){if(!/[:|]/.test(i[2]))return;const n={type:"table",raw:i[0],header:Mn(i[1]).map(e=>({text:e,tokens:[]})),align:i[2].replace(/^\||\| *$/g,"").split("|"),rows:i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let e=n.align.length,s,o,p,d;for(s=0;s<e;s++){const w=n.align[s];w&&(/^ *-+: *$/.test(w)?n.align[s]="right":/^ *:-+: *$/.test(w)?n.align[s]="center":/^ *:-+ *$/.test(w)?n.align[s]="left":n.align[s]=null)}for(e=n.rows.length,s=0;s<e;s++)n.rows[s]=Mn(n.rows[s],n.header.length).map(w=>({text:w,tokens:[]}));for(e=n.header.length,o=0;o<e;o++)n.header[o].tokens=this.lexer.inline(n.header[o].text);for(e=n.rows.length,o=0;o<e;o++)for(d=n.rows[o],p=0;p<d.length;p++)d[p].tokens=this.lexer.inline(d[p].text);return n}}}lheading(t){const i=this.rules.block.lheading.exec(t);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(t){const i=this.rules.block.paragraph.exec(t);if(i){const n=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const i=this.rules.block.text.exec(t);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(t){const i=this.rules.inline.escape.exec(t);if(i)return{type:"escape",raw:i[0],text:Dt(i[1])}}tag(t){const i=this.rules.inline.tag.exec(t);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(t){const i=this.rules.inline.link.exec(t);if(i){const n=i[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=bn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Xn(i[2],"()");if(o>-1){const d=(i[0].indexOf("!")===0?5:4)+i[1].length+o;i[2]=i[2].substring(0,o),i[0]=i[0].substring(0,d).trim(),i[3]=""}}let e=i[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e);o&&(e=o[1],s=o[3])}else s=i[3]?i[3].slice(1,-1):"";return e=e.trim(),/^</.test(e)&&(this.options.pedantic&&!/>$/.test(n)?e=e.slice(1):e=e.slice(1,-1)),En(i,{href:e&&e.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},i[0],this.lexer)}}reflink(t,i){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=i[e.toLowerCase()],!e){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return En(n,e,n[0],this.lexer)}}emStrong(t,i,n=""){let e=this.rules.inline.emStrong.lDelim.exec(t);if(!e||e[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(e[1]||e[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...e[0]].length-1;let p,d,w=o,v=0;const b=e[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(b.lastIndex=0,i=i.slice(-1*t.length+e[0].length-1);(e=b.exec(i))!=null;){if(p=e[1]||e[2]||e[3]||e[4]||e[5]||e[6],!p)continue;if(d=[...p].length,e[3]||e[4]){w+=d;continue}else if((e[5]||e[6])&&o%3&&!((o+d)%3)){v+=d;continue}if(w-=d,w>0)continue;d=Math.min(d,d+w+v);const k=[...t].slice(0,o+e.index+d+1).join("");if(Math.min(o,d)%2){const H=k.slice(1,-1);return{type:"em",raw:k,text:H,tokens:this.lexer.inlineTokens(H)}}const V=k.slice(2,-2);return{type:"strong",raw:k,text:V,tokens:this.lexer.inlineTokens(V)}}}}codespan(t){const i=this.rules.inline.code.exec(t);if(i){let n=i[2].replace(/\n/g," ");const e=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return e&&s&&(n=n.substring(1,n.length-1)),n=Dt(n,!0),{type:"codespan",raw:i[0],text:n}}}br(t){const i=this.rules.inline.br.exec(t);if(i)return{type:"br",raw:i[0]}}del(t){const i=this.rules.inline.del.exec(t);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(t){const i=this.rules.inline.autolink.exec(t);if(i){let n,e;return i[2]==="@"?(n=Dt(i[1]),e="mailto:"+n):(n=Dt(i[1]),e=n),{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let i;if(i=this.rules.inline.url.exec(t)){let n,e;if(i[2]==="@")n=Dt(i[0]),e="mailto:"+n;else{let s;do s=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(s!==i[0]);n=Dt(i[0]),i[1]==="www."?e="http://"+i[0]:e=i[0]}return{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const i=this.rules.inline.text.exec(t);if(i){let n;return this.lexer.state.inRawBlock?n=i[0]:n=Dt(i[0]),{type:"text",raw:i[0],text:n}}}}const C={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:un,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};C._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;C._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;C.def=J(C.def).replace("label",C._label).replace("title",C._title).getRegex();C.bullet=/(?:[*+-]|\d{1,9}[.)])/;C.listItemStart=J(/^( *)(bull) */).replace("bull",C.bullet).getRegex();C.list=J(C.list).replace(/bull/g,C.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+C.def.source+")").getRegex();C._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";C._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;C.html=J(C.html,"i").replace("comment",C._comment).replace("tag",C._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();C.lheading=J(C.lheading).replace(/bull/g,C.bullet).getRegex();C.paragraph=J(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex();C.blockquote=J(C.blockquote).replace("paragraph",C.paragraph).getRegex();C.normal={...C};C.gfm={...C.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};C.gfm.table=J(C.gfm.table).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex();C.gfm.paragraph=J(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",C.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex();C.pedantic={...C.normal,html:J(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",C._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:un,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:J(C.normal._paragraph).replace("hr",C.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",C.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const x={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:un,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:un,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};x._punctuation="\\p{P}$+<=>`^|~";x.punctuation=J(x.punctuation,"u").replace(/punctuation/g,x._punctuation).getRegex();x.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;x.anyPunctuation=/\\[punct]/g;x._escapes=/\\([punct])/g;x._comment=J(C._comment).replace("(?:-->|$)","-->").getRegex();x.emStrong.lDelim=J(x.emStrong.lDelim,"u").replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimAst=J(x.emStrong.rDelimAst,"gu").replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimUnd=J(x.emStrong.rDelimUnd,"gu").replace(/punct/g,x._punctuation).getRegex();x.anyPunctuation=J(x.anyPunctuation,"gu").replace(/punct/g,x._punctuation).getRegex();x._escapes=J(x._escapes,"gu").replace(/punct/g,x._punctuation).getRegex();x._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;x._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;x.autolink=J(x.autolink).replace("scheme",x._scheme).replace("email",x._email).getRegex();x._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;x.tag=J(x.tag).replace("comment",x._comment).replace("attribute",x._attribute).getRegex();x._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;x._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;x._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;x.link=J(x.link).replace("label",x._label).replace("href",x._href).replace("title",x._title).getRegex();x.reflink=J(x.reflink).replace("label",x._label).replace("ref",C._label).getRegex();x.nolink=J(x.nolink).replace("ref",C._label).getRegex();x.reflinkSearch=J(x.reflinkSearch,"g").replace("reflink",x.reflink).replace("nolink",x.nolink).getRegex();x.normal={...x};x.pedantic={...x.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:J(/^!?\[(label)\]\((.*?)\)/).replace("label",x._label).getRegex(),reflink:J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",x._label).getRegex()};x.gfm={...x.normal,escape:J(x.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};x.gfm.url=J(x.gfm.url,"i").replace("email",x.gfm._extended_email).getRegex();x.breaks={...x.gfm,br:J(x.br).replace("{2,}","*").getRegex(),text:J(x.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Wt{constructor(t){Y(this,"tokens");Y(this,"options");Y(this,"state");Y(this,"tokenizer");Y(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||nn,this.options.tokenizer=this.options.tokenizer||new pn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:C.normal,inline:x.normal};this.options.pedantic?(i.block=C.pedantic,i.inline=x.pedantic):this.options.gfm&&(i.block=C.gfm,this.options.breaks?i.inline=x.breaks:i.inline=x.gfm),this.tokenizer.rules=i}static get rules(){return{block:C,inline:x}}static lex(t,i){return new Wt(i).lex(t)}static lexInline(t,i){return new Wt(i).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let i;for(;i=this.inlineQueue.shift();)this.inlineTokens(i.src,i.tokens);return this.tokens}blockTokens(t,i=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(p,d,w)=>d+"    ".repeat(w.length));let n,e,s,o;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(n=p.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=e.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(s=t,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const d=t.slice(1);let w;this.options.extensions.startBlock.forEach(v=>{w=v.call({lexer:this},d),typeof w=="number"&&w>=0&&(p=Math.min(p,w))}),p<1/0&&p>=0&&(s=t.substring(0,p+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){e=i[i.length-1],o&&e.type==="paragraph"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n),o=s.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&e.type==="text"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let n,e,s,o=t,p,d,w;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)v.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,p.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(d||(w=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(n=v.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.emStrong(t,o,w)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),i.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),i.push(n);continue}if(s=t,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const b=t.slice(1);let k;this.options.extensions.startInline.forEach(V=>{k=V.call({lexer:this},b),typeof k=="number"&&k>=0&&(v=Math.min(v,k))}),v<1/0&&v>=0&&(s=t.substring(0,v+1))}if(n=this.tokenizer.inlineText(s)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(w=n.raw.slice(-1)),d=!0,e=i[i.length-1],e&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(t){const v="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return i}}class fn{constructor(t){Y(this,"options");this.options=t||nn}code(t,i,n){var s;const e=(s=(i||"").match(/^\S*/))==null?void 0:s[0];return t=t.replace(/\n$/,"")+`
`,e?'<pre><code class="language-'+Dt(e)+'">'+(n?t:Dt(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:Dt(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,i){return t}heading(t,i,n){return`<h${i}>${t}</h${i}>
`}hr(){return`<hr>
`}list(t,i,n){const e=i?"ol":"ul",s=i&&n!==1?' start="'+n+'"':"";return"<"+e+s+`>
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
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,i,n){const e=Hn(t);if(e===null)return n;t=e;let s='<a href="'+t+'"';return i&&(s+=' title="'+i+'"'),s+=">"+n+"</a>",s}image(t,i,n){const e=Hn(t);if(e===null)return n;t=e;let s=`<img src="${t}" alt="${n}"`;return i&&(s+=` title="${i}"`),s+=">",s}text(t){return t}}class Cn{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,i,n){return""+n}image(t,i,n){return""+n}br(){return""}}class Zt{constructor(t){Y(this,"options");Y(this,"renderer");Y(this,"textRenderer");this.options=t||nn,this.options.renderer=this.options.renderer||new fn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Cn}static parse(t,i){return new Zt(i).parse(t)}static parseInline(t,i){return new Zt(i).parseInline(t)}parse(t,i=!0){let n="";for(let e=0;e<t.length;e++){const s=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,p=this.options.extensions.renderers[o.type].call({parser:this},o);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=p||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=s;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Kn(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let p="",d="";for(let v=0;v<o.header.length;v++)d+=this.renderer.tablecell(this.parseInline(o.header[v].tokens),{header:!0,align:o.align[v]});p+=this.renderer.tablerow(d);let w="";for(let v=0;v<o.rows.length;v++){const b=o.rows[v];d="";for(let k=0;k<b.length;k++)d+=this.renderer.tablecell(this.parseInline(b[k].tokens),{header:!1,align:o.align[k]});w+=this.renderer.tablerow(d)}n+=this.renderer.table(p,w);continue}case"blockquote":{const o=s,p=this.parse(o.tokens);n+=this.renderer.blockquote(p);continue}case"list":{const o=s,p=o.ordered,d=o.start,w=o.loose;let v="";for(let b=0;b<o.items.length;b++){const k=o.items[b],V=k.checked,H=k.task;let B="";if(k.task){const X=this.renderer.checkbox(!!V);w?k.tokens.length>0&&k.tokens[0].type==="paragraph"?(k.tokens[0].text=X+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&k.tokens[0].tokens[0].type==="text"&&(k.tokens[0].tokens[0].text=X+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:X+" "}):B+=X+" "}B+=this.parse(k.tokens,w),v+=this.renderer.listitem(B,H,!!V)}n+=this.renderer.list(v,p,d);continue}case"html":{const o=s;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,p=o.tokens?this.parseInline(o.tokens):o.text;for(;e+1<t.length&&t[e+1].type==="text";)o=t[++e],p+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=i?this.renderer.paragraph(p):p;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(t,i){i=i||this.renderer;let n="";for(let e=0;e<t.length;e++){const s=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=o||"";continue}}switch(s.type){case"escape":{const o=s;n+=i.text(o.text);break}case"html":{const o=s;n+=i.html(o.text);break}case"link":{const o=s;n+=i.link(o.href,o.title,this.parseInline(o.tokens,i));break}case"image":{const o=s;n+=i.image(o.href,o.title,o.text);break}case"strong":{const o=s;n+=i.strong(this.parseInline(o.tokens,i));break}case"em":{const o=s;n+=i.em(this.parseInline(o.tokens,i));break}case"codespan":{const o=s;n+=i.codespan(o.text);break}case"br":{n+=i.br();break}case"del":{const o=s;n+=i.del(this.parseInline(o.tokens,i));break}case"text":{const o=s;n+=i.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class rn{constructor(t){Y(this,"options");this.options=t||nn}preprocess(t){return t}postprocess(t){return t}}Y(rn,"passThroughHooks",new Set(["preprocess","postprocess"]));var cn,yn,gn,On;class ti{constructor(...t){vn(this,cn);vn(this,gn);Y(this,"defaults",Tn());Y(this,"options",this.setOptions);Y(this,"parse",hn(this,cn,yn).call(this,Wt.lex,Zt.parse));Y(this,"parseInline",hn(this,cn,yn).call(this,Wt.lexInline,Zt.parseInline));Y(this,"Parser",Zt);Y(this,"parser",Zt.parse);Y(this,"Renderer",fn);Y(this,"TextRenderer",Cn);Y(this,"Lexer",Wt);Y(this,"lexer",Wt.lex);Y(this,"Tokenizer",pn);Y(this,"Hooks",rn);this.use(...t)}walkTokens(t,i){var e,s;let n=[];for(const o of t)switch(n=n.concat(i.call(this,o)),o.type){case"table":{const p=o;for(const d of p.header)n=n.concat(this.walkTokens(d.tokens,i));for(const d of p.rows)for(const w of d)n=n.concat(this.walkTokens(w.tokens,i));break}case"list":{const p=o;n=n.concat(this.walkTokens(p.items,i));break}default:{const p=o;(s=(e=this.defaults.extensions)==null?void 0:e.childTokens)!=null&&s[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{n=n.concat(this.walkTokens(p[d],i))}):p.tokens&&(n=n.concat(this.walkTokens(p.tokens,i)))}}return n}use(...t){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const e={...n};if(e.async=this.defaults.async||e.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=i.renderers[s.name];o?i.renderers[s.name]=function(...p){let d=s.renderer.apply(this,p);return d===!1&&(d=o.apply(this,p)),d}:i.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=i[s.level];o?o.unshift(s.tokenizer):i[s.level]=[s.tokenizer],s.start&&(s.level==="block"?i.startBlock?i.startBlock.push(s.start):i.startBlock=[s.start]:s.level==="inline"&&(i.startInline?i.startInline.push(s.start):i.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(i.childTokens[s.name]=s.childTokens)}),e.extensions=i),n.renderer){const s=this.defaults.renderer||new fn(this.defaults);for(const o in n.renderer){const p=n.renderer[o],d=o,w=s[d];s[d]=(...v)=>{let b=p.apply(s,v);return b===!1&&(b=w.apply(s,v)),b||""}}e.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new pn(this.defaults);for(const o in n.tokenizer){const p=n.tokenizer[o],d=o,w=s[d];s[d]=(...v)=>{let b=p.apply(s,v);return b===!1&&(b=w.apply(s,v)),b}}e.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new rn;for(const o in n.hooks){const p=n.hooks[o],d=o,w=s[d];rn.passThroughHooks.has(o)?s[d]=v=>{if(this.defaults.async)return Promise.resolve(p.call(s,v)).then(k=>w.call(s,k));const b=p.call(s,v);return w.call(s,b)}:s[d]=(...v)=>{let b=p.apply(s,v);return b===!1&&(b=w.apply(s,v)),b}}e.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,o=n.walkTokens;e.walkTokens=function(p){let d=[];return d.push(o.call(this,p)),s&&(d=d.concat(s.call(this,p))),d}}this.defaults={...this.defaults,...e}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}}cn=new WeakSet,yn=function(t,i){return(n,e)=>{const s={...e},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const p=hn(this,gn,On).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(d=>t(d,o)).then(d=>o.walkTokens?Promise.all(this.walkTokens(d,o.walkTokens)).then(()=>d):d).then(d=>i(d,o)).then(d=>o.hooks?o.hooks.postprocess(d):d).catch(p);try{o.hooks&&(n=o.hooks.preprocess(n));const d=t(n,o);o.walkTokens&&this.walkTokens(d,o.walkTokens);let w=i(d,o);return o.hooks&&(w=o.hooks.postprocess(w)),w}catch(d){return p(d)}}},gn=new WeakSet,On=function(t,i){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const e="<p>An error occurred:</p><pre>"+Dt(n.message+"",!0)+"</pre>";return i?Promise.resolve(e):e}if(i)return Promise.reject(n);throw n}};const Kt=new ti;function T(g,t){return Kt.parse(g,t)}T.options=T.setOptions=function(g){return Kt.setOptions(g),T.defaults=Kt.defaults,zn(T.defaults),T};T.getDefaults=Tn;T.defaults=nn;T.use=function(...g){return Kt.use(...g),T.defaults=Kt.defaults,zn(T.defaults),T};T.walkTokens=function(g,t){return Kt.walkTokens(g,t)};T.parseInline=Kt.parseInline;T.Parser=Zt;T.parser=Zt.parse;T.Renderer=fn;T.TextRenderer=Cn;T.Lexer=Wt;T.lexer=Wt.lex;T.Tokenizer=pn;T.Hooks=rn;T.parse=T;T.options;T.setOptions;T.use;T.walkTokens;T.parseInline;Zt.parse;Wt.lex;const ni=`
  \`\`\`
    var name = "John";

    var numString = "22";

    var num = Number(numString);
  \`\`\`
`,ii='\n  ```\n    var num = "27";\n    var num2 = num * 1;\n  ```\n',ai=`
  \`\`\`
    function hoistedVariable() {
      console.log(a); // This will be undefined

      a = 4;

      console.log(a); // This is 4

      var a;
    }
  \`\`\`
`,si=`
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
`;function li(g){let t,i,n,e,s,o="Up and going",p,d,w=`The first statement that I ever heard in regards to JavaScript was the phrase &quot;
			<strong>Dumb kid brother</strong>&quot;. It has been close to 7 years since I started coding
			seriously and I still do not understand, how the world&#39;s most widely used language that rules
			the entire web space, works?`,v,b,k=`The intention behind creating these articles is to mainly learn and treat them as a point of
			reference to solidify my understanding of <i>JavaScript</i>. This by chance, also happens to
			be the first blog that I have ever written and I am hoping I can turn this into a hobby.`,V,H,B=`The first part of this series <strong>(You don&#39;t know JS)</strong> was a general introduction
			to programming and a discussion of some aspects of <i>JavaScript</i>. There are few topics
			that caught my attention.
			<a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&amp;%20going/README.md#you-dont-know-js-up--going" target="_blank">YDKJS</a> <ul class="blog-list-elements"><li>Coercion</li> <li>Typed values not typed variables</li> <li>Equality</li> <li>Hoisting</li> <li>Closure</li> <li>Polyfilling</li> <li>Transpiling</li></ul>`,X,E,me="Coercion",Ie,$,se,xe,he="<li>Explicit coercion</li> <li>Implicit coercion</li>",De,oe,N=`Explicit conversion is straightforward. We know the current type of the value and the\r
				resultant type it is converted to.`,ue,le,Me,fe=T(ni)+"",Ee,Q,ge=`The conversion in the above cases is explicit. We know that the <code>name</code> variable
				is a <code>string</code> and so is the variable <code>numString</code>. In the third case
				the
				<code>string</code> type is explicity converted to a <code>number</code>.`,Qe,O,ve=`Implicit conversion on the other hand is quite interesting and we will experience an
				interesting quality of implicit conversion in the <strong>Equality</strong>
				section. The conversion is not very apparent and can cause confusion in code if not written properly.`,Je,W,we,ze=T(ii)+"",z,G,ke=`The conversion in the first case is explicit, we know that num is a string. In the second\r
				case the value of num is coerced into a number.`,Ge,q,re="Typed values not typed variables",ht,K,Z=`<p>There is a neat way to learn the type of a variable in JavaScript. It&#39;s the <code>typeof()</code>
				operator. When checking the type of a variable, JavaScript looks at the value of the variable
				and not the variable itself. The variables in JavaScript are merely containers of types.</p>`,Ke,P,A="Equality",L,$e,it=`<p>Equality in JavaScript comes in two flavors <code>==</code> and <code>===</code>. The
				easiest way to understand these would be that <code>==</code> checks for equality with
				coercion and
				<code>===</code> does not allow coercion, which is often called &quot;strict equality&quot;</p> <p>For the past 7 years I believed that the difference between <code>==</code> and
				<code>===</code> is that strict equality checked the reference and the other checked the value.
				I was missing the understanding of the word coercion! I still do think that the avoiding == makes
				sense when working with other people. Somewhere down the line people can make mistakes.</p>`,ee,be,ut="Hoisting",Se,Ae,_e,Le=`On declaring a variable in JavaScript, it's made available throughout the entire scope it\r
				was declared in. JavaScript hoists that variable to the top and it's available to the entire\r
				scope. The same works for functions. Variable hoisting can cause a lot of confusion and it's\r
				better to avoid it. The best approach is to use JavaScript in "strict" mode and use let for\r
				variable declaration.`,kt,je,pe,Vt=T(ai)+"",_t,te,at=`In the above example, on calling the function <code>hoistedVariable</code> we notice that
				the variable until initialized prints a value of <code>undefined</code>. The declaration of
				the variable
				<code>a</code> is on the last line but, due to hoisting in JavaScript, the variable is available
				throughout the scope.`,bt,ne,Be="Closure",Lt,ce,S,Ht=`One can think of Closure as a way to "remember" a function's scope, like variables, even\r
				after the function has finished executing. The best way to explain closure is through an\r
				example`,Ne,de,mt,st=T(si)+"",ye,ot,Ye=`In the above example even after it&#39;s execution the returned function value is saved in the
				<code>plusTwo</code> variable, which is basically holding a <code>function</code> type.
				Calling
				<code>plusTwo</code> remembers the original value passed in, which was 2.`,Te,Xe,We="Polyfilling",Ce,Ze,Ve,Re=`Polyfilling refers to taking the definition of a newer feature and producing a piece of code
				that&#39;s equivalent to the behavior, but is able to run in older JavaScript environments. As
				an example, ES6 deprecated the utility <code>isNan(...)</code> which was buggy and replaced
				it with
				<code>Number.isNan(...)</code>. The example below polyfills the function for older
				environments.`,pt,Oe,Ue,Pe=T(oi)+"",lt;return i=new dn({}),{c(){t=r("div"),Rt(i.$$.fragment),n=h(),e=r("div"),s=r("div"),s.textContent=o,p=h(),d=r("div"),d.innerHTML=w,v=h(),b=r("div"),b.innerHTML=k,V=h(),H=r("div"),H.innerHTML=B,X=h(),E=r("div"),E.textContent=me,Ie=h(),$=r("div"),se=zt(`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),xe=r("ol"),xe.innerHTML=he,De=h(),oe=r("p"),oe.textContent=N,ue=h(),le=r("div"),Me=new U(!1),Ee=h(),Q=r("p"),Q.innerHTML=ge,Qe=h(),O=r("p"),O.innerHTML=ve,Je=h(),W=r("div"),we=new U(!1),z=h(),G=r("p"),G.textContent=ke,Ge=h(),q=r("div"),q.textContent=re,ht=h(),K=r("div"),K.innerHTML=Z,Ke=h(),P=r("div"),P.textContent=A,L=h(),$e=r("div"),$e.innerHTML=it,ee=h(),be=r("div"),be.textContent=ut,Se=h(),Ae=r("div"),_e=r("p"),_e.textContent=Le,kt=h(),je=r("div"),pe=new U(!1),_t=h(),te=r("p"),te.innerHTML=at,bt=h(),ne=r("div"),ne.textContent=Be,Lt=h(),ce=r("div"),S=r("p"),S.textContent=Ht,Ne=h(),de=r("div"),mt=new U(!1),ye=h(),ot=r("p"),ot.innerHTML=Ye,Te=h(),Xe=r("div"),Xe.textContent=We,Ce=h(),Ze=r("div"),Ve=r("p"),Ve.innerHTML=Re,pt=h(),Oe=r("div"),Ue=new U(!1),this.h()},l(qe){t=c(qe,"DIV",{class:!0});var ie=D(t);Ot(i.$$.fragment,ie),n=u(ie),e=c(ie,"DIV",{class:!0});var j=D(e);s=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(s)!=="svelte-1wm6pwi"&&(s.textContent=o),p=u(j),d=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-d234l5"&&(d.innerHTML=w),v=u(j),b=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-f75zlw"&&(b.innerHTML=k),V=u(j),H=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-1au80is"&&(H.innerHTML=B),X=u(j),E=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(E)!=="svelte-1gz8uxg"&&(E.textContent=me),Ie=u(j),$=c(j,"DIV",{class:!0});var R=D($);se=At(R,`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),xe=c(R,"OL",{class:!0,"data-svelte-h":!0}),f(xe)!=="svelte-l4ajwa"&&(xe.innerHTML=he),De=u(R),oe=c(R,"P",{"data-svelte-h":!0}),f(oe)!=="svelte-1w03sfk"&&(oe.textContent=N),ue=u(R),le=c(R,"DIV",{class:!0});var ft=D(le);Me=F(ft,!1),ft.forEach(y),Ee=u(R),Q=c(R,"P",{"data-svelte-h":!0}),f(Q)!=="svelte-1oow4wt"&&(Q.innerHTML=ge),Qe=u(R),O=c(R,"P",{"data-svelte-h":!0}),f(O)!=="svelte-1d2klvl"&&(O.innerHTML=ve),Je=u(R),W=c(R,"DIV",{class:!0});var yt=D(W);we=F(yt,!1),yt.forEach(y),z=u(R),G=c(R,"P",{"data-svelte-h":!0}),f(G)!=="svelte-1ulolye"&&(G.textContent=ke),R.forEach(y),Ge=u(j),q=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(q)!=="svelte-il2h6u"&&(q.textContent=re),ht=u(j),K=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(K)!=="svelte-t53yhc"&&(K.innerHTML=Z),Ke=u(j),P=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(P)!=="svelte-zkjv4w"&&(P.textContent=A),L=u(j),$e=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f($e)!=="svelte-cdu7ip"&&($e.innerHTML=it),ee=u(j),be=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(be)!=="svelte-1m8q6hv"&&(be.textContent=ut),Se=u(j),Ae=c(j,"DIV",{class:!0});var ae=D(Ae);_e=c(ae,"P",{"data-svelte-h":!0}),f(_e)!=="svelte-d8fbjs"&&(_e.textContent=Le),kt=u(ae),je=c(ae,"DIV",{class:!0});var rt=D(je);pe=F(rt,!1),rt.forEach(y),_t=u(ae),te=c(ae,"P",{"data-svelte-h":!0}),f(te)!=="svelte-jz2io5"&&(te.innerHTML=at),ae.forEach(y),bt=u(j),ne=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(ne)!=="svelte-1mj3tvz"&&(ne.textContent=Be),Lt=u(j),ce=c(j,"DIV",{class:!0});var et=D(ce);S=c(et,"P",{"data-svelte-h":!0}),f(S)!=="svelte-udzufc"&&(S.textContent=Ht),Ne=u(et),de=c(et,"DIV",{class:!0});var He=D(de);mt=F(He,!1),He.forEach(y),ye=u(et),ot=c(et,"P",{"data-svelte-h":!0}),f(ot)!=="svelte-1lv6grx"&&(ot.innerHTML=Ye),et.forEach(y),Te=u(j),Xe=c(j,"DIV",{class:!0,"data-svelte-h":!0}),f(Xe)!=="svelte-1dn8ynz"&&(Xe.textContent=We),Ce=u(j),Ze=c(j,"DIV",{class:!0});var tt=D(Ze);Ve=c(tt,"P",{"data-svelte-h":!0}),f(Ve)!=="svelte-180pjs4"&&(Ve.innerHTML=Re),pt=u(tt),Oe=c(tt,"DIV",{class:!0});var gt=D(Oe);Ue=F(gt,!1),gt.forEach(y),tt.forEach(y),j.forEach(y),ie.forEach(y),this.h()},h(){l(s,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-paragraph"),l(E,"class","blog-sub-header"),l(xe,"class","blog-list-elements"),Me.a=null,l(le,"class","blog-code-block"),we.a=null,l(W,"class","blog-code-block"),l($,"class","blog-paragraph"),l(q,"class","blog-sub-header"),l(K,"class","blog-paragraph"),l(P,"class","blog-sub-header"),l($e,"class","blog-paragraph"),l(be,"class","blog-sub-header"),pe.a=null,l(je,"class","blog-code-block"),l(Ae,"class","blog-paragraph"),l(ne,"class","blog-sub-header"),mt.a=null,l(de,"class","blog-code-block"),l(ce,"class","blog-paragraph"),l(Xe,"class","blog-sub-header"),Ue.a=null,l(Oe,"class","blog-code-block"),l(Ze,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","up-and-going-container svelte-ofy7lw")},m(qe,ie){tn(qe,t,ie),qt(i,t,null),a(t,n),a(t,e),a(e,s),a(e,p),a(e,d),a(e,v),a(e,b),a(e,V),a(e,H),a(e,X),a(e,E),a(e,Ie),a(e,$),a($,se),a($,xe),a($,De),a($,oe),a($,ue),a($,le),Me.m(fe,le),a($,Ee),a($,Q),a($,Qe),a($,O),a($,Je),a($,W),we.m(ze,W),a($,z),a($,G),a(e,Ge),a(e,q),a(e,ht),a(e,K),a(e,Ke),a(e,P),a(e,L),a(e,$e),a(e,ee),a(e,be),a(e,Se),a(e,Ae),a(Ae,_e),a(Ae,kt),a(Ae,je),pe.m(Vt,je),a(Ae,_t),a(Ae,te),a(e,bt),a(e,ne),a(e,Lt),a(e,ce),a(ce,S),a(ce,Ne),a(ce,de),mt.m(st,de),a(ce,ye),a(ce,ot),a(e,Te),a(e,Xe),a(e,Ce),a(e,Ze),a(Ze,Ve),a(Ze,pt),a(Ze,Oe),Ue.m(Pe,Oe),lt=!0},p:Gt,i(qe){lt||($t(i.$$.fragment,qe),lt=!0)},o(qe){St(i.$$.fragment,qe),lt=!1},d(qe){qe&&y(t),Jt(i)}}}class ri extends Xt{constructor(t){super(),en(this,t,null,li,Yt,{})}}const ci=`
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
`;function pi(g){let t,i,n,e,s,o="Closure",p,d,w=`Closure in JavaScript is, when a function is able to remember and access its lexical scope\r
			even when the function is executing outside is lexical scope.`,v,b,k,V=T(ci)+"",H,B,X=`In the above example the function <code>bar</code> has closure over the scope of
			<code>foo</code>. This is because <code>bar</code> is declared inside the scope of
			<code>foo</code>. To better understand this we could use the analogy of
			<a href="/blog/ydkjs/scopes_and_hoisting#concentric-circle" target="_blank">concentric circles</a>
			.The lexical scope that forms those concentric circles is closely related to closures. So, looking
			at closures through the lens of the circle analogy, we would look at it inside-out. The inner most
			<i>scope/circle</i>
			has closure over all the other <i>scopes/circles</i>. Another fascinating thing about closures
			is the persistence of the scope of a function even after execution. Generally, when a block of
			scope finishes execution, it is garbage collected and it&#39;s not present in memory, but closures
			allow some magic to happen!`,E,me,Ie=`There are some other forms of closure that can be a little indirect. A great example would be
			when a function is passed by value to another function, and executed from the scope of that
			function. To better state that - <b>Any way in which a function can be passed around as value and be invoked in other
				locations, are all examples of closures</b>. Example below!`,$,se,xe,he=T(di)+"",De,oe,N="Closures are everywhere and one of the best examples is the <code>setTimeOut</code> function.",ue,le,Me,fe=T(hi)+"",Ee,Q,ge=`In the above <code>setTimeout</code> example, the function<code>timer</code> has a scope
			closure over the global scope, it remembers the value <code>a</code> from the global scope. We
			pass the function
			<code>timer</code>
			as a parameter to the <code>setTimeout</code>, which is nothing but a functionReference and
			that function has closure over the global scope. This opens up a new world. Everytime I look
			at some JavaScript code, I see closures now!`,Qe,O,ve="Modules",Je,W,we=`Modules are the one of the most prominent and powerful examples of closures. Specially,\r
			starting from ES6.`,ze,z,G,ke=T(ui)+"",Ge,q,re=`Modules are functions itself and this example is in a way similar to the fist closure example.\r
			The only difference being that in the case of a module it returns an object with multiple\r
			functions that have closure over the scope of the module function.`,ht,K,Z="That ends part two of YDKJS! I have learnt quite a bit, let's keep rolling.",Ke;return i=new dn({}),{c(){t=r("div"),Rt(i.$$.fragment),n=h(),e=r("div"),s=r("div"),s.textContent=o,p=h(),d=r("div"),d.textContent=w,v=h(),b=r("div"),k=new U(!1),H=h(),B=r("div"),B.innerHTML=X,E=h(),me=r("div"),me.innerHTML=Ie,$=h(),se=r("div"),xe=new U(!1),De=h(),oe=r("div"),oe.innerHTML=N,ue=h(),le=r("div"),Me=new U(!1),Ee=h(),Q=r("div"),Q.innerHTML=ge,Qe=h(),O=r("div"),O.textContent=ve,Je=h(),W=r("div"),W.textContent=we,ze=h(),z=r("div"),G=new U(!1),Ge=h(),q=r("div"),q.textContent=re,ht=h(),K=r("div"),K.textContent=Z,this.h()},l(P){t=c(P,"DIV",{class:!0});var A=D(t);Ot(i.$$.fragment,A),n=u(A),e=c(A,"DIV",{class:!0});var L=D(e);s=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(s)!=="svelte-tgqvu9"&&(s.textContent=o),p=u(L),d=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-1h62583"&&(d.textContent=w),v=u(L),b=c(L,"DIV",{class:!0});var $e=D(b);k=F($e,!1),$e.forEach(y),H=u(L),B=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-87t3fc"&&(B.innerHTML=X),E=u(L),me=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(me)!=="svelte-1dhjz52"&&(me.innerHTML=Ie),$=u(L),se=c(L,"DIV",{class:!0});var it=D(se);xe=F(it,!1),it.forEach(y),De=u(L),oe=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(oe)!=="svelte-v7a7fy"&&(oe.innerHTML=N),ue=u(L),le=c(L,"DIV",{class:!0});var ee=D(le);Me=F(ee,!1),ee.forEach(y),Ee=u(L),Q=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(Q)!=="svelte-1kt1d4n"&&(Q.innerHTML=ge),Qe=u(L),O=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(O)!=="svelte-1emixw3"&&(O.textContent=ve),Je=u(L),W=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(W)!=="svelte-40eyps"&&(W.textContent=we),ze=u(L),z=c(L,"DIV",{class:!0});var be=D(z);G=F(be,!1),be.forEach(y),Ge=u(L),q=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(q)!=="svelte-1ukx7mk"&&(q.textContent=re),ht=u(L),K=c(L,"DIV",{class:!0,"data-svelte-h":!0}),f(K)!=="svelte-lun0om"&&(K.textContent=Z),L.forEach(y),A.forEach(y),this.h()},h(){l(s,"class","blog-title"),l(d,"class","blog-paragraph"),k.a=null,l(b,"class","blog-code-block"),l(B,"class","blog-paragraph"),l(me,"class","blog-paragraph"),xe.a=null,l(se,"class","blog-code-block"),l(oe,"class","blog-paragraph"),Me.a=null,l(le,"class","blog-code-block"),l(Q,"class","blog-paragraph"),l(O,"class","blog-sub-header"),l(W,"class","blog-paragraph"),G.a=null,l(z,"class","blog-code-block"),l(q,"class","blog-paragraph"),l(K,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","closure-container svelte-18ejxyl")},m(P,A){tn(P,t,A),qt(i,t,null),a(t,n),a(t,e),a(e,s),a(e,p),a(e,d),a(e,v),a(e,b),k.m(V,b),a(e,H),a(e,B),a(e,E),a(e,me),a(e,$),a(e,se),xe.m(he,se),a(e,De),a(e,oe),a(e,ue),a(e,le),Me.m(fe,le),a(e,Ee),a(e,Q),a(e,Qe),a(e,O),a(e,Je),a(e,W),a(e,ze),a(e,z),G.m(ke,z),a(e,Ge),a(e,q),a(e,ht),a(e,K),Ke=!0},p:Gt,i(P){Ke||($t(i.$$.fragment,P),Ke=!0)},o(P){St(i.$$.fragment,P),Ke=!1},d(P){P&&y(t),Jt(i)}}}class fi extends Xt{constructor(t){super(),en(this,t,null,pi,Yt,{})}}const gi="\n```\n    var num = 3;\n```\n",vi=`
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
`,wi=`
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
`,ki="\n```\n    a = 2;\n    var a;\n    console.log(a); // Prints 2 \n```\n";function _i(g){let t,i,n,e,s;return{c(){t=on("svg"),i=on("circle"),n=on("circle"),e=on("circle"),s=on("circle"),this.h()},l(o){t=ln(o,"svg",{height:!0,width:!0});var p=D(t);i=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(i).forEach(y),n=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(n).forEach(y),e=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(e).forEach(y),s=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(s).forEach(y),p.forEach(y),this.h()},h(){l(i,"cx","100"),l(i,"cy","100"),l(i,"r","80"),l(i,"stroke","#475c6c"),l(i,"stroke-width","2"),l(i,"fill","none"),l(n,"cx","100"),l(n,"cy","100"),l(n,"r","60"),l(n,"stroke","#8a8583"),l(n,"stroke-width","2"),l(n,"fill","none"),l(e,"cx","100"),l(e,"cy","100"),l(e,"r","40"),l(e,"stroke","#eed7a1"),l(e,"stroke-width","2"),l(e,"fill","none"),l(s,"cx","100"),l(s,"cy","100"),l(s,"r","20"),l(s,"stroke","#cd8b62"),l(s,"stroke-width","2"),l(s,"fill","none"),l(t,"height","200"),l(t,"width","200")},m(o,p){tn(o,t,p),a(t,i),a(t,n),a(t,e),a(t,s)},p:Gt,i:Gt,o:Gt,d(o){o&&y(t)}}}class yi extends Xt{constructor(t){super(),en(this,t,null,_i,Yt,{})}}function Ti(g){let t,i,n,e,s,o="Scopes and Hoisting",p,d,w=`This book is awesome! I wish I had read it sooner. Most programming languages that I have
			used, I never spent the time to fully understand the depths of it. With YDKJS, I aim to break
			that trend and truly understand how JavaScript works!<br/><br/>`,v,b,k=`The second part of this book covers some very interesting topics which mainly revolve around\r
			scopes, hoisting and closure. Since this is going to be a longer article in comparison, I will\r
			move closure to a separate article.`,V,H,B="Scope and Compiler theory",X,E,me=`Scope refers to a well defined set of rules that allow us to store variables in some location
			and access them from that location. In order to understand how this works we need to
			understand some basic <b>Compiler theory</b>`,Ie,$,se=`JavaScript is considered to be an interpreted language but that would be wrong. It undergoes
			compilation just mere mircoseconds before execution. Understanding those performance
			improvements that make it compile so quickly was a little beyond the topics in this book but,
			I definitely would like to revisit and understand those improvements (An article for the
			future). Getting back to compilation. Any compiled language undergoes three main steps during
			its compilation process.
			<ol class="blog-list-elements"><li>Tokenizing/Lexing</li> <li>Parsing</li> <li>Code generation</li></ol>`,xe,he,De=`<b>Tokenizing</b> involves taking a string of characters and breaking down it into meaningful chunks
			called tokens. Lexing is synonmous to Tokenization with a difference of stateful parsing. If the
			tokenization involves some kind of state based approach then it would be called Lexing.`,oe,N,ue,le=T(gi)+"",Me,fe,Ee=`The above example when tokenized might get broken down into <code>var</code>, <code>a</code>,
			<code>=</code>, <code>3</code>, <code>;</code>`,Q,ge,Qe=`<b>Parsing</b> uses the array of tokens and creates a nested tree, which is called an Abstract
			syntax tree. For the above example <code>var num = 3;</code> it might create a tree structure that
			could look like this.`,O,ve,Je,W=T(vi)+"",we,ze,z=`Finally the last step, <b>Code generation</b> - It takes the Abstract syntax tree and creates executable
			code.`,G,ke,Ge=`There is much more to the compilation process that I need to learn. Truly understanding a\r
			language requires some serious work! One step at a time! We'll get there!`,q,re,ht="More on scope",K,Z,Ke=`There are three important members involved in understanding scope
			<ol class="blog-list-elements"><li>Engine</li> <li>Compiler</li> <li>Scope</li></ol>
			Engine runs from start to finish. From variable declaration to program execution. Compiler handles
			the dirty work. Parsing code and code generation. Sope holds a lookup list for all the declrations
			(variables, functions etc..)`,P,A,L,$e,it="var num = 2;",ee,be,ut,Se=T(bi)+"",Ae,_e,Le=`Looking at the example above, the compiler declares a variable at this step if it has not been
			declared yet. Compiler queries the scope and asks if the variable <code>num</code> was declared,
			if it was then it moves on and does not declare a variable but if there isn&#39;t a variable declared
			then it declares one. This part is pretty interesting in JavaScript, it allows us to declare the
			same variable multiple times. In a nested scope this would be termed shadowing, where it overwrites
			the value declared in the outerscope. The example below explains shadowing.`,kt,je,pe,Vt=T(mi)+"",_t,te,at=`Going back to the two parts involved in variable declaration and assignment, there&#39;s an
			interesting lookup concept that JavaScript performs. The easier version is - When a variable
			appears on the left side of an assignment the compiler does a <b>LHS</b> lookup and when it&#39;s on
			the right side of the assignment it does a RHS lookup. A LHS lookup looks for the variable container
			itself but the RHS lookup is merely getting the value of the variable. LHS lookups can be a bit
			tricky. As always, examples help!`,bt,ne,Be,Lt=T(xi)+"",ce,S,Ht=`Let&#39;s break it down.
			<div class="blog-paragraph"><b>List of LHS lookups</b> <ul><li>ans =</li> <li>num = (this is interesting, it&#39;s the pararmeter passed to the function)</li> <li>num2 =</li></ul> <b>List of RHS lookups</b> <ul><li>foo</li> <li>= num</li> <li>num +</li> <li>+ num2</li></ul></div>
			Discussing lookups further, it gets even more interesting when nested scopes are involved. When
			searching for a variable, JavaScript considers all scopes. It starts with the inner most and keeps
			looking for variable<b>containers / values</b> in all the scopes that the current scope is enclosed
			in. This is where it chooses between a LHS and RHS lookup.`,Ne,de,mt="That was just the first Chapter from the book. Phew!",st,ye,ot="Lexical scope",Ye,Te,Xe=`JavaScript uses the lexical scope and so do most programming languages. Scope as defined\r
			earlier is a means of finding a declared identifier and Lexing examines a string of characters\r
			and gives it semantic meaning. So lexical scope is the scope defined during the time of\r
			lexing.`,We,Ce,Ze=`In order to understand the idea of lexical scope it's important to understand how a lookup\r
			works in JavaScript. Like always, let's start with an example.`,Ve,Re,pt,Oe=T(wi)+"",Ue,Pe,lt=`In the example above we have three different scopes
			<ol><li>Global scope where outer function is declared</li> <li>Scope of the outer function</li> <li>Scope of the inner function</li></ol>
			It&#39;s ideal to look at this from inside out. When the
			<code>console.log(num, num2)</code>
			executes the engine goes looking for the two identifiers. It searches for <code>num</code>
			first in the scope of function <code>inner</code> and cannot find it, the next available scope
			is the scope of the function <code>outer</code> and there it finds the variable
			<code>num</code>. It does a similar lookup for the variable <code>num2</code> and finds it in
			the scope of outer. But the variable <code>num3</code> it finds in the global scope, the same scope
			where the outer function is called. The way I look at scope look ups is the way concentric circles
			are drawn, they have neat boundaries and they do not intersect.`,qe,ie,j,R,ft=`Understanding of scope directly relates to understanding
			<b>The Principle of least privilege</b> - Expose only what is minimally necessary, and hide everything
			else. These concentric division allow us to enclose variables and functions within scopes and not
			expose it in a global context. What does that accomplish? It avoids collisions! Makes sure that
			two identifiers intended for different usecases do not stomp on each other.`,yt,ae,rt="<b>SCOPE -&gt; PRINCIPLE OF LEAST PRIVILEGE -&gt; COLLISION AVOIDANCE</b>",et,He,tt="Hoisting",gt,nt,Ut=`Hoisting in JavaScript refers to the process of moving the function and variables to the the\r
			top of the code from where they were declared. This is one of the crucial parts of JavaScript,\r
			I mean for developers. Not understanding hoisting can lead to writing code that's hard to\r
			decipher.`,vt,ct,Mt,Tt=T(ki)+"",Fe,dt,I=`In the above example even though we would expect it to print undefined, it prints 2. Why? If
			we go back to the definition above, the <code>var a;</code> gets hoisted and placed on the
			top. So the first statement that executes is the declaration of that variable, by the time it
			gets to <code>a = 2;</code> the variable exists, so it assigns the value to 2 that container. Another
			important thing to note here it that between a variable and a function, functions get hoisted first!`,xt,Ct,Ft=`This chapter has been really interesting so far. There's one last topic left to discuss and I\r
			will be doing that in the next article.`,wt;return i=new dn({}),ie=new yi({}),{c(){t=r("div"),Rt(i.$$.fragment),n=h(),e=r("div"),s=r("div"),s.textContent=o,p=h(),d=r("div"),d.innerHTML=w,v=h(),b=r("div"),b.textContent=k,V=h(),H=r("div"),H.textContent=B,X=h(),E=r("div"),E.innerHTML=me,Ie=h(),$=r("div"),$.innerHTML=se,xe=h(),he=r("div"),he.innerHTML=De,oe=h(),N=r("div"),ue=new U(!1),Me=h(),fe=r("div"),fe.innerHTML=Ee,Q=h(),ge=r("div"),ge.innerHTML=Qe,O=h(),ve=r("div"),Je=new U(!1),we=h(),ze=r("div"),ze.innerHTML=z,G=h(),ke=r("div"),ke.textContent=Ge,q=h(),re=r("div"),re.textContent=ht,K=h(),Z=r("div"),Z.innerHTML=Ke,P=h(),A=r("div"),L=zt("If we were to go back to the example of a simple variable declaration "),$e=r("code"),$e.textContent=it,ee=zt(`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),be=r("div"),ut=new U(!1),Ae=h(),_e=r("div"),_e.innerHTML=Le,kt=h(),je=r("div"),pe=new U(!1),_t=h(),te=r("div"),te.innerHTML=at,bt=h(),ne=r("div"),Be=new U(!1),ce=h(),S=r("div"),S.innerHTML=Ht,Ne=h(),de=r("div"),de.textContent=mt,st=h(),ye=r("div"),ye.textContent=ot,Ye=h(),Te=r("div"),Te.textContent=Xe,We=h(),Ce=r("div"),Ce.textContent=Ze,Ve=h(),Re=r("div"),pt=new U(!1),Ue=h(),Pe=r("div"),Pe.innerHTML=lt,qe=h(),Rt(ie.$$.fragment),j=h(),R=r("div"),R.innerHTML=ft,yt=h(),ae=r("div"),ae.innerHTML=rt,et=h(),He=r("div"),He.textContent=tt,gt=h(),nt=r("div"),nt.textContent=Ut,vt=h(),ct=r("div"),Mt=new U(!1),Fe=h(),dt=r("div"),dt.innerHTML=I,xt=h(),Ct=r("div"),Ct.textContent=Ft,this.h()},l(M){t=c(M,"DIV",{class:!0});var Et=D(t);Ot(i.$$.fragment,Et),n=u(Et),e=c(Et,"DIV",{class:!0});var m=D(e);s=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(s)!=="svelte-j13dtt"&&(s.textContent=o),p=u(m),d=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-1c4zecq"&&(d.innerHTML=w),v=u(m),b=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-18czcds"&&(b.textContent=k),V=u(m),H=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-2up3yp"&&(H.textContent=B),X=u(m),E=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(E)!=="svelte-5zllcz"&&(E.innerHTML=me),Ie=u(m),$=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f($)!=="svelte-13nancv"&&($.innerHTML=se),xe=u(m),he=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(he)!=="svelte-1mzbrig"&&(he.innerHTML=De),oe=u(m),N=c(m,"DIV",{class:!0});var Pt=D(N);ue=F(Pt,!1),Pt.forEach(y),Me=u(m),fe=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(fe)!=="svelte-1we0e0z"&&(fe.innerHTML=Ee),Q=u(m),ge=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ge)!=="svelte-1lvnh79"&&(ge.innerHTML=Qe),O=u(m),ve=c(m,"DIV",{class:!0});var an=D(ve);Je=F(an,!1),an.forEach(y),we=u(m),ze=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ze)!=="svelte-19lyqfn"&&(ze.innerHTML=z),G=u(m),ke=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ke)!=="svelte-1ag31e0"&&(ke.textContent=Ge),q=u(m),re=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(re)!=="svelte-1ysabik"&&(re.textContent=ht),K=u(m),Z=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Z)!=="svelte-mxfe5q"&&(Z.innerHTML=Ke),P=u(m),A=c(m,"DIV",{class:!0});var Bt=D(A);L=At(Bt,"If we were to go back to the example of a simple variable declaration "),$e=c(Bt,"CODE",{"data-svelte-h":!0}),f($e)!=="svelte-xlrv0q"&&($e.textContent=it),ee=At(Bt,`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),be=c(Bt,"DIV",{class:!0});var jt=D(be);ut=F(jt,!1),jt.forEach(y),Bt.forEach(y),Ae=u(m),_e=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(_e)!=="svelte-1efdofv"&&(_e.innerHTML=Le),kt=u(m),je=c(m,"DIV",{class:!0});var Qt=D(je);pe=F(Qt,!1),Qt.forEach(y),_t=u(m),te=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(te)!=="svelte-17vyc53"&&(te.innerHTML=at),bt=u(m),ne=c(m,"DIV",{class:!0});var _=D(ne);Be=F(_,!1),_.forEach(y),ce=u(m),S=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(S)!=="svelte-1hhuaj3"&&(S.innerHTML=Ht),Ne=u(m),de=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(de)!=="svelte-nv7ukz"&&(de.textContent=mt),st=u(m),ye=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ye)!=="svelte-1cuqjru"&&(ye.textContent=ot),Ye=u(m),Te=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Te)!=="svelte-bpjzwy"&&(Te.textContent=Xe),We=u(m),Ce=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Ce)!=="svelte-25yo3g"&&(Ce.textContent=Ze),Ve=u(m),Re=c(m,"DIV",{class:!0});var Nt=D(Re);pt=F(Nt,!1),Nt.forEach(y),Ue=u(m),Pe=c(m,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),f(Pe)!=="svelte-6j4ehz"&&(Pe.innerHTML=lt),qe=u(m),Ot(ie.$$.fragment,m),j=u(m),R=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(R)!=="svelte-s454o8"&&(R.innerHTML=ft),yt=u(m),ae=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ae)!=="svelte-yoft6x"&&(ae.innerHTML=rt),et=u(m),He=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(He)!=="svelte-1m8q6hv"&&(He.textContent=tt),gt=u(m),nt=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(nt)!=="svelte-7yzfiu"&&(nt.textContent=Ut),vt=u(m),ct=c(m,"DIV",{class:!0});var sn=D(ct);Mt=F(sn,!1),sn.forEach(y),Fe=u(m),dt=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(dt)!=="svelte-1y0jscx"&&(dt.innerHTML=I),xt=u(m),Ct=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Ct)!=="svelte-1hwghwk"&&(Ct.textContent=Ft),m.forEach(y),Et.forEach(y),this.h()},h(){l(s,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-sub-header"),l(E,"class","blog-paragraph"),l($,"class","blog-paragraph"),l(he,"class","blog-paragraph"),ue.a=null,l(N,"class","blog-code-block"),l(fe,"class","blog-paragraph"),l(ge,"class","blog-paragraph"),Je.a=null,l(ve,"class","blog-code-block"),l(ze,"class","blog-paragraph"),l(ke,"class","blog-paragraph"),l(re,"class","blog-sub-header"),l(Z,"class","blog-paragraph"),ut.a=null,l(be,"class","blog-code-block"),l(A,"class","blog-paragraph"),l(_e,"class","blog-paragraph"),pe.a=null,l(je,"class","blog-code-block"),l(te,"class","blog-paragraph"),Be.a=null,l(ne,"class","blog-code-block"),l(S,"class","blog-paragraph"),l(de,"class","blog-paragraph"),l(ye,"class","blog-sub-header"),l(Te,"class","blog-paragraph"),l(Ce,"class","blog-paragraph"),pt.a=null,l(Re,"class","blog-code-block"),l(Pe,"class","blog-paragraph"),l(Pe,"id","concentric-circle"),l(R,"class","blog-paragraph"),l(ae,"class","blog-paragraph"),l(He,"class","blog-sub-header"),l(nt,"class","blog-paragraph"),Mt.a=null,l(ct,"class","blog-code-block"),l(dt,"class","blog-paragraph"),l(Ct,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","scopes-and-closure-container svelte-1v5cf8r")},m(M,Et){tn(M,t,Et),qt(i,t,null),a(t,n),a(t,e),a(e,s),a(e,p),a(e,d),a(e,v),a(e,b),a(e,V),a(e,H),a(e,X),a(e,E),a(e,Ie),a(e,$),a(e,xe),a(e,he),a(e,oe),a(e,N),ue.m(le,N),a(e,Me),a(e,fe),a(e,Q),a(e,ge),a(e,O),a(e,ve),Je.m(W,ve),a(e,we),a(e,ze),a(e,G),a(e,ke),a(e,q),a(e,re),a(e,K),a(e,Z),a(e,P),a(e,A),a(A,L),a(A,$e),a(A,ee),a(A,be),ut.m(Se,be),a(e,Ae),a(e,_e),a(e,kt),a(e,je),pe.m(Vt,je),a(e,_t),a(e,te),a(e,bt),a(e,ne),Be.m(Lt,ne),a(e,ce),a(e,S),a(e,Ne),a(e,de),a(e,st),a(e,ye),a(e,Ye),a(e,Te),a(e,We),a(e,Ce),a(e,Ve),a(e,Re),pt.m(Oe,Re),a(e,Ue),a(e,Pe),a(e,qe),qt(ie,e,null),a(e,j),a(e,R),a(e,yt),a(e,ae),a(e,et),a(e,He),a(e,gt),a(e,nt),a(e,vt),a(e,ct),Mt.m(Tt,ct),a(e,Fe),a(e,dt),a(e,xt),a(e,Ct),wt=!0},p:Gt,i(M){wt||($t(i.$$.fragment,M),$t(ie.$$.fragment,M),wt=!0)},o(M){St(i.$$.fragment,M),St(ie.$$.fragment,M),wt=!1},d(M){M&&y(t),Jt(i),Jt(ie)}}}class Ci extends Xt{constructor(t){super(),en(this,t,null,Ti,Yt,{})}}const Ii=`
\`\`\`
    var strPrimitive = "I am a string";
    console.log(typeof strPrimitive);				// "string"
    console.log(strPrimitive instanceof String);    // false

    var strObject = new String( "I am a string" );
    console.log(typeof strObject);					// "object"
    console.log(strObject instanceof String);    	// true

    // inspect the object sub-type
    Object.prototype.toString.call( strObject );
\`\`\`
`,Di=`
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
`,$i="\n```\n    var newObj = JSON.parse( JSON.stringify( someObj ) );\n```\n",Si=`
\`\`\`
    var myObj = {
        a: 2
    };

    console.log(Object.getOwnPropertyDescriptor(myObj, "a"));
    // {
    //      value: 2,
    //      writable: true,
    //      enumerable: true,
    //      configurable: true
    // }
\`\`\`
`,Li=`
\`\`\`
    var myObj = {
        a: 2
    };

    Object.preventExtensions(myObj);

    myObj.b = 3;
    console.log(myObj.b); // undefined
\`\`\`
`;function ji(g){let t,i,n,e,s,o="Objects",p,d,w=`Everything in JavaScript is an <code>object</code> - A misconception I have been living with.
			<code>objects</code> are the building blocks in JavaScript but they are one of the 6 primary
			types, which are.
			<div><code>string</code>, <code>number</code>, <code>boolean</code>,
				<code>null</code>,
				<code>undefined</code>, <code>object</code></div>`,v,b,k=`Everything in JavaScript is not an <code>object</code> but there are some some object
			sub-types, which are also referred to as complex primitives. <code>function</code> for example
			is a callable object, and is referred to as the &quot;first class&quot;. <code>Arrays</code> are also
			<code>objects</code>
			with extra behavior, and data organization is more structured. So, what is the difference between
			a primitive <code>string</code> and an <code>object</code> <code>String</code>?`,V,H,B="Built-in objects",X,E,me=`There are multiple <code>object</code> sub-types which are referred to as built-in objects.
			<div><code>String</code>, <code>Number</code>, <code>Boolean</code>,
				<code>Object</code>, <code>Function</code>, <code>Array</code>,
				<code>Date</code>, <code>RegExp</code>, <code>Error</code></div>
			Each of these
			<code>objects</code> can be used as a contructor. Upon invocation it creates a new
			<code>object</code> of the specified type.`,Ie,$,se,xe=T(Ii)+"",he,De,oe=`The example above clearly demarcates the difference between a primitive and an
			<code>object</code> type. The primitive variable is not an instance of the <code>String</code> <code>object</code> type, but is just a primitive literal. In order to perform any operation
			on the the primitive variable it needs to be wrapped in the <code>object</code> type. JavaScript
			handles coercing the value and we do not have to handle that manually.`,N,ue,le="Contents of an object",Me,fe,Ee=`The contents of an <code>object</code> consist of values (which can be any type) stored at
			specific named locations which are called properties. When we declare an <code>object</code> the
			properties are not literally stored in the container. The property names are stored in the container
			and those act as references to the where the actual value is stored.`,Q,ge,Qe=`There are two ways in which one can access <code>object</code> properties.
			<ol class="blog-list-elements"><li><code>.</code> operator</li> <li><code>[ ]</code> operator</li></ol>
			The
			<code>.</code> operator requires the properties to meet the <code>identifier</code> naming
			standards, whereas the <code>[ ]</code> operator can take any <b>UTF-8/unicode</b> compatible string.`,O,ve,Je="Duplicating objects",W,we,ze=`Duplicating <code>objects</code> in JavaScript can be tricky. In general there are two modes
			of copying <code>objects</code> <ol class="blog-list-elements"><li>Shallow copy</li> <li>Deep copy</li></ol>
			Shallow copy creates a new<code>object</code> with the same references and values that the
			original <code>object</code> had. Deep copy on the other hand create new references where
			modifying the newly created <code>object</code> does not modify the original
			<code>object</code>.`,z,G,ke="Not everything can be deep copied in JavaScript. Let's look at an example.",Ge,q,re,ht=T(Di)+"",K,Z,Ke=`The above example creates a circular dependency. <code>myObject</code> has a reference of
			<code>anotherArray</code> and <code>anotherArray</code> has a reference of
			<code>myObject</code>. When trying to make a deep copy of <code>myObj</code> there are some
			considerations. Do we stop as soon as we find the cylical dependency? How do we deep copy a
			function ? These issues make deep copying difficult and for certain <code>objects</code> deep
			copying does not exist. But, there are certain <code>objects</code> that can be deep copied
			and to know which <code>object</code> , we could do something like this.`,P,A,L,$e=T($i)+"",it,ee,be=`When an<code>object</code> is JSON-safe(can be serialized to a JSON string and then re-parsed
			to an <code>object</code> with same structure) it can be deep copied.`,ut,Se,Ae="Property Descriptors",_e,Le,kt=`Prior to ES5 JavaScript did not have a mechanism to distinguish between the characteristics of\r
			properties. But as a of ES5 one can declare and describe properties in terms of a property\r
			descriptor. Let's look at an example below.`,je,pe,Vt,_t=T(Si)+"",te,at,bt=`As we see in the example above each propert described under an <code>object</code> has the
			following properties, which default to true.
			<ol class="blog-list-items"><li>writable</li> <li>enumerable</li> <li>configurable</li></ol> <ol><li>When a property is set to have <code>writable</code> <code>true</code>, it implies that
					the property ca be overwritten with a new value.</li> <li>When a property has <code>configurable</code> set to <code>true</code> it implies that the
					descriptor definition of the property can be changed. When it&#39;s false the descriptor definition
					cannot be changed and also the property cannot be deleted.</li> <li>The <code>enumerable</code> property controls the ability for a property to show up in object-property
					enumerations.</li></ol>`,ne,Be,Lt="Immutability",ce,S,Ht,Ne,de="objects",mt,st,ye="objects",ot,Ye,Te="object",Xe,We,Ce="Object constant",Ze,Ve,Re=`By setting <code>writable: false</code> and <code>configurable: false</code> one can create a
				constant that cannot be redefined or deleted.`,pt,Oe,Ue="Prevent Extensions",Pe,lt,qe="In order to prevent <code>object</code> from having new properties one could do the following",ie,j,R,ft=T(Li)+"",yt,ae,rt="Seal",et,He,tt=`This creates a sealed <code>object</code>, which basically means that it takes an existing
				<code>object</code> and calls <code>preventExtensions</code> on that. This stops one from adding
				extra properties to the object and also stops one from reconfiguring or deleting existing properties.
				The values of properties can still be modified though.`,gt,nt,Ut="Freeze",vt,ct,Mt=`This creates a frozen <code>object</code>. The idea here is that it calls
				<code>Object.seal(...)</code> on the <code>object</code> and marks all the &quot;data accessor&quot;
				properties as <code>writable: false</code>, which stops from the values being changed as
				well. This is the highest form of immutability and one should tread carefully when using
				this.`,Tt;return i=new dn({}),{c(){t=r("div"),Rt(i.$$.fragment),n=h(),e=r("div"),s=r("div"),s.textContent=o,p=h(),d=r("div"),d.innerHTML=w,v=h(),b=r("div"),b.innerHTML=k,V=h(),H=r("div"),H.textContent=B,X=h(),E=r("div"),E.innerHTML=me,Ie=h(),$=r("div"),se=new U(!1),he=h(),De=r("div"),De.innerHTML=oe,N=h(),ue=r("div"),ue.textContent=le,Me=h(),fe=r("div"),fe.innerHTML=Ee,Q=h(),ge=r("div"),ge.innerHTML=Qe,O=h(),ve=r("div"),ve.textContent=Je,W=h(),we=r("div"),we.innerHTML=ze,z=h(),G=r("div"),G.textContent=ke,Ge=h(),q=r("div"),re=new U(!1),K=h(),Z=r("div"),Z.innerHTML=Ke,P=h(),A=r("div"),L=new U(!1),it=h(),ee=r("div"),ee.innerHTML=be,ut=h(),Se=r("div"),Se.textContent=Ae,_e=h(),Le=r("div"),Le.textContent=kt,je=h(),pe=r("div"),Vt=new U(!1),te=h(),at=r("div"),at.innerHTML=bt,ne=h(),Be=r("div"),Be.textContent=Lt,ce=h(),S=r("div"),Ht=zt("Immutability in JavaScript is for creating "),Ne=r("code"),Ne.textContent=de,mt=zt(` that cannot be changed. This\r
			can be done in numerous ways in JavaScript. One thing to remember though is that the following\r
			methods only create shallow immutability and do no affect `),st=r("code"),st.textContent=ye,ot=zt(` that are\r
			referenced inside another `),Ye=r("code"),Ye.textContent=Te,Xe=h(),We=r("div"),We.textContent=Ce,Ze=h(),Ve=r("div"),Ve.innerHTML=Re,pt=h(),Oe=r("div"),Oe.textContent=Ue,Pe=h(),lt=r("div"),lt.innerHTML=qe,ie=h(),j=r("div"),R=new U(!1),yt=h(),ae=r("div"),ae.textContent=rt,et=h(),He=r("div"),He.innerHTML=tt,gt=h(),nt=r("div"),nt.textContent=Ut,vt=h(),ct=r("div"),ct.innerHTML=Mt,this.h()},l(Fe){t=c(Fe,"DIV",{class:!0});var dt=D(t);Ot(i.$$.fragment,dt),n=u(dt),e=c(dt,"DIV",{class:!0});var I=D(e);s=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(s)!=="svelte-1n79vke"&&(s.textContent=o),p=u(I),d=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-11p56ks"&&(d.innerHTML=w),v=u(I),b=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-uet2gk"&&(b.innerHTML=k),V=u(I),H=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-1ne7xc4"&&(H.textContent=B),X=u(I),E=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(E)!=="svelte-1kd7iyb"&&(E.innerHTML=me),Ie=u(I),$=c(I,"DIV",{class:!0});var xt=D($);se=F(xt,!1),xt.forEach(y),he=u(I),De=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(De)!=="svelte-c2a3yy"&&(De.innerHTML=oe),N=u(I),ue=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ue)!=="svelte-16wez9v"&&(ue.textContent=le),Me=u(I),fe=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(fe)!=="svelte-1mmcxk6"&&(fe.innerHTML=Ee),Q=u(I),ge=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ge)!=="svelte-1ic1k41"&&(ge.innerHTML=Qe),O=u(I),ve=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ve)!=="svelte-uy212c"&&(ve.textContent=Je),W=u(I),we=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(we)!=="svelte-5fived"&&(we.innerHTML=ze),z=u(I),G=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(G)!=="svelte-8wh7q"&&(G.textContent=ke),Ge=u(I),q=c(I,"DIV",{class:!0});var Ct=D(q);re=F(Ct,!1),Ct.forEach(y),K=u(I),Z=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(Z)!=="svelte-5gt4vt"&&(Z.innerHTML=Ke),P=u(I),A=c(I,"DIV",{class:!0});var Ft=D(A);L=F(Ft,!1),Ft.forEach(y),it=u(I),ee=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ee)!=="svelte-1lkjbvc"&&(ee.innerHTML=be),ut=u(I),Se=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(Se)!=="svelte-36lpxh"&&(Se.textContent=Ae),_e=u(I),Le=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(Le)!=="svelte-1lbvmvj"&&(Le.textContent=kt),je=u(I),pe=c(I,"DIV",{class:!0});var wt=D(pe);Vt=F(wt,!1),wt.forEach(y),te=u(I),at=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(at)!=="svelte-xyynwe"&&(at.innerHTML=bt),ne=u(I),Be=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(Be)!=="svelte-iti38i"&&(Be.textContent=Lt),ce=u(I),S=c(I,"DIV",{class:!0});var M=D(S);Ht=At(M,"Immutability in JavaScript is for creating "),Ne=c(M,"CODE",{"data-svelte-h":!0}),f(Ne)!=="svelte-zga2ka"&&(Ne.textContent=de),mt=At(M,` that cannot be changed. This\r
			can be done in numerous ways in JavaScript. One thing to remember though is that the following\r
			methods only create shallow immutability and do no affect `),st=c(M,"CODE",{"data-svelte-h":!0}),f(st)!=="svelte-zga2ka"&&(st.textContent=ye),ot=At(M,` that are\r
			referenced inside another `),Ye=c(M,"CODE",{"data-svelte-h":!0}),f(Ye)!=="svelte-s6nf5f"&&(Ye.textContent=Te),Xe=u(M),We=c(M,"DIV",{class:!0,"data-svelte-h":!0}),f(We)!=="svelte-3ge1n4"&&(We.textContent=Ce),Ze=u(M),Ve=c(M,"DIV",{"data-svelte-h":!0}),f(Ve)!=="svelte-1csof2y"&&(Ve.innerHTML=Re),pt=u(M),Oe=c(M,"DIV",{class:!0,"data-svelte-h":!0}),f(Oe)!=="svelte-545yhj"&&(Oe.textContent=Ue),Pe=u(M),lt=c(M,"DIV",{"data-svelte-h":!0}),f(lt)!=="svelte-1wn0qj7"&&(lt.innerHTML=qe),ie=u(M),j=c(M,"DIV",{class:!0});var Et=D(j);R=F(Et,!1),Et.forEach(y),yt=u(M),ae=c(M,"DIV",{class:!0,"data-svelte-h":!0}),f(ae)!=="svelte-d996dc"&&(ae.textContent=rt),et=u(M),He=c(M,"DIV",{"data-svelte-h":!0}),f(He)!=="svelte-1prk1jv"&&(He.innerHTML=tt),gt=u(M),nt=c(M,"DIV",{class:!0,"data-svelte-h":!0}),f(nt)!=="svelte-1lrxxu"&&(nt.textContent=Ut),vt=u(M),ct=c(M,"DIV",{"data-svelte-h":!0}),f(ct)!=="svelte-3x5zpc"&&(ct.innerHTML=Mt),M.forEach(y),I.forEach(y),dt.forEach(y),this.h()},h(){l(s,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-sub-header"),l(E,"class","blog-paragraph"),se.a=null,l($,"class","blog-code-block"),l(De,"class","blog-paragraph"),l(ue,"class","blog-sub-header"),l(fe,"class","blog-paragraph"),l(ge,"class","blog-paragraph"),l(ve,"class","blog-sub-header"),l(we,"class","blog-paragraph"),l(G,"class","blog-paragraph"),re.a=null,l(q,"class","blog-code-block"),l(Z,"class","blog-paragraph"),L.a=null,l(A,"class","blog-code-block"),l(ee,"class","blog-paragraph"),l(Se,"class","blog-sub-header"),l(Le,"class","blog-paragraph"),Vt.a=null,l(pe,"class","blog-code-block"),l(at,"class","blog-paragraph"),l(Be,"class","blog-sub-header"),l(We,"class","blog-paragraph-sub-header"),l(Oe,"class","blog-paragraph-sub-header"),R.a=null,l(j,"class","blog-code-block"),l(ae,"class","blog-paragraph-sub-header"),l(nt,"class","blog-paragraph-sub-header"),l(S,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","objects_container svelte-17riu38")},m(Fe,dt){tn(Fe,t,dt),qt(i,t,null),a(t,n),a(t,e),a(e,s),a(e,p),a(e,d),a(e,v),a(e,b),a(e,V),a(e,H),a(e,X),a(e,E),a(e,Ie),a(e,$),se.m(xe,$),a(e,he),a(e,De),a(e,N),a(e,ue),a(e,Me),a(e,fe),a(e,Q),a(e,ge),a(e,O),a(e,ve),a(e,W),a(e,we),a(e,z),a(e,G),a(e,Ge),a(e,q),re.m(ht,q),a(e,K),a(e,Z),a(e,P),a(e,A),L.m($e,A),a(e,it),a(e,ee),a(e,ut),a(e,Se),a(e,_e),a(e,Le),a(e,je),a(e,pe),Vt.m(_t,pe),a(e,te),a(e,at),a(e,ne),a(e,Be),a(e,ce),a(e,S),a(S,Ht),a(S,Ne),a(S,mt),a(S,st),a(S,ot),a(S,Ye),a(S,Xe),a(S,We),a(S,Ze),a(S,Ve),a(S,pt),a(S,Oe),a(S,Pe),a(S,lt),a(S,ie),a(S,j),R.m(ft,j),a(S,yt),a(S,ae),a(S,et),a(S,He),a(S,gt),a(S,nt),a(S,vt),a(S,ct),Tt=!0},p:Gt,i(Fe){Tt||($t(i.$$.fragment,Fe),Tt=!0)},o(Fe){St(i.$$.fragment,Fe),Tt=!1},d(Fe){Fe&&y(t),Jt(i)}}}class Vi extends Xt{constructor(t){super(),en(this,t,null,ji,Yt,{})}}const Hi=`
\`\`\`
    function foo() {
        console.log( this.a );
    }

    var a = 2;

    foo(); // 2
\`\`\`
`,Mi=`
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
 `,Ei=`
  \`\`\`
    function foo(a) {
        this.a = a
    }

    var bar = new foo(10);
    console.log(bar.a); // 10
  \`\`\`
  `,zi=`
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
`,Ai=`
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
`,Ri=`
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
`,Oi=`
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
`;function qi(g){let t,i,n,e,s,o="Understanding This",p,d,w=`The first time I was introduced to the keyword <code>this</code>, there was only confusion. My
			confusion stemmed from the question, what really is <code>this</code>? We were learning the
			programming language<b>C#</b> and <code>this</code> referred to the class reference. Even
			though it&#39;s easier to grasp the concept in the context of a language like <b>C#</b>, I still
			found it a bit confusing. Now, years later reading about the <code>this</code> keyword in JavaScript
			brought back those memories.`,v,b,k=`The <code>this</code> keyword in JavaScript has a very different usecase. Carrying the idea of
			the class reference in <b>C#</b> to functions in JavaScript created a misconception for me
			personally and it is quite common among developers too. I assumed the <code>this</code> reference
			in a function referred to the function itself.`,V,H,B=`<code>this</code> is not an author time binding, but a runtime binding. The binding has
			nothing to do with where the function is declared, but everything to do with where and how the
			function is called. When a function gets invoked in JavaScript, it creates an activation
			record, which is also known as an execution context. This record contains information about
			<ul class="blog-list-elements"><li>Where the function was called from</li> <li>How the function was invoked</li> <li>What parameters were passed, etc.</li></ul>
			Amongst that list of properties in the execution context there is another one, which is the
			<code>this</code> reference and that&#39;s used for the duration of the function execution. To
			understand how <code>this</code> gets bound, we need to understand the rules that govern the behavior.`,X,E,me="Rules for <code>this</code> binding",Ie,$,se=`There are four rules that explain how the <code>this</code> binding works.
			<ol class="blog-list-elements"><li>Default binding</li> <li>Implicit binding</li> <li>Explicit binding</li> <li>New binding</li></ol>`,xe,he,De="Default binding",oe,N,ue,le,Me="Default binding",fe,Ee,Q,ge=T(Hi)+"",Qe,O,ve=`The call-site in the above example is in the global context and this resolves to the global\r
				context.`,Je,W,we="Implicit binding",ze,z,G,ke,Ge="object",q,re,ht="object",K,Z,Ke="obj",P,A,L,$e=T(Mi)+"",it,ee,be=`The way<code>foo</code> gets referenced in the<code>obj</code> does not imply that it is
				owned by the said <code>object</code>. Since, there exists a context <code>object</code>
				that references the function at the call-site, the implicit binding rules state that the
				<code>function</code> is owned by the context <code>object</code>.`,ut,Se,Ae=`When <code>this</code> gets implicity bound the context becomes synonmous with the owning
				<code>object</code>. In the above case <code>this.a</code> is synonmous with
				<code>obj.a</code>`,_e,Le,kt="Explicit binding",je,pe,Vt=`Explicit binding allows us to explicitly state the <code>object</code> that would act as the
			context <code>object</code> for the function that&#39;s invoked. In order to achieve this, every
			function in JavaScript is provided with utilities and two of them are.
			<ol class="blog-list-elements"><li><code>call</code></li> <li><code>apply</code></li></ol>
			The first parameter of the above utilities is an<code>object</code> which is implied that it
			is used for the <code>this</code> binding. When a simple primitive (<code>string</code>,
			<code>number</code> ..) gets passed it is wrapped in it&#39;s <code>object</code> form and this is
			referred to as <b>Boxing</b>.`,_t,te,at="<code>new</code> binding",bt,ne,Be=`JavaScript <code>new</code> operator unlike the <code>new</code> operator found in object
			oriented programming languages does not call a <code>function</code> that has a constructor
			but instead makes a contructor call that returns a new <code>object</code>. What&#39;s important
			to us here is the idea of <code>this</code> binding through the usage of the <code>new</code>
			operator.`,Lt,ce,S,Ht=T(Ei)+"",Ne,de,mt=`The example above contructs a new <code>object</code> and binds that new <code>object</code>
			to the call of <code>foo</code>. This sums up all the rules for binding <code>this</code> but,
			there is an order of precedence.`,st,ye,ot="Order of precedence",Ye,Te,Xe=`The order of precedence is somewhat like this
			<ol class="blog-list-elements"><li>If the <code>new</code> operator is used, use the newly created <code>object</code></li> <li>If the call-site uses <code>call</code> or <code>apply</code> use the specified
					<code>object</code></li> <li>If called with a context <code>object</code> then use that <code>object</code></li> <li>Finally, the default binding</li></ol>`,We,Ce,Ze="Lost bindings - Hard binding",Ve,Re,pt=`Bindings sometime can get lost, which usually implies that it's fallen back to the default\r
			binding.`,Oe,Ue,Pe,lt=T(zi)+"",qe,ie,j=`In the above example the function <code>foo()</code> is implicity bound to the
			<code>object obj</code> which in turn is assigned to the variable <code>bar</code>. When
			<code>bar</code> is invoked, it&#39;s invoked without any decoration and it&#39;s just another
			reference to <code>foo</code>. There is a fix for such a scenario and we call it Hard binding`,R,ft,yt="Hard binding",ae,rt,et="Hard binding is a variation around the explicit binding which seals the binding.",He,tt,gt,nt=T(Ai)+"",Ut,vt,ct=`The function <code>bar()</code> calls foo with an explicit bind intention and sets
			<code>obj</code> to be the <code>this</code> context. No matter how we invoke <code>bar</code>
			after this, it always binds <code>obj</code> to the function <code>foo</code>&#39;s
			<code>this</code> context. This type of binding is explicit and strong and that&#39;s why it&#39;s
			referred to as <b>Hard binding</b>. Another way to express this pattern is to create a
			reusable helper method.`,Mt,Tt,Fe,dt=T(Ri)+"",I,xt,Ct="Since hard binding is such a common pattern, it's provided as a built-in utility as of ES5.",Ft,wt,M,Et=T(Oi)+"",m,Pt,an="That&#39;s a general idea of the <code>this</code> keyword, phew!",Bt;return i=new dn({}),{c(){t=r("div"),Rt(i.$$.fragment),n=h(),e=r("div"),s=r("div"),s.textContent=o,p=h(),d=r("div"),d.innerHTML=w,v=h(),b=r("div"),b.innerHTML=k,V=h(),H=r("div"),H.innerHTML=B,X=h(),E=r("div"),E.innerHTML=me,Ie=h(),$=r("div"),$.innerHTML=se,xe=h(),he=r("div"),he.textContent=De,oe=h(),N=r("div"),ue=zt(`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),le=r("b"),le.textContent=Me,fe=zt(`. An example!\r
			`),Ee=r("div"),Q=new U(!1),Qe=h(),O=r("div"),O.textContent=ve,Je=h(),W=r("div"),W.textContent=we,ze=h(),z=r("div"),G=zt("This rule determines if the call-site has a context "),ke=r("code"),ke.textContent=Ge,q=zt(` which can also be\r
			referred to as the owning object. In the example below that context `),re=r("code"),re.textContent=ht,K=zt(` is\r
			`),Z=r("code"),Z.textContent=Ke,P=h(),A=r("div"),L=new U(!1),it=h(),ee=r("div"),ee.innerHTML=be,ut=h(),Se=r("div"),Se.innerHTML=Ae,_e=h(),Le=r("div"),Le.textContent=kt,je=h(),pe=r("div"),pe.innerHTML=Vt,_t=h(),te=r("div"),te.innerHTML=at,bt=h(),ne=r("div"),ne.innerHTML=Be,Lt=h(),ce=r("div"),S=new U(!1),Ne=h(),de=r("div"),de.innerHTML=mt,st=h(),ye=r("div"),ye.textContent=ot,Ye=h(),Te=r("div"),Te.innerHTML=Xe,We=h(),Ce=r("div"),Ce.textContent=Ze,Ve=h(),Re=r("div"),Re.textContent=pt,Oe=h(),Ue=r("div"),Pe=new U(!1),qe=h(),ie=r("div"),ie.innerHTML=j,R=h(),ft=r("div"),ft.textContent=yt,ae=h(),rt=r("div"),rt.textContent=et,He=h(),tt=r("div"),gt=new U(!1),Ut=h(),vt=r("div"),vt.innerHTML=ct,Mt=h(),Tt=r("div"),Fe=new U(!1),I=h(),xt=r("div"),xt.textContent=Ct,Ft=h(),wt=r("div"),M=new U(!1),m=h(),Pt=r("div"),Pt.innerHTML=an,this.h()},l(jt){t=c(jt,"DIV",{class:!0});var Qt=D(t);Ot(i.$$.fragment,Qt),n=u(Qt),e=c(Qt,"DIV",{class:!0});var _=D(e);s=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(s)!=="svelte-4whgq2"&&(s.textContent=o),p=u(_),d=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-kz4lmi"&&(d.innerHTML=w),v=u(_),b=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-1hs8980"&&(b.innerHTML=k),V=u(_),H=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-19qb0p4"&&(H.innerHTML=B),X=u(_),E=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(E)!=="svelte-bbtnld"&&(E.innerHTML=me),Ie=u(_),$=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f($)!=="svelte-1231oos"&&($.innerHTML=se),xe=u(_),he=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(he)!=="svelte-g9a91e"&&(he.textContent=De),oe=u(_),N=c(_,"DIV",{class:!0});var Nt=D(N);ue=At(Nt,`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),le=c(Nt,"B",{"data-svelte-h":!0}),f(le)!=="svelte-1y3shn8"&&(le.textContent=Me),fe=At(Nt,`. An example!\r
			`),Ee=c(Nt,"DIV",{class:!0});var sn=D(Ee);Q=F(sn,!1),sn.forEach(y),Qe=u(Nt),O=c(Nt,"DIV",{class:!0,"data-svelte-h":!0}),f(O)!=="svelte-8avcu5"&&(O.textContent=ve),Nt.forEach(y),Je=u(_),W=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(W)!=="svelte-mu8xb6"&&(W.textContent=we),ze=u(_),z=c(_,"DIV",{class:!0});var It=D(z);G=At(It,"This rule determines if the call-site has a context "),ke=c(It,"CODE",{"data-svelte-h":!0}),f(ke)!=="svelte-s6nf5f"&&(ke.textContent=Ge),q=At(It,` which can also be\r
			referred to as the owning object. In the example below that context `),re=c(It,"CODE",{"data-svelte-h":!0}),f(re)!=="svelte-s6nf5f"&&(re.textContent=ht),K=At(It,` is\r
			`),Z=c(It,"CODE",{"data-svelte-h":!0}),f(Z)!=="svelte-vvasqx"&&(Z.textContent=Ke),P=u(It),A=c(It,"DIV",{class:!0});var In=D(A);L=F(In,!1),In.forEach(y),it=u(It),ee=c(It,"DIV",{class:!0,"data-svelte-h":!0}),f(ee)!=="svelte-1u26aq3"&&(ee.innerHTML=be),ut=u(It),Se=c(It,"DIV",{class:!0,"data-svelte-h":!0}),f(Se)!=="svelte-1pd2x54"&&(Se.innerHTML=Ae),It.forEach(y),_e=u(_),Le=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Le)!=="svelte-15pd8q3"&&(Le.textContent=kt),je=u(_),pe=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(pe)!=="svelte-19lb28g"&&(pe.innerHTML=Vt),_t=u(_),te=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(te)!=="svelte-1gams9s"&&(te.innerHTML=at),bt=u(_),ne=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ne)!=="svelte-1jy3h5k"&&(ne.innerHTML=Be),Lt=u(_),ce=c(_,"DIV",{class:!0});var Dn=D(ce);S=F(Dn,!1),Dn.forEach(y),Ne=u(_),de=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(de)!=="svelte-jkk5u5"&&(de.innerHTML=mt),st=u(_),ye=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ye)!=="svelte-3baxvp"&&(ye.textContent=ot),Ye=u(_),Te=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Te)!=="svelte-5anpcm"&&(Te.innerHTML=Xe),We=u(_),Ce=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ce)!=="svelte-w7xtgf"&&(Ce.textContent=Ze),Ve=u(_),Re=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Re)!=="svelte-1h8kfrd"&&(Re.textContent=pt),Oe=u(_),Ue=c(_,"DIV",{class:!0});var $n=D(Ue);Pe=F($n,!1),$n.forEach(y),qe=u(_),ie=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ie)!=="svelte-1bt0v8s"&&(ie.innerHTML=j),R=u(_),ft=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ft)!=="svelte-1h8jj0c"&&(ft.textContent=yt),ae=u(_),rt=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(rt)!=="svelte-pfj1ln"&&(rt.textContent=et),He=u(_),tt=c(_,"DIV",{class:!0});var Sn=D(tt);gt=F(Sn,!1),Sn.forEach(y),Ut=u(_),vt=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(vt)!=="svelte-ui5am2"&&(vt.innerHTML=ct),Mt=u(_),Tt=c(_,"DIV",{class:!0});var Ln=D(Tt);Fe=F(Ln,!1),Ln.forEach(y),I=u(_),xt=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(xt)!=="svelte-1vqldzj"&&(xt.textContent=Ct),Ft=u(_),wt=c(_,"DIV",{class:!0});var jn=D(wt);M=F(jn,!1),jn.forEach(y),m=u(_),Pt=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Pt)!=="svelte-l9usji"&&(Pt.innerHTML=an),_.forEach(y),Qt.forEach(y),this.h()},h(){l(s,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-paragraph"),l(E,"class","blog-sub-header"),l($,"class","blog-paragraph"),l(he,"class","blog-sub-header"),Q.a=null,l(Ee,"class","blog-code-block"),l(O,"class","blog-paragraph"),l(N,"class","blog-paragraph"),l(W,"class","blog-sub-header"),L.a=null,l(A,"class","blog-code-block"),l(ee,"class","blog-paragraph"),l(Se,"class","blog-paragraph"),l(z,"class","blog-paragraph"),l(Le,"class","blog-sub-header"),l(pe,"class","blog-paragraph"),l(te,"class","blog-sub-header"),l(ne,"class","blog-paragraph"),S.a=null,l(ce,"class","blog-code-block"),l(de,"class","blog-paragraph"),l(ye,"class","blog-sub-header"),l(Te,"class","blog-paragraph"),l(Ce,"class","blog-sub-header"),l(Re,"class","blog-paragraph"),Pe.a=null,l(Ue,"class","blog-code-block"),l(ie,"class","blog-paragraph"),l(ft,"class","blog-sub-header"),l(rt,"class","blog-paragraph"),gt.a=null,l(tt,"class","blog-code-block"),l(vt,"class","blog-paragraph"),Fe.a=null,l(Tt,"class","blog-code-block"),l(xt,"class","blog-paragraph"),M.a=null,l(wt,"class","blog-code-block"),l(Pt,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","understanding_this_container svelte-1aivc9z")},m(jt,Qt){tn(jt,t,Qt),qt(i,t,null),a(t,n),a(t,e),a(e,s),a(e,p),a(e,d),a(e,v),a(e,b),a(e,V),a(e,H),a(e,X),a(e,E),a(e,Ie),a(e,$),a(e,xe),a(e,he),a(e,oe),a(e,N),a(N,ue),a(N,le),a(N,fe),a(N,Ee),Q.m(ge,Ee),a(N,Qe),a(N,O),a(e,Je),a(e,W),a(e,ze),a(e,z),a(z,G),a(z,ke),a(z,q),a(z,re),a(z,K),a(z,Z),a(z,P),a(z,A),L.m($e,A),a(z,it),a(z,ee),a(z,ut),a(z,Se),a(e,_e),a(e,Le),a(e,je),a(e,pe),a(e,_t),a(e,te),a(e,bt),a(e,ne),a(e,Lt),a(e,ce),S.m(Ht,ce),a(e,Ne),a(e,de),a(e,st),a(e,ye),a(e,Ye),a(e,Te),a(e,We),a(e,Ce),a(e,Ve),a(e,Re),a(e,Oe),a(e,Ue),Pe.m(lt,Ue),a(e,qe),a(e,ie),a(e,R),a(e,ft),a(e,ae),a(e,rt),a(e,He),a(e,tt),gt.m(nt,tt),a(e,Ut),a(e,vt),a(e,Mt),a(e,Tt),Fe.m(dt,Tt),a(e,I),a(e,xt),a(e,Ft),a(e,wt),M.m(Et,wt),a(e,m),a(e,Pt),Bt=!0},p:Gt,i(jt){Bt||($t(i.$$.fragment,jt),Bt=!0)},o(jt){St(i.$$.fragment,jt),Bt=!1},d(jt){jt&&y(t),Jt(i)}}}class Ji extends Xt{constructor(t){super(),en(this,t,null,qi,Yt,{})}}function Pi(g){let t,i;return t=new Vi({}),{c(){Rt(t.$$.fragment)},l(n){Ot(t.$$.fragment,n)},m(n,e){qt(t,n,e),i=!0},i(n){i||($t(t.$$.fragment,n),i=!0)},o(n){St(t.$$.fragment,n),i=!1},d(n){Jt(t,n)}}}function Bi(g){let t,i;return t=new Ji({}),{c(){Rt(t.$$.fragment)},l(n){Ot(t.$$.fragment,n)},m(n,e){qt(t,n,e),i=!0},i(n){i||($t(t.$$.fragment,n),i=!0)},o(n){St(t.$$.fragment,n),i=!1},d(n){Jt(t,n)}}}function Ni(g){let t,i;return t=new fi({}),{c(){Rt(t.$$.fragment)},l(n){Ot(t.$$.fragment,n)},m(n,e){qt(t,n,e),i=!0},i(n){i||($t(t.$$.fragment,n),i=!0)},o(n){St(t.$$.fragment,n),i=!1},d(n){Jt(t,n)}}}function Wi(g){let t,i;return t=new Ci({}),{c(){Rt(t.$$.fragment)},l(n){Ot(t.$$.fragment,n)},m(n,e){qt(t,n,e),i=!0},i(n){i||($t(t.$$.fragment,n),i=!0)},o(n){St(t.$$.fragment,n),i=!1},d(n){Jt(t,n)}}}function Zi(g){let t,i;return t=new ri({}),{c(){Rt(t.$$.fragment)},l(n){Ot(t.$$.fragment,n)},m(n,e){qt(t,n,e),i=!0},i(n){i||($t(t.$$.fragment,n),i=!0)},o(n){St(t.$$.fragment,n),i=!1},d(n){Jt(t,n)}}}function Ui(g){let t,i,n,e;const s=[Zi,Wi,Ni,Bi,Pi],o=[];function p(d,w){return d[0].path===_n?0:d[0].path===kn?1:d[0].path===wn?2:d[0].path===xn?3:d[0].path===mn?4:-1}return~(i=p(g))&&(n=o[i]=s[i](g)),{c(){t=r("div"),n&&n.c(),this.h()},l(d){t=c(d,"DIV",{class:!0});var w=D(t);n&&n.l(w),w.forEach(y),this.h()},h(){l(t,"class","blog-container")},m(d,w){tn(d,t,w),~i&&o[i].m(t,null),e=!0},p(d,[w]){let v=i;i=p(d),i!==v&&(n&&(Wn(),St(o[v],1,1,()=>{o[v]=null}),Nn()),~i?(n=o[i],n||(n=o[i]=s[i](d),n.c()),$t(n,1),n.m(t,null)):n=null)},i(d){e||($t(n),e=!0)},o(d){St(n),e=!1},d(d){d&&y(t),~i&&o[i].d()}}}function Fi(g,t,i){let{data:n}=t;return g.$$set=e=>{"data"in e&&i(0,n=e.data)},[n]}class ea extends Xt{constructor(t){super(),en(this,t,Fi,Ui,Yt,{data:0})}}export{ea as component,Xi as universal};
