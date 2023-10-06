<script>
	import { marked } from 'marked';
	import ArticleMainHeader from '../../main_header/article-main-header.svelte';
	import {
		closure,
		functionAsValueClosure,
		moduleClosure,
		setTimeoutClosure
	} from './markdown-files/closure';
</script>

<div class="closure-container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<h1>Closure</h1>
		<div class="blog-paragraph">
			Closure in JavaScript refers to when a function is able to rememeber and access its lexical
			scope even when the function is executing outside is lexical scope. Let's start with an
			example.
		</div>
		<div class="blog-code-block">{@html marked(closure)}</div>
		<div class="blog-paragraph">
			In the above example the function <code>bar</code> has closure over the scope of
			<code>foo</code>. This is because <code>bar</code> is declared inside the scope of
			<code>foo</code>. The analogy of
			<a href="/blog/ydkjs/scopes_and_hoisting#concentric-circle" target="_blank"
				>concentric circles</a
			>
			could be used for closures as well because, the lexical scope that forms those concentric circles
			is closely related to closures. So looking at closures through the lens of the circle analogy,
			we would look at it inside-out. The inner most <i>scope/circle</i> has closure over all the
			other <i>scopes/circles</i>. What's fascinating about closure is the persistence of the scope
			of a function even after execution. Generally when a block of scope finishes execution, it is
			garbage collected and it's not present in memory, butz closures allow some magic to happen!
		</div>
		<div class="blog-paragraph">
			Other forms of closure. A function can be passed as a value to another function, and that's
			code that I have seen several times. All the ways in which a function can be passed around as
			values and invoked in other locations, are all examples of closures. Example below!
		</div>
		<div class="blog-code-block">{@html marked(functionAsValueClosure)}</div>
		<div class="blog-paragraph">
			Closures are everywhere and one of the best examples is the <code>setTimeOut</code> function.
		</div>
		<div class="blog-code-block">{@html marked(setTimeoutClosure)}</div>
		<div class="blog-paragraph">
			In the above <code>setTimeout</code> example, the function<code>timer</code> has a scope
			closure over the global scope, it rememebers the value a. We pass the function
			<code>timer</code>
			as a parameter to the <code>setTimeout</code>, which is a functionReference and that function
			has the closure over the global scope.
		</div>
		<div class="blog-sub-header">Modules</div>
		<div class="blog-paragraph">
			Modules are the of the prominent and powerful examples of closures.
		</div>
		<div class="blog-code-block">{@html marked(moduleClosure)}</div>
		<div class="blog-paragraph">
			Modules are functions itself and this example is in a way similar to the fist closure example.
			The only difference being that in the case of a module it returns an object with multiple
			functions that have closure over the scope of the module function.
		</div>
		<div class="blog-paragraph">
			That ends part two of YDKJS! I have learnt quite a bit, let's keep rolling.
		</div>
	</div>
</div>

<style>
	@import '../../../../styles/global_blog.css';
	.closure-container {
		background-color: #2f2f2f;
		height: 100%;
	}
</style>
