var On=Object.defineProperty;var Jn=(g,t,i)=>t in g?On(g,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):g[t]=i;var F=(g,t,i)=>(Jn(g,typeof t!="symbol"?t+"":t,i),i),Pn=(g,t,i)=>{if(!t.has(g))throw TypeError("Cannot "+i)};var vn=(g,t,i)=>{if(t.has(g))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(g):t.set(g,i)};var hn=(g,t,i)=>(Pn(g,t,"access private method"),i);import{e as Bn,O as mn,U as xn,C as kn,S as wn,a as _n,A as dn}from"../chunks/article-main-header.db0717c9.js";import{s as Ft,n as Wt}from"../chunks/scheduler.e108d1fd.js";import{S as Qt,i as Gt,g as r,r as vt,s as h,m as Bt,H as K,h as c,j as D,u as bt,c as u,y as f,n as Nt,B as Y,f as y,k as l,a as Kt,v as mt,x as s,d as it,t as st,w as xt,C as on,D as ln,b as Nn,p as Wn}from"../chunks/index.2b92d2ca.js";function Zn({params:g}){switch(g.slug){case _n:return{path:_n};case wn:return{path:wn};case kn:return{path:kn};case xn:return{path:xn};case mn:return{path:mn};default:throw Bn(404,"Not found")}}const Ki=Object.freeze(Object.defineProperty({__proto__:null,load:Zn},Symbol.toStringTag,{value:"Module"}));function Tn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Yt=Tn();function zn(g){Yt=g}const An=/[&<>"']/,Un=new RegExp(An.source,"g"),Rn=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fn=new RegExp(Rn.source,"g"),Qn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jn=g=>Qn[g];function nt(g,t){if(t){if(An.test(g))return g.replace(Un,jn)}else if(Rn.test(g))return g.replace(Fn,jn);return g}const Gn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kn(g){return g.replace(Gn,(t,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const Yn=/(^|[^\[])\^/g;function R(g,t){g=typeof g=="string"?g:g.source,t=t||"";const i={replace:(n,e)=>(e=typeof e=="object"&&"source"in e?e.source:e,e=e.replace(Yn,"$1"),g=g.replace(n,e),i),getRegex:()=>new RegExp(g,t)};return i}function Vn(g){try{g=encodeURI(g).replace(/%25/g,"%")}catch{return null}return g}const un={exec:()=>null};function Mn(g,t){const i=g.replace(/\|/g,(a,o,p)=>{let d=!1,k=o;for(;--k>=0&&p[k]==="\\";)d=!d;return d?"|":" |"}),n=i.split(/ \|/);let e=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;e<n.length;e++)n[e]=n[e].trim().replace(/\\\|/g,"|");return n}function bn(g,t,i){const n=g.length;if(n===0)return"";let e=0;for(;e<n;){const a=g.charAt(n-e-1);if(a===t&&!i)e++;else if(a!==t&&i)e++;else break}return g.slice(0,n-e)}function Xn(g,t){if(g.indexOf(t[1])===-1)return-1;let i=0;for(let n=0;n<g.length;n++)if(g[n]==="\\")n++;else if(g[n]===t[0])i++;else if(g[n]===t[1]&&(i--,i<0))return n;return-1}function En(g,t,i,n){const e=t.href,a=t.title?nt(t.title):null,o=g[1].replace(/\\([\[\]])/g,"$1");if(g[0].charAt(0)!=="!"){n.state.inLink=!0;const p={type:"link",raw:i,href:e,title:a,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,p}return{type:"image",raw:i,href:e,title:a,text:nt(o)}}function ei(g,t){const i=g.match(/^(\s+)(?:```)/);if(i===null)return t;const n=i[1];return t.split(`
`).map(e=>{const a=e.match(/^\s+/);if(a===null)return e;const[o]=a;return o.length>=n.length?e.slice(n.length):e}).join(`
`)}class pn{constructor(t){F(this,"options");F(this,"rules");F(this,"lexer");this.options=t||Yt}space(t){const i=this.rules.block.newline.exec(t);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(t){const i=this.rules.block.code.exec(t);if(i){const n=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?n:bn(n,`
`)}}}fences(t){const i=this.rules.block.fences.exec(t);if(i){const n=i[0],e=ei(n,i[3]||"");return{type:"code",raw:n,lang:i[2]?i[2].trim().replace(this.rules.inline._escapes,"$1"):i[2],text:e}}}heading(t){const i=this.rules.block.heading.exec(t);if(i){let n=i[2].trim();if(/#$/.test(n)){const e=bn(n,"#");(this.options.pedantic||!e||/ $/.test(e))&&(n=e.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const i=this.rules.block.hr.exec(t);if(i)return{type:"hr",raw:i[0]}}blockquote(t){const i=this.rules.block.blockquote.exec(t);if(i){const n=i[0].replace(/^ *>[ \t]?/gm,""),e=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(n);return this.lexer.state.top=e,{type:"blockquote",raw:i[0],tokens:a,text:n}}}list(t){let i=this.rules.block.list.exec(t);if(i){let n=i[1].trim();const e=n.length>1,a={type:"list",raw:"",ordered:e,start:e?+n.slice(0,-1):"",loose:!1,items:[]};n=e?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=e?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",d="",k=!1;for(;t;){let v=!1;if(!(i=o.exec(t))||this.rules.block.hr.test(t))break;p=i[0],t=t.substring(p.length);let b=i[2].split(`
`,1)[0].replace(/^\t+/,j=>" ".repeat(3*j.length)),w=t.split(`
`,1)[0],L=0;this.options.pedantic?(L=2,d=b.trimStart()):(L=i[2].search(/[^ ]/),L=L>4?1:L,d=b.slice(L),L+=i[1].length);let H=!1;if(!b&&/^ *$/.test(w)&&(p+=w+`
`,t=t.substring(w.length+1),v=!0),!v){const j=new RegExp(`^ {0,${Math.min(3,L-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),he=new RegExp(`^ {0,${Math.min(3,L-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),xe=new RegExp(`^ {0,${Math.min(3,L-1)}}(?:\`\`\`|~~~)`),$=new RegExp(`^ {0,${Math.min(3,L-1)}}#`);for(;t;){const X=t.split(`
`,1)[0];if(w=X,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),xe.test(w)||$.test(w)||j.test(w)||he.test(t))break;if(w.search(/[^ ]/)>=L||!w.trim())d+=`
`+w.slice(L);else{if(H||b.search(/[^ ]/)>=4||xe.test(b)||$.test(b)||he.test(b))break;d+=`
`+w}!H&&!w.trim()&&(H=!0),p+=X+`
`,t=t.substring(X.length+1),b=w.slice(L)}}a.loose||(k?a.loose=!0:/\n *\n *$/.test(p)&&(k=!0));let O=null,Q;this.options.gfm&&(O=/^\[[ xX]\] /.exec(d),O&&(Q=O[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:p,task:!!O,checked:Q,loose:!1,text:d,tokens:[]}),a.raw+=p}a.items[a.items.length-1].raw=p.trimEnd(),a.items[a.items.length-1].text=d.trimEnd(),a.raw=a.raw.trimEnd();for(let v=0;v<a.items.length;v++)if(this.lexer.state.top=!1,a.items[v].tokens=this.lexer.blockTokens(a.items[v].text,[]),!a.loose){const b=a.items[v].tokens.filter(L=>L.type==="space"),w=b.length>0&&b.some(L=>/\n.*\n/.test(L.raw));a.loose=w}if(a.loose)for(let v=0;v<a.items.length;v++)a.items[v].loose=!0;return a}}html(t){const i=this.rules.block.html.exec(t);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(t){const i=this.rules.block.def.exec(t);if(i){const n=i[1].toLowerCase().replace(/\s+/g," "),e=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline._escapes,"$1"):i[3];return{type:"def",tag:n,raw:i[0],href:e,title:a}}}table(t){const i=this.rules.block.table.exec(t);if(i){if(!/[:|]/.test(i[2]))return;const n={type:"table",raw:i[0],header:Mn(i[1]).map(e=>({text:e,tokens:[]})),align:i[2].replace(/^\||\| *$/g,"").split("|"),rows:i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let e=n.align.length,a,o,p,d;for(a=0;a<e;a++){const k=n.align[a];k&&(/^ *-+: *$/.test(k)?n.align[a]="right":/^ *:-+: *$/.test(k)?n.align[a]="center":/^ *:-+ *$/.test(k)?n.align[a]="left":n.align[a]=null)}for(e=n.rows.length,a=0;a<e;a++)n.rows[a]=Mn(n.rows[a],n.header.length).map(k=>({text:k,tokens:[]}));for(e=n.header.length,o=0;o<e;o++)n.header[o].tokens=this.lexer.inline(n.header[o].text);for(e=n.rows.length,o=0;o<e;o++)for(d=n.rows[o],p=0;p<d.length;p++)d[p].tokens=this.lexer.inline(d[p].text);return n}}}lheading(t){const i=this.rules.block.lheading.exec(t);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(t){const i=this.rules.block.paragraph.exec(t);if(i){const n=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const i=this.rules.block.text.exec(t);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(t){const i=this.rules.inline.escape.exec(t);if(i)return{type:"escape",raw:i[0],text:nt(i[1])}}tag(t){const i=this.rules.inline.tag.exec(t);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(t){const i=this.rules.inline.link.exec(t);if(i){const n=i[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=bn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Xn(i[2],"()");if(o>-1){const d=(i[0].indexOf("!")===0?5:4)+i[1].length+o;i[2]=i[2].substring(0,o),i[0]=i[0].substring(0,d).trim(),i[3]=""}}let e=i[2],a="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e);o&&(e=o[1],a=o[3])}else a=i[3]?i[3].slice(1,-1):"";return e=e.trim(),/^</.test(e)&&(this.options.pedantic&&!/>$/.test(n)?e=e.slice(1):e=e.slice(1,-1)),En(i,{href:e&&e.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},i[0],this.lexer)}}reflink(t,i){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=i[e.toLowerCase()],!e){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return En(n,e,n[0],this.lexer)}}emStrong(t,i,n=""){let e=this.rules.inline.emStrong.lDelim.exec(t);if(!e||e[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(e[1]||e[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...e[0]].length-1;let p,d,k=o,v=0;const b=e[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(b.lastIndex=0,i=i.slice(-1*t.length+e[0].length-1);(e=b.exec(i))!=null;){if(p=e[1]||e[2]||e[3]||e[4]||e[5]||e[6],!p)continue;if(d=[...p].length,e[3]||e[4]){k+=d;continue}else if((e[5]||e[6])&&o%3&&!((o+d)%3)){v+=d;continue}if(k-=d,k>0)continue;d=Math.min(d,d+k+v);const w=[...t].slice(0,o+e.index+d+1).join("");if(Math.min(o,d)%2){const H=w.slice(1,-1);return{type:"em",raw:w,text:H,tokens:this.lexer.inlineTokens(H)}}const L=w.slice(2,-2);return{type:"strong",raw:w,text:L,tokens:this.lexer.inlineTokens(L)}}}}codespan(t){const i=this.rules.inline.code.exec(t);if(i){let n=i[2].replace(/\n/g," ");const e=/[^ ]/.test(n),a=/^ /.test(n)&&/ $/.test(n);return e&&a&&(n=n.substring(1,n.length-1)),n=nt(n,!0),{type:"codespan",raw:i[0],text:n}}}br(t){const i=this.rules.inline.br.exec(t);if(i)return{type:"br",raw:i[0]}}del(t){const i=this.rules.inline.del.exec(t);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(t){const i=this.rules.inline.autolink.exec(t);if(i){let n,e;return i[2]==="@"?(n=nt(i[1]),e="mailto:"+n):(n=nt(i[1]),e=n),{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let i;if(i=this.rules.inline.url.exec(t)){let n,e;if(i[2]==="@")n=nt(i[0]),e="mailto:"+n;else{let a;do a=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(a!==i[0]);n=nt(i[0]),i[1]==="www."?e="http://"+i[0]:e=i[0]}return{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const i=this.rules.inline.text.exec(t);if(i){let n;return this.lexer.state.inRawBlock?n=i[0]:n=nt(i[0]),{type:"text",raw:i[0],text:n}}}}const T={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:un,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};T._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;T._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;T.def=R(T.def).replace("label",T._label).replace("title",T._title).getRegex();T.bullet=/(?:[*+-]|\d{1,9}[.)])/;T.listItemStart=R(/^( *)(bull) */).replace("bull",T.bullet).getRegex();T.list=R(T.list).replace(/bull/g,T.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+T.def.source+")").getRegex();T._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";T._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;T.html=R(T.html,"i").replace("comment",T._comment).replace("tag",T._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();T.lheading=R(T.lheading).replace(/bull/g,T.bullet).getRegex();T.paragraph=R(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.blockquote=R(T.blockquote).replace("paragraph",T.paragraph).getRegex();T.normal={...T};T.gfm={...T.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};T.gfm.table=R(T.gfm.table).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.gfm.paragraph=R(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",T.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex();T.pedantic={...T.normal,html:R(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",T._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:un,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:R(T.normal._paragraph).replace("hr",T.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",T.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const x={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:un,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:un,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};x._punctuation="\\p{P}$+<=>`^|~";x.punctuation=R(x.punctuation,"u").replace(/punctuation/g,x._punctuation).getRegex();x.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;x.anyPunctuation=/\\[punct]/g;x._escapes=/\\([punct])/g;x._comment=R(T._comment).replace("(?:-->|$)","-->").getRegex();x.emStrong.lDelim=R(x.emStrong.lDelim,"u").replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimAst=R(x.emStrong.rDelimAst,"gu").replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimUnd=R(x.emStrong.rDelimUnd,"gu").replace(/punct/g,x._punctuation).getRegex();x.anyPunctuation=R(x.anyPunctuation,"gu").replace(/punct/g,x._punctuation).getRegex();x._escapes=R(x._escapes,"gu").replace(/punct/g,x._punctuation).getRegex();x._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;x._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;x.autolink=R(x.autolink).replace("scheme",x._scheme).replace("email",x._email).getRegex();x._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;x.tag=R(x.tag).replace("comment",x._comment).replace("attribute",x._attribute).getRegex();x._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;x._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;x._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;x.link=R(x.link).replace("label",x._label).replace("href",x._href).replace("title",x._title).getRegex();x.reflink=R(x.reflink).replace("label",x._label).replace("ref",T._label).getRegex();x.nolink=R(x.nolink).replace("ref",T._label).getRegex();x.reflinkSearch=R(x.reflinkSearch,"g").replace("reflink",x.reflink).replace("nolink",x.nolink).getRegex();x.normal={...x};x.pedantic={...x.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R(/^!?\[(label)\]\((.*?)\)/).replace("label",x._label).getRegex(),reflink:R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",x._label).getRegex()};x.gfm={...x.normal,escape:R(x.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};x.gfm.url=R(x.gfm.url,"i").replace("email",x.gfm._extended_email).getRegex();x.breaks={...x.gfm,br:R(x.br).replace("{2,}","*").getRegex(),text:R(x.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Dt{constructor(t){F(this,"tokens");F(this,"options");F(this,"state");F(this,"tokenizer");F(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Yt,this.options.tokenizer=this.options.tokenizer||new pn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:T.normal,inline:x.normal};this.options.pedantic?(i.block=T.pedantic,i.inline=x.pedantic):this.options.gfm&&(i.block=T.gfm,this.options.breaks?i.inline=x.breaks:i.inline=x.gfm),this.tokenizer.rules=i}static get rules(){return{block:T,inline:x}}static lex(t,i){return new Dt(i).lex(t)}static lexInline(t,i){return new Dt(i).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let i;for(;i=this.inlineQueue.shift();)this.inlineTokens(i.src,i.tokens);return this.tokens}blockTokens(t,i=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(p,d,k)=>d+"    ".repeat(k.length));let n,e,a,o;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(n=p.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=e.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(a=t,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const d=t.slice(1);let k;this.options.extensions.startBlock.forEach(v=>{k=v.call({lexer:this},d),typeof k=="number"&&k>=0&&(p=Math.min(p,k))}),p<1/0&&p>=0&&(a=t.substring(0,p+1))}if(this.state.top&&(n=this.tokenizer.paragraph(a))){e=i[i.length-1],o&&e.type==="paragraph"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n),o=a.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&e.type==="text"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let n,e,a,o=t,p,d,k;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)v.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,p.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(d||(k=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(n=v.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.emStrong(t,o,k)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),i.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),i.push(n);continue}if(a=t,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const b=t.slice(1);let w;this.options.extensions.startInline.forEach(L=>{w=L.call({lexer:this},b),typeof w=="number"&&w>=0&&(v=Math.min(v,w))}),v<1/0&&v>=0&&(a=t.substring(0,v+1))}if(n=this.tokenizer.inlineText(a)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(k=n.raw.slice(-1)),d=!0,e=i[i.length-1],e&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(t){const v="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return i}}class fn{constructor(t){F(this,"options");this.options=t||Yt}code(t,i,n){var a;const e=(a=(i||"").match(/^\S*/))==null?void 0:a[0];return t=t.replace(/\n$/,"")+`
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
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,i,n){const e=Vn(t);if(e===null)return n;t=e;let a='<a href="'+t+'"';return i&&(a+=' title="'+i+'"'),a+=">"+n+"</a>",a}image(t,i,n){const e=Vn(t);if(e===null)return n;t=e;let a=`<img src="${t}" alt="${n}"`;return i&&(a+=` title="${i}"`),a+=">",a}text(t){return t}}class Cn{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,i,n){return""+n}image(t,i,n){return""+n}br(){return""}}class St{constructor(t){F(this,"options");F(this,"renderer");F(this,"textRenderer");this.options=t||Yt,this.options.renderer=this.options.renderer||new fn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Cn}static parse(t,i){return new St(i).parse(t)}static parseInline(t,i){return new St(i).parseInline(t)}parse(t,i=!0){let n="";for(let e=0;e<t.length;e++){const a=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const o=a,p=this.options.extensions.renderers[o.type].call({parser:this},o);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=p||"";continue}}switch(a.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=a;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Kn(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=a;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=a;let p="",d="";for(let v=0;v<o.header.length;v++)d+=this.renderer.tablecell(this.parseInline(o.header[v].tokens),{header:!0,align:o.align[v]});p+=this.renderer.tablerow(d);let k="";for(let v=0;v<o.rows.length;v++){const b=o.rows[v];d="";for(let w=0;w<b.length;w++)d+=this.renderer.tablecell(this.parseInline(b[w].tokens),{header:!1,align:o.align[w]});k+=this.renderer.tablerow(d)}n+=this.renderer.table(p,k);continue}case"blockquote":{const o=a,p=this.parse(o.tokens);n+=this.renderer.blockquote(p);continue}case"list":{const o=a,p=o.ordered,d=o.start,k=o.loose;let v="";for(let b=0;b<o.items.length;b++){const w=o.items[b],L=w.checked,H=w.task;let O="";if(w.task){const Q=this.renderer.checkbox(!!L);k?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=Q+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=Q+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:Q+" "}):O+=Q+" "}O+=this.parse(w.tokens,k),v+=this.renderer.listitem(O,H,!!L)}n+=this.renderer.list(v,p,d);continue}case"html":{const o=a;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=a;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=a,p=o.tokens?this.parseInline(o.tokens):o.text;for(;e+1<t.length&&t[e+1].type==="text";)o=t[++e],p+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=i?this.renderer.paragraph(p):p;continue}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(t,i){i=i||this.renderer;let n="";for(let e=0;e<t.length;e++){const a=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){n+=o||"";continue}}switch(a.type){case"escape":{const o=a;n+=i.text(o.text);break}case"html":{const o=a;n+=i.html(o.text);break}case"link":{const o=a;n+=i.link(o.href,o.title,this.parseInline(o.tokens,i));break}case"image":{const o=a;n+=i.image(o.href,o.title,o.text);break}case"strong":{const o=a;n+=i.strong(this.parseInline(o.tokens,i));break}case"em":{const o=a;n+=i.em(this.parseInline(o.tokens,i));break}case"codespan":{const o=a;n+=i.codespan(o.text);break}case"br":{n+=i.br();break}case"del":{const o=a;n+=i.del(this.parseInline(o.tokens,i));break}case"text":{const o=a;n+=i.text(o.text);break}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class rn{constructor(t){F(this,"options");this.options=t||Yt}preprocess(t){return t}postprocess(t){return t}}F(rn,"passThroughHooks",new Set(["preprocess","postprocess"]));var cn,yn,gn,qn;class ti{constructor(...t){vn(this,cn);vn(this,gn);F(this,"defaults",Tn());F(this,"options",this.setOptions);F(this,"parse",hn(this,cn,yn).call(this,Dt.lex,St.parse));F(this,"parseInline",hn(this,cn,yn).call(this,Dt.lexInline,St.parseInline));F(this,"Parser",St);F(this,"parser",St.parse);F(this,"Renderer",fn);F(this,"TextRenderer",Cn);F(this,"Lexer",Dt);F(this,"lexer",Dt.lex);F(this,"Tokenizer",pn);F(this,"Hooks",rn);this.use(...t)}walkTokens(t,i){var e,a;let n=[];for(const o of t)switch(n=n.concat(i.call(this,o)),o.type){case"table":{const p=o;for(const d of p.header)n=n.concat(this.walkTokens(d.tokens,i));for(const d of p.rows)for(const k of d)n=n.concat(this.walkTokens(k.tokens,i));break}case"list":{const p=o;n=n.concat(this.walkTokens(p.items,i));break}default:{const p=o;(a=(e=this.defaults.extensions)==null?void 0:e.childTokens)!=null&&a[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{n=n.concat(this.walkTokens(p[d],i))}):p.tokens&&(n=n.concat(this.walkTokens(p.tokens,i)))}}return n}use(...t){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const e={...n};if(e.async=this.defaults.async||e.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const o=i.renderers[a.name];o?i.renderers[a.name]=function(...p){let d=a.renderer.apply(this,p);return d===!1&&(d=o.apply(this,p)),d}:i.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=i[a.level];o?o.unshift(a.tokenizer):i[a.level]=[a.tokenizer],a.start&&(a.level==="block"?i.startBlock?i.startBlock.push(a.start):i.startBlock=[a.start]:a.level==="inline"&&(i.startInline?i.startInline.push(a.start):i.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(i.childTokens[a.name]=a.childTokens)}),e.extensions=i),n.renderer){const a=this.defaults.renderer||new fn(this.defaults);for(const o in n.renderer){const p=n.renderer[o],d=o,k=a[d];a[d]=(...v)=>{let b=p.apply(a,v);return b===!1&&(b=k.apply(a,v)),b||""}}e.renderer=a}if(n.tokenizer){const a=this.defaults.tokenizer||new pn(this.defaults);for(const o in n.tokenizer){const p=n.tokenizer[o],d=o,k=a[d];a[d]=(...v)=>{let b=p.apply(a,v);return b===!1&&(b=k.apply(a,v)),b}}e.tokenizer=a}if(n.hooks){const a=this.defaults.hooks||new rn;for(const o in n.hooks){const p=n.hooks[o],d=o,k=a[d];rn.passThroughHooks.has(o)?a[d]=v=>{if(this.defaults.async)return Promise.resolve(p.call(a,v)).then(w=>k.call(a,w));const b=p.call(a,v);return k.call(a,b)}:a[d]=(...v)=>{let b=p.apply(a,v);return b===!1&&(b=k.apply(a,v)),b}}e.hooks=a}if(n.walkTokens){const a=this.defaults.walkTokens,o=n.walkTokens;e.walkTokens=function(p){let d=[];return d.push(o.call(this,p)),a&&(d=d.concat(a.call(this,p))),d}}this.defaults={...this.defaults,...e}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}}cn=new WeakSet,yn=function(t,i){return(n,e)=>{const a={...e},o={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const p=hn(this,gn,qn).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(d=>t(d,o)).then(d=>o.walkTokens?Promise.all(this.walkTokens(d,o.walkTokens)).then(()=>d):d).then(d=>i(d,o)).then(d=>o.hooks?o.hooks.postprocess(d):d).catch(p);try{o.hooks&&(n=o.hooks.preprocess(n));const d=t(n,o);o.walkTokens&&this.walkTokens(d,o.walkTokens);let k=i(d,o);return o.hooks&&(k=o.hooks.postprocess(k)),k}catch(d){return p(d)}}},gn=new WeakSet,qn=function(t,i){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const e="<p>An error occurred:</p><pre>"+nt(n.message+"",!0)+"</pre>";return i?Promise.resolve(e):e}if(i)return Promise.reject(n);throw n}};const Ut=new ti;function C(g,t){return Ut.parse(g,t)}C.options=C.setOptions=function(g){return Ut.setOptions(g),C.defaults=Ut.defaults,zn(C.defaults),C};C.getDefaults=Tn;C.defaults=Yt;C.use=function(...g){return Ut.use(...g),C.defaults=Ut.defaults,zn(C.defaults),C};C.walkTokens=function(g,t){return Ut.walkTokens(g,t)};C.parseInline=Ut.parseInline;C.Parser=St;C.parser=St.parse;C.Renderer=fn;C.TextRenderer=Cn;C.Lexer=Dt;C.lexer=Dt.lex;C.Tokenizer=pn;C.Hooks=rn;C.parse=C;C.options;C.setOptions;C.use;C.walkTokens;C.parseInline;St.parse;Dt.lex;const ni=`
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
			be the first blog that I have ever written and I am hoping I can turn this into a hobby.`,L,H,O=`The first part of this series <strong>(You don&#39;t know JS)</strong> was a general introduction
			to programming and a discussion of some aspects of <i>JavaScript</i>. There are few topics
			that caught my attention.
			<a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&amp;%20going/README.md#you-dont-know-js-up--going" target="_blank">YDKJS</a> <ul class="blog-list-elements"><li>Coercion</li> <li>Typed values not typed variables</li> <li>Equality</li> <li>Hoisting</li> <li>Closure</li> <li>Polyfilling</li> <li>Transpiling</li></ul>`,Q,j,he="Coercion",xe,$,X,ue,ie="<li>Explicit coercion</li> <li>Implicit coercion</li>",ke,ee,J=`Explicit conversion is straightforward. We know the current type of the value and the\r
				resultant type it is converted to.`,se,te,ye,oe=C(ni)+"",Te,N,le=`The conversion in the above cases is explicit. We know that the <code>name</code> variable
				is a <code>string</code> and so is the variable <code>numString</code>. In the third case
				the
				<code>string</code> type is explicity converted to a <code>number</code>.`,Ve,z,re=`Implicit conversion on the other hand is quite interesting and we will experience an
				interesting quality of implicit conversion in the <strong>Equality</strong>
				section. The conversion is not very apparent and can cause confusion in code if not written properly.`,$e,P,pe,Ce=C(ii)+"",M,W,fe=`The conversion in the first case is explicit, we know that num is a string. In the second\r
				case the value of num is coerced into a number.`,Me,A,ne="Typed values not typed variables",Be,Z,B=`<p>There is a neat way to learn the type of a variable in JavaScript. It&#39;s the <code>typeof()</code>
				operator. When checking the type of a variable, JavaScript looks at the value of the variable
				and not the variable itself. The variables in JavaScript are merely containers of types.</p>`,Ee,q,E="Equality",S,we,qe=`<p>Equality in JavaScript comes in two flavors <code>==</code> and <code>===</code>. The
				easiest way to understand these would be that <code>==</code> checks for equality with
				coercion and
				<code>===</code> does not allow coercion, which is often called &quot;strict equality&quot;</p> <p>For the past 7 years I believed that the difference between <code>==</code> and
				<code>===</code> is that strict equality checked the reference and the other checked the value.
				I was missing the understanding of the word coercion! I still do think that the avoiding == makes
				sense when working with other people. Somewhere down the line people can make mistakes.</p>`,G,ce,Oe="Hoisting",de,ae,I,Je=`On declaring a variable in JavaScript, it's made available throughout the entire scope it\r
				was declared in. JavaScript hoists that variable to the top and it's available to the entire\r
				scope. The same works for functions. Variable hoisting can cause a lot of confusion and it's\r
				better to avoid it. The best approach is to use JavaScript in "strict" mode and use let for\r
				variable declaration.`,Ge,Ie,ze,Xt=C(si)+"",rt,ge,Rt=`In the above example, on calling the function <code>hoistedVariable</code> we notice that
				the variable until initialized prints a value of <code>undefined</code>. The declaration of
				the variable
				<code>a</code> is on the last line but, due to hoisting in JavaScript, the variable is available
				throughout the scope.`,ct,ve,kt="Closure",Lt,_e,De,Zt=`One can think of Closure as a way to "remember" a function's scope, like variables, even\r
				after the function has finished executing. The best way to explain closure is through an\r
				example`,dt,be,wt,Ht=C(ai)+"",Se,at,_t=`In the above example even after it&#39;s execution the returned function value is saved in the
				<code>plusTwo</code> variable, which is basically holding a <code>function</code> type.
				Calling
				<code>plusTwo</code> remembers the original value passed in, which was 2.`,Le,Ke,yt="Polyfilling",He,Ze,Ue,Ae=`Polyfilling refers to taking the definition of a newer feature and producing a piece of code
				that&#39;s equivalent to the behavior, but is able to run in older JavaScript environments. As
				an example, ES6 deprecated the utility <code>isNan(...)</code> which was buggy and replaced
				it with
				<code>Number.isNan(...)</code>. The example below polyfills the function for older
				environments.`,ht,ot,Ne,We=C(oi)+"",jt;return i=new dn({}),{c(){t=r("div"),vt(i.$$.fragment),n=h(),e=r("div"),a=r("div"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.innerHTML=w,L=h(),H=r("div"),H.innerHTML=O,Q=h(),j=r("div"),j.textContent=he,xe=h(),$=r("div"),X=Bt(`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),ue=r("ol"),ue.innerHTML=ie,ke=h(),ee=r("p"),ee.textContent=J,se=h(),te=r("div"),ye=new K(!1),Te=h(),N=r("p"),N.innerHTML=le,Ve=h(),z=r("p"),z.innerHTML=re,$e=h(),P=r("div"),pe=new K(!1),M=h(),W=r("p"),W.textContent=fe,Me=h(),A=r("div"),A.textContent=ne,Be=h(),Z=r("div"),Z.innerHTML=B,Ee=h(),q=r("div"),q.textContent=E,S=h(),we=r("div"),we.innerHTML=qe,G=h(),ce=r("div"),ce.textContent=Oe,de=h(),ae=r("div"),I=r("p"),I.textContent=Je,Ge=h(),Ie=r("div"),ze=new K(!1),rt=h(),ge=r("p"),ge.innerHTML=Rt,ct=h(),ve=r("div"),ve.textContent=kt,Lt=h(),_e=r("div"),De=r("p"),De.textContent=Zt,dt=h(),be=r("div"),wt=new K(!1),Se=h(),at=r("p"),at.innerHTML=_t,Le=h(),Ke=r("div"),Ke.textContent=yt,He=h(),Ze=r("div"),Ue=r("p"),Ue.innerHTML=Ae,ht=h(),ot=r("div"),Ne=new K(!1),this.h()},l(Re){t=c(Re,"DIV",{class:!0});var me=D(t);bt(i.$$.fragment,me),n=u(me),e=c(me,"DIV",{class:!0});var V=D(e);a=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-1wm6pwi"&&(a.textContent=o),p=u(V),d=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-d234l5"&&(d.innerHTML=k),v=u(V),b=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-f75zlw"&&(b.innerHTML=w),L=u(V),H=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-1au80is"&&(H.innerHTML=O),Q=u(V),j=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(j)!=="svelte-1gz8uxg"&&(j.textContent=he),xe=u(V),$=c(V,"DIV",{class:!0});var U=D($);X=Nt(U,`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),ue=c(U,"OL",{class:!0,"data-svelte-h":!0}),f(ue)!=="svelte-l4ajwa"&&(ue.innerHTML=ie),ke=u(U),ee=c(U,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-1w03sfk"&&(ee.textContent=J),se=u(U),te=c(U,"DIV",{class:!0});var Ye=D(te);ye=Y(Ye,!1),Ye.forEach(y),Te=u(U),N=c(U,"P",{"data-svelte-h":!0}),f(N)!=="svelte-1oow4wt"&&(N.innerHTML=le),Ve=u(U),z=c(U,"P",{"data-svelte-h":!0}),f(z)!=="svelte-1d2klvl"&&(z.innerHTML=re),$e=u(U),P=c(U,"DIV",{class:!0});var Vt=D(P);pe=Y(Vt,!1),Vt.forEach(y),M=u(U),W=c(U,"P",{"data-svelte-h":!0}),f(W)!=="svelte-1ulolye"&&(W.textContent=fe),U.forEach(y),Me=u(V),A=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(A)!=="svelte-il2h6u"&&(A.textContent=ne),Be=u(V),Z=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(Z)!=="svelte-t53yhc"&&(Z.innerHTML=B),Ee=u(V),q=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(q)!=="svelte-zkjv4w"&&(q.textContent=E),S=u(V),we=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(we)!=="svelte-cdu7ip"&&(we.innerHTML=qe),G=u(V),ce=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(ce)!=="svelte-1m8q6hv"&&(ce.textContent=Oe),de=u(V),ae=c(V,"DIV",{class:!0});var je=D(ae);I=c(je,"P",{"data-svelte-h":!0}),f(I)!=="svelte-d8fbjs"&&(I.textContent=Je),Ge=u(je),Ie=c(je,"DIV",{class:!0});var Xe=D(Ie);ze=Y(Xe,!1),Xe.forEach(y),rt=u(je),ge=c(je,"P",{"data-svelte-h":!0}),f(ge)!=="svelte-jz2io5"&&(ge.innerHTML=Rt),je.forEach(y),ct=u(V),ve=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(ve)!=="svelte-1mj3tvz"&&(ve.textContent=kt),Lt=u(V),_e=c(V,"DIV",{class:!0});var et=D(_e);De=c(et,"P",{"data-svelte-h":!0}),f(De)!=="svelte-udzufc"&&(De.textContent=Zt),dt=u(et),be=c(et,"DIV",{class:!0});var Fe=D(be);wt=Y(Fe,!1),Fe.forEach(y),Se=u(et),at=c(et,"P",{"data-svelte-h":!0}),f(at)!=="svelte-1lv6grx"&&(at.innerHTML=_t),et.forEach(y),Le=u(V),Ke=c(V,"DIV",{class:!0,"data-svelte-h":!0}),f(Ke)!=="svelte-1dn8ynz"&&(Ke.textContent=yt),He=u(V),Ze=c(V,"DIV",{class:!0});var Qe=D(Ze);Ue=c(Qe,"P",{"data-svelte-h":!0}),f(Ue)!=="svelte-180pjs4"&&(Ue.innerHTML=Ae),ht=u(Qe),ot=c(Qe,"DIV",{class:!0});var ut=D(ot);Ne=Y(ut,!1),ut.forEach(y),Qe.forEach(y),V.forEach(y),me.forEach(y),this.h()},h(){l(a,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-paragraph"),l(j,"class","blog-sub-header"),l(ue,"class","blog-list-elements"),ye.a=null,l(te,"class","blog-code-block"),pe.a=null,l(P,"class","blog-code-block"),l($,"class","blog-paragraph"),l(A,"class","blog-sub-header"),l(Z,"class","blog-paragraph"),l(q,"class","blog-sub-header"),l(we,"class","blog-paragraph"),l(ce,"class","blog-sub-header"),ze.a=null,l(Ie,"class","blog-code-block"),l(ae,"class","blog-paragraph"),l(ve,"class","blog-sub-header"),wt.a=null,l(be,"class","blog-code-block"),l(_e,"class","blog-paragraph"),l(Ke,"class","blog-sub-header"),Ne.a=null,l(ot,"class","blog-code-block"),l(Ze,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","up-and-going-container svelte-ofy7lw")},m(Re,me){Kt(Re,t,me),mt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,L),s(e,H),s(e,Q),s(e,j),s(e,xe),s(e,$),s($,X),s($,ue),s($,ke),s($,ee),s($,se),s($,te),ye.m(oe,te),s($,Te),s($,N),s($,Ve),s($,z),s($,$e),s($,P),pe.m(Ce,P),s($,M),s($,W),s(e,Me),s(e,A),s(e,Be),s(e,Z),s(e,Ee),s(e,q),s(e,S),s(e,we),s(e,G),s(e,ce),s(e,de),s(e,ae),s(ae,I),s(ae,Ge),s(ae,Ie),ze.m(Xt,Ie),s(ae,rt),s(ae,ge),s(e,ct),s(e,ve),s(e,Lt),s(e,_e),s(_e,De),s(_e,dt),s(_e,be),wt.m(Ht,be),s(_e,Se),s(_e,at),s(e,Le),s(e,Ke),s(e,He),s(e,Ze),s(Ze,Ue),s(Ze,ht),s(Ze,ot),Ne.m(We,ot),jt=!0},p:Wt,i(Re){jt||(it(i.$$.fragment,Re),jt=!0)},o(Re){st(i.$$.fragment,Re),jt=!1},d(Re){Re&&y(t),xt(i)}}}class ri extends Qt{constructor(t){super(),Gt(this,t,null,li,Ft,{})}}const ci=`
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
			even when the function is executing outside is lexical scope.`,v,b,w,L=C(ci)+"",H,O,Q=`In the above example the function <code>bar</code> has closure over the scope of
			<code>foo</code>. This is because <code>bar</code> is declared inside the scope of
			<code>foo</code>. To better understand this we could use the analogy of
			<a href="/blog/ydkjs/scopes_and_hoisting#concentric-circle" target="_blank">concentric circles</a>
			.The lexical scope that forms those concentric circles is closely related to closures. So, looking
			at closures through the lens of the circle analogy, we would look at it inside-out. The inner most
			<i>scope/circle</i>
			has closure over all the other <i>scopes/circles</i>. Another fascinating thing about closures
			is the persistence of the scope of a function even after execution. Generally, when a block of
			scope finishes execution, it is garbage collected and it&#39;s not present in memory, but closures
			allow some magic to happen!`,j,he,xe=`There are some other forms of closure that can be a little indirect. A great example would be
			when a function is passed by value to another function, and executed from the scope of that
			function. To better state that - <b>Any way in which a function can be passed around as value and be invoked in other
				locations, are all examples of closures</b>. Example below!`,$,X,ue,ie=C(di)+"",ke,ee,J="Closures are everywhere and one of the best examples is the <code>setTimeOut</code> function.",se,te,ye,oe=C(hi)+"",Te,N,le=`In the above <code>setTimeout</code> example, the function<code>timer</code> has a scope
			closure over the global scope, it remembers the value <code>a</code> from the global scope. We
			pass the function
			<code>timer</code>
			as a parameter to the <code>setTimeout</code>, which is nothing but a functionReference and
			that function has closure over the global scope. This opens up a new world. Everytime I look
			at some JavaScript code, I see closures now!`,Ve,z,re="Modules",$e,P,pe=`Modules are the one of the most prominent and powerful examples of closures. Specially,\r
			starting from ES6.`,Ce,M,W,fe=C(ui)+"",Me,A,ne=`Modules are functions itself and this example is in a way similar to the fist closure example.\r
			The only difference being that in the case of a module it returns an object with multiple\r
			functions that have closure over the scope of the module function.`,Be,Z,B="That ends part two of YDKJS! I have learnt quite a bit, let's keep rolling.",Ee;return i=new dn({}),{c(){t=r("div"),vt(i.$$.fragment),n=h(),e=r("div"),a=r("div"),a.textContent=o,p=h(),d=r("div"),d.textContent=k,v=h(),b=r("div"),w=new K(!1),H=h(),O=r("div"),O.innerHTML=Q,j=h(),he=r("div"),he.innerHTML=xe,$=h(),X=r("div"),ue=new K(!1),ke=h(),ee=r("div"),ee.innerHTML=J,se=h(),te=r("div"),ye=new K(!1),Te=h(),N=r("div"),N.innerHTML=le,Ve=h(),z=r("div"),z.textContent=re,$e=h(),P=r("div"),P.textContent=pe,Ce=h(),M=r("div"),W=new K(!1),Me=h(),A=r("div"),A.textContent=ne,Be=h(),Z=r("div"),Z.textContent=B,this.h()},l(q){t=c(q,"DIV",{class:!0});var E=D(t);bt(i.$$.fragment,E),n=u(E),e=c(E,"DIV",{class:!0});var S=D(e);a=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-tgqvu9"&&(a.textContent=o),p=u(S),d=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-1h62583"&&(d.textContent=k),v=u(S),b=c(S,"DIV",{class:!0});var we=D(b);w=Y(we,!1),we.forEach(y),H=u(S),O=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(O)!=="svelte-87t3fc"&&(O.innerHTML=Q),j=u(S),he=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(he)!=="svelte-1dhjz52"&&(he.innerHTML=xe),$=u(S),X=c(S,"DIV",{class:!0});var qe=D(X);ue=Y(qe,!1),qe.forEach(y),ke=u(S),ee=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(ee)!=="svelte-v7a7fy"&&(ee.innerHTML=J),se=u(S),te=c(S,"DIV",{class:!0});var G=D(te);ye=Y(G,!1),G.forEach(y),Te=u(S),N=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(N)!=="svelte-1kt1d4n"&&(N.innerHTML=le),Ve=u(S),z=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(z)!=="svelte-1emixw3"&&(z.textContent=re),$e=u(S),P=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(P)!=="svelte-40eyps"&&(P.textContent=pe),Ce=u(S),M=c(S,"DIV",{class:!0});var ce=D(M);W=Y(ce,!1),ce.forEach(y),Me=u(S),A=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(A)!=="svelte-1ukx7mk"&&(A.textContent=ne),Be=u(S),Z=c(S,"DIV",{class:!0,"data-svelte-h":!0}),f(Z)!=="svelte-lun0om"&&(Z.textContent=B),S.forEach(y),E.forEach(y),this.h()},h(){l(a,"class","blog-title"),l(d,"class","blog-paragraph"),w.a=null,l(b,"class","blog-code-block"),l(O,"class","blog-paragraph"),l(he,"class","blog-paragraph"),ue.a=null,l(X,"class","blog-code-block"),l(ee,"class","blog-paragraph"),ye.a=null,l(te,"class","blog-code-block"),l(N,"class","blog-paragraph"),l(z,"class","blog-sub-header"),l(P,"class","blog-paragraph"),W.a=null,l(M,"class","blog-code-block"),l(A,"class","blog-paragraph"),l(Z,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","closure-container svelte-18ejxyl")},m(q,E){Kt(q,t,E),mt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),w.m(L,b),s(e,H),s(e,O),s(e,j),s(e,he),s(e,$),s(e,X),ue.m(ie,X),s(e,ke),s(e,ee),s(e,se),s(e,te),ye.m(oe,te),s(e,Te),s(e,N),s(e,Ve),s(e,z),s(e,$e),s(e,P),s(e,Ce),s(e,M),W.m(fe,M),s(e,Me),s(e,A),s(e,Be),s(e,Z),Ee=!0},p:Wt,i(q){Ee||(it(i.$$.fragment,q),Ee=!0)},o(q){st(i.$$.fragment,q),Ee=!1},d(q){q&&y(t),xt(i)}}}class fi extends Qt{constructor(t){super(),Gt(this,t,null,pi,Ft,{})}}const gi="\n```\n    var num = 3;\n```\n",vi=`
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
`,wi="\n```\n    a = 2;\n    var a;\n    console.log(a); // Prints 2 \n```\n";function _i(g){let t,i,n,e,a;return{c(){t=on("svg"),i=on("circle"),n=on("circle"),e=on("circle"),a=on("circle"),this.h()},l(o){t=ln(o,"svg",{height:!0,width:!0});var p=D(t);i=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(i).forEach(y),n=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(n).forEach(y),e=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(e).forEach(y),a=ln(p,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),D(a).forEach(y),p.forEach(y),this.h()},h(){l(i,"cx","100"),l(i,"cy","100"),l(i,"r","80"),l(i,"stroke","#475c6c"),l(i,"stroke-width","2"),l(i,"fill","none"),l(n,"cx","100"),l(n,"cy","100"),l(n,"r","60"),l(n,"stroke","#8a8583"),l(n,"stroke-width","2"),l(n,"fill","none"),l(e,"cx","100"),l(e,"cy","100"),l(e,"r","40"),l(e,"stroke","#eed7a1"),l(e,"stroke-width","2"),l(e,"fill","none"),l(a,"cx","100"),l(a,"cy","100"),l(a,"r","20"),l(a,"stroke","#cd8b62"),l(a,"stroke-width","2"),l(a,"fill","none"),l(t,"height","200"),l(t,"width","200")},m(o,p){Kt(o,t,p),s(t,i),s(t,n),s(t,e),s(t,a)},p:Wt,i:Wt,o:Wt,d(o){o&&y(t)}}}class yi extends Qt{constructor(t){super(),Gt(this,t,null,_i,Ft,{})}}function Ti(g){let t,i,n,e,a,o="Scopes and Hoisting",p,d,k=`This book is awesome! I wish I had read it sooner. Most programming languages that I have
			used, I never spent the time to fully understand the depths of it. With YDKJS, I aim to break
			that trend and truly understand how JavaScript works!<br/><br/>`,v,b,w=`The second part of this book covers some very interesting topics which mainly revolve around\r
			scopes, hoisting and closure. Since this is going to be a longer article in comparison, I will\r
			move closure to a separate article.`,L,H,O="Scope and Compiler theory",Q,j,he=`Scope refers to a well defined set of rules that allow us to store variables in some location
			and access them from that location. In order to understand how this works we need to
			understand some basic <b>Compiler theory</b>`,xe,$,X=`JavaScript is considered to be an interpreted language but that would be wrong. It undergoes
			compilation just mere mircoseconds before execution. Understanding those performance
			improvements that make it compile so quickly was a little beyond the topics in this book but,
			I definitely would like to revisit and understand those improvements (An article for the
			future). Getting back to compilation. Any compiled language undergoes three main steps during
			its compilation process.
			<ol class="blog-list-elements"><li>Tokenizing/Lexing</li> <li>Parsing</li> <li>Code generation</li></ol>`,ue,ie,ke=`<b>Tokenizing</b> involves taking a string of characters and breaking down it into meaningful chunks
			called tokens. Lexing is synonmous to Tokenization with a difference of stateful parsing. If the
			tokenization involves some kind of state based approach then it would be called Lexing.`,ee,J,se,te=C(gi)+"",ye,oe,Te=`The above example when tokenized might get broken down into <code>var</code>, <code>a</code>,
			<code>=</code>, <code>3</code>, <code>;</code>`,N,le,Ve=`<b>Parsing</b> uses the array of tokens and creates a nested tree, which is called an Abstract
			syntax tree. For the above example <code>var num = 3;</code> it might create a tree structure that
			could look like this.`,z,re,$e,P=C(vi)+"",pe,Ce,M=`Finally the last step, <b>Code generation</b> - It takes the Abstract syntax tree and creates executable
			code.`,W,fe,Me=`There is much more to the compilation process that I need to learn. Truly understanding a\r
			language requires some serious work! One step at a time! We'll get there!`,A,ne,Be="More on scope",Z,B,Ee=`There are three important members involved in understanding scope
			<ol class="blog-list-elements"><li>Engine</li> <li>Compiler</li> <li>Scope</li></ol>
			Engine runs from start to finish. From variable declaration to program execution. Compiler handles
			the dirty work. Parsing code and code generation. Sope holds a lookup list for all the declrations
			(variables, functions etc..)`,q,E,S,we,qe="var num = 2;",G,ce,Oe,de=C(bi)+"",ae,I,Je=`Looking at the example above, the compiler declares a variable at this step if it has not been
			declared yet. Compiler queries the scope and asks if the variable <code>num</code> was declared,
			if it was then it moves on and does not declare a variable but if there isn&#39;t a variable declared
			then it declares one. This part is pretty interesting in JavaScript, it allows us to declare the
			same variable multiple times. In a nested scope this would be termed shadowing, where it overwrites
			the value declared in the outerscope. The example below explains shadowing.`,Ge,Ie,ze,Xt=C(mi)+"",rt,ge,Rt=`Going back to the two parts involved in variable declaration and assignment, there&#39;s an
			interesting lookup concept that JavaScript performs. The easier version is - When a variable
			appears on the left side of an assignment the compiler does a <b>LHS</b> lookup and when it&#39;s on
			the right side of the assignment it does a RHS lookup. A LHS lookup looks for the variable container
			itself but the RHS lookup is merely getting the value of the variable. LHS lookups can be a bit
			tricky. As always, examples help!`,ct,ve,kt,Lt=C(xi)+"",_e,De,Zt=`Let&#39;s break it down.
			<div class="blog-paragraph"><b>List of LHS lookups</b> <ul><li>ans =</li> <li>num = (this is interesting, it&#39;s the pararmeter passed to the function)</li> <li>num2 =</li></ul> <b>List of RHS lookups</b> <ul><li>foo</li> <li>= num</li> <li>num +</li> <li>+ num2</li></ul></div>
			Discussing lookups further, it gets even more interesting when nested scopes are involved. When
			searching for a variable, JavaScript considers all scopes. It starts with the inner most and keeps
			looking for variable<b>containers / values</b> in all the scopes that the current scope is enclosed
			in. This is where it chooses between a LHS and RHS lookup.`,dt,be,wt="That was just the first Chapter from the book. Phew!",Ht,Se,at="Lexical scope",_t,Le,Ke=`JavaScript uses the lexical scope and so do most programming languages. Scope as defined\r
			earlier is a means of finding a declared identifier and Lexing examines a string of characters\r
			and gives it semantic meaning. So lexical scope is the scope defined during the time of\r
			lexing.`,yt,He,Ze=`In order to understand the idea of lexical scope it's important to understand how a lookup\r
			works in JavaScript. Like always, let's start with an example.`,Ue,Ae,ht,ot=C(ki)+"",Ne,We,jt=`In the example above we have three different scopes
			<ol><li>Global scope where outer function is declared</li> <li>Scope of the outer function</li> <li>Scope of the inner function</li></ol>
			It&#39;s ideal to look at this from inside out. When the
			<code>console.log(num, num2)</code>
			executes the engine goes looking for the two identifiers. It searches for <code>num</code>
			first in the scope of function <code>inner</code> and cannot find it, the next available scope
			is the scope of the function <code>outer</code> and there it finds the variable
			<code>num</code>. It does a similar lookup for the variable <code>num2</code> and finds it in
			the scope of outer. But the variable <code>num3</code> it finds in the global scope, the same scope
			where the outer function is called. The way I look at scope look ups is the way concentric circles
			are drawn, they have neat boundaries and they do not intersect.`,Re,me,V,U,Ye=`Understanding of scope directly relates to understanding
			<b>The Principle of least privilege</b> - Expose only what is minimally necessary, and hide everything
			else. These concentric division allow us to enclose variables and functions within scopes and not
			expose it in a global context. What does that accomplish? It avoids collisions! Makes sure that
			two identifiers intended for different usecases do not stomp on each other.`,Vt,je,Xe="<b>SCOPE -&gt; PRINCIPLE OF LEAST PRIVILEGE -&gt; COLLISION AVOIDANCE</b>",et,Fe,Qe="Hoisting",ut,Mt,en=`Hoisting in JavaScript refers to the process of moving the function and variables to the the\r
			top of the code from where they were declared. This is one of the crucial parts of JavaScript,\r
			I mean for developers. Not understanding hoisting can lead to writing code that's hard to\r
			decipher.`,pt,Et,qt,Ot=C(wi)+"",Jt,zt,tn=`In the above example even though we would expect it to print undefined, it prints 2. Why? If
			we go back to the definition above, the <code>var a;</code> gets hoisted and placed on the
			top. So the first statement that executes is the declaration of that variable, by the time it
			gets to <code>a = 2;</code> the variable exists, so it assigns the value to 2 that container. Another
			important thing to note here it that between a variable and a function, functions get hoisted first!`,ft,Tt,nn=`This chapter has been really interesting so far. There's one last topic left to discuss and I\r
			will be doing that in the next article.`,gt;return i=new dn({}),me=new yi({}),{c(){t=r("div"),vt(i.$$.fragment),n=h(),e=r("div"),a=r("div"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.textContent=w,L=h(),H=r("div"),H.textContent=O,Q=h(),j=r("div"),j.innerHTML=he,xe=h(),$=r("div"),$.innerHTML=X,ue=h(),ie=r("div"),ie.innerHTML=ke,ee=h(),J=r("div"),se=new K(!1),ye=h(),oe=r("div"),oe.innerHTML=Te,N=h(),le=r("div"),le.innerHTML=Ve,z=h(),re=r("div"),$e=new K(!1),pe=h(),Ce=r("div"),Ce.innerHTML=M,W=h(),fe=r("div"),fe.textContent=Me,A=h(),ne=r("div"),ne.textContent=Be,Z=h(),B=r("div"),B.innerHTML=Ee,q=h(),E=r("div"),S=Bt("If we were to go back to the example of a simple variable declaration "),we=r("code"),we.textContent=qe,G=Bt(`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),ce=r("div"),Oe=new K(!1),ae=h(),I=r("div"),I.innerHTML=Je,Ge=h(),Ie=r("div"),ze=new K(!1),rt=h(),ge=r("div"),ge.innerHTML=Rt,ct=h(),ve=r("div"),kt=new K(!1),_e=h(),De=r("div"),De.innerHTML=Zt,dt=h(),be=r("div"),be.textContent=wt,Ht=h(),Se=r("div"),Se.textContent=at,_t=h(),Le=r("div"),Le.textContent=Ke,yt=h(),He=r("div"),He.textContent=Ze,Ue=h(),Ae=r("div"),ht=new K(!1),Ne=h(),We=r("div"),We.innerHTML=jt,Re=h(),vt(me.$$.fragment),V=h(),U=r("div"),U.innerHTML=Ye,Vt=h(),je=r("div"),je.innerHTML=Xe,et=h(),Fe=r("div"),Fe.textContent=Qe,ut=h(),Mt=r("div"),Mt.textContent=en,pt=h(),Et=r("div"),qt=new K(!1),Jt=h(),zt=r("div"),zt.innerHTML=tn,ft=h(),Tt=r("div"),Tt.textContent=nn,this.h()},l(Pe){t=c(Pe,"DIV",{class:!0});var Pt=D(t);bt(i.$$.fragment,Pt),n=u(Pt),e=c(Pt,"DIV",{class:!0});var m=D(e);a=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-j13dtt"&&(a.textContent=o),p=u(m),d=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-1c4zecq"&&(d.innerHTML=k),v=u(m),b=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-18czcds"&&(b.textContent=w),L=u(m),H=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-2up3yp"&&(H.textContent=O),Q=u(m),j=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(j)!=="svelte-5zllcz"&&(j.innerHTML=he),xe=u(m),$=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f($)!=="svelte-13nancv"&&($.innerHTML=X),ue=u(m),ie=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ie)!=="svelte-1mzbrig"&&(ie.innerHTML=ke),ee=u(m),J=c(m,"DIV",{class:!0});var Ct=D(J);se=Y(Ct,!1),Ct.forEach(y),ye=u(m),oe=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(oe)!=="svelte-1we0e0z"&&(oe.innerHTML=Te),N=u(m),le=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(le)!=="svelte-1lvnh79"&&(le.innerHTML=Ve),z=u(m),re=c(m,"DIV",{class:!0});var sn=D(re);$e=Y(sn,!1),sn.forEach(y),pe=u(m),Ce=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Ce)!=="svelte-19lyqfn"&&(Ce.innerHTML=M),W=u(m),fe=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(fe)!=="svelte-1ag31e0"&&(fe.textContent=Me),A=u(m),ne=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ne)!=="svelte-1ysabik"&&(ne.textContent=Be),Z=u(m),B=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-mxfe5q"&&(B.innerHTML=Ee),q=u(m),E=c(m,"DIV",{class:!0});var It=D(E);S=Nt(It,"If we were to go back to the example of a simple variable declaration "),we=c(It,"CODE",{"data-svelte-h":!0}),f(we)!=="svelte-xlrv0q"&&(we.textContent=qe),G=Nt(It,`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),ce=c(It,"DIV",{class:!0});var lt=D(ce);Oe=Y(lt,!1),lt.forEach(y),It.forEach(y),ae=u(m),I=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(I)!=="svelte-1efdofv"&&(I.innerHTML=Je),Ge=u(m),Ie=c(m,"DIV",{class:!0});var At=D(Ie);ze=Y(At,!1),At.forEach(y),rt=u(m),ge=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(ge)!=="svelte-17vyc53"&&(ge.innerHTML=Rt),ct=u(m),ve=c(m,"DIV",{class:!0});var _=D(ve);kt=Y(_,!1),_.forEach(y),_e=u(m),De=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(De)!=="svelte-1hhuaj3"&&(De.innerHTML=Zt),dt=u(m),be=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(be)!=="svelte-nv7ukz"&&(be.textContent=wt),Ht=u(m),Se=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Se)!=="svelte-1cuqjru"&&(Se.textContent=at),_t=u(m),Le=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Le)!=="svelte-bpjzwy"&&(Le.textContent=Ke),yt=u(m),He=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(He)!=="svelte-25yo3g"&&(He.textContent=Ze),Ue=u(m),Ae=c(m,"DIV",{class:!0});var $t=D(Ae);ht=Y($t,!1),$t.forEach(y),Ne=u(m),We=c(m,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),f(We)!=="svelte-6j4ehz"&&(We.innerHTML=jt),Re=u(m),bt(me.$$.fragment,m),V=u(m),U=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(U)!=="svelte-s454o8"&&(U.innerHTML=Ye),Vt=u(m),je=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(je)!=="svelte-yoft6x"&&(je.innerHTML=Xe),et=u(m),Fe=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Fe)!=="svelte-1m8q6hv"&&(Fe.textContent=Qe),ut=u(m),Mt=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Mt)!=="svelte-7yzfiu"&&(Mt.textContent=en),pt=u(m),Et=c(m,"DIV",{class:!0});var an=D(Et);qt=Y(an,!1),an.forEach(y),Jt=u(m),zt=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(zt)!=="svelte-1y0jscx"&&(zt.innerHTML=tn),ft=u(m),Tt=c(m,"DIV",{class:!0,"data-svelte-h":!0}),f(Tt)!=="svelte-1hwghwk"&&(Tt.textContent=nn),m.forEach(y),Pt.forEach(y),this.h()},h(){l(a,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-sub-header"),l(j,"class","blog-paragraph"),l($,"class","blog-paragraph"),l(ie,"class","blog-paragraph"),se.a=null,l(J,"class","blog-code-block"),l(oe,"class","blog-paragraph"),l(le,"class","blog-paragraph"),$e.a=null,l(re,"class","blog-code-block"),l(Ce,"class","blog-paragraph"),l(fe,"class","blog-paragraph"),l(ne,"class","blog-sub-header"),l(B,"class","blog-paragraph"),Oe.a=null,l(ce,"class","blog-code-block"),l(E,"class","blog-paragraph"),l(I,"class","blog-paragraph"),ze.a=null,l(Ie,"class","blog-code-block"),l(ge,"class","blog-paragraph"),kt.a=null,l(ve,"class","blog-code-block"),l(De,"class","blog-paragraph"),l(be,"class","blog-paragraph"),l(Se,"class","blog-sub-header"),l(Le,"class","blog-paragraph"),l(He,"class","blog-paragraph"),ht.a=null,l(Ae,"class","blog-code-block"),l(We,"class","blog-paragraph"),l(We,"id","concentric-circle"),l(U,"class","blog-paragraph"),l(je,"class","blog-paragraph"),l(Fe,"class","blog-sub-header"),l(Mt,"class","blog-paragraph"),qt.a=null,l(Et,"class","blog-code-block"),l(zt,"class","blog-paragraph"),l(Tt,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","scopes-and-closure-container svelte-1v5cf8r")},m(Pe,Pt){Kt(Pe,t,Pt),mt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,L),s(e,H),s(e,Q),s(e,j),s(e,xe),s(e,$),s(e,ue),s(e,ie),s(e,ee),s(e,J),se.m(te,J),s(e,ye),s(e,oe),s(e,N),s(e,le),s(e,z),s(e,re),$e.m(P,re),s(e,pe),s(e,Ce),s(e,W),s(e,fe),s(e,A),s(e,ne),s(e,Z),s(e,B),s(e,q),s(e,E),s(E,S),s(E,we),s(E,G),s(E,ce),Oe.m(de,ce),s(e,ae),s(e,I),s(e,Ge),s(e,Ie),ze.m(Xt,Ie),s(e,rt),s(e,ge),s(e,ct),s(e,ve),kt.m(Lt,ve),s(e,_e),s(e,De),s(e,dt),s(e,be),s(e,Ht),s(e,Se),s(e,_t),s(e,Le),s(e,yt),s(e,He),s(e,Ue),s(e,Ae),ht.m(ot,Ae),s(e,Ne),s(e,We),s(e,Re),mt(me,e,null),s(e,V),s(e,U),s(e,Vt),s(e,je),s(e,et),s(e,Fe),s(e,ut),s(e,Mt),s(e,pt),s(e,Et),qt.m(Ot,Et),s(e,Jt),s(e,zt),s(e,ft),s(e,Tt),gt=!0},p:Wt,i(Pe){gt||(it(i.$$.fragment,Pe),it(me.$$.fragment,Pe),gt=!0)},o(Pe){st(i.$$.fragment,Pe),st(me.$$.fragment,Pe),gt=!1},d(Pe){Pe&&y(t),xt(i),xt(me)}}}class Ci extends Qt{constructor(t){super(),Gt(this,t,null,Ti,Ft,{})}}const Ii=`
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
`,Di="\n```\n    var newObj = JSON.parse( JSON.stringify( someObj ) );\n```\n";function Si(g){let t,i,n,e,a,o="Objects",p,d,k=`Everything in JavaScript is an <code>object</code> - A misconception I have been living with.
			<code>objects</code> are the building blocks in JavaScript but they are one of the 6 primary
			types.
			<div><code>string</code>, <code>number</code>, <code>boolean</code>,
				<code>null</code>,
				<code>undefined</code>, <code>object</code></div>`,v,b,w=`Everything in JavaScript is not an <code>object</code> but there are some some object
			sub-types, which are also referred to as complex primitives. <code>function</code> for example
			is a callable object, and they are referred to as the &quot;first class&quot;. <code>Arrays</code> are
			also <code>objects</code> with extra behavior and data is organization is more structured. So,
			what is the difference between a primitive <code>string</code> and an <code>object</code> <code>String</code>`,L,H,O="Built-in objects",Q,j,he=`There are multiple <code>object</code> sub-types which are referred to as built-in objects.
			<div><code>String</code>, <code>Number</code>, <code>Boolean</code>,
				<code>Object</code>, <code>Function</code>, <code>Array</code>,
				<code>Date</code>, <code>RegExp</code>, <code>Error</code></div>
			Each of these
			<code>objects</code> can be used as a contructor. Upon invocation it creates a new
			<code>object</code> of the specified type.`,xe,$,X,ue=C(Ii)+"",ie,ke,ee=`The example above clearly demarcates the difference between a primitive and an
			<code>object</code> type. The primitive variable is not an instance of the <code>String</code> <code>object</code> type but is just a primitive literal. But, in order to perform any
			operations on the the primitive variable it needs to be wrapped in the <code>object</code> type.
			JavaScript handles coercing the value and we do not have to handle that manually.`,J,se,te="Contents of an object",ye,oe,Te=`The contents of an <code>object</code> consist of values (which can be any type) stored at
			specific named locations which are called properties. When we declare an <code>object</code> the
			properties are not literally stored in the container. The property names are stored in the container
			and those act as references to the where the value is stored.`,N,le,Ve=`There are two ways in which one can access <code>object</code> properties.
			<ol class="blog-list-elements"><li><code>.</code> operator</li> <li><code>[ ]</code> operator</li></ol>
			The
			<code>.</code> operator requires the properties to meet the <code>identifier</code> naming
			standards, whereas the <code>[ ]</code> operator can take any <b>UTF-8/unicode</b> compatible string.`,z,re,$e="Duplicating objects",P,pe,Ce=`Duplicating <code>objects</code> in JavaScript can be tricky. In general there are two modes
			of copying <code>objects</code> <ol class="blog-list-elements"><li>Shallow copy</li> <li>Deep copy</li></ol>
			Shallow copy creates a new<code>object</code> with the same references and values that the
			original <code>object</code> had. Deep copy on the other hand create new references where
			modifying the newly created <code>object</code> does not modify the original
			<code>object</code>.`,M,W,fe="Not everything can be deep copied in JavaScript. Let's look at an example.",Me,A,ne,Be=C($i)+"",Z,B,Ee=`The above example creates a circular dependency. <code>myObject</code> has a reference of
			<code>anotherArray</code> and <code>anotherArray</code> has a reference of
			<code>myObject</code>. When trying to make a deep copy of <code>myObj</code> there are some
			considerations. Do we stop as soon as we find the cylical dependency? How do we deep copy a
			function ? These issues make deep copying difficult and for certain <code>objects</code> deep
			copying does not exist. But, there are certain <code>objects</code> that can be deep copied
			and to know which <code>object</code> , we could do something like this.`,q,E,S,we=C(Di)+"",qe,G,ce=`When an<code>object</code> is JSON-safe(can be serialized to a JSON string and then re-parsed
			to an <code>object</code> with same structure) it can be deep copied.`,Oe;return i=new dn({}),{c(){t=r("div"),vt(i.$$.fragment),n=h(),e=r("div"),a=r("div"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.innerHTML=w,L=h(),H=r("div"),H.textContent=O,Q=h(),j=r("div"),j.innerHTML=he,xe=h(),$=r("div"),X=new K(!1),ie=h(),ke=r("div"),ke.innerHTML=ee,J=h(),se=r("div"),se.textContent=te,ye=h(),oe=r("div"),oe.innerHTML=Te,N=h(),le=r("div"),le.innerHTML=Ve,z=h(),re=r("div"),re.textContent=$e,P=h(),pe=r("div"),pe.innerHTML=Ce,M=h(),W=r("div"),W.textContent=fe,Me=h(),A=r("div"),ne=new K(!1),Z=h(),B=r("div"),B.innerHTML=Ee,q=h(),E=r("div"),S=new K(!1),qe=h(),G=r("div"),G.innerHTML=ce,this.h()},l(de){t=c(de,"DIV",{class:!0});var ae=D(t);bt(i.$$.fragment,ae),n=u(ae),e=c(ae,"DIV",{class:!0});var I=D(e);a=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-1n79vke"&&(a.textContent=o),p=u(I),d=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-6f8u7p"&&(d.innerHTML=k),v=u(I),b=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-kfolhs"&&(b.innerHTML=w),L=u(I),H=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-1ne7xc4"&&(H.textContent=O),Q=u(I),j=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(j)!=="svelte-1kd7iyb"&&(j.innerHTML=he),xe=u(I),$=c(I,"DIV",{class:!0});var Je=D($);X=Y(Je,!1),Je.forEach(y),ie=u(I),ke=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(ke)!=="svelte-16nuv56"&&(ke.innerHTML=ee),J=u(I),se=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(se)!=="svelte-16wez9v"&&(se.textContent=te),ye=u(I),oe=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(oe)!=="svelte-y4relm"&&(oe.innerHTML=Te),N=u(I),le=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(le)!=="svelte-1ic1k41"&&(le.innerHTML=Ve),z=u(I),re=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(re)!=="svelte-uy212c"&&(re.textContent=$e),P=u(I),pe=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(pe)!=="svelte-5fived"&&(pe.innerHTML=Ce),M=u(I),W=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(W)!=="svelte-8wh7q"&&(W.textContent=fe),Me=u(I),A=c(I,"DIV",{class:!0});var Ge=D(A);ne=Y(Ge,!1),Ge.forEach(y),Z=u(I),B=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-5gt4vt"&&(B.innerHTML=Ee),q=u(I),E=c(I,"DIV",{class:!0});var Ie=D(E);S=Y(Ie,!1),Ie.forEach(y),qe=u(I),G=c(I,"DIV",{class:!0,"data-svelte-h":!0}),f(G)!=="svelte-1lkjbvc"&&(G.innerHTML=ce),I.forEach(y),ae.forEach(y),this.h()},h(){l(a,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-sub-header"),l(j,"class","blog-paragraph"),X.a=null,l($,"class","blog-code-block"),l(ke,"class","blog-paragraph"),l(se,"class","blog-sub-header"),l(oe,"class","blog-paragraph"),l(le,"class","blog-paragraph"),l(re,"class","blog-sub-header"),l(pe,"class","blog-paragraph"),l(W,"class","blog-paragraph"),ne.a=null,l(A,"class","blog-code-block"),l(B,"class","blog-paragraph"),S.a=null,l(E,"class","blog-code-block"),l(G,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","objects_container svelte-17riu38")},m(de,ae){Kt(de,t,ae),mt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,L),s(e,H),s(e,Q),s(e,j),s(e,xe),s(e,$),X.m(ue,$),s(e,ie),s(e,ke),s(e,J),s(e,se),s(e,ye),s(e,oe),s(e,N),s(e,le),s(e,z),s(e,re),s(e,P),s(e,pe),s(e,M),s(e,W),s(e,Me),s(e,A),ne.m(Be,A),s(e,Z),s(e,B),s(e,q),s(e,E),S.m(we,E),s(e,qe),s(e,G),Oe=!0},p:Wt,i(de){Oe||(it(i.$$.fragment,de),Oe=!0)},o(de){st(i.$$.fragment,de),Oe=!1},d(de){de&&y(t),xt(i)}}}class Li extends Qt{constructor(t){super(),Gt(this,t,null,Si,Ft,{})}}const Hi=`
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
			in a function referred to the function itself.`,L,H,O=`<code>this</code> is not an author time binding, but a runtime binding. The binding has
			nothing to do with where the function is declared, but everything to do with where and how the
			function is called. When a function gets invoked in JavaScript, it creates an activation
			record, which is also known as an execution context. This record contains information about
			<ul class="blog-list-elements"><li>Where the function was called from</li> <li>How the function was invoked</li> <li>What parameters were passed, etc.</li></ul>
			Amongst that list of properties in the execution context there is another one, which is the
			<code>this</code> reference and that&#39;s used for the duration of the function execution. To
			understand how <code>this</code> gets bound, we need to understand the rules that govern the behavior.`,Q,j,he="Rules for <code>this</code> binding",xe,$,X=`There are four rules that explain how the <code>this</code> binding works.
			<ol class="blog-list-elements"><li>Default binding</li> <li>Implicit binding</li> <li>Explicit binding</li> <li>New binding</li></ol>`,ue,ie,ke="Default binding",ee,J,se,te,ye="Default binding",oe,Te,N,le=C(Hi)+"",Ve,z,re=`The call-site in the above example is in the global context and this resolves to the global\r
				context.`,$e,P,pe="Implicit binding",Ce,M,W,fe,Me="object",A,ne,Be="object",Z,B,Ee="obj",q,E,S,we=C(ji)+"",qe,G,ce=`The way<code>foo</code> gets referenced in the<code>obj</code> does not imply that it is
				owned by the said <code>object</code>. Since, there exists a context <code>object</code>
				that references the function at the call-site, the implicit binding rules state that the
				<code>function</code> is owned by the context <code>object</code>.`,Oe,de,ae=`When <code>this</code> gets implicity bound the context becomes synonmous with the owning
				<code>object</code>. In the above case <code>this.a</code> is synonmous with
				<code>obj.a</code>`,I,Je,Ge="Explicit binding",Ie,ze,Xt=`Explicit binding allows us to explicitly state the <code>object</code> that would act as the
			context <code>object</code> for the function that&#39;s invoked. In order to achieve this, every
			function in JavaScript is provided with utilities and two of them are.
			<ol class="blog-list-elements"><li><code>call</code></li> <li><code>apply</code></li></ol>
			The first parameter of the above utilities is an<code>object</code> which is implied that it
			is used for the <code>this</code> binding. When a simple primitive (<code>string</code>,
			<code>number</code> ..) gets passed it is wrapped in it&#39;s <code>object</code> form and this is
			referred to as <b>Boxing</b>.`,rt,ge,Rt="<code>new</code> binding",ct,ve,kt=`JavaScript <code>new</code> operator unlike the <code>new</code> operator found in object
			oriented programming languages does not call a <code>function</code> that has a constructor
			but instead makes a contructor call that returns a new <code>object</code>. What&#39;s important
			to us here is the idea of <code>this</code> binding through the usage of the <code>new</code>
			operator.`,Lt,_e,De,Zt=C(Vi)+"",dt,be,wt=`The example above contructs a new <code>object</code> and binds that new <code>object</code>
			to the call of <code>foo</code>. This sums up all the rules for binding <code>this</code> but,
			there is an order of precedence.`,Ht,Se,at="Order of precedence",_t,Le,Ke=`The order of precedence is somewhat like this
			<ol class="blog-list-elements"><li>If the <code>new</code> operator is used, use the newly created <code>object</code></li> <li>If the call-site uses <code>call</code> or <code>apply</code> use the specified
					<code>object</code></li> <li>If called with a context <code>object</code> then use that <code>object</code></li> <li>Finally, the default binding</li></ol>`,yt,He,Ze="Lost bindings - Hard binding",Ue,Ae,ht=`Bindings sometime can get lost, which usually implies that it's fallen back to the default\r
			binding.`,ot,Ne,We,jt=C(Mi)+"",Re,me,V=`In the above example the function <code>foo()</code> is implicity bound to the
			<code>object obj</code> which in turn is assigned to the variable <code>bar</code>. When
			<code>bar</code> is invoked, it&#39;s invoked without any decoration and it&#39;s just another
			reference to <code>foo</code>. There is a fix for such a scenario and we call it Hard binding`,U,Ye,Vt="Hard binding",je,Xe,et="Hard binding is a variation around the explicit binding which seals the binding.",Fe,Qe,ut,Mt=C(Ei)+"",en,pt,Et=`The function <code>bar()</code> calls foo with an explicit bind intention and sets
			<code>obj</code> to be the <code>this</code> context. No matter how we invoke <code>bar</code>
			after this, it always binds <code>obj</code> to the function <code>foo</code>&#39;s
			<code>this</code> context. This type of binding is explicit and strong and that&#39;s why it&#39;s
			referred to as <b>Hard binding</b>. Another way to express this pattern is to create a
			reusable helper method.`,qt,Ot,Jt,zt=C(zi)+"",tn,ft,Tt="Since hard binding is such a common pattern, it's provided as a built-in utility as of ES5.",nn,gt,Pe,Pt=C(Ai)+"",m,Ct,sn="That&#39;s a general idea of the <code>this</code> keyword, phew!",It;return i=new dn({}),{c(){t=r("div"),vt(i.$$.fragment),n=h(),e=r("div"),a=r("div"),a.textContent=o,p=h(),d=r("div"),d.innerHTML=k,v=h(),b=r("div"),b.innerHTML=w,L=h(),H=r("div"),H.innerHTML=O,Q=h(),j=r("div"),j.innerHTML=he,xe=h(),$=r("div"),$.innerHTML=X,ue=h(),ie=r("div"),ie.textContent=ke,ee=h(),J=r("div"),se=Bt(`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),te=r("b"),te.textContent=ye,oe=Bt(`. An example!\r
			`),Te=r("div"),N=new K(!1),Ve=h(),z=r("div"),z.textContent=re,$e=h(),P=r("div"),P.textContent=pe,Ce=h(),M=r("div"),W=Bt("This rule determines if the call-site has a context "),fe=r("code"),fe.textContent=Me,A=Bt(` which can also be\r
			referred to as the owning object. In the example below that context `),ne=r("code"),ne.textContent=Be,Z=Bt(` is\r
			`),B=r("code"),B.textContent=Ee,q=h(),E=r("div"),S=new K(!1),qe=h(),G=r("div"),G.innerHTML=ce,Oe=h(),de=r("div"),de.innerHTML=ae,I=h(),Je=r("div"),Je.textContent=Ge,Ie=h(),ze=r("div"),ze.innerHTML=Xt,rt=h(),ge=r("div"),ge.innerHTML=Rt,ct=h(),ve=r("div"),ve.innerHTML=kt,Lt=h(),_e=r("div"),De=new K(!1),dt=h(),be=r("div"),be.innerHTML=wt,Ht=h(),Se=r("div"),Se.textContent=at,_t=h(),Le=r("div"),Le.innerHTML=Ke,yt=h(),He=r("div"),He.textContent=Ze,Ue=h(),Ae=r("div"),Ae.textContent=ht,ot=h(),Ne=r("div"),We=new K(!1),Re=h(),me=r("div"),me.innerHTML=V,U=h(),Ye=r("div"),Ye.textContent=Vt,je=h(),Xe=r("div"),Xe.textContent=et,Fe=h(),Qe=r("div"),ut=new K(!1),en=h(),pt=r("div"),pt.innerHTML=Et,qt=h(),Ot=r("div"),Jt=new K(!1),tn=h(),ft=r("div"),ft.textContent=Tt,nn=h(),gt=r("div"),Pe=new K(!1),m=h(),Ct=r("div"),Ct.innerHTML=sn,this.h()},l(lt){t=c(lt,"DIV",{class:!0});var At=D(t);bt(i.$$.fragment,At),n=u(At),e=c(At,"DIV",{class:!0});var _=D(e);a=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-4whgq2"&&(a.textContent=o),p=u(_),d=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-kz4lmi"&&(d.innerHTML=k),v=u(_),b=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(b)!=="svelte-1hs8980"&&(b.innerHTML=w),L=u(_),H=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-19qb0p4"&&(H.innerHTML=O),Q=u(_),j=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(j)!=="svelte-bbtnld"&&(j.innerHTML=he),xe=u(_),$=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f($)!=="svelte-1231oos"&&($.innerHTML=X),ue=u(_),ie=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ie)!=="svelte-g9a91e"&&(ie.textContent=ke),ee=u(_),J=c(_,"DIV",{class:!0});var $t=D(J);se=Nt($t,`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),te=c($t,"B",{"data-svelte-h":!0}),f(te)!=="svelte-1y3shn8"&&(te.textContent=ye),oe=Nt($t,`. An example!\r
			`),Te=c($t,"DIV",{class:!0});var an=D(Te);N=Y(an,!1),an.forEach(y),Ve=u($t),z=c($t,"DIV",{class:!0,"data-svelte-h":!0}),f(z)!=="svelte-8avcu5"&&(z.textContent=re),$t.forEach(y),$e=u(_),P=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(P)!=="svelte-mu8xb6"&&(P.textContent=pe),Ce=u(_),M=c(_,"DIV",{class:!0});var tt=D(M);W=Nt(tt,"This rule determines if the call-site has a context "),fe=c(tt,"CODE",{"data-svelte-h":!0}),f(fe)!=="svelte-s6nf5f"&&(fe.textContent=Me),A=Nt(tt,` which can also be\r
			referred to as the owning object. In the example below that context `),ne=c(tt,"CODE",{"data-svelte-h":!0}),f(ne)!=="svelte-s6nf5f"&&(ne.textContent=Be),Z=Nt(tt,` is\r
			`),B=c(tt,"CODE",{"data-svelte-h":!0}),f(B)!=="svelte-vvasqx"&&(B.textContent=Ee),q=u(tt),E=c(tt,"DIV",{class:!0});var In=D(E);S=Y(In,!1),In.forEach(y),qe=u(tt),G=c(tt,"DIV",{class:!0,"data-svelte-h":!0}),f(G)!=="svelte-1u26aq3"&&(G.innerHTML=ce),Oe=u(tt),de=c(tt,"DIV",{class:!0,"data-svelte-h":!0}),f(de)!=="svelte-1pd2x54"&&(de.innerHTML=ae),tt.forEach(y),I=u(_),Je=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Je)!=="svelte-15pd8q3"&&(Je.textContent=Ge),Ie=u(_),ze=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ze)!=="svelte-19lb28g"&&(ze.innerHTML=Xt),rt=u(_),ge=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ge)!=="svelte-1gams9s"&&(ge.innerHTML=Rt),ct=u(_),ve=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ve)!=="svelte-1jy3h5k"&&(ve.innerHTML=kt),Lt=u(_),_e=c(_,"DIV",{class:!0});var $n=D(_e);De=Y($n,!1),$n.forEach(y),dt=u(_),be=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(be)!=="svelte-jkk5u5"&&(be.innerHTML=wt),Ht=u(_),Se=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Se)!=="svelte-3baxvp"&&(Se.textContent=at),_t=u(_),Le=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Le)!=="svelte-5anpcm"&&(Le.innerHTML=Ke),yt=u(_),He=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(He)!=="svelte-w7xtgf"&&(He.textContent=Ze),Ue=u(_),Ae=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ae)!=="svelte-1h8kfrd"&&(Ae.textContent=ht),ot=u(_),Ne=c(_,"DIV",{class:!0});var Dn=D(Ne);We=Y(Dn,!1),Dn.forEach(y),Re=u(_),me=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(me)!=="svelte-1bt0v8s"&&(me.innerHTML=V),U=u(_),Ye=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ye)!=="svelte-1h8jj0c"&&(Ye.textContent=Vt),je=u(_),Xe=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Xe)!=="svelte-pfj1ln"&&(Xe.textContent=et),Fe=u(_),Qe=c(_,"DIV",{class:!0});var Sn=D(Qe);ut=Y(Sn,!1),Sn.forEach(y),en=u(_),pt=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(pt)!=="svelte-ui5am2"&&(pt.innerHTML=Et),qt=u(_),Ot=c(_,"DIV",{class:!0});var Ln=D(Ot);Jt=Y(Ln,!1),Ln.forEach(y),tn=u(_),ft=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ft)!=="svelte-1vqldzj"&&(ft.textContent=Tt),nn=u(_),gt=c(_,"DIV",{class:!0});var Hn=D(gt);Pe=Y(Hn,!1),Hn.forEach(y),m=u(_),Ct=c(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ct)!=="svelte-l9usji"&&(Ct.innerHTML=sn),_.forEach(y),At.forEach(y),this.h()},h(){l(a,"class","blog-title"),l(d,"class","blog-paragraph"),l(b,"class","blog-paragraph"),l(H,"class","blog-paragraph"),l(j,"class","blog-sub-header"),l($,"class","blog-paragraph"),l(ie,"class","blog-sub-header"),N.a=null,l(Te,"class","blog-code-block"),l(z,"class","blog-paragraph"),l(J,"class","blog-paragraph"),l(P,"class","blog-sub-header"),S.a=null,l(E,"class","blog-code-block"),l(G,"class","blog-paragraph"),l(de,"class","blog-paragraph"),l(M,"class","blog-paragraph"),l(Je,"class","blog-sub-header"),l(ze,"class","blog-paragraph"),l(ge,"class","blog-sub-header"),l(ve,"class","blog-paragraph"),De.a=null,l(_e,"class","blog-code-block"),l(be,"class","blog-paragraph"),l(Se,"class","blog-sub-header"),l(Le,"class","blog-paragraph"),l(He,"class","blog-sub-header"),l(Ae,"class","blog-paragraph"),We.a=null,l(Ne,"class","blog-code-block"),l(me,"class","blog-paragraph"),l(Ye,"class","blog-sub-header"),l(Xe,"class","blog-paragraph"),ut.a=null,l(Qe,"class","blog-code-block"),l(pt,"class","blog-paragraph"),Jt.a=null,l(Ot,"class","blog-code-block"),l(ft,"class","blog-paragraph"),Pe.a=null,l(gt,"class","blog-code-block"),l(Ct,"class","blog-paragraph"),l(e,"class","blog-text-container"),l(t,"class","understanding_this_container svelte-1aivc9z")},m(lt,At){Kt(lt,t,At),mt(i,t,null),s(t,n),s(t,e),s(e,a),s(e,p),s(e,d),s(e,v),s(e,b),s(e,L),s(e,H),s(e,Q),s(e,j),s(e,xe),s(e,$),s(e,ue),s(e,ie),s(e,ee),s(e,J),s(J,se),s(J,te),s(J,oe),s(J,Te),N.m(le,Te),s(J,Ve),s(J,z),s(e,$e),s(e,P),s(e,Ce),s(e,M),s(M,W),s(M,fe),s(M,A),s(M,ne),s(M,Z),s(M,B),s(M,q),s(M,E),S.m(we,E),s(M,qe),s(M,G),s(M,Oe),s(M,de),s(e,I),s(e,Je),s(e,Ie),s(e,ze),s(e,rt),s(e,ge),s(e,ct),s(e,ve),s(e,Lt),s(e,_e),De.m(Zt,_e),s(e,dt),s(e,be),s(e,Ht),s(e,Se),s(e,_t),s(e,Le),s(e,yt),s(e,He),s(e,Ue),s(e,Ae),s(e,ot),s(e,Ne),We.m(jt,Ne),s(e,Re),s(e,me),s(e,U),s(e,Ye),s(e,je),s(e,Xe),s(e,Fe),s(e,Qe),ut.m(Mt,Qe),s(e,en),s(e,pt),s(e,qt),s(e,Ot),Jt.m(zt,Ot),s(e,tn),s(e,ft),s(e,nn),s(e,gt),Pe.m(Pt,gt),s(e,m),s(e,Ct),It=!0},p:Wt,i(lt){It||(it(i.$$.fragment,lt),It=!0)},o(lt){st(i.$$.fragment,lt),It=!1},d(lt){lt&&y(t),xt(i)}}}class qi extends Qt{constructor(t){super(),Gt(this,t,null,Ri,Ft,{})}}function Oi(g){let t,i;return t=new Li({}),{c(){vt(t.$$.fragment)},l(n){bt(t.$$.fragment,n)},m(n,e){mt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){xt(t,n)}}}function Ji(g){let t,i;return t=new qi({}),{c(){vt(t.$$.fragment)},l(n){bt(t.$$.fragment,n)},m(n,e){mt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){xt(t,n)}}}function Pi(g){let t,i;return t=new fi({}),{c(){vt(t.$$.fragment)},l(n){bt(t.$$.fragment,n)},m(n,e){mt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){xt(t,n)}}}function Bi(g){let t,i;return t=new Ci({}),{c(){vt(t.$$.fragment)},l(n){bt(t.$$.fragment,n)},m(n,e){mt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){xt(t,n)}}}function Ni(g){let t,i;return t=new ri({}),{c(){vt(t.$$.fragment)},l(n){bt(t.$$.fragment,n)},m(n,e){mt(t,n,e),i=!0},i(n){i||(it(t.$$.fragment,n),i=!0)},o(n){st(t.$$.fragment,n),i=!1},d(n){xt(t,n)}}}function Wi(g){let t,i,n,e;const a=[Ni,Bi,Pi,Ji,Oi],o=[];function p(d,k){return d[0].path===_n?0:d[0].path===wn?1:d[0].path===kn?2:d[0].path===xn?3:d[0].path===mn?4:-1}return~(i=p(g))&&(n=o[i]=a[i](g)),{c(){t=r("div"),n&&n.c(),this.h()},l(d){t=c(d,"DIV",{class:!0});var k=D(t);n&&n.l(k),k.forEach(y),this.h()},h(){l(t,"class","blog-container")},m(d,k){Kt(d,t,k),~i&&o[i].m(t,null),e=!0},p(d,[k]){let v=i;i=p(d),i!==v&&(n&&(Wn(),st(o[v],1,1,()=>{o[v]=null}),Nn()),~i?(n=o[i],n||(n=o[i]=a[i](d),n.c()),it(n,1),n.m(t,null)):n=null)},i(d){e||(it(n),e=!0)},o(d){st(n),e=!1},d(d){d&&y(t),~i&&o[i].d()}}}function Zi(g,t,i){let{data:n}=t;return g.$$set=e=>{"data"in e&&i(0,n=e.data)},[n]}class Yi extends Qt{constructor(t){super(),Gt(this,t,Zi,Wi,Ft,{data:0})}}export{Yi as component,Ki as universal};
