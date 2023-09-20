<script>
    import { blogData } from "../util/blog-data";
</script>

<div class="blog-main-page-container">
    <div class="blog-main-header">
        <h1>Learning JavaScript Blog</h1>
        <span>by Dheeraj Kumar Dhall</span>
    </div>
    
    <div class="blog-list-container">
        {#each blogData as data}
            <div class="blog-list-item">
                <li><a href="/blog/{data.title}" target="_blank">{data.title}</a></li>
            </div>
        {/each}
    </div>
</div>

<style>
    .blog-main-page-container {
        margin: 0px auto;
        padding: 100px;
        max-width: 800px;
    }

    .blog-main-header {
        text-align: center;
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