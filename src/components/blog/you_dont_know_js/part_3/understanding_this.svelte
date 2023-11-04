<script>
	import { marked } from 'marked';
	import ArticleMainHeader from '../../main_header/article-main-header.svelte';
	import {
		defaultBinding,
		hardBinding,
		hardBindingBuiltIn,
		hardBindingReusableHelper,
		implicitBinding,
		lostBinding,
		newBinding
	} from './markdown_files/understanding_this';
</script>

<div class="understanding_this_container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<h1>Understanding This</h1>
		<div class="blog-paragraph">
			The first time I was introduced to the keyword <code>this</code>, there was only confusion. My
			confusion stemmed from the question, what really is <code>this</code>? We were learning the
			programming language<b>C#</b> and <code>this</code> referred to the class reference. Even
			though it's easier to grasp the concept in the context of a language like <b>C#</b>, I still
			found it a bit confusing. Now, years later reading about the <code>this</code> keyword in JavaScript
			brought back those memories.
		</div>
		<div class="blog-paragraph">
			The <code>this</code> keyword in JavaScript has a very different usecase. Carrying the idea of
			the class reference in <b>C#</b> to functions in JavaScript created a misconception for me
			personally and it is quite common among developers too. I assumed the <code>this</code> reference
			in a function referred to the function itself.
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
			Amongst that list of properties in the execution context there is another one, which is the
			<code>this</code> reference and that's used for the duration of the function execution. To
			understand how <code>this</code> gets bound, we need to understand the rules that govern the behavior.
		</div>
		<div class="blog-sub-header">
			Rules for <code>this</code> binding
		</div>
		<div class="blog-paragraph">
			There are four rules that explain how the <code>this</code> binding works.
			<ol class="blog-list-elements">
				<li>Default binding</li>
				<li>Implicit binding</li>
				<li>Explicit binding</li>
				<li>New binding</li>
			</ol>
		</div>
		<div class="blog-sub-header">Default binding</div>
		<div class="blog-paragraph">
			Is the easisest to understand. When the function invocation is plain and is not decorated, it
			falls to the <b>Default binding</b>. An example!
			<div class="blog-code-block">{@html marked(defaultBinding)}</div>
			<div class="blog-paragraph">
				The call-site in the above example is in the global context and this resolves to the global
				context.
			</div>
		</div>
		<div class="blog-sub-header">Implicit binding</div>
		<div class="blog-paragraph">
			This rule determines if the call-site has a context <code>object</code> which can also be
			referred to as the owning object. In the example below that context <code>object</code> is
			<code>obj</code>
			<div class="blog-code-block">{@html marked(implicitBinding)}</div>
			<div class="blog-paragraph">
				The way<code>foo</code> gets referenced in the<code>obj</code> does not imply that it is
				owned by the said <code>object</code>. Since, there exists a context <code>object</code>
				that references the function at the call-site, the implicit binding rules state that the
				<code>function</code> is owned by the context <code>object</code>.
			</div>
			<div class="blog-paragraph">
				When <code>this</code> gets implicity bound the context becomes synonmous with the owning
				<code>object</code>. In the above case <code>this.a</code> is synonmous with
				<code>obj.a</code>
			</div>
		</div>
		<div class="blog-sub-header">Explicit binding</div>
		<div class="blog-paragraph">
			Explicit binding allows us to explicitly state the <code>object</code> that would act as the
			context <code>object</code> for the function that's invoked. In order to achieve this, every
			function in JavaScript is provided with utilities and two of them are.
			<ol class="blog-list-elements">
				<li><code>call</code></li>
				<li><code>apply</code></li>
			</ol>
			The first parameter of the above utilities is an<code>object</code> which is implied that it
			is used for the <code>this</code> binding. When a simple primitive (<code>string</code>,
			<code>number</code> ..) gets passed it is wrapped in it's <code>object</code> form and this is
			referred to as <b>Boxing</b>.
		</div>
		<div class="blog-sub-header"><code>new</code> binding</div>
		<div class="blog-paragraph">
			JavaScript <code>new</code> operator unlike the <code>new</code> operator found in object
			oriented programming languages does not call a <code>function</code> that has a constructor
			but instead makes a contructor call that returns a new <code>object</code>. What's important
			to us here is the idea of <code>this</code> binding through the usage of the <code>new</code>
			operator.
		</div>
		<div class="blog-code-block">{@html marked(newBinding)}</div>
		<div class="blog-paragraph">
			The example above contructs a new <code>object</code> and binds that new <code>object</code>
			to the call of <code>foo</code>. This sums up all the rules for binding <code>this</code> but,
			there is an order of precedence.
		</div>
		<div class="blog-sub-header">Order of precedence</div>
		<div class="blog-paragraph">
			The order of precedence is somewhat like this
			<ol class="blog-list-elements">
				<li>If the <code>new</code> operator is used, use the newly created <code>object</code></li>
				<li>
					If the call-site uses <code>call</code> or <code>apply</code> use the specified
					<code>object</code>
				</li>
				<li>If called with a context <code>object</code> then use that <code>object</code></li>
				<li>Finally, the default binding</li>
			</ol>
		</div>
		<div class="blog-sub-header">Lost bindings - Hard binding</div>
		<div class="blog-paragraph">
			Bindings sometime can get lost, which usually implies that it's fallen back to the default
			binding.
		</div>
		<div class="blog-code-block">{@html marked(lostBinding)}</div>
		<div class="blog-paragraph">
			In the above example the function <code>foo()</code> is implicity bound to the
			<code>object obj</code> which in turn is assigned to the variable <code>bar</code>. When
			<code>bar</code> is invoked, it's invoked without any decoration and it's just another
			reference to <code>foo</code>. There is a fix for such a scenario and we call it Hard binding
		</div>
		<div class="blog-sub-header">Hard binding</div>
		<div class="blog-paragraph">
			Hard binding is a variation around the explicit binding which seals the binding.
		</div>
		<div class="blog-code-block">{@html marked(hardBinding)}</div>
		<div class="blog-paragraph">
			The function <code>bar()</code> calls foo with an explicit bind intention and sets
			<code>obj</code> to be the <code>this</code> context. No matter how we invoke <code>bar</code>
			after this, it always binds <code>obj</code> to the function <code>foo</code>'s
			<code>this</code> context. This type of binding is explicit and strong and that's why it's
			referred to as <b>Hard binding</b>. Another way to express this pattern is to create a
			reusable helper method.
		</div>
		<div class="blog-code-block">{@html marked(hardBindingReusableHelper)}</div>
		<div class="blog-paragraph">
			Since hard binding is such a common pattern, it's provided as a built-in utility as of ES5.
		</div>
		<div class="blog-code-block">{@html marked(hardBindingBuiltIn)}</div>
		<div class="blog-paragraph">That's a general idea of the <code>this</code> keyword, phew!</div>
	</div>
</div>

<style>
	@import '../../../../styles/global_blog.css';
	.understanding_this_container {
		background-color: #2f2f2f;
		height: 100%;
	}
</style>
