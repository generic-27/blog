<script>
	import { blogData } from '../util/blog-data';
</script>

<div class="blog-main-page-container">
	<div class="blog-main-header">
		<div class="blog-main-heading">Generic Blog</div>
		<div class="blog-owner-name">by Dheeraj Kumar Dhall</div>
	</div>

	<div class="blog-list-container">
		{#each blogData as data}
			<div class="blog-list-item">
				<li><a href="/blog/ydkjs/{data.path}" target="_blank">{data.title}</a></li>
			</div>
		{/each}
	</div>
</div>

<style>
	.blog-main-header {
		background-color: #4b6043;
		height: 200px;
	}

	.blog-main-heading {
		text-align: center;
		font-size: 40px;
		padding-top: 50px;
		color: white;
	}

	.blog-owner-name {
		text-align: center;
		font-size: 20px;
		margin-top: 10px;
		color: white;
	}

	.blog-list-container {
		margin-top: 100px;
	}

	.blog-list-item {
		font-size: 15px;
	}

	a {
		font-size: 20px;
		text-decoration: none;
	}
</style>
