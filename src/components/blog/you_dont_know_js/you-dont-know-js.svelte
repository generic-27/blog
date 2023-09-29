<script>
	import { blogData } from '../../../util/blog-data';
	import ArticleCard from './article_card/article-card.svelte';
</script>

<div class="blog-ydkjs-container">
	<div class="main-heading">You don't know JS</div>
	<div class="blog-list-container">
		{#each blogData as data}
			<ArticleCard articleHeading={data.title} articlePath={data.path} />
		{/each}
	</div>
</div>

<style>
	.blog-ydkjs-container {
		margin: 100px 0px 0px 100px;
	}

	.main-heading {
		font-size: 30px;
		font-family: 'Roboto', sans-serif;
		text-align: center;
		color: #e6e6e6;
	}

	.blog-list-container {
		display: flex;
		flex-direction: row;
		gap: 20px;
		margin-top: 20px;
	}
</style>
