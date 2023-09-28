<script>
	import { goto } from '$app/navigation';

	function handleHomeClick() {
		goto('/');
	}
</script>

<div class="blog-article-main-header">
	<button class="home-button" on:click={handleHomeClick}>Home</button>
</div>

<style>
	.blog-article-main-header {
		display: flex;
		background-color: #77c3ec;
		height: 80px;
	}

	.home-button {
		color: white;
		font-size: 30px;
		margin: 20px;
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
