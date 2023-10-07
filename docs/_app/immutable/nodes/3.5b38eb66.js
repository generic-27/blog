import{e as T,A as C}from"../chunks/article-main-header.e487053d.js";import{s as _,n as S}from"../chunks/scheduler.e108d1fd.js";import{S as v,i as b,g as h,r as w,s as z,h as m,j as y,u as $,c as D,y as j,f as d,k as p,a as I,v as k,x as f,d as l,t as u,w as x,b as M,p as V}from"../chunks/index.2b92d2ca.js";function A({params:r}){switch(r.slug){case"describing_cloud_concepts":return{path:"describing_cloud_concepts"};default:throw T(404,"Not found")}}const q=Object.freeze(Object.defineProperty({__proto__:null,load:A},Symbol.toStringTag,{value:"Module"}));function E(r){let t,i,e,a,s=`<h1>Describing cloud concepts</h1> <div class="blog-paragraph">With software development I have always felt like I start my journey in a chopper and I get
			dropped in the middle of a maze. From there I need to figure out where the start is, and pave
			my own way. Sometimes I figure out a way, but most of the times the maze engulfs me! Wow! I
			made it too dramatic!</div> <div class="blog-paragraph">I have spent some time working with Azure services and there is a gap in my knowledge that I
			need to fix! I aim to start from the basics and truly understand what cloud computing is. So,
			this is the first article in this series and the idea is similar to the JavaScript series.
			Make sure I write about things I learn.</div> <div class="blog-sub-header">Cloud computing</div> <div class="blog-paragraph">Cloud computing is the delivery of computing services over the internet. This includes.
			<ul><li>Virtual machines</li> <li>Storage</li> <li>Databases</li> <li>Networking</li></ul>
			The basic services provided by the cloud providers are compute power and storage. Computer power
			is - how much processing a computer can do and storage is the volume of data that can be stored.
			There are plenty of benefits of using a cloud provider, the main ones are.
			<ul><li>The computers are in a cloud provider datacenter</li> <li>Consumers only pay for the services that they use</li> <li>There&#39;s no need for maintenance. The cloud provider is responsible for maintaining the
					infrastructure.</li></ul></div>`,c;return i=new C({}),{c(){t=h("div"),w(i.$$.fragment),e=z(),a=h("div"),a.innerHTML=s,this.h()},l(n){t=m(n,"DIV",{class:!0});var o=y(t);$(i.$$.fragment,o),e=D(o),a=m(o,"DIV",{class:!0,"data-svelte-h":!0}),j(a)!=="svelte-lv09zf"&&(a.innerHTML=s),o.forEach(d),this.h()},h(){p(a,"class","blog-text-container"),p(t,"class","describing_cloud_concepts_container svelte-9zw7n7")},m(n,o){I(n,t,o),k(i,t,null),f(t,e),f(t,a),c=!0},p:S,i(n){c||(l(i.$$.fragment,n),c=!0)},o(n){u(i.$$.fragment,n),c=!1},d(n){n&&d(t),x(i)}}}class H extends v{constructor(t){super(),b(this,t,null,E,_,{})}}function g(r){let t,i;return t=new H({}),{c(){w(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){k(t,e,a),i=!0},i(e){i||(l(t.$$.fragment,e),i=!0)},o(e){u(t.$$.fragment,e),i=!1},d(e){x(t,e)}}}function L(r){let t,i,e=r[0].path==="describing_cloud_concepts"&&g();return{c(){t=h("div"),e&&e.c(),this.h()},l(a){t=m(a,"DIV",{class:!0});var s=y(t);e&&e.l(s),s.forEach(d),this.h()},h(){p(t,"class","blog-container")},m(a,s){I(a,t,s),e&&e.m(t,null),i=!0},p(a,[s]){a[0].path==="describing_cloud_concepts"?e?s&1&&l(e,1):(e=g(),e.c(),l(e,1),e.m(t,null)):e&&(V(),u(e,1,1,()=>{e=null}),M())},i(a){i||(l(e),i=!0)},o(a){u(e),i=!1},d(a){a&&d(t),e&&e.d()}}}function N(r,t,i){let{data:e}=t;return r.$$set=a=>{"data"in a&&i(0,e=a.data)},[e]}class F extends v{constructor(t){super(),b(this,t,N,L,_,{data:0})}}export{F as component,q as universal};