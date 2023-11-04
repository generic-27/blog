<script>
	import { marked } from 'marked';
	import ArticleMainHeader from '../../main_header/article-main-header.svelte';
	import { builtInObjects, deepCopy, deepCopyAllowed } from './markdown_files/objects';
</script>

<div class="objects_container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<h1>Objects</h1>
		<div class="blog-paragraph">
			Everything in JavaScript is an <code>object</code> - A misconception I have been living with.
			<code>objects</code> are the building blocks in JavaScript but they are one of the 6 primary
			types.
			<div>
				<code>string</code>, <code>number</code>, <code>boolean</code>,
				<code>null</code>,
				<code>undefined</code>, <code>object</code>
			</div>
		</div>
		<div class="blog-paragraph">
			Everything in JavaScript is not an <code>object</code> but there are some some object
			sub-types, which are also referred to as complex primitives. <code>function</code> for example
			is a callable object, and they are referred to as the "first class". <code>Arrays</code> are
			also <code>objects</code> with extra behavior and data is organization is more structured. So,
			what is the difference between a primitive <code>string</code> and an <code>object</code>
			<code>String</code>
		</div>
		<div class="blog-sub-header">Built-in objects</div>
		<div class="blog-paragraph">
			There are multiple <code>object</code> sub-types which are referred to as built-in objects.
			<div>
				<code>String</code>, <code>Number</code>, <code>Boolean</code>,
				<code>Object</code>, <code>Function</code>, <code>Array</code>,
				<code>Date</code>, <code>RegExp</code>, <code>Error</code>
			</div>
			Each of these
			<code>objects</code> can be used as a contructor. Upon invocation it creates a new
			<code>object</code> of the specified type.
		</div>
		<div class="blog-code-block">{@html marked(builtInObjects)}</div>
		<div class="blog-paragraph">
			The example above clearly demarcates the difference between a primitive and an
			<code>object</code> type. The primitive variable is not an instance of the <code>String</code>
			<code>object</code> type but is just a primitive literal. But, in order to perform any
			operations on the the primitive variable it needs to be wrapped in the <code>object</code> type.
			JavaScript handles coercing the value and we do not have to handle that manually.
		</div>
		<div class="blog-sub-header">Contents of an object</div>
		<div class="blog-paragraph">
			The contents of an <code>object</code> consist of values (which can be any type) stored at
			specific named locations which are called properties. When we declare an <code>object</code> the
			properties are not literally stored in the container. The property names are stored in the container
			and those act as references to the where the value is stored.
		</div>
		<div class="blog-paragraph">
			There are two ways in which one can access <code>object</code> properties.
			<ol class="blog-list-elements">
				<li><code>.</code> operator</li>
				<li><code>[ ]</code> operator</li>
			</ol>
			The
			<code>.</code> operator requires the properties to meet the <code>identifier</code> naming
			standards, whereas the <code>[ ]</code> operator can take any <b>UTF-8/unicode</b> compatible string.
		</div>
		<div class="blog-sub-header">Duplicating objects</div>
		<div class="blog-paragraph">
			Duplicating <code>objects</code> in JavaScript can be tricky. In general there are two modes
			of copying <code>objects</code>
			<ol class="blog-list-elements">
				<li>Shallow copy</li>
				<li>Deep copy</li>
			</ol>
			Shallow copy creates a new<code>object</code> with the same references and values that the
			original <code>object</code> had. Deep copy on the other hand create new references where
			modifying the newly created <code>object</code> does not modify the original
			<code>object</code>.
		</div>
		<div class="blog-paragraph">
			Not everything can be deep copied in JavaScript. Let's look at an example.
		</div>
		<div class="blog-code-block">{@html marked(deepCopy)}</div>
		<div class="blog-paragraph">
			The above example creates a circular dependency. <code>myObject</code> has a reference of
			<code>anotherArray</code> and <code>anotherArray</code> has a reference of
			<code>myObject</code>. When trying to make a deep copy of <code>myObj</code> there are some
			considerations. Do we stop as soon as we find the cylical dependency? How do we deep copy a
			function ? These issues make deep copying difficult and for certain <code>objects</code> deep
			copying does not exist. But, there are certain <code>objects</code> that can be deep copied
			and to know which <code>object</code> , we could do something like this.
		</div>
		<div class="blog-code-block">{@html marked(deepCopyAllowed)}</div>
		<div class="blog-paragraph">
			When an<code>object</code> is JSON-safe(can be serialized to a JSON string and then re-parsed
			to an <code>object</code> with same structure) it can be deep copied.
		</div>
	</div>
</div>

<style>
	@import '../../../../styles/global_blog.css';
	.objects_container {
		background-color: #2f2f2f;
		height: 100%;
	}
</style>
