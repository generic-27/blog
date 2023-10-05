<script>
	import ArticleMainHeader from '../../../main_header/article-main-header.svelte';
</script>

<div class="describing_cloud_concepts_container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<h1>Describing cloud concepts</h1>
		<div class="blog-paragraph">
			With software development I have always felt like I start my journey in a chopper and I get
			dropped in the middle of a maze. From there I need to figure out where the start is, and pave
			my own way. Sometimes I figure out a way, but most of the times the maze engulfs me! Wow! I
			made it too dramatic!
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
			<ul>
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
	</div>
</div>

<style>
	@import '../../../../../styles/global_blog.css';

	.describing_cloud_concepts_container {
		background-color: #2f2f2f;
	}
</style>
