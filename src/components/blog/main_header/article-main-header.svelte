<script>
	import { goto } from '$app/navigation';

	function handleHomeClick() {
		goto('/blog');
	}
</script>

<div class="blog-article-main-header">
	<a href="/blog" class="home-button">Home</a>
</div>

<style>
	.blog-article-main-header {
		display: flex;
		background-color: #77c3ec;
		height: 80px;
	}

	.home-button {
		text-decoration: none;
		color: white;
		font-size: 30px;
		margin: 20px;
	}
</style>
