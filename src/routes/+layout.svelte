<script>
	import '@fontsource/roboto';
</script>

<div class="blog-main-page-container">
	<slot />
</div>

<style>
	.blog-main-header-container {
		background-color: #77c3ec;
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
