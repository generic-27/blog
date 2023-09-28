<script>
	import { goto } from '$app/navigation';

	export let articleHeading = '';
	export let articlePath = '';

	async function handleReadClick() {
		goto(articlePath);
	}
</script>

<div class="blog-article-card">
	<div class="card-body">
		<div class="blog-article-heading">{articleHeading}</div>
	</div>
	<div class="card-footer">
		<button class="blog-article-button" on:click={handleReadClick}>Read</button>
	</div>
</div>

<style>
	.blog-article-card {
		width: 25%;
		height: 100px;
		border: 1px solid black;
		background-color: #cccccc;
		box-shadow: 2px 2px 2px black;
	}

	.blog-article-heading {
		font-size: 20px;
		font-family: 'Roboto', sans-serif;
		margin: 5px 0px 0px 20px;
	}

	.blog-article-button {
		width: 60px;
		height: 30px;
	}

	.card-footer {
		margin: 30px 0px 0px 20px;
	}
</style>
