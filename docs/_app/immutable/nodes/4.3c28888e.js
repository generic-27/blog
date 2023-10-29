var qn=Object.defineProperty;var On=(g,t,i)=>t in g?qn(g,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):g[t]=i;var A=(g,t,i)=>(On(g,typeof t!="symbol"?t+"":t,i),i),Jn=(g,t,i)=>{if(!t.has(g))throw TypeError("Cannot "+i)};var vn=(g,t,i)=>{if(t.has(g))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(g):t.set(g,i)};var hn=(g,t,i)=>(Jn(g,t,"access private method"),i);import{e as Pn,U as mn,C as xn,S as kn,a as wn,A as gn}from"../chunks/article-main-header.c0068cb6.js";import{s as Xt,n as Qt}from"../chunks/scheduler.e108d1fd.js";import{S as en,i as tn,g as c,r as Mt,s as u,m as Zt,H as W,h,j as I,u as Et,c as p,y as f,n as Wt,B as U,f as C,k as o,a as nn,v as jt,x as s,d as vt,t as bt,w as At,C as an,D as on,b as Bn,p as Nn}from"../chunks/index.2b92d2ca.js";function Zn({params:g}){switch(g.slug){case wn:return{path:wn};case kn:return{path:kn};case xn:return{path:xn};case mn:return{path:mn};default:throw Pn(404,"Not found")}}const Ni=Object.freeze(Object.defineProperty({__proto__:null,load:Zn},Symbol.toStringTag,{value:"Module"}));function yn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ft=yn();function En(g){Ft=g}const jn=/[&<>"']/,Wn=new RegExp(jn.source,"g"),An=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Un=new RegExp(An.source,"g"),Qn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hn=g=>Qn[g];function Xe(g,t){if(t){if(jn.test(g))return g.replace(Wn,Hn)}else if(An.test(g))return g.replace(Un,Hn);return g}const Gn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Fn(g){return g.replace(Gn,(t,i)=>(i=i.toLowerCase(),i==="colon"?":":i.charAt(0)==="#"?i.charAt(1)==="x"?String.fromCharCode(parseInt(i.substring(2),16)):String.fromCharCode(+i.substring(1)):""))}const Kn=/(^|[^\[])\^/g;function E(g,t){g=typeof g=="string"?g:g.source,t=t||"";const i={replace:(n,e)=>(e=typeof e=="object"&&"source"in e?e.source:e,e=e.replace(Kn,"$1"),g=g.replace(n,e),i),getRegex:()=>new RegExp(g,t)};return i}function Vn(g){try{g=encodeURI(g).replace(/%25/g,"%")}catch{return null}return g}const dn={exec:()=>null};function zn(g,t){const i=g.replace(/\|/g,(l,a,d)=>{let r=!1,k=a;for(;--k>=0&&d[k]==="\\";)r=!r;return r?"|":" |"}),n=i.split(/ \|/);let e=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;e<n.length;e++)n[e]=n[e].trim().replace(/\\\|/g,"|");return n}function bn(g,t,i){const n=g.length;if(n===0)return"";let e=0;for(;e<n;){const l=g.charAt(n-e-1);if(l===t&&!i)e++;else if(l!==t&&i)e++;else break}return g.slice(0,n-e)}function Yn(g,t){if(g.indexOf(t[1])===-1)return-1;let i=0;for(let n=0;n<g.length;n++)if(g[n]==="\\")n++;else if(g[n]===t[0])i++;else if(g[n]===t[1]&&(i--,i<0))return n;return-1}function Mn(g,t,i,n){const e=t.href,l=t.title?Xe(t.title):null,a=g[1].replace(/\\([\[\]])/g,"$1");if(g[0].charAt(0)!=="!"){n.state.inLink=!0;const d={type:"link",raw:i,href:e,title:l,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,d}return{type:"image",raw:i,href:e,title:l,text:Xe(a)}}function Xn(g,t){const i=g.match(/^(\s+)(?:```)/);if(i===null)return t;const n=i[1];return t.split(`
`).map(e=>{const l=e.match(/^\s+/);if(l===null)return e;const[a]=l;return a.length>=n.length?e.slice(n.length):e}).join(`
`)}class un{constructor(t){A(this,"options");A(this,"rules");A(this,"lexer");this.options=t||Ft}space(t){const i=this.rules.block.newline.exec(t);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(t){const i=this.rules.block.code.exec(t);if(i){const n=i[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?n:bn(n,`
`)}}}fences(t){const i=this.rules.block.fences.exec(t);if(i){const n=i[0],e=Xn(n,i[3]||"");return{type:"code",raw:n,lang:i[2]?i[2].trim().replace(this.rules.inline._escapes,"$1"):i[2],text:e}}}heading(t){const i=this.rules.block.heading.exec(t);if(i){let n=i[2].trim();if(/#$/.test(n)){const e=bn(n,"#");(this.options.pedantic||!e||/ $/.test(e))&&(n=e.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const i=this.rules.block.hr.exec(t);if(i)return{type:"hr",raw:i[0]}}blockquote(t){const i=this.rules.block.blockquote.exec(t);if(i){const n=i[0].replace(/^ *>[ \t]?/gm,""),e=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(n);return this.lexer.state.top=e,{type:"blockquote",raw:i[0],tokens:l,text:n}}}list(t){let i=this.rules.block.list.exec(t);if(i){let n=i[1].trim();const e=n.length>1,l={type:"list",raw:"",ordered:e,start:e?+n.slice(0,-1):"",loose:!1,items:[]};n=e?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=e?n:"[*+-]");const a=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let d="",r="",k=!1;for(;t;){let v=!1;if(!(i=a.exec(t))||this.rules.block.hr.test(t))break;d=i[0],t=t.substring(d.length);let x=i[2].split(`
`,1)[0].replace(/^\t+/,z=>" ".repeat(3*z.length)),w=t.split(`
`,1)[0],D=0;this.options.pedantic?(D=2,r=x.trimStart()):(D=i[2].search(/[^ ]/),D=D>4?1:D,r=x.slice(D),D+=i[1].length);let H=!1;if(!x&&/^ *$/.test(w)&&(d+=w+`
`,t=t.substring(w.length+1),v=!0),!v){const z=new RegExp(`^ {0,${Math.min(3,D-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),oe=new RegExp(`^ {0,${Math.min(3,D-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),xe=new RegExp(`^ {0,${Math.min(3,D-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,D-1)}}#`);for(;t;){const re=t.split(`
`,1)[0];if(w=re,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),xe.test(w)||M.test(w)||z.test(w)||oe.test(t))break;if(w.search(/[^ ]/)>=D||!w.trim())r+=`
`+w.slice(D);else{if(H||x.search(/[^ ]/)>=4||xe.test(x)||M.test(x)||oe.test(x))break;r+=`
`+w}!H&&!w.trim()&&(H=!0),d+=re+`
`,t=t.substring(re.length+1),x=w.slice(D)}}l.loose||(k?l.loose=!0:/\n *\n *$/.test(d)&&(k=!0));let O=null,Q;this.options.gfm&&(O=/^\[[ xX]\] /.exec(r),O&&(Q=O[0]!=="[ ] ",r=r.replace(/^\[[ xX]\] +/,""))),l.items.push({type:"list_item",raw:d,task:!!O,checked:Q,loose:!1,text:r,tokens:[]}),l.raw+=d}l.items[l.items.length-1].raw=d.trimEnd(),l.items[l.items.length-1].text=r.trimEnd(),l.raw=l.raw.trimEnd();for(let v=0;v<l.items.length;v++)if(this.lexer.state.top=!1,l.items[v].tokens=this.lexer.blockTokens(l.items[v].text,[]),!l.loose){const x=l.items[v].tokens.filter(D=>D.type==="space"),w=x.length>0&&x.some(D=>/\n.*\n/.test(D.raw));l.loose=w}if(l.loose)for(let v=0;v<l.items.length;v++)l.items[v].loose=!0;return l}}html(t){const i=this.rules.block.html.exec(t);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(t){const i=this.rules.block.def.exec(t);if(i){const n=i[1].toLowerCase().replace(/\s+/g," "),e=i[2]?i[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",l=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline._escapes,"$1"):i[3];return{type:"def",tag:n,raw:i[0],href:e,title:l}}}table(t){const i=this.rules.block.table.exec(t);if(i){if(!/[:|]/.test(i[2]))return;const n={type:"table",raw:i[0],header:zn(i[1]).map(e=>({text:e,tokens:[]})),align:i[2].replace(/^\||\| *$/g,"").split("|"),rows:i[3]&&i[3].trim()?i[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){let e=n.align.length,l,a,d,r;for(l=0;l<e;l++){const k=n.align[l];k&&(/^ *-+: *$/.test(k)?n.align[l]="right":/^ *:-+: *$/.test(k)?n.align[l]="center":/^ *:-+ *$/.test(k)?n.align[l]="left":n.align[l]=null)}for(e=n.rows.length,l=0;l<e;l++)n.rows[l]=zn(n.rows[l],n.header.length).map(k=>({text:k,tokens:[]}));for(e=n.header.length,a=0;a<e;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);for(e=n.rows.length,a=0;a<e;a++)for(r=n.rows[a],d=0;d<r.length;d++)r[d].tokens=this.lexer.inline(r[d].text);return n}}}lheading(t){const i=this.rules.block.lheading.exec(t);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(t){const i=this.rules.block.paragraph.exec(t);if(i){const n=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const i=this.rules.block.text.exec(t);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(t){const i=this.rules.inline.escape.exec(t);if(i)return{type:"escape",raw:i[0],text:Xe(i[1])}}tag(t){const i=this.rules.inline.tag.exec(t);if(i)return!this.lexer.state.inLink&&/^<a /i.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(t){const i=this.rules.inline.link.exec(t);if(i){const n=i[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=bn(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=Yn(i[2],"()");if(a>-1){const r=(i[0].indexOf("!")===0?5:4)+i[1].length+a;i[2]=i[2].substring(0,a),i[0]=i[0].substring(0,r).trim(),i[3]=""}}let e=i[2],l="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e);a&&(e=a[1],l=a[3])}else l=i[3]?i[3].slice(1,-1):"";return e=e.trim(),/^</.test(e)&&(this.options.pedantic&&!/>$/.test(n)?e=e.slice(1):e=e.slice(1,-1)),Mn(i,{href:e&&e.replace(this.rules.inline._escapes,"$1"),title:l&&l.replace(this.rules.inline._escapes,"$1")},i[0],this.lexer)}}reflink(t,i){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=i[e.toLowerCase()],!e){const l=n[0].charAt(0);return{type:"text",raw:l,text:l}}return Mn(n,e,n[0],this.lexer)}}emStrong(t,i,n=""){let e=this.rules.inline.emStrong.lDelim.exec(t);if(!e||e[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(e[1]||e[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const a=[...e[0]].length-1;let d,r,k=a,v=0;const x=e[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(x.lastIndex=0,i=i.slice(-1*t.length+e[0].length-1);(e=x.exec(i))!=null;){if(d=e[1]||e[2]||e[3]||e[4]||e[5]||e[6],!d)continue;if(r=[...d].length,e[3]||e[4]){k+=r;continue}else if((e[5]||e[6])&&a%3&&!((a+r)%3)){v+=r;continue}if(k-=r,k>0)continue;r=Math.min(r,r+k+v);const w=[...t].slice(0,a+e.index+r+1).join("");if(Math.min(a,r)%2){const H=w.slice(1,-1);return{type:"em",raw:w,text:H,tokens:this.lexer.inlineTokens(H)}}const D=w.slice(2,-2);return{type:"strong",raw:w,text:D,tokens:this.lexer.inlineTokens(D)}}}}codespan(t){const i=this.rules.inline.code.exec(t);if(i){let n=i[2].replace(/\n/g," ");const e=/[^ ]/.test(n),l=/^ /.test(n)&&/ $/.test(n);return e&&l&&(n=n.substring(1,n.length-1)),n=Xe(n,!0),{type:"codespan",raw:i[0],text:n}}}br(t){const i=this.rules.inline.br.exec(t);if(i)return{type:"br",raw:i[0]}}del(t){const i=this.rules.inline.del.exec(t);if(i)return{type:"del",raw:i[0],text:i[2],tokens:this.lexer.inlineTokens(i[2])}}autolink(t){const i=this.rules.inline.autolink.exec(t);if(i){let n,e;return i[2]==="@"?(n=Xe(i[1]),e="mailto:"+n):(n=Xe(i[1]),e=n),{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let i;if(i=this.rules.inline.url.exec(t)){let n,e;if(i[2]==="@")n=Xe(i[0]),e="mailto:"+n;else{let l;do l=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(l!==i[0]);n=Xe(i[0]),i[1]==="www."?e="http://"+i[0]:e=i[0]}return{type:"link",raw:i[0],text:n,href:e,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const i=this.rules.inline.text.exec(t);if(i){let n;return this.lexer.state.inRawBlock?n=i[0]:n=Xe(i[0]),{type:"text",raw:i[0],text:n}}}}const y={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:dn,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};y._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;y._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;y.def=E(y.def).replace("label",y._label).replace("title",y._title).getRegex();y.bullet=/(?:[*+-]|\d{1,9}[.)])/;y.listItemStart=E(/^( *)(bull) */).replace("bull",y.bullet).getRegex();y.list=E(y.list).replace(/bull/g,y.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+y.def.source+")").getRegex();y._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";y._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;y.html=E(y.html,"i").replace("comment",y._comment).replace("tag",y._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();y.lheading=E(y.lheading).replace(/bull/g,y.bullet).getRegex();y.paragraph=E(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.blockquote=E(y.blockquote).replace("paragraph",y.paragraph).getRegex();y.normal={...y};y.gfm={...y.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};y.gfm.table=E(y.gfm.table).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.gfm.paragraph=E(y._paragraph).replace("hr",y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",y.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",y._tag).getRegex();y.pedantic={...y.normal,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",y._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(y.normal._paragraph).replace("hr",y.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",y.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const m={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:dn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:dn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};m._punctuation="\\p{P}$+<=>`^|~";m.punctuation=E(m.punctuation,"u").replace(/punctuation/g,m._punctuation).getRegex();m.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;m.anyPunctuation=/\\[punct]/g;m._escapes=/\\([punct])/g;m._comment=E(y._comment).replace("(?:-->|$)","-->").getRegex();m.emStrong.lDelim=E(m.emStrong.lDelim,"u").replace(/punct/g,m._punctuation).getRegex();m.emStrong.rDelimAst=E(m.emStrong.rDelimAst,"gu").replace(/punct/g,m._punctuation).getRegex();m.emStrong.rDelimUnd=E(m.emStrong.rDelimUnd,"gu").replace(/punct/g,m._punctuation).getRegex();m.anyPunctuation=E(m.anyPunctuation,"gu").replace(/punct/g,m._punctuation).getRegex();m._escapes=E(m._escapes,"gu").replace(/punct/g,m._punctuation).getRegex();m._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;m._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;m.autolink=E(m.autolink).replace("scheme",m._scheme).replace("email",m._email).getRegex();m._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;m.tag=E(m.tag).replace("comment",m._comment).replace("attribute",m._attribute).getRegex();m._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;m._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;m._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;m.link=E(m.link).replace("label",m._label).replace("href",m._href).replace("title",m._title).getRegex();m.reflink=E(m.reflink).replace("label",m._label).replace("ref",y._label).getRegex();m.nolink=E(m.nolink).replace("ref",y._label).getRegex();m.reflinkSearch=E(m.reflinkSearch,"g").replace("reflink",m.reflink).replace("nolink",m.nolink).getRegex();m.normal={...m};m.pedantic={...m.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",m._label).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",m._label).getRegex()};m.gfm={...m.normal,escape:E(m.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};m.gfm.url=E(m.gfm.url,"i").replace("email",m.gfm._extended_email).getRegex();m.breaks={...m.gfm,br:E(m.br).replace("{2,}","*").getRegex(),text:E(m.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class It{constructor(t){A(this,"tokens");A(this,"options");A(this,"state");A(this,"tokenizer");A(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ft,this.options.tokenizer=this.options.tokenizer||new un,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={block:y.normal,inline:m.normal};this.options.pedantic?(i.block=y.pedantic,i.inline=m.pedantic):this.options.gfm&&(i.block=y.gfm,this.options.breaks?i.inline=m.breaks:i.inline=m.gfm),this.tokenizer.rules=i}static get rules(){return{block:y,inline:m}}static lex(t,i){return new It(i).lex(t)}static lexInline(t,i){return new It(i).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let i;for(;i=this.inlineQueue.shift();)this.inlineTokens(i.src,i.tokens);return this.tokens}blockTokens(t,i=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(d,r,k)=>r+"    ".repeat(k.length));let n,e,l,a;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>(n=d.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&i.length>0?i[i.length-1].raw+=`
`:i.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&(e.type==="paragraph"||e.type==="text")?(e.raw+=`
`+n.raw,e.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=e.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(l=t,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const r=t.slice(1);let k;this.options.extensions.startBlock.forEach(v=>{k=v.call({lexer:this},r),typeof k=="number"&&k>=0&&(d=Math.min(d,k))}),d<1/0&&d>=0&&(l=t.substring(0,d+1))}if(this.state.top&&(n=this.tokenizer.paragraph(l))){e=i[i.length-1],a&&e.type==="paragraph"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n),a=l.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&e.type==="text"?(e.raw+=`
`+n.raw,e.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=e.text):i.push(n);continue}if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let n,e,l,a=t,d,r,k;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)v.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,d.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(r||(k=""),r=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(n=v.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),e=i[i.length-1],e&&n.type==="text"&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(n=this.tokenizer.emStrong(t,a,k)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),i.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),i.push(n);continue}if(l=t,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const x=t.slice(1);let w;this.options.extensions.startInline.forEach(D=>{w=D.call({lexer:this},x),typeof w=="number"&&w>=0&&(v=Math.min(v,w))}),v<1/0&&v>=0&&(l=t.substring(0,v+1))}if(n=this.tokenizer.inlineText(l)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(k=n.raw.slice(-1)),r=!0,e=i[i.length-1],e&&e.type==="text"?(e.raw+=n.raw,e.text+=n.text):i.push(n);continue}if(t){const v="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return i}}class pn{constructor(t){A(this,"options");this.options=t||Ft}code(t,i,n){var l;const e=(l=(i||"").match(/^\S*/))==null?void 0:l[0];return t=t.replace(/\n$/,"")+`
`,e?'<pre><code class="language-'+Xe(e)+'">'+(n?t:Xe(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:Xe(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,i){return t}heading(t,i,n){return`<h${i}>${t}</h${i}>
`}hr(){return`<hr>
`}list(t,i,n){const e=i?"ol":"ul",l=i&&n!==1?' start="'+n+'"':"";return"<"+e+l+`>
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
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,i,n){const e=Vn(t);if(e===null)return n;t=e;let l='<a href="'+t+'"';return i&&(l+=' title="'+i+'"'),l+=">"+n+"</a>",l}image(t,i,n){const e=Vn(t);if(e===null)return n;t=e;let l=`<img src="${t}" alt="${n}"`;return i&&(l+=` title="${i}"`),l+=">",l}text(t){return t}}class Tn{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,i,n){return""+n}image(t,i,n){return""+n}br(){return""}}class $t{constructor(t){A(this,"options");A(this,"renderer");A(this,"textRenderer");this.options=t||Ft,this.options.renderer=this.options.renderer||new pn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Tn}static parse(t,i){return new $t(i).parse(t)}static parseInline(t,i){return new $t(i).parseInline(t)}parse(t,i=!0){let n="";for(let e=0;e<t.length;e++){const l=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]){const a=l,d=this.options.extensions.renderers[a.type].call({parser:this},a);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){n+=d||"";continue}}switch(l.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const a=l;n+=this.renderer.heading(this.parseInline(a.tokens),a.depth,Fn(this.parseInline(a.tokens,this.textRenderer)));continue}case"code":{const a=l;n+=this.renderer.code(a.text,a.lang,!!a.escaped);continue}case"table":{const a=l;let d="",r="";for(let v=0;v<a.header.length;v++)r+=this.renderer.tablecell(this.parseInline(a.header[v].tokens),{header:!0,align:a.align[v]});d+=this.renderer.tablerow(r);let k="";for(let v=0;v<a.rows.length;v++){const x=a.rows[v];r="";for(let w=0;w<x.length;w++)r+=this.renderer.tablecell(this.parseInline(x[w].tokens),{header:!1,align:a.align[w]});k+=this.renderer.tablerow(r)}n+=this.renderer.table(d,k);continue}case"blockquote":{const a=l,d=this.parse(a.tokens);n+=this.renderer.blockquote(d);continue}case"list":{const a=l,d=a.ordered,r=a.start,k=a.loose;let v="";for(let x=0;x<a.items.length;x++){const w=a.items[x],D=w.checked,H=w.task;let O="";if(w.task){const Q=this.renderer.checkbox(!!D);k?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=Q+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=Q+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:Q+" "}):O+=Q+" "}O+=this.parse(w.tokens,k),v+=this.renderer.listitem(O,H,!!D)}n+=this.renderer.list(v,d,r);continue}case"html":{const a=l;n+=this.renderer.html(a.text,a.block);continue}case"paragraph":{const a=l;n+=this.renderer.paragraph(this.parseInline(a.tokens));continue}case"text":{let a=l,d=a.tokens?this.parseInline(a.tokens):a.text;for(;e+1<t.length&&t[e+1].type==="text";)a=t[++e],d+=`
`+(a.tokens?this.parseInline(a.tokens):a.text);n+=i?this.renderer.paragraph(d):d;continue}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(t,i){i=i||this.renderer;let n="";for(let e=0;e<t.length;e++){const l=t[e];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]){const a=this.options.extensions.renderers[l.type].call({parser:this},l);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){n+=a||"";continue}}switch(l.type){case"escape":{const a=l;n+=i.text(a.text);break}case"html":{const a=l;n+=i.html(a.text);break}case"link":{const a=l;n+=i.link(a.href,a.title,this.parseInline(a.tokens,i));break}case"image":{const a=l;n+=i.image(a.href,a.title,a.text);break}case"strong":{const a=l;n+=i.strong(this.parseInline(a.tokens,i));break}case"em":{const a=l;n+=i.em(this.parseInline(a.tokens,i));break}case"codespan":{const a=l;n+=i.codespan(a.text);break}case"br":{n+=i.br();break}case"del":{const a=l;n+=i.del(this.parseInline(a.tokens,i));break}case"text":{const a=l;n+=i.text(a.text);break}default:{const a='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}}class rn{constructor(t){A(this,"options");this.options=t||Ft}preprocess(t){return t}postprocess(t){return t}}A(rn,"passThroughHooks",new Set(["preprocess","postprocess"]));var cn,_n,fn,Rn;class ei{constructor(...t){vn(this,cn);vn(this,fn);A(this,"defaults",yn());A(this,"options",this.setOptions);A(this,"parse",hn(this,cn,_n).call(this,It.lex,$t.parse));A(this,"parseInline",hn(this,cn,_n).call(this,It.lexInline,$t.parseInline));A(this,"Parser",$t);A(this,"parser",$t.parse);A(this,"Renderer",pn);A(this,"TextRenderer",Tn);A(this,"Lexer",It);A(this,"lexer",It.lex);A(this,"Tokenizer",un);A(this,"Hooks",rn);this.use(...t)}walkTokens(t,i){var e,l;let n=[];for(const a of t)switch(n=n.concat(i.call(this,a)),a.type){case"table":{const d=a;for(const r of d.header)n=n.concat(this.walkTokens(r.tokens,i));for(const r of d.rows)for(const k of r)n=n.concat(this.walkTokens(k.tokens,i));break}case"list":{const d=a;n=n.concat(this.walkTokens(d.items,i));break}default:{const d=a;(l=(e=this.defaults.extensions)==null?void 0:e.childTokens)!=null&&l[d.type]?this.defaults.extensions.childTokens[d.type].forEach(r=>{n=n.concat(this.walkTokens(d[r],i))}):d.tokens&&(n=n.concat(this.walkTokens(d.tokens,i)))}}return n}use(...t){const i=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const e={...n};if(e.async=this.defaults.async||e.async||!1,n.extensions&&(n.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if("renderer"in l){const a=i.renderers[l.name];a?i.renderers[l.name]=function(...d){let r=l.renderer.apply(this,d);return r===!1&&(r=a.apply(this,d)),r}:i.renderers[l.name]=l.renderer}if("tokenizer"in l){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=i[l.level];a?a.unshift(l.tokenizer):i[l.level]=[l.tokenizer],l.start&&(l.level==="block"?i.startBlock?i.startBlock.push(l.start):i.startBlock=[l.start]:l.level==="inline"&&(i.startInline?i.startInline.push(l.start):i.startInline=[l.start]))}"childTokens"in l&&l.childTokens&&(i.childTokens[l.name]=l.childTokens)}),e.extensions=i),n.renderer){const l=this.defaults.renderer||new pn(this.defaults);for(const a in n.renderer){const d=n.renderer[a],r=a,k=l[r];l[r]=(...v)=>{let x=d.apply(l,v);return x===!1&&(x=k.apply(l,v)),x||""}}e.renderer=l}if(n.tokenizer){const l=this.defaults.tokenizer||new un(this.defaults);for(const a in n.tokenizer){const d=n.tokenizer[a],r=a,k=l[r];l[r]=(...v)=>{let x=d.apply(l,v);return x===!1&&(x=k.apply(l,v)),x}}e.tokenizer=l}if(n.hooks){const l=this.defaults.hooks||new rn;for(const a in n.hooks){const d=n.hooks[a],r=a,k=l[r];rn.passThroughHooks.has(a)?l[r]=v=>{if(this.defaults.async)return Promise.resolve(d.call(l,v)).then(w=>k.call(l,w));const x=d.call(l,v);return k.call(l,x)}:l[r]=(...v)=>{let x=d.apply(l,v);return x===!1&&(x=k.apply(l,v)),x}}e.hooks=l}if(n.walkTokens){const l=this.defaults.walkTokens,a=n.walkTokens;e.walkTokens=function(d){let r=[];return r.push(a.call(this,d)),l&&(r=r.concat(l.call(this,d))),r}}this.defaults={...this.defaults,...e}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}}cn=new WeakSet,_n=function(t,i){return(n,e)=>{const l={...e},a={...this.defaults,...l};this.defaults.async===!0&&l.async===!1&&(a.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),a.async=!0);const d=hn(this,fn,Rn).call(this,!!a.silent,!!a.async);if(typeof n>"u"||n===null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(a.hooks&&(a.hooks.options=a),a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(n):n).then(r=>t(r,a)).then(r=>a.walkTokens?Promise.all(this.walkTokens(r,a.walkTokens)).then(()=>r):r).then(r=>i(r,a)).then(r=>a.hooks?a.hooks.postprocess(r):r).catch(d);try{a.hooks&&(n=a.hooks.preprocess(n));const r=t(n,a);a.walkTokens&&this.walkTokens(r,a.walkTokens);let k=i(r,a);return a.hooks&&(k=a.hooks.postprocess(k)),k}catch(r){return d(r)}}},fn=new WeakSet,Rn=function(t,i){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const e="<p>An error occurred:</p><pre>"+Xe(n.message+"",!0)+"</pre>";return i?Promise.resolve(e):e}if(i)return Promise.reject(n);throw n}};const Gt=new ei;function T(g,t){return Gt.parse(g,t)}T.options=T.setOptions=function(g){return Gt.setOptions(g),T.defaults=Gt.defaults,En(T.defaults),T};T.getDefaults=yn;T.defaults=Ft;T.use=function(...g){return Gt.use(...g),T.defaults=Gt.defaults,En(T.defaults),T};T.walkTokens=function(g,t){return Gt.walkTokens(g,t)};T.parseInline=Gt.parseInline;T.Parser=$t;T.parser=$t.parse;T.Renderer=pn;T.TextRenderer=Tn;T.Lexer=It;T.lexer=It.lex;T.Tokenizer=un;T.Hooks=rn;T.parse=T;T.options;T.setOptions;T.use;T.walkTokens;T.parseInline;$t.parse;It.lex;const ti=`
  \`\`\`
    var name = "John";

    var numString = "22";

    var num = Number(numString);
  \`\`\`
`,ni='\n  ```\n    var num = "27";\n    var num2 = num * 1;\n  ```\n',ii=`
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
`,li=`
  \`\`\`
    if (!Number.isNaN) {
      Number.isNaN = function isNaN(x) {
        return x !== x;
      };
    }
  \`\`\`
`;function ai(g){let t,i,n,e,l,a="Up and going",d,r,k=`The first statement that I ever heard in regards to JavaScript was the phrase &quot;
			<strong>Dumb kid brother</strong>&quot;. It has been close to 7 years since I started coding
			seriously and I still do not understand, how the world&#39;s most widely used language that rules
			the entire web space, works?`,v,x,w=`The intention behind creating these articles is to mainly learn and treat them as a point of
			reference to solidify my understanding of <i>JavaScript</i>. This by chance, also happens to
			be the first blog that I have ever written and I am hoping I can turn this into a hobby.`,D,H,O="Up and Going",Q,z,oe=`The first part of this series <strong>(You don&#39;t know JS)</strong> was a general introduction
			to programming and a discussion of some aspects of <i>JavaScript</i>. There are few topics
			that caught my attention.
			<a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&amp;%20going/README.md#you-dont-know-js-up--going" target="_blank">YDKJS</a> <ul class="blog-list-elements"><li>Coercion</li> <li>Typed values not typed variables</li> <li>Equality</li> <li>Hoisting</li> <li>Closure</li> <li>Polyfilling</li> <li>Transpiling</li></ul>`,xe,M,re="Coercion",$e,L,Ze,N,P="<li>Explicit coercion</li> <li>Implicit coercion</li>",Se,G,je=`Explicit conversion is straightforward. We know the current type of the value and the\r
				resultant type it is converted to.`,ke,ne,X,Ae=T(ti)+"",Re,R,Ve=`The conversion in the above cases is explicit. We know that the <code>name</code> variable
				is a <code>string</code> and so is the variable <code>numString</code>. In the third case
				the
				<code>string</code> type is explicity converted to a <code>number</code>.`,De,B,et=`Implicit conversion on the other hand is quite interesting and we will experience an
				interesting quality of implicit conversion in the <strong>Equality</strong>
				section. The conversion is not very apparent and can cause confusion in code if not written properly.`,ce,V,we,pe=T(ni)+"",We,F,ie=`The conversion in the first case is explicit, we know that num is a string. In the second\r
				case the value of num is coerced into a number.`,Ue,Z,se="Typed values not typed variables",qe,J,q=`<p>There is a neat way to learn the type of a variable in JavaScript. It&#39;s the <code>typeof()</code>
				operator. When checking the type of a variable, JavaScript looks at the value of the variable
				and not the variable itself. The variables in JavaScript are merely containers of types.</p>`,$,he,tt="Equality",fe,le,rt=`<p>Equality in JavaScript comes in two flavors <code>==</code> and <code>===</code>. The
				easiest way to understand these would be that <code>==</code> checks for equality with
				coercion and
				<code>===</code> does not allow coercion, which is often called &quot;strict equality&quot;</p> <p>For the past 7 years I believed that the difference between <code>==</code> and
				<code>===</code> is that strict equality checked the reference and the other checked the value.
				I was missing the understanding of the word coercion! I still do think that the avoiding == makes
				sense when working with other people. Somewhere down the line people can make mistakes.</p>`,Qe,Oe,Je="Hoisting",Pe,_e,ye,ze=`On declaring a variable in JavaScript, it's made available throughout the entire scope it\r
				was declared in. JavaScript hoists that variable to the top and it's available to the entire\r
				scope. The same works for functions. Variable hoisting can cause a lot of confusion and it's\r
				better to avoid it. The best approach is to use JavaScript in "strict" mode and use let for\r
				variable declaration.`,Rt,Be,ae,Ut=T(ii)+"",ct,ee,mt=`In the above example, on calling the function <code>hoistedVariable</code> we notice that
				the variable until initialized prints a value of <code>undefined</code>. The declaration of
				the variable
				<code>a</code> is on the last line but, due to hoisting in JavaScript, the variable is available
				throughout the scope.`,St,ge,Me="Closure",qt,ve,K,Ot=`One can think of Closure as a way to "remember" a function's scope, like variables, even\r
				after the function has finished executing. The best way to explain closure is through an\r
				example`,ht,Y,xt,Dt=T(si)+"",de,nt,kt=`In the above example even after it&#39;s execution the returned function value is saved in the
				<code>plusTwo</code> variable, which is basically holding a <code>function</code> type.
				Calling
				<code>plusTwo</code> remembers the original value passed in, which was 2.`,ue,Ge,wt="Polyfilling",be,Le,it,Fe=`Polyfilling refers to taking the definition of a newer feature and producing a piece of code
				that&#39;s equivalent to the behavior, but is able to run in older JavaScript environments. As
				an example, ES6 deprecated the utility <code>isNan(...)</code> which was buggy and replaced
				it with
				<code>Number.isNan(...)</code>. The example below polyfills the function for older
				environments.`,Te,dt,st,Ce=T(li)+"",ut;return i=new gn({}),{c(){t=c("div"),Mt(i.$$.fragment),n=u(),e=c("div"),l=c("h1"),l.textContent=a,d=u(),r=c("div"),r.innerHTML=k,v=u(),x=c("div"),x.innerHTML=w,D=u(),H=c("div"),H.textContent=O,Q=u(),z=c("div"),z.innerHTML=oe,xe=u(),M=c("div"),M.textContent=re,$e=u(),L=c("div"),Ze=Zt(`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),N=c("ol"),N.innerHTML=P,Se=u(),G=c("p"),G.textContent=je,ke=u(),ne=c("div"),X=new W(!1),Re=u(),R=c("p"),R.innerHTML=Ve,De=u(),B=c("p"),B.innerHTML=et,ce=u(),V=c("div"),we=new W(!1),We=u(),F=c("p"),F.textContent=ie,Ue=u(),Z=c("div"),Z.textContent=se,qe=u(),J=c("div"),J.innerHTML=q,$=u(),he=c("div"),he.textContent=tt,fe=u(),le=c("div"),le.innerHTML=rt,Qe=u(),Oe=c("div"),Oe.textContent=Je,Pe=u(),_e=c("div"),ye=c("p"),ye.textContent=ze,Rt=u(),Be=c("div"),ae=new W(!1),ct=u(),ee=c("p"),ee.innerHTML=mt,St=u(),ge=c("div"),ge.textContent=Me,qt=u(),ve=c("div"),K=c("p"),K.textContent=Ot,ht=u(),Y=c("div"),xt=new W(!1),de=u(),nt=c("p"),nt.innerHTML=kt,ue=u(),Ge=c("div"),Ge.textContent=wt,be=u(),Le=c("div"),it=c("p"),it.innerHTML=Fe,Te=u(),dt=c("div"),st=new W(!1),this.h()},l(te){t=h(te,"DIV",{class:!0});var Ie=I(t);Et(i.$$.fragment,Ie),n=p(Ie),e=h(Ie,"DIV",{class:!0});var S=I(e);l=h(S,"H1",{"data-svelte-h":!0}),f(l)!=="svelte-16bxzce"&&(l.textContent=a),d=p(S),r=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(r)!=="svelte-d234l5"&&(r.innerHTML=k),v=p(S),x=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(x)!=="svelte-f75zlw"&&(x.innerHTML=w),D=p(S),H=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-1i0c26i"&&(H.textContent=O),Q=p(S),z=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(z)!=="svelte-1au80is"&&(z.innerHTML=oe),xe=p(S),M=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(M)!=="svelte-1gz8uxg"&&(M.textContent=re),$e=p(S),L=h(S,"DIV",{class:!0});var j=I(L);Ze=Wt(j,`At the basic level coercion in JavaScript is conversion of a type into another. There are two\r
			forms of coercion in JavaScript\r
			`),N=h(j,"OL",{class:!0,"data-svelte-h":!0}),f(N)!=="svelte-l4ajwa"&&(N.innerHTML=P),Se=p(j),G=h(j,"P",{"data-svelte-h":!0}),f(G)!=="svelte-1w03sfk"&&(G.textContent=je),ke=p(j),ne=h(j,"DIV",{class:!0});var Ke=I(ne);X=U(Ke,!1),Ke.forEach(C),Re=p(j),R=h(j,"P",{"data-svelte-h":!0}),f(R)!=="svelte-1oow4wt"&&(R.innerHTML=Ve),De=p(j),B=h(j,"P",{"data-svelte-h":!0}),f(B)!=="svelte-1d2klvl"&&(B.innerHTML=et),ce=p(j),V=h(j,"DIV",{class:!0});var Lt=I(V);we=U(Lt,!1),Lt.forEach(C),We=p(j),F=h(j,"P",{"data-svelte-h":!0}),f(F)!=="svelte-1ulolye"&&(F.textContent=ie),j.forEach(C),Ue=p(S),Z=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(Z)!=="svelte-il2h6u"&&(Z.textContent=se),qe=p(S),J=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(J)!=="svelte-t53yhc"&&(J.innerHTML=q),$=p(S),he=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(he)!=="svelte-zkjv4w"&&(he.textContent=tt),fe=p(S),le=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(le)!=="svelte-cdu7ip"&&(le.innerHTML=rt),Qe=p(S),Oe=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(Oe)!=="svelte-1m8q6hv"&&(Oe.textContent=Je),Pe=p(S),_e=h(S,"DIV",{class:!0});var me=I(_e);ye=h(me,"P",{"data-svelte-h":!0}),f(ye)!=="svelte-d8fbjs"&&(ye.textContent=ze),Rt=p(me),Be=h(me,"DIV",{class:!0});var lt=I(Be);ae=U(lt,!1),lt.forEach(C),ct=p(me),ee=h(me,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-jz2io5"&&(ee.innerHTML=mt),me.forEach(C),St=p(S),ge=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(ge)!=="svelte-1mj3tvz"&&(ge.textContent=Me),qt=p(S),ve=h(S,"DIV",{class:!0});var Ee=I(ve);K=h(Ee,"P",{"data-svelte-h":!0}),f(K)!=="svelte-udzufc"&&(K.textContent=Ot),ht=p(Ee),Y=h(Ee,"DIV",{class:!0});var at=I(Y);xt=U(at,!1),at.forEach(C),de=p(Ee),nt=h(Ee,"P",{"data-svelte-h":!0}),f(nt)!=="svelte-1lv6grx"&&(nt.innerHTML=kt),Ee.forEach(C),ue=p(S),Ge=h(S,"DIV",{class:!0,"data-svelte-h":!0}),f(Ge)!=="svelte-1dn8ynz"&&(Ge.textContent=wt),be=p(S),Le=h(S,"DIV",{class:!0});var pt=I(Le);it=h(pt,"P",{"data-svelte-h":!0}),f(it)!=="svelte-180pjs4"&&(it.innerHTML=Fe),Te=p(pt),dt=h(pt,"DIV",{class:!0});var Ne=I(dt);st=U(Ne,!1),Ne.forEach(C),pt.forEach(C),S.forEach(C),Ie.forEach(C),this.h()},h(){o(r,"class","blog-paragraph"),o(x,"class","blog-paragraph"),o(H,"class","blog-sub-header"),o(z,"class","blog-paragraph"),o(M,"class","blog-sub-header"),o(N,"class","blog-list-elements"),X.a=null,o(ne,"class","blog-code-block"),we.a=null,o(V,"class","blog-code-block"),o(L,"class","blog-paragraph"),o(Z,"class","blog-sub-header"),o(J,"class","blog-paragraph"),o(he,"class","blog-sub-header"),o(le,"class","blog-paragraph"),o(Oe,"class","blog-sub-header"),ae.a=null,o(Be,"class","blog-code-block"),o(_e,"class","blog-paragraph"),o(ge,"class","blog-sub-header"),xt.a=null,o(Y,"class","blog-code-block"),o(ve,"class","blog-paragraph"),o(Ge,"class","blog-sub-header"),st.a=null,o(dt,"class","blog-code-block"),o(Le,"class","blog-paragraph"),o(e,"class","blog-text-container"),o(t,"class","up-and-going-container svelte-ofy7lw")},m(te,Ie){nn(te,t,Ie),jt(i,t,null),s(t,n),s(t,e),s(e,l),s(e,d),s(e,r),s(e,v),s(e,x),s(e,D),s(e,H),s(e,Q),s(e,z),s(e,xe),s(e,M),s(e,$e),s(e,L),s(L,Ze),s(L,N),s(L,Se),s(L,G),s(L,ke),s(L,ne),X.m(Ae,ne),s(L,Re),s(L,R),s(L,De),s(L,B),s(L,ce),s(L,V),we.m(pe,V),s(L,We),s(L,F),s(e,Ue),s(e,Z),s(e,qe),s(e,J),s(e,$),s(e,he),s(e,fe),s(e,le),s(e,Qe),s(e,Oe),s(e,Pe),s(e,_e),s(_e,ye),s(_e,Rt),s(_e,Be),ae.m(Ut,Be),s(_e,ct),s(_e,ee),s(e,St),s(e,ge),s(e,qt),s(e,ve),s(ve,K),s(ve,ht),s(ve,Y),xt.m(Dt,Y),s(ve,de),s(ve,nt),s(e,ue),s(e,Ge),s(e,be),s(e,Le),s(Le,it),s(Le,Te),s(Le,dt),st.m(Ce,dt),ut=!0},p:Qt,i(te){ut||(vt(i.$$.fragment,te),ut=!0)},o(te){bt(i.$$.fragment,te),ut=!1},d(te){te&&C(t),At(i)}}}class oi extends en{constructor(t){super(),tn(this,t,null,ai,Xt,{})}}const ri=`
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
`,ci=`
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
`,di=`
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
`;function ui(g){let t,i,n,e,l,a="Closure",d,r,k=`Closure in JavaScript is, when a function is able to remember and access its lexical scope\r
			even when the function is executing outside is lexical scope.`,v,x,w,D=T(ri)+"",H,O,Q=`In the above example the function <code>bar</code> has closure over the scope of
			<code>foo</code>. This is because <code>bar</code> is declared inside the scope of
			<code>foo</code>. To better understand this we could use the analogy of
			<a href="/blog/ydkjs/scopes_and_hoisting#concentric-circle" target="_blank">concentric circles</a>
			.The lexical scope that forms those concentric circles is closely related to closures. So, looking
			at closures through the lens of the circle analogy, we would look at it inside-out. The inner most
			<i>scope/circle</i>
			has closure over all the other <i>scopes/circles</i>. Another fascinating thing about closures
			is the persistence of the scope of a function even after execution. Generally, when a block of
			scope finishes execution, it is garbage collected and it&#39;s not present in memory, but closures
			allow some magic to happen!`,z,oe,xe=`There are some other forms of closure that can be a little indirect. A great example would be
			when a function is passed by value to another function, and executed from the scope of that
			function. To better state that - <b>Any way in which a function can be passed around as value and be invoked in other
				locations, are all examples of closures</b>. Example below!`,M,re,$e,L=T(ci)+"",Ze,N,P="Closures are everywhere and one of the best examples is the <code>setTimeOut</code> function.",Se,G,je,ke=T(hi)+"",ne,X,Ae=`In the above <code>setTimeout</code> example, the function<code>timer</code> has a scope
			closure over the global scope, it remembers the value <code>a</code> from the global scope. We
			pass the function
			<code>timer</code>
			as a parameter to the <code>setTimeout</code>, which is nothing but a functionReference and
			that function has closure over the global scope. This opens up a new world. Everytime I look
			at some JavaScript code, I see closures now!`,Re,R,Ve="Modules",De,B,et=`Modules are the one of the most prominent and powerful examples of closures. Specially,\r
			starting from ES6.`,ce,V,we,pe=T(di)+"",We,F,ie=`Modules are functions itself and this example is in a way similar to the fist closure example.\r
			The only difference being that in the case of a module it returns an object with multiple\r
			functions that have closure over the scope of the module function.`,Ue,Z,se="That ends part two of YDKJS! I have learnt quite a bit, let's keep rolling.",qe;return i=new gn({}),{c(){t=c("div"),Mt(i.$$.fragment),n=u(),e=c("div"),l=c("h1"),l.textContent=a,d=u(),r=c("div"),r.textContent=k,v=u(),x=c("div"),w=new W(!1),H=u(),O=c("div"),O.innerHTML=Q,z=u(),oe=c("div"),oe.innerHTML=xe,M=u(),re=c("div"),$e=new W(!1),Ze=u(),N=c("div"),N.innerHTML=P,Se=u(),G=c("div"),je=new W(!1),ne=u(),X=c("div"),X.innerHTML=Ae,Re=u(),R=c("div"),R.textContent=Ve,De=u(),B=c("div"),B.textContent=et,ce=u(),V=c("div"),we=new W(!1),We=u(),F=c("div"),F.textContent=ie,Ue=u(),Z=c("div"),Z.textContent=se,this.h()},l(J){t=h(J,"DIV",{class:!0});var q=I(t);Et(i.$$.fragment,q),n=p(q),e=h(q,"DIV",{class:!0});var $=I(e);l=h($,"H1",{"data-svelte-h":!0}),f(l)!=="svelte-ttwwp"&&(l.textContent=a),d=p($),r=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(r)!=="svelte-1h62583"&&(r.textContent=k),v=p($),x=h($,"DIV",{class:!0});var he=I(x);w=U(he,!1),he.forEach(C),H=p($),O=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(O)!=="svelte-87t3fc"&&(O.innerHTML=Q),z=p($),oe=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(oe)!=="svelte-1dhjz52"&&(oe.innerHTML=xe),M=p($),re=h($,"DIV",{class:!0});var tt=I(re);$e=U(tt,!1),tt.forEach(C),Ze=p($),N=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(N)!=="svelte-v7a7fy"&&(N.innerHTML=P),Se=p($),G=h($,"DIV",{class:!0});var fe=I(G);je=U(fe,!1),fe.forEach(C),ne=p($),X=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(X)!=="svelte-1kt1d4n"&&(X.innerHTML=Ae),Re=p($),R=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(R)!=="svelte-1emixw3"&&(R.textContent=Ve),De=p($),B=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-40eyps"&&(B.textContent=et),ce=p($),V=h($,"DIV",{class:!0});var le=I(V);we=U(le,!1),le.forEach(C),We=p($),F=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(F)!=="svelte-1ukx7mk"&&(F.textContent=ie),Ue=p($),Z=h($,"DIV",{class:!0,"data-svelte-h":!0}),f(Z)!=="svelte-lun0om"&&(Z.textContent=se),$.forEach(C),q.forEach(C),this.h()},h(){o(r,"class","blog-paragraph"),w.a=null,o(x,"class","blog-code-block"),o(O,"class","blog-paragraph"),o(oe,"class","blog-paragraph"),$e.a=null,o(re,"class","blog-code-block"),o(N,"class","blog-paragraph"),je.a=null,o(G,"class","blog-code-block"),o(X,"class","blog-paragraph"),o(R,"class","blog-sub-header"),o(B,"class","blog-paragraph"),we.a=null,o(V,"class","blog-code-block"),o(F,"class","blog-paragraph"),o(Z,"class","blog-paragraph"),o(e,"class","blog-text-container"),o(t,"class","closure-container svelte-18ejxyl")},m(J,q){nn(J,t,q),jt(i,t,null),s(t,n),s(t,e),s(e,l),s(e,d),s(e,r),s(e,v),s(e,x),w.m(D,x),s(e,H),s(e,O),s(e,z),s(e,oe),s(e,M),s(e,re),$e.m(L,re),s(e,Ze),s(e,N),s(e,Se),s(e,G),je.m(ke,G),s(e,ne),s(e,X),s(e,Re),s(e,R),s(e,De),s(e,B),s(e,ce),s(e,V),we.m(pe,V),s(e,We),s(e,F),s(e,Ue),s(e,Z),qe=!0},p:Qt,i(J){qe||(vt(i.$$.fragment,J),qe=!0)},o(J){bt(i.$$.fragment,J),qe=!1},d(J){J&&C(t),At(i)}}}class pi extends en{constructor(t){super(),tn(this,t,null,ui,Xt,{})}}const fi="\n```\n    var num = 3;\n```\n",gi=`
\`\`\`
    Variable declaration
    |---Identifier (a)
    |---Assignment expression
        |---Numerical literal(2)
\`\`\`
`,vi=`
\`\`\`
    var num = 2;
    // JS looks at this as two steps below
    var num;
    num = 2;
\`\`\`
`,bi=`
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
`,mi=`
\`\`\`
    function foo(num) {
        var num2 = num;
        return num + num2;
    }

    var ans = foo(2);
\`\`\`
`,xi=`
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
`,ki="\n```\n    a = 2;\n    var a;\n    console.log(a); // Prints 2 \n```\n";function wi(g){let t,i,n,e,l;return{c(){t=an("svg"),i=an("circle"),n=an("circle"),e=an("circle"),l=an("circle"),this.h()},l(a){t=on(a,"svg",{height:!0,width:!0});var d=I(t);i=on(d,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),I(i).forEach(C),n=on(d,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),I(n).forEach(C),e=on(d,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),I(e).forEach(C),l=on(d,"circle",{cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0,fill:!0}),I(l).forEach(C),d.forEach(C),this.h()},h(){o(i,"cx","100"),o(i,"cy","100"),o(i,"r","80"),o(i,"stroke","#475c6c"),o(i,"stroke-width","2"),o(i,"fill","none"),o(n,"cx","100"),o(n,"cy","100"),o(n,"r","60"),o(n,"stroke","#8a8583"),o(n,"stroke-width","2"),o(n,"fill","none"),o(e,"cx","100"),o(e,"cy","100"),o(e,"r","40"),o(e,"stroke","#eed7a1"),o(e,"stroke-width","2"),o(e,"fill","none"),o(l,"cx","100"),o(l,"cy","100"),o(l,"r","20"),o(l,"stroke","#cd8b62"),o(l,"stroke-width","2"),o(l,"fill","none"),o(t,"height","200"),o(t,"width","200")},m(a,d){nn(a,t,d),s(t,i),s(t,n),s(t,e),s(t,l)},p:Qt,i:Qt,o:Qt,d(a){a&&C(t)}}}class _i extends en{constructor(t){super(),tn(this,t,null,wi,Xt,{})}}function yi(g){let t,i,n,e,l,a="Scopes and Hoisting",d,r,k=`This book is awesome! I wish I had read it sooner. Most programming languages that I have
			used, I never spent the time to fully understand the depths of it. With YDKJS, I aim to break
			that trend and truly understand how JavaScript works!<br/><br/>`,v,x,w=`The second part of this book covers some very interesting topics which mainly revolve around\r
			scopes, hoisting and closure. Since this is going to be a longer article in comparison, I will\r
			move closure to a separate article.`,D,H,O="Scope and Compiler theory",Q,z,oe=`Scope refers to a well defined set of rules that allow us to store variables in some location
			and access them from that location. In order to understand how this works we need to
			understand some basic <b>Compiler theory</b>`,xe,M,re=`JavaScript is considered to be an interpreted language but that would be wrong. It undergoes
			compilation just mere mircoseconds before execution. Understanding those performance
			improvements that make it compile so quickly was a little beyond the topics in this book but,
			I definitely would like to revisit and understand those improvements (An article for the
			future). Getting back to compilation. Any compiled language undergoes three main steps during
			its compilation process.
			<ol class="blog-list-elements"><li>Tokenizing/Lexing</li> <li>Parsing</li> <li>Code generation</li></ol>`,$e,L,Ze=`<b>Tokenizing</b> involves taking a string of characters and breaking down it into meaningful chunks
			called tokens. Lexing is synonmous to Tokenization with a difference of stateful parsing. If the
			tokenization involves some kind of state based approach then it would be called Lexing.`,N,P,Se,G=T(fi)+"",je,ke,ne=`The above example when tokenized might get broken down into <code>var</code>, <code>a</code>,
			<code>=</code>, <code>3</code>, <code>;</code>`,X,Ae,Re=`<b>Parsing</b> uses the array of tokens and creates a nested tree, which is called an Abstract
			syntax tree. For the above example <code>var num = 3;</code> it might create a tree structure that
			could look like this.`,R,Ve,De,B=T(gi)+"",et,ce,V=`Finally the last step, <b>Code generation</b> - It takes the Abstract syntax tree and creates executable
			code.`,we,pe,We=`There is much more to the compilation process that I need to learn. Truly understanding a\r
			language requires some serious work! One step at a time! We'll get there!`,F,ie,Ue="More on scope",Z,se,qe=`There are three important members involved in understanding scope
			<ol class="blog-list-elements"><li>Engine</li> <li>Compiler</li> <li>Scope</li></ol>
			Engine runs from start to finish. From variable declaration to program execution. Compiler handles
			the dirty work. Parsing code and code generation. Sope holds a lookup list for all the declrations
			(variables, functions etc..)`,J,q,$,he,tt="var num = 2;",fe,le,rt,Qe=T(vi)+"",Oe,Je,Pe=`Looking at the example above, the compiler declares a variable at this step if it has not been
			declared yet. Compiler queries the scope and asks if the variable <code>num</code> was declared,
			if it was then it moves on and does not declare a variable but if there isn&#39;t a variable declared
			then it declares one. This part is pretty interesting in JavaScript, it allows us to declare the
			same variable multiple times. In a nested scope this would be termed shadowing, where it overwrites
			the value declared in the outerscope. The example below explains shadowing.`,_e,ye,ze,Rt=T(bi)+"",Be,ae,Ut=`Going back to the two parts involved in variable declaration and assignment, there&#39;s an
			interesting lookup concept that JavaScript performs. The easier version is - When a variable
			appears on the left side of an assignment the compiler does a <b>LHS</b> lookup and when it&#39;s on
			the right side of the assignment it does a RHS lookup. A LHS lookup looks for the variable container
			itself but the RHS lookup is merely getting the value of the variable. LHS lookups can be a bit
			tricky. As always, examples help!`,ct,ee,mt,St=T(mi)+"",ge,Me,qt=`Let&#39;s break it down.
			<div class="blog-paragraph"><b>List of LHS lookups</b> <ul><li>ans =</li> <li>num = (this is interesting, it&#39;s the pararmeter passed to the function)</li> <li>num2 =</li></ul> <b>List of RHS lookups</b> <ul><li>foo</li> <li>= num</li> <li>num +</li> <li>+ num2</li></ul></div>
			Discussing lookups further, it gets even more interesting when nested scopes are involved. When
			searching for a variable, JavaScript considers all scopes. It starts with the inner most and keeps
			looking for variable<b>containers / values</b> in all the scopes that the current scope is enclosed
			in. This is where it chooses between a LHS and RHS lookup.`,ve,K,Ot="That was just the first Chapter from the book. Phew!",ht,Y,xt="Lexical scope",Dt,de,nt=`JavaScript uses the lexical scope and so do most programming languages. Scope as defined\r
			earlier is a means of finding a declared identifier and Lexing examines a string of characters\r
			and gives it semantic meaning. So lexical scope is the scope defined during the time of\r
			lexing.`,kt,ue,Ge=`In order to understand the idea of lexical scope it's important to understand how a lookup\r
			works in JavaScript. Like always, let's start with an example.`,wt,be,Le,it=T(xi)+"",Fe,Te,dt=`In the example above we have three different scopes
			<ol><li>Global scope where outer function is declared</li> <li>Scope of the outer function</li> <li>Scope of the inner function</li></ol>
			It&#39;s ideal to look at this from inside out. When the
			<code>console.log(num, num2)</code>
			executes the engine goes looking for the two identifiers. It searches for <code>num</code>
			first in the scope of function <code>inner</code> and cannot find it, the next available scope
			is the scope of the function <code>outer</code> and there it finds the variable
			<code>num</code>. It does a similar lookup for the variable <code>num2</code> and finds it in
			the scope of outer. But the variable <code>num3</code> it finds in the global scope, the same scope
			where the outer function is called. The way I look at scope look ups is the way concentric circles
			are drawn, they have neat boundaries and they do not intersect.`,st,Ce,ut,te,Ie=`Understanding of scope directly relates to understanding
			<b>The Principle of least privilege</b> - Expose only what is minimally necessary, and hide everything
			else. These concentric division allow us to enclose variables and functions within scopes and not
			expose it in a global context. What does that accomplish? It avoids collisions! Makes sure that
			two identifiers intended for different usecases do not stomp on each other.`,S,j,Ke="<b>SCOPE -&gt; PRINCIPLE OF LEAST PRIVILEGE -&gt; COLLISION AVOIDANCE</b>",Lt,me,lt="Hoisting",Ee,at,pt=`Hoisting in JavaScript refers to the process of moving the function and variables to the the\r
			top of the code from where they were declared. This is one of the crucial parts of JavaScript,\r
			I mean for developers. Not understanding hoisting can lead to writing code that's hard to\r
			decipher.`,Ne,Ht,Jt,Pt=T(ki)+"",Bt,Vt,Kt=`In the above example even though we would expect it to print undefined, it prints 2. Why? If
			we go back to the definition above, the <code>var a;</code> gets hoisted and placed on the
			top. So the first statement that executes is the declaration of that variable, by the time it
			gets to <code>a = 2;</code> the variable exists, so it assigns the value to 2 that container. Another
			important thing to note here it that between a variable and a function, functions get hoisted first!`,ft,_t,Yt=`This chapter has been really interesting so far. There's one last topic left to discuss and I\r
			will be doing that in the next article.`,gt;return i=new gn({}),Ce=new _i({}),{c(){t=c("div"),Mt(i.$$.fragment),n=u(),e=c("div"),l=c("h1"),l.textContent=a,d=u(),r=c("div"),r.innerHTML=k,v=u(),x=c("div"),x.textContent=w,D=u(),H=c("div"),H.textContent=O,Q=u(),z=c("div"),z.innerHTML=oe,xe=u(),M=c("div"),M.innerHTML=re,$e=u(),L=c("div"),L.innerHTML=Ze,N=u(),P=c("div"),Se=new W(!1),je=u(),ke=c("div"),ke.innerHTML=ne,X=u(),Ae=c("div"),Ae.innerHTML=Re,R=u(),Ve=c("div"),De=new W(!1),et=u(),ce=c("div"),ce.innerHTML=V,we=u(),pe=c("div"),pe.textContent=We,F=u(),ie=c("div"),ie.textContent=Ue,Z=u(),se=c("div"),se.innerHTML=qe,J=u(),q=c("div"),$=Zt("If we were to go back to the example of a simple variable declaration "),he=c("code"),he.textContent=tt,fe=Zt(`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),le=c("div"),rt=new W(!1),Oe=u(),Je=c("div"),Je.innerHTML=Pe,_e=u(),ye=c("div"),ze=new W(!1),Be=u(),ae=c("div"),ae.innerHTML=Ut,ct=u(),ee=c("div"),mt=new W(!1),ge=u(),Me=c("div"),Me.innerHTML=qt,ve=u(),K=c("div"),K.textContent=Ot,ht=u(),Y=c("div"),Y.textContent=xt,Dt=u(),de=c("div"),de.textContent=nt,kt=u(),ue=c("div"),ue.textContent=Ge,wt=u(),be=c("div"),Le=new W(!1),Fe=u(),Te=c("div"),Te.innerHTML=dt,st=u(),Mt(Ce.$$.fragment),ut=u(),te=c("div"),te.innerHTML=Ie,S=u(),j=c("div"),j.innerHTML=Ke,Lt=u(),me=c("div"),me.textContent=lt,Ee=u(),at=c("div"),at.textContent=pt,Ne=u(),Ht=c("div"),Jt=new W(!1),Bt=u(),Vt=c("div"),Vt.innerHTML=Kt,ft=u(),_t=c("div"),_t.textContent=Yt,this.h()},l(He){t=h(He,"DIV",{class:!0});var Nt=I(t);Et(i.$$.fragment,Nt),n=p(Nt),e=h(Nt,"DIV",{class:!0});var b=I(e);l=h(b,"H1",{"data-svelte-h":!0}),f(l)!=="svelte-3i70d5"&&(l.textContent=a),d=p(b),r=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(r)!=="svelte-1c4zecq"&&(r.innerHTML=k),v=p(b),x=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(x)!=="svelte-18czcds"&&(x.textContent=w),D=p(b),H=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-2up3yp"&&(H.textContent=O),Q=p(b),z=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(z)!=="svelte-5zllcz"&&(z.innerHTML=oe),xe=p(b),M=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(M)!=="svelte-13nancv"&&(M.innerHTML=re),$e=p(b),L=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(L)!=="svelte-1mzbrig"&&(L.innerHTML=Ze),N=p(b),P=h(b,"DIV",{class:!0});var yt=I(P);Se=U(yt,!1),yt.forEach(C),je=p(b),ke=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(ke)!=="svelte-1we0e0z"&&(ke.innerHTML=ne),X=p(b),Ae=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(Ae)!=="svelte-1lvnh79"&&(Ae.innerHTML=Re),R=p(b),Ve=h(b,"DIV",{class:!0});var sn=I(Ve);De=U(sn,!1),sn.forEach(C),et=p(b),ce=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(ce)!=="svelte-19lyqfn"&&(ce.innerHTML=V),we=p(b),pe=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(pe)!=="svelte-1ag31e0"&&(pe.textContent=We),F=p(b),ie=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(ie)!=="svelte-1ysabik"&&(ie.textContent=Ue),Z=p(b),se=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(se)!=="svelte-mxfe5q"&&(se.innerHTML=qe),J=p(b),q=h(b,"DIV",{class:!0});var Tt=I(q);$=Wt(Tt,"If we were to go back to the example of a simple variable declaration "),he=h(Tt,"CODE",{"data-svelte-h":!0}),f(he)!=="svelte-xlrv0q"&&(he.textContent=tt),fe=Wt(Tt,`\r
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's\r
			two.\r
			`),le=h(Tt,"DIV",{class:!0});var ot=I(le);rt=U(ot,!1),ot.forEach(C),Tt.forEach(C),Oe=p(b),Je=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(Je)!=="svelte-1efdofv"&&(Je.innerHTML=Pe),_e=p(b),ye=h(b,"DIV",{class:!0});var zt=I(ye);ze=U(zt,!1),zt.forEach(C),Be=p(b),ae=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(ae)!=="svelte-17vyc53"&&(ae.innerHTML=Ut),ct=p(b),ee=h(b,"DIV",{class:!0});var _=I(ee);mt=U(_,!1),_.forEach(C),ge=p(b),Me=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(Me)!=="svelte-1hhuaj3"&&(Me.innerHTML=qt),ve=p(b),K=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(K)!=="svelte-nv7ukz"&&(K.textContent=Ot),ht=p(b),Y=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(Y)!=="svelte-1cuqjru"&&(Y.textContent=xt),Dt=p(b),de=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(de)!=="svelte-bpjzwy"&&(de.textContent=nt),kt=p(b),ue=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(ue)!=="svelte-25yo3g"&&(ue.textContent=Ge),wt=p(b),be=h(b,"DIV",{class:!0});var Ct=I(be);Le=U(Ct,!1),Ct.forEach(C),Fe=p(b),Te=h(b,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),f(Te)!=="svelte-6j4ehz"&&(Te.innerHTML=dt),st=p(b),Et(Ce.$$.fragment,b),ut=p(b),te=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(te)!=="svelte-s454o8"&&(te.innerHTML=Ie),S=p(b),j=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(j)!=="svelte-yoft6x"&&(j.innerHTML=Ke),Lt=p(b),me=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(me)!=="svelte-1m8q6hv"&&(me.textContent=lt),Ee=p(b),at=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(at)!=="svelte-7yzfiu"&&(at.textContent=pt),Ne=p(b),Ht=h(b,"DIV",{class:!0});var ln=I(Ht);Jt=U(ln,!1),ln.forEach(C),Bt=p(b),Vt=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(Vt)!=="svelte-1y0jscx"&&(Vt.innerHTML=Kt),ft=p(b),_t=h(b,"DIV",{class:!0,"data-svelte-h":!0}),f(_t)!=="svelte-1hwghwk"&&(_t.textContent=Yt),b.forEach(C),Nt.forEach(C),this.h()},h(){o(r,"class","blog-paragraph"),o(x,"class","blog-paragraph"),o(H,"class","blog-sub-header"),o(z,"class","blog-paragraph"),o(M,"class","blog-paragraph"),o(L,"class","blog-paragraph"),Se.a=null,o(P,"class","blog-code-block"),o(ke,"class","blog-paragraph"),o(Ae,"class","blog-paragraph"),De.a=null,o(Ve,"class","blog-code-block"),o(ce,"class","blog-paragraph"),o(pe,"class","blog-paragraph"),o(ie,"class","blog-sub-header"),o(se,"class","blog-paragraph"),rt.a=null,o(le,"class","blog-code-block"),o(q,"class","blog-paragraph"),o(Je,"class","blog-paragraph"),ze.a=null,o(ye,"class","blog-code-block"),o(ae,"class","blog-paragraph"),mt.a=null,o(ee,"class","blog-code-block"),o(Me,"class","blog-paragraph"),o(K,"class","blog-paragraph"),o(Y,"class","blog-sub-header"),o(de,"class","blog-paragraph"),o(ue,"class","blog-paragraph"),Le.a=null,o(be,"class","blog-code-block"),o(Te,"class","blog-paragraph"),o(Te,"id","concentric-circle"),o(te,"class","blog-paragraph"),o(j,"class","blog-paragraph"),o(me,"class","blog-sub-header"),o(at,"class","blog-paragraph"),Jt.a=null,o(Ht,"class","blog-code-block"),o(Vt,"class","blog-paragraph"),o(_t,"class","blog-paragraph"),o(e,"class","blog-text-container"),o(t,"class","scopes-and-closure-container svelte-1v5cf8r")},m(He,Nt){nn(He,t,Nt),jt(i,t,null),s(t,n),s(t,e),s(e,l),s(e,d),s(e,r),s(e,v),s(e,x),s(e,D),s(e,H),s(e,Q),s(e,z),s(e,xe),s(e,M),s(e,$e),s(e,L),s(e,N),s(e,P),Se.m(G,P),s(e,je),s(e,ke),s(e,X),s(e,Ae),s(e,R),s(e,Ve),De.m(B,Ve),s(e,et),s(e,ce),s(e,we),s(e,pe),s(e,F),s(e,ie),s(e,Z),s(e,se),s(e,J),s(e,q),s(q,$),s(q,he),s(q,fe),s(q,le),rt.m(Qe,le),s(e,Oe),s(e,Je),s(e,_e),s(e,ye),ze.m(Rt,ye),s(e,Be),s(e,ae),s(e,ct),s(e,ee),mt.m(St,ee),s(e,ge),s(e,Me),s(e,ve),s(e,K),s(e,ht),s(e,Y),s(e,Dt),s(e,de),s(e,kt),s(e,ue),s(e,wt),s(e,be),Le.m(it,be),s(e,Fe),s(e,Te),s(e,st),jt(Ce,e,null),s(e,ut),s(e,te),s(e,S),s(e,j),s(e,Lt),s(e,me),s(e,Ee),s(e,at),s(e,Ne),s(e,Ht),Jt.m(Pt,Ht),s(e,Bt),s(e,Vt),s(e,ft),s(e,_t),gt=!0},p:Qt,i(He){gt||(vt(i.$$.fragment,He),vt(Ce.$$.fragment,He),gt=!0)},o(He){bt(i.$$.fragment,He),bt(Ce.$$.fragment,He),gt=!1},d(He){He&&C(t),At(i),At(Ce)}}}class Ti extends en{constructor(t){super(),tn(this,t,null,yi,Xt,{})}}const Ci=`
\`\`\`
    function foo() {
        console.log( this.a );
    }

    var a = 2;

    foo(); // 2
\`\`\`
`,Ii=`
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
 `,$i=`
  \`\`\`
    function foo(a) {
        this.a = a
    }

    var bar = new foo(10);
    console.log(bar.a); // 10
  \`\`\`
  `,Si=`
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
`,Di=`
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
`,Li=`
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
`,Hi=`
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
`;function Vi(g){let t,i,n,e,l,a="Understanding This",d,r,k=`The first time I was introduced to the keyword <code>this</code>, there was only confusion. My
			confusion stemmed from the question, what really is <code>this</code>? We were learning the
			programming language<b>C#</b> and <code>this</code> referred to the class reference. Even
			though it&#39;s easier to grasp the concept in the context of a language like <b>C#</b>, I still
			found it a bit confusing. Now, years later reading about the <code>this</code> keyword in JavaScript
			brought back those memories.`,v,x,w=`The <code>this</code> keyword in JavaScript has a very different usecase. Carrying the idea of
			the class reference in <b>C#</b> to functions in JavaScript created a misconception for me
			personally and it is quite common among developers too. I assumed the <code>this</code> reference
			in a function referred to the function itself.`,D,H,O=`<code>this</code> is not an author time binding, but a runtime binding. The binding has
			nothing to do with where the function is declared, but everything to do with where and how the
			function is called. When a function gets invoked in JavaScript, it creates an activation
			record, which is also known as an execution context. This record contains information about
			<ul class="blog-list-elements"><li>Where the function was called from</li> <li>How the function was invoked</li> <li>What parameters were passed, etc.</li></ul>
			Amongst that list of properties in the execution context there is another one, which is the
			<code>this</code> reference and that&#39;s used for the duration of the function execution. To
			understand how <code>this</code> gets bound, we need to understand the rules that govern the behavior.`,Q,z,oe="Rules for <code>this</code> binding",xe,M,re=`There are four rules that explain how the <code>this</code> binding works.
			<ol class="blog-list-elements"><li>Default binding</li> <li>Implicit binding</li> <li>Explicit binding</li> <li>New binding</li></ol>`,$e,L,Ze="Default binding",N,P,Se,G,je="Default binding",ke,ne,X,Ae=T(Ci)+"",Re,R,Ve=`The call-site in the above example is in the global context and this resolves to the global\r
				context.`,De,B,et="Implicit binding",ce,V,we,pe,We="Object",F,ie,Ue="Object",Z,se,qe="obj",J,q,$,he=T(Ii)+"",tt,fe,le=`The way<code>foo</code> gets referenced in the<code>obj</code> does not imply that it is
				owned by the said <code>Object</code>. Since, there exists a context <code>Object</code>
				that references the function at the call-site, the implicit binding rules state that the
				<code>function</code> is owned by the context <code>Object</code>.`,rt,Qe,Oe=`When <code>this</code> gets implicity bound the context becomes synonmous with the owning
				<code>Object</code>. In the above case <code>this.a</code> is synonmous with
				<code>obj.a</code>`,Je,Pe,_e="Explicit binding",ye,ze,Rt=`Explicit binding allows us to explicitly state the <code>Object</code> that would act as the
			context <code>Object</code> for the function that&#39;s invoked. In order to achieve this, every
			function in JavaScript is provided with utilities and two of them are.
			<ol class="blog-list-elements"><li><code>call</code></li> <li><code>apply</code></li></ol>
			The first parameter of the above utilities is an<code>Object</code> which is implied that it
			is used for the <code>this</code> binding. When a simple primitive (<code>string</code>,
			<code>number</code> ..) gets passed it is wrapped in it&#39;s <code>Object</code> form and this is
			referred to as <b>Boxing</b>.`,Be,ae,Ut="<code>new</code> binding",ct,ee,mt=`JavaScript <code>new</code> operator unlike the <code>new</code> operator found in Object
			oriented programming languages does not call a <code>function</code> that has a constructor
			but instead makes a contructor call that returns a new <code>Object</code>. What&#39;s important
			to us here is the idea of <code>this</code> binding through the usage of the <code>new</code>
			operator.`,St,ge,Me,qt=T($i)+"",ve,K,Ot=`The example above contructs a new <code>Object</code> and binds that new <code>Object</code>
			to the call of <code>foo</code>. This sums up all the rules for binding <code>this</code> but,
			there is an order of precedence.`,ht,Y,xt="Order of precedence",Dt,de,nt=`The order of precedence is somewhat like this
			<ol class="blog-list-elements"><li>If the <code>new</code> operator is used, use the newly created <code>Object</code></li> <li>If the call-site uses <code>call</code> or <code>apply</code> use the specified
					<code>Object</code></li> <li>If called with a context <code>Object</code> then use that <code>Object</code></li> <li>Finally, the default binding</li></ol>`,kt,ue,Ge="Lost bindings - Hard binding",wt,be,Le=`Bindings sometime can get lost, which usually implies that it's fallen back to the default\r
			binding.`,it,Fe,Te,dt=T(Si)+"",st,Ce,ut=`In the above example the function <code>foo()</code> is implicity bound to the
			<code>Object obj</code> which in turn is assigned to the variable <code>bar</code>. When
			<code>bar</code> is invoked, it&#39;s invoked without any decoration and it&#39;s just another
			reference to <code>foo</code>. There is a fix for such a scenario and we call it Hard binding`,te,Ie,S="Hard binding",j,Ke,Lt="Hard binding is a variation around the explicit binding which seals the binding.",me,lt,Ee,at=T(Di)+"",pt,Ne,Ht=`The function <code>bar()</code> calls foo with an explicit bind intention and sets
			<code>obj</code> to be the <code>this</code> context. No matter how we invoke <code>bar</code>
			after this, it always binds <code>obj</code> to the function <code>foo</code>&#39;s
			<code>this</code> context. This type of binding is explicit and strong and that&#39;s why it&#39;s
			referred to as <b>Hard binding</b>. Another way to express this pattern is to create a
			reusable helper method.`,Jt,Pt,Bt,Vt=T(Li)+"",Kt,ft,_t="Since hard binding is such a common pattern, it's provided as a built-in utility as of ES5.",Yt,gt,He,Nt=T(Hi)+"",b,yt,sn="That&#39;s a general idea of the <code>this</code> keyword, phew!",Tt;return i=new gn({}),{c(){t=c("div"),Mt(i.$$.fragment),n=u(),e=c("div"),l=c("h1"),l.textContent=a,d=u(),r=c("div"),r.innerHTML=k,v=u(),x=c("div"),x.innerHTML=w,D=u(),H=c("div"),H.innerHTML=O,Q=u(),z=c("div"),z.innerHTML=oe,xe=u(),M=c("div"),M.innerHTML=re,$e=u(),L=c("div"),L.textContent=Ze,N=u(),P=c("div"),Se=Zt(`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),G=c("b"),G.textContent=je,ke=Zt(`. An example!\r
			`),ne=c("div"),X=new W(!1),Re=u(),R=c("div"),R.textContent=Ve,De=u(),B=c("div"),B.textContent=et,ce=u(),V=c("div"),we=Zt("This rule determines if the call-site has a context "),pe=c("code"),pe.textContent=We,F=Zt(` which can also be\r
			referred to as the owning object. In the example below that context `),ie=c("code"),ie.textContent=Ue,Z=Zt(` is\r
			`),se=c("code"),se.textContent=qe,J=u(),q=c("div"),$=new W(!1),tt=u(),fe=c("div"),fe.innerHTML=le,rt=u(),Qe=c("div"),Qe.innerHTML=Oe,Je=u(),Pe=c("div"),Pe.textContent=_e,ye=u(),ze=c("div"),ze.innerHTML=Rt,Be=u(),ae=c("div"),ae.innerHTML=Ut,ct=u(),ee=c("div"),ee.innerHTML=mt,St=u(),ge=c("div"),Me=new W(!1),ve=u(),K=c("div"),K.innerHTML=Ot,ht=u(),Y=c("div"),Y.textContent=xt,Dt=u(),de=c("div"),de.innerHTML=nt,kt=u(),ue=c("div"),ue.textContent=Ge,wt=u(),be=c("div"),be.textContent=Le,it=u(),Fe=c("div"),Te=new W(!1),st=u(),Ce=c("div"),Ce.innerHTML=ut,te=u(),Ie=c("div"),Ie.textContent=S,j=u(),Ke=c("div"),Ke.textContent=Lt,me=u(),lt=c("div"),Ee=new W(!1),pt=u(),Ne=c("div"),Ne.innerHTML=Ht,Jt=u(),Pt=c("div"),Bt=new W(!1),Kt=u(),ft=c("div"),ft.textContent=_t,Yt=u(),gt=c("div"),He=new W(!1),b=u(),yt=c("div"),yt.innerHTML=sn,this.h()},l(ot){t=h(ot,"DIV",{class:!0});var zt=I(t);Et(i.$$.fragment,zt),n=p(zt),e=h(zt,"DIV",{class:!0});var _=I(e);l=h(_,"H1",{"data-svelte-h":!0}),f(l)!=="svelte-14q1hfy"&&(l.textContent=a),d=p(_),r=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(r)!=="svelte-kz4lmi"&&(r.innerHTML=k),v=p(_),x=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(x)!=="svelte-1hs8980"&&(x.innerHTML=w),D=p(_),H=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(H)!=="svelte-19qb0p4"&&(H.innerHTML=O),Q=p(_),z=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(z)!=="svelte-bbtnld"&&(z.innerHTML=oe),xe=p(_),M=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(M)!=="svelte-1231oos"&&(M.innerHTML=re),$e=p(_),L=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(L)!=="svelte-g9a91e"&&(L.textContent=Ze),N=p(_),P=h(_,"DIV",{class:!0});var Ct=I(P);Se=Wt(Ct,`Is the easisest to understand. When the function invocation is plain and is not decorated, it\r
			falls to the `),G=h(Ct,"B",{"data-svelte-h":!0}),f(G)!=="svelte-1y3shn8"&&(G.textContent=je),ke=Wt(Ct,`. An example!\r
			`),ne=h(Ct,"DIV",{class:!0});var ln=I(ne);X=U(ln,!1),ln.forEach(C),Re=p(Ct),R=h(Ct,"DIV",{class:!0,"data-svelte-h":!0}),f(R)!=="svelte-8avcu5"&&(R.textContent=Ve),Ct.forEach(C),De=p(_),B=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(B)!=="svelte-mu8xb6"&&(B.textContent=et),ce=p(_),V=h(_,"DIV",{class:!0});var Ye=I(V);we=Wt(Ye,"This rule determines if the call-site has a context "),pe=h(Ye,"CODE",{"data-svelte-h":!0}),f(pe)!=="svelte-sbeg5v"&&(pe.textContent=We),F=Wt(Ye,` which can also be\r
			referred to as the owning object. In the example below that context `),ie=h(Ye,"CODE",{"data-svelte-h":!0}),f(ie)!=="svelte-sbeg5v"&&(ie.textContent=Ue),Z=Wt(Ye,` is\r
			`),se=h(Ye,"CODE",{"data-svelte-h":!0}),f(se)!=="svelte-vvasqx"&&(se.textContent=qe),J=p(Ye),q=h(Ye,"DIV",{class:!0});var Cn=I(q);$=U(Cn,!1),Cn.forEach(C),tt=p(Ye),fe=h(Ye,"DIV",{class:!0,"data-svelte-h":!0}),f(fe)!=="svelte-e9k6gb"&&(fe.innerHTML=le),rt=p(Ye),Qe=h(Ye,"DIV",{class:!0,"data-svelte-h":!0}),f(Qe)!=="svelte-1lccppk"&&(Qe.innerHTML=Oe),Ye.forEach(C),Je=p(_),Pe=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Pe)!=="svelte-15pd8q3"&&(Pe.textContent=_e),ye=p(_),ze=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ze)!=="svelte-1t8zjv4"&&(ze.innerHTML=Rt),Be=p(_),ae=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ae)!=="svelte-1gams9s"&&(ae.innerHTML=Ut),ct=p(_),ee=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ee)!=="svelte-9qvbko"&&(ee.innerHTML=mt),St=p(_),ge=h(_,"DIV",{class:!0});var In=I(ge);Me=U(In,!1),In.forEach(C),ve=p(_),K=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(K)!=="svelte-192f3f1"&&(K.innerHTML=Ot),ht=p(_),Y=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Y)!=="svelte-3baxvp"&&(Y.textContent=xt),Dt=p(_),de=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(de)!=="svelte-2a47h2"&&(de.innerHTML=nt),kt=p(_),ue=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ue)!=="svelte-w7xtgf"&&(ue.textContent=Ge),wt=p(_),be=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(be)!=="svelte-1h8kfrd"&&(be.textContent=Le),it=p(_),Fe=h(_,"DIV",{class:!0});var $n=I(Fe);Te=U($n,!1),$n.forEach(C),st=p(_),Ce=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ce)!=="svelte-1x2hn64"&&(Ce.innerHTML=ut),te=p(_),Ie=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ie)!=="svelte-1h8jj0c"&&(Ie.textContent=S),j=p(_),Ke=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ke)!=="svelte-pfj1ln"&&(Ke.textContent=Lt),me=p(_),lt=h(_,"DIV",{class:!0});var Sn=I(lt);Ee=U(Sn,!1),Sn.forEach(C),pt=p(_),Ne=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(Ne)!=="svelte-ui5am2"&&(Ne.innerHTML=Ht),Jt=p(_),Pt=h(_,"DIV",{class:!0});var Dn=I(Pt);Bt=U(Dn,!1),Dn.forEach(C),Kt=p(_),ft=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(ft)!=="svelte-1vqldzj"&&(ft.textContent=_t),Yt=p(_),gt=h(_,"DIV",{class:!0});var Ln=I(gt);He=U(Ln,!1),Ln.forEach(C),b=p(_),yt=h(_,"DIV",{class:!0,"data-svelte-h":!0}),f(yt)!=="svelte-l9usji"&&(yt.innerHTML=sn),_.forEach(C),zt.forEach(C),this.h()},h(){o(r,"class","blog-paragraph"),o(x,"class","blog-paragraph"),o(H,"class","blog-paragraph"),o(z,"class","blog-sub-header"),o(M,"class","blog-paragraph"),o(L,"class","blog-sub-header"),X.a=null,o(ne,"class","blog-code-block"),o(R,"class","blog-paragraph"),o(P,"class","blog-paragraph"),o(B,"class","blog-sub-header"),$.a=null,o(q,"class","blog-code-block"),o(fe,"class","blog-paragraph"),o(Qe,"class","blog-paragraph"),o(V,"class","blog-paragraph"),o(Pe,"class","blog-sub-header"),o(ze,"class","blog-paragraph"),o(ae,"class","blog-sub-header"),o(ee,"class","blog-paragraph"),Me.a=null,o(ge,"class","blog-code-block"),o(K,"class","blog-paragraph"),o(Y,"class","blog-sub-header"),o(de,"class","blog-paragraph"),o(ue,"class","blog-sub-header"),o(be,"class","blog-paragraph"),Te.a=null,o(Fe,"class","blog-code-block"),o(Ce,"class","blog-paragraph"),o(Ie,"class","blog-sub-header"),o(Ke,"class","blog-paragraph"),Ee.a=null,o(lt,"class","blog-code-block"),o(Ne,"class","blog-paragraph"),Bt.a=null,o(Pt,"class","blog-code-block"),o(ft,"class","blog-paragraph"),He.a=null,o(gt,"class","blog-code-block"),o(yt,"class","blog-paragraph"),o(e,"class","blog-text-container"),o(t,"class","understanding_this_container svelte-1aivc9z")},m(ot,zt){nn(ot,t,zt),jt(i,t,null),s(t,n),s(t,e),s(e,l),s(e,d),s(e,r),s(e,v),s(e,x),s(e,D),s(e,H),s(e,Q),s(e,z),s(e,xe),s(e,M),s(e,$e),s(e,L),s(e,N),s(e,P),s(P,Se),s(P,G),s(P,ke),s(P,ne),X.m(Ae,ne),s(P,Re),s(P,R),s(e,De),s(e,B),s(e,ce),s(e,V),s(V,we),s(V,pe),s(V,F),s(V,ie),s(V,Z),s(V,se),s(V,J),s(V,q),$.m(he,q),s(V,tt),s(V,fe),s(V,rt),s(V,Qe),s(e,Je),s(e,Pe),s(e,ye),s(e,ze),s(e,Be),s(e,ae),s(e,ct),s(e,ee),s(e,St),s(e,ge),Me.m(qt,ge),s(e,ve),s(e,K),s(e,ht),s(e,Y),s(e,Dt),s(e,de),s(e,kt),s(e,ue),s(e,wt),s(e,be),s(e,it),s(e,Fe),Te.m(dt,Fe),s(e,st),s(e,Ce),s(e,te),s(e,Ie),s(e,j),s(e,Ke),s(e,me),s(e,lt),Ee.m(at,lt),s(e,pt),s(e,Ne),s(e,Jt),s(e,Pt),Bt.m(Vt,Pt),s(e,Kt),s(e,ft),s(e,Yt),s(e,gt),He.m(Nt,gt),s(e,b),s(e,yt),Tt=!0},p:Qt,i(ot){Tt||(vt(i.$$.fragment,ot),Tt=!0)},o(ot){bt(i.$$.fragment,ot),Tt=!1},d(ot){ot&&C(t),At(i)}}}class zi extends en{constructor(t){super(),tn(this,t,null,Vi,Xt,{})}}function Mi(g){let t,i;return t=new zi({}),{c(){Mt(t.$$.fragment)},l(n){Et(t.$$.fragment,n)},m(n,e){jt(t,n,e),i=!0},i(n){i||(vt(t.$$.fragment,n),i=!0)},o(n){bt(t.$$.fragment,n),i=!1},d(n){At(t,n)}}}function Ei(g){let t,i;return t=new pi({}),{c(){Mt(t.$$.fragment)},l(n){Et(t.$$.fragment,n)},m(n,e){jt(t,n,e),i=!0},i(n){i||(vt(t.$$.fragment,n),i=!0)},o(n){bt(t.$$.fragment,n),i=!1},d(n){At(t,n)}}}function ji(g){let t,i;return t=new Ti({}),{c(){Mt(t.$$.fragment)},l(n){Et(t.$$.fragment,n)},m(n,e){jt(t,n,e),i=!0},i(n){i||(vt(t.$$.fragment,n),i=!0)},o(n){bt(t.$$.fragment,n),i=!1},d(n){At(t,n)}}}function Ai(g){let t,i;return t=new oi({}),{c(){Mt(t.$$.fragment)},l(n){Et(t.$$.fragment,n)},m(n,e){jt(t,n,e),i=!0},i(n){i||(vt(t.$$.fragment,n),i=!0)},o(n){bt(t.$$.fragment,n),i=!1},d(n){At(t,n)}}}function Ri(g){let t,i,n,e;const l=[Ai,ji,Ei,Mi],a=[];function d(r,k){return r[0].path===wn?0:r[0].path===kn?1:r[0].path===xn?2:r[0].path===mn?3:-1}return~(i=d(g))&&(n=a[i]=l[i](g)),{c(){t=c("div"),n&&n.c(),this.h()},l(r){t=h(r,"DIV",{class:!0});var k=I(t);n&&n.l(k),k.forEach(C),this.h()},h(){o(t,"class","blog-container")},m(r,k){nn(r,t,k),~i&&a[i].m(t,null),e=!0},p(r,[k]){let v=i;i=d(r),i!==v&&(n&&(Nn(),bt(a[v],1,1,()=>{a[v]=null}),Bn()),~i?(n=a[i],n||(n=a[i]=l[i](r),n.c()),vt(n,1),n.m(t,null)):n=null)},i(r){e||(vt(n),e=!0)},o(r){bt(n),e=!1},d(r){r&&C(t),~i&&a[i].d()}}}function qi(g,t,i){let{data:n}=t;return g.$$set=e=>{"data"in e&&i(0,n=e.data)},[n]}class Zi extends en{constructor(t){super(),tn(this,t,qi,Ri,Xt,{data:0})}}export{Zi as component,Ni as universal};
