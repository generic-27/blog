<script>
	import { marked } from 'marked';
	import {
		explicitCoercion,
		implicitCoercion,
		closure,
		polyfilling,
		hoisting
	} from './markdown-files/up-and-going';
	import ArticleMainHeader from '../../main_header/article-main-header.svelte';
</script>

<div class="up-and-going-container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<h1>Up and going</h1>
		<div class="blog-paragraph">
			The first statement that I ever heard in regards to JavaScript was the phrase "
			<strong>Dumb kid brother</strong>". It has been close to 7 years, since I started coding
			seriously and I still do not understand, how the world's most widely used language that rules
			the entire web space, works?
		</div>
		<div class="blog-paragraph">
			The intention behind creating these articles is to mainly learn and treat them as a point of
			reference to solidify my understanding of <i>JavaScript</i>. This by chance, also happens to
			be the first blog that I have ever written and I am hoping I can make this a hobby.
		</div>
		<div class="blog-sub-header">Up and Going</div>
		<div class="blog-paragraph">
			The first part of this series <strong>(You don't know JS)</strong> was a general introduction
			to programming and a discussion of some aspects of <i>JavaScript</i>. There are few topics
			that caught my attention.
			<a
				href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/README.md#you-dont-know-js-up--going"
				target="_blank">YDKJS</a
			>
			<ul class="blog-list-elements">
				<li>Coercion</li>
				<li>Typed values not typed variables</li>
				<li>Equality</li>
				<li>Hoisting</li>
				<li>Closure</li>
				<li>Polyfilling</li>
				<li>Transpiling</li>
			</ul>
		</div>
		<div class="blog-sub-header">Coercion</div>
		<div class="blog-paragraph">
			At the basic level coercion in JavaScript is conversion of a type into another. There are two
			forms of coercion in JavaScript
			<ol class="blog-list-elements">
				<li>Explicit coercion</li>
				<li>Implicit coercion</li>
			</ol>
			<p>
				Explicit conversion is straightforward. We know the current type of the value and the
				resultant type it is converted to.
			</p>
			<div class="blog-code-block">{@html marked(explicitCoercion)}</div>
			<p>
				The conversion in the above cases is explicit. We know that the <code>name</code> variable
				is a <code>string</code> and so is the variable <code>numString</code>. In the third case
				the
				<code>string</code> type is explicity converted to a <code>number</code>.
			</p>
			<p>
				Implicit conversion on the other hand is quite interesting and we will experience an
				interesting quality of implicit conversion in the <strong>Equality</strong>
				section. The conversion is not very apparent and can cause confusion in code if not written properly.
			</p>
			<div class="blog-code-block">{@html marked(implicitCoercion)}</div>
			<p>
				The conversion in the first case is explicit, we know that num is a string. In the second
				case the value of num is coerced into a number.
			</p>
		</div>
		<div class="blog-sub-header">Typed values not typed variables</div>
		<div class="blog-paragraph">
			<p>
				There is a neat way to learn the type of a variable in JavaScript. It's the typeof()
				operator. When checking the type of a variable, JavaScript looks at the value of the
				variable and not the variable itself. The variables in JavaScript are merely containers of <code
					>types</code
				>.
			</p>
		</div>
		<div class="blog-sub-header">Equality</div>
		<div class="blog-paragraph">
			<p>
				Equality in JavaScript comes in two flavors <code>==</code> and <code>===</code>. The
				easiest way to understand these would be that <code>==</code> checks for equality with
				coercion and
				<code>===</code> does not allow coercion, which is often called "strict equality"
			</p>
			<p>
				For the past 7 years I believed that the difference between <code>==</code> and
				<code>===</code> is that strict equality checked the reference and the other checked the value.
				I was missing the understanding of the word coercion! I still do think that the avoiding == makes
				sense when working with other people. Somewhere down the line people can make mistakes.
			</p>
		</div>
		<div class="blog-sub-header">Hoisting</div>
		<div class="blog-paragraph">
			<p>
				On declaring a variable in JavaScript, it's made available throughout the entire scope it
				was declared in. JavaScript hoists that variable to the top, to be accessed throughout. The
				same works for functions. Variable hoisting can cause a lot of confusion and it's better to
				avoid it. The best approach is to use JavaScript in "strict" mode and use let for variable
				declaration.
			</p>
			<div class="blog-code-block">{@html marked(hoisting)}</div>
			<p>
				In the above example, on calling the function <code>hoistedVariable</code> we notice that
				the variable until initialized prints a value of <code>undefined</code>. The declaration of
				the variable
				<code>a</code> is on the last line but, due to hoisting in JavaScript, the variable is available
				in the entire scope.
			</p>
		</div>
		<div class="blog-sub-header">Closure</div>
		<div class="blog-paragraph">
			<p>
				One can think of Closure as a way to "remember" a function's scope, like variables, even
				after the function has finished executing. The best way to explain closure is through an
				example
			</p>
			<div class="blog-code-block">{@html marked(closure)}</div>
			<p>
				In the above example even after it's execution the returned function value is saved in the
				<code>plusTwo</code> variable, which is basically holding a <code>function</code> type.
				Calling
				<code>plusTwo</code> remembers the original value passed in, which was 2.
			</p>
		</div>
		<div class="blog-sub-header">Polyfilling</div>
		<div class="blog-paragraph">
			<p>
				Polyfilling refers to taking the definition of a newer feature and producing a piece of code
				that's equivalent to the behavior, but is able to run in older JavaScript environments. As
				an example, ES6 deprecated the utility <code>isNan(...)</code> which was buggy and replaced
				it with
				<code>Number.isNan(...)</code>. The example below polyfills the function for older
				environments.
			</p>
			<div class="blog-code-block">{@html marked(polyfilling)}</div>
		</div>
	</div>
</div>

<style>
	@import '../../../../styles/global_blog.css';

	.up-and-going-container {
		background-color: #2f2f2f;
	}
</style>
