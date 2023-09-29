<script>
	import YouDontKnowJs from '../components/blog/you_dont_know_js/you-dont-know-js.svelte';
</script>

<div class="page-container">
	<div class="blog-main-header-container">
		<div class="blog-main-heading">Generic Blog</div>
		<div class="blog-owner-name">by Dheeraj Kumar Dhall</div>
	</div>
	<YouDontKnowJs />
</div>

<style>
	.page-container {
		background-color: #0e1111;
	}

	.blog-main-header-container {
		background-color: #3b444b;
		height: 200px;
	}

	.blog-main-heading {
		text-align: center;
		font-size: 40px;
		font-family: 'Roboto', sans-serif;
		padding-top: 50px;
		color: white;
	}

	.blog-owner-name {
		text-align: center;
		font-size: 20px;
		font-family: 'Roboto', sans-serif;
		margin-top: 10px;
		color: white;
	}
</style>
