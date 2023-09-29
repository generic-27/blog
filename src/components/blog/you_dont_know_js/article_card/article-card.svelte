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
		width: 30%;
		height: 150px;
		border: 1px solid black;
		background-color: #004173;
		box-shadow: 2px 2px 2px #0065b34d;
		/* color: #278cda; */
		color: #e6e6e6;
		border-radius: 10px;
	}

	.blog-article-heading {
		font-size: 20px;
		font-family: 'Roboto', sans-serif;
		margin: 20px 0px 0px 20px;
	}

	.card-footer {
		margin: 60px 0px 0px 20px;
	}

	.blog-article-button {
		width: 60px;
		height: 30px;
		background-color: #75b6e7;
		border-radius: 5px;
		font-size: 14px;
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
	}

	@media screen and (max-width: 600px) {
		.blog-article-card {
			width: 100%;
			height: 200px;
		}

		.card-footer {
			margin: 110px 20px;
		}
	}
</style>
