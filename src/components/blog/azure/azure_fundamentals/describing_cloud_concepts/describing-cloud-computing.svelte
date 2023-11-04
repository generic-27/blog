<script>
	import ArticleMainHeader from '../../../main_header/article-main-header.svelte';
</script>

<div class="describing_cloud_concepts_container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<div class="blog-title">Describing cloud computing</div>
		<div class="blog-paragraph">
			With software development I have always felt like I start my journey in a chopper and I get
			dropped in the middle of a maze. From there, I need to rummage through the thick opaque walls
			of leaves and figure out where the starting point is. Sometimes I figure a way out, but most
			of the times the maze engulfs me! Wow! I made it too dramatic!
		</div>
		<div class="blog-paragraph">
			I have spent some time working with Azure services and there is a gap in my knowledge that I
			need to fix! I aim to start from the basics and truly understand what cloud computing is. So,
			this is the first article in this series and the idea is similar to the JavaScript series.
			Make sure I write about things I learn.
		</div>
		<div class="blog-sub-header">Cloud computing</div>
		<div class="blog-paragraph">
			Cloud computing is the delivery of computing services over the internet. This includes.
			<ul class="blog-list-elements">
				<li>Virtual machines</li>
				<li>Storage</li>
				<li>Databases</li>
				<li>Networking</li>
			</ul>
			The basic services provided by the cloud providers are compute power and storage. Computer power
			is - how much processing a computer can do and storage is the volume of data that can be stored.
			There are plenty of benefits of using a cloud provider, the main ones are.
			<ul>
				<li>The computers are in a cloud provider datacenter</li>
				<li>Consumers only pay for the services that they use</li>
				<li>
					There's no need for maintenance. The cloud provider is responsible for maintaining the
					infrastructure.
				</li>
			</ul>
		</div>
		<div class="blog-sub-header">Shared responsibility model</div>
		<div class="blog-paragraph">
			When using a cloud provider the cloud provider is responsible for handling
			<b>Physcial security, power, cooling and network connectivity</b>. On the other hand, the
			consumer is reponsible for the data and information stored on the computers. This is the basic
			understanding of a shared responsibility model. There are three different types of shared
			responsibility model.
			<ul class="blog-list-elements">
				<li>IAAS - Infrastructure As A Service</li>
				<li>PAAS - Platform As A Service</li>
				<li>SAAS - Software As A Service</li>
			</ul>
			<b>IAAS</b> places most responsibility on the consumer - cloud provider manages the phsycial
			security, power and connectivity.
			<b>SAAS</b> Places most of the responsbility on the cloud provider and finally <b>PAAS</b> is the
			middle ground where the responsiblity is equally shared.
		</div>
		<div class="blog-paragraph">
			Consumers are always responsible for the data and information that's stored in the cloud
			however, the service model chosen will determine responsibility for things like:
			<ul class="blog-list-elements">
				<li>Operating systems</li>
				<li>Network controls</li>
				<li>Applications</li>
				<li>Identity and infrastructure</li>
			</ul>
		</div>
		<div class="blog-sub-header">Cloud models'</div>
		<div class="blog-paragraph">
			Cloud models define the deployment type of the cloud resources. There are three main cloud
			models
			<ol class="blog-list-elements">
				<li>Private cloud</li>
				<li>Public cloud</li>
				<li>Hybrid cloud</li>
			</ol>
			Private cloud is used by a single entity and is tailored towards a single consumer. So, there isn't
			a concept of resource sharing with other consumers. Everything is provided solely for the purpose
			of one entity. Public cloud on the other hand like the name suggests, is open to everyone. Certain
			resources and computer are shared between multiple consumers. Lastly, hybrid cloud is a combination
			of private and public. It provides an option for consumers to deploy important/confidential services
			to the private cloud and the other not so critical services to the public cloud. Finally, we look
			at the consumption based model.
		</div>
		<div class="blog-sub-header">Consumption based model</div>
		<div class="blog-paragraph">
			There are two types of expenses to consider when comparing IT infrastructure models
			<ol class="blog-list-elements">
				<li>Capital expenditure (CapEx)</li>
				<li>Operational expenditure (OpEx)</li>
			</ol>
			Capital expenditure is a one time spend (Subjectively). Example is setting up a data center. Contrastingly,
			operational expenditure is spending money on services over time. Cloud computing falls in the second
			bracket. The idea is to pay for what you use.
		</div>
	</div>
</div>

<style>
	@import '../../../../../styles/global_blog.css';

	.describing_cloud_concepts_container {
		background-color: #2f2f2f;
	}
</style>
