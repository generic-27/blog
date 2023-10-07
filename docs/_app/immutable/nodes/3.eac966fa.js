import{e as x,A as $}from"../chunks/article-main-header.87437fe5.js";import{s as v,n as k}from"../chunks/scheduler.e108d1fd.js";import{S as b,i as y,g as h,r as _,s as T,h as p,j as w,u as S,c as P,y as D,f as d,k as m,a as A,v as I,x as g,d as l,t as u,w as C,b as E,p as O}from"../chunks/index.2b92d2ca.js";function j({params:o}){switch(o.slug){case"describing_cloud_concepts":return{path:"describing_cloud_concepts"};default:throw x(404,"Not found")}}const W=Object.freeze(Object.defineProperty({__proto__:null,load:j},Symbol.toStringTag,{value:"Module"}));function z(o){let t,s,e,i,r=`<h1>Describing cloud concepts</h1> <div class="blog-paragraph">With software development I have always felt like I start my journey in a chopper and I get
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
			bracket. The idea is to pay for what you use.</div>`,c;return s=new $({}),{c(){t=h("div"),_(s.$$.fragment),e=T(),i=h("div"),i.innerHTML=r,this.h()},l(a){t=p(a,"DIV",{class:!0});var n=w(t);S(s.$$.fragment,n),e=P(n),i=p(n,"DIV",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-16ac98p"&&(i.innerHTML=r),n.forEach(d),this.h()},h(){m(i,"class","blog-text-container"),m(t,"class","describing_cloud_concepts_container svelte-9zw7n7")},m(a,n){A(a,t,n),I(s,t,null),g(t,e),g(t,i),c=!0},p:k,i(a){c||(l(s.$$.fragment,a),c=!0)},o(a){u(s.$$.fragment,a),c=!1},d(a){a&&d(t),C(s)}}}class M extends b{constructor(t){super(),y(this,t,null,z,v,{})}}function f(o){let t,s;return t=new M({}),{c(){_(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,i){I(t,e,i),s=!0},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}function V(o){let t,s,e=o[0].path==="describing_cloud_concepts"&&f();return{c(){t=h("div"),e&&e.c(),this.h()},l(i){t=p(i,"DIV",{class:!0});var r=w(t);e&&e.l(r),r.forEach(d),this.h()},h(){m(t,"class","blog-container")},m(i,r){A(i,t,r),e&&e.m(t,null),s=!0},p(i,[r]){i[0].path==="describing_cloud_concepts"?e?r&1&&l(e,1):(e=f(),e.c(),l(e,1),e.m(t,null)):e&&(O(),u(e,1,1,()=>{e=null}),E())},i(i){s||(l(e),s=!0)},o(i){u(e),s=!1},d(i){i&&d(t),e&&e.d()}}}function q(o,t,s){let{data:e}=t;return o.$$set=i=>{"data"in i&&s(0,e=i.data)},[e]}class F extends b{constructor(t){super(),y(this,t,q,V,v,{data:0})}}export{F as component,W as universal};
