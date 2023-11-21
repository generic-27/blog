import{e as $,D as c,A as k}from"../chunks/article-main-header.3f8783d1.js";import{s as b,n as T}from"../chunks/scheduler.e108d1fd.js";import{S as y,i as _,g as p,r as w,s as P,h as m,j as S,u as A,c as D,y as E,f as u,k as g,a as C,v as I,x as f,d as l,t as h,w as x,b as O,p as j}from"../chunks/index.2b92d2ca.js";function z({params:o}){switch(o.slug){case c:return{path:c};default:throw $(404,"Not found")}}const F=Object.freeze(Object.defineProperty({__proto__:null,load:z},Symbol.toStringTag,{value:"Module"}));function N(o){let t,s,e,i,a=`<div class="blog-title">Describing cloud computing</div> <div class="blog-paragraph">With software development I have always felt like I start my journey in a chopper and I get
			dropped in the middle of a maze. From there, I need to rummage through the thick opaque walls
			of leaves and figure out where the starting point is. Sometimes I figure a way out, but most
			of the times the maze engulfs me! Wow! I made it too dramatic!</div> <div class="blog-paragraph">I have spent some time working with Azure services and there is a gap in my knowledge that I
			need to fix! I aim to start from the basics and truly understand what cloud computing is. So,
			this is the first article in this series and the idea is similar to the JavaScript series.
			Make sure I write about things I learn.</div> <div class="blog-sub-header">Cloud computing</div> <div class="blog-paragraph">Cloud computing is the delivery of computing services over the internet. This includes.
			<ul class="blog-list-elements"><li>Virtual machines</li> <li>Storage</li> <li>Databases</li> <li>Networking</li></ul>
			The basic services provided by the cloud providers are compute power and storage. Computer power
			is - how much processing a computer can do and storage is the volume of data that can be stored.
			There are plenty of benefits of using a cloud provider, the main ones are.
			<ul><li>The computers are in a cloud provider datacenter</li> <li>Consumers only pay for the services that they use</li> <li>There&#39;s no need for maintenance. The cloud provider is responsible for maintaining the
					infrastructure.</li></ul></div> <div class="blog-sub-header">Shared responsibility model</div> <div class="blog-paragraph">When using a cloud provider the cloud provider is responsible for handling
			<b>Physcial security, power, cooling and network connectivity</b>. On the other hand, the
			consumer is reponsible for the data and information stored on the computers. This is the basic
			understanding of a shared responsibility model. There are three different types of shared
			responsibility model.
			<ul class="blog-list-elements"><li>IAAS - Infrastructure As A Service</li> <li>PAAS - Platform As A Service</li> <li>SAAS - Software As A Service</li></ul> <b>IAAS</b> places most responsibility on the consumer - cloud provider manages the phsycial
			security, power and connectivity.
			<b>SAAS</b> Places most of the responsbility on the cloud provider and finally <b>PAAS</b> is the
			middle ground where the responsiblity is equally shared.</div> <div class="blog-paragraph">Consumers are always responsible for the data and information that&#39;s stored in the cloud
			however, the service model chosen will determine responsibility for things like:
			<ul class="blog-list-elements"><li>Operating systems</li> <li>Network controls</li> <li>Applications</li> <li>Identity and infrastructure</li></ul></div> <div class="blog-sub-header">Cloud models&#39;</div> <div class="blog-paragraph">Cloud models define the deployment type of the cloud resources. There are three main cloud
			models
			<ol class="blog-list-elements"><li>Private cloud</li> <li>Public cloud</li> <li>Hybrid cloud</li></ol>
			Private cloud is used by a single entity and is tailored towards a single consumer. So, there isn&#39;t
			a concept of resource sharing with other consumers. Everything is provided solely for the purpose
			of one entity. Public cloud on the other hand like the name suggests, is open to everyone. Certain
			resources and computer are shared between multiple consumers. Lastly, hybrid cloud is a combination
			of private and public. It provides an option for consumers to deploy important/confidential services
			to the private cloud and the other not so critical services to the public cloud. Finally, we look
			at the consumption based model.</div> <div class="blog-sub-header">Consumption based model</div> <div class="blog-paragraph">There are two types of expenses to consider when comparing IT infrastructure models
			<ol class="blog-list-elements"><li>Capital expenditure (CapEx)</li> <li>Operational expenditure (OpEx)</li></ol>
			Capital expenditure is a one time spend (Subjectively). Example is setting up a data center. Contrastingly,
			operational expenditure is spending money on services over time. Cloud computing falls in the second
			bracket. The idea is to pay for what you use.</div>`,d;return s=new k({}),{c(){t=p("div"),w(s.$$.fragment),e=P(),i=p("div"),i.innerHTML=a,this.h()},l(r){t=m(r,"DIV",{class:!0});var n=S(t);A(s.$$.fragment,n),e=D(n),i=m(n,"DIV",{class:!0,"data-svelte-h":!0}),E(i)!=="svelte-yp09vi"&&(i.innerHTML=a),n.forEach(u),this.h()},h(){g(i,"class","blog-text-container"),g(t,"class","describing_cloud_concepts_container svelte-9zw7n7")},m(r,n){C(r,t,n),I(s,t,null),f(t,e),f(t,i),d=!0},p:T,i(r){d||(l(s.$$.fragment,r),d=!0)},o(r){h(s.$$.fragment,r),d=!1},d(r){r&&u(t),x(s)}}}class L extends y{constructor(t){super(),_(this,t,null,N,b,{})}}function v(o){let t,s;return t=new L({}),{c(){w(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,i){I(t,e,i),s=!0},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){x(t,e)}}}function M(o){let t,s,e=o[0].path===c&&v();return{c(){t=p("div"),e&&e.c(),this.h()},l(i){t=m(i,"DIV",{class:!0});var a=S(t);e&&e.l(a),a.forEach(u),this.h()},h(){g(t,"class","blog-container")},m(i,a){C(i,t,a),e&&e.m(t,null),s=!0},p(i,[a]){i[0].path===c?e?a&1&&l(e,1):(e=v(),e.c(),l(e,1),e.m(t,null)):e&&(j(),h(e,1,1,()=>{e=null}),O())},i(i){s||(l(e),s=!0)},o(i){h(e),s=!1},d(i){i&&u(t),e&&e.d()}}}function V(o,t,s){let{data:e}=t;return o.$$set=i=>{"data"in i&&s(0,e=i.data)},[e]}class B extends y{constructor(t){super(),_(this,t,V,M,b,{data:0})}}export{B as component,F as universal};
