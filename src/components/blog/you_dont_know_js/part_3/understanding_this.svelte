<script>
	import ArticleMainHeader from '../../main_header/article-main-header.svelte';
</script>

<div class="understanding_this_container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<h1>Understanding This</h1>
		<div class="blog-paragraph">
			The first time I was introduced to the keyword <code>this</code>, there was only confusion. My
			confusion stemmed from the question, what really is <code>this</code>? We were learning the
			programming language<b>C#</b> and <code>this</code> referred to the class reference. Even
			though it's easier to grasp the concept in the context of language like <b>C#</b>, I still
			found it a bit confusing. Now, years later reading about the <code>this</code> keyword in JavaScript,
			brought back those memories.
		</div>
		<div class="blog-paragraph">
			The <code>this</code> keyword in JavaScript has a very different usecase. Carrying the idea of
			the class reference in <b>C#</b> to functions in JavaScript, caused a misconception which is quite
			common among developers. I assumed the this reference in a function referred to the function itself.
			The decision to truly understand the language was the best one!
		</div>
		<div class="blog-paragraph">
			<code>this</code> is not an author time binding, but a runtime binding. The binding has
			nothing to do with where the function is declared, but everything to do with where and how the
			function is called. When a function gets invoked in JavaScript, it creates an activation
			record, which is also known as an execution context. This record contains information about
			<ul class="blog-list-elements">
				<li>Where the function was called from</li>
				<li>How the function was invoked</li>
				<li>What parameters were passed, etc.</li>
			</ul>
			Amongst that list of properties is another one which is the this reference and that's used for
			the duration of the function execution
		</div>
	</div>
</div>

<style>
	@import '../../../../styles/global_blog.css';
	.understanding_this_container {
		background-color: #2f2f2f;
		height: 100%;
	}
</style>
