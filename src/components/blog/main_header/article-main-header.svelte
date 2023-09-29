<script>
	import { goto } from '$app/navigation';

	function handleHomeClick() {
		goto('/blog/');
	}
</script>

<div class="blog-article-main-header">
	<button class="home-button" on:click={handleHomeClick}>Home</button>
</div>

<style>
	.blog-article-main-header {
		display: flex;
		background-color: #3b444b;
		height: 80px;
	}

	.home-button {
		color: #e6e6e6;
		font-size: 30px;
		margin: 20px;
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
