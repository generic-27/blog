<script>
	import { marked } from 'marked';
	import ArticleMainHeader from '../../main_header/article-main-header.svelte';
	import {
		builtInObjects,
		deepCopy,
		deepCopyAllowed,
		preventExtensions,
		propertyDecsriptor
	} from './markdown_files/objects';
</script>

<div class="objects_container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<div class="blog-title">Objects</div>
		<div class="blog-paragraph">
			Everything in JavaScript is an <code>object</code> - A misconception I have been living with.
			<code>objects</code> are the building blocks in JavaScript but they are one of the 6 primary
			types, which are.
			<div>
				<code>string</code>, <code>number</code>, <code>boolean</code>,
				<code>null</code>,
				<code>undefined</code>, <code>object</code>
			</div>
		</div>
		<div class="blog-paragraph">
			Everything in JavaScript is not an <code>object</code> but there are some some object
			sub-types, which are also referred to as complex primitives. <code>function</code> for example
			is a callable object, and is referred to as the "first class". <code>Arrays</code> are also
			<code>objects</code>
			with extra behavior, and data organization is more structured. So, what is the difference between
			a primitive <code>string</code> and an <code>object</code>
			<code>String</code>?
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
			<code>object</code> type, but is just a primitive literal. In order to perform any operation
			on the the primitive variable it needs to be wrapped in the <code>object</code> type. JavaScript
			handles coercing the value and we do not have to handle that manually.
		</div>
		<div class="blog-sub-header">Contents of an object</div>
		<div class="blog-paragraph">
			The contents of an <code>object</code> consist of values (which can be any type) stored at
			specific named locations which are called properties. When we declare an <code>object</code> the
			properties are not literally stored in the container. The property names are stored in the container
			and those act as references to the where the actual value is stored.
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
		<div class="blog-sub-header">Property Descriptors</div>
		<div class="blog-paragraph">
			Prior to ES5 JavaScript did not have a mechanism to distinguish between the characteristics of
			properties. But as a of ES5 one can declare and describe properties in terms of a property
			descriptor. Let's look at an example below.
		</div>
		<div class="blog-code-block">{@html marked(propertyDecsriptor)}</div>
		<div class="blog-paragraph">
			As we see in the example above each propert described under an <code>object</code> has the
			following properties, which default to true.
			<ol class="blog-list-items">
				<li>writable</li>
				<li>enumerable</li>
				<li>configurable</li>
			</ol>
			<ol>
				<li>
					When a property is set to have <code>writable</code> <code>true</code>, it implies that
					the property ca be overwritten with a new value.
				</li>
				<li>
					When a property has <code>configurable</code> set to <code>true</code> it implies that the
					descriptor definition of the property can be changed. When it's false the descriptor definition
					cannot be changed and also the property cannot be deleted.
				</li>
				<li>
					The <code>enumerable</code> property controls the ability for a property to show up in object-property
					enumerations.
				</li>
			</ol>
		</div>
		<div class="blog-sub-header">Immutability</div>
		<div class="blog-paragraph">
			Immutability in JavaScript is for creating <code>objects</code> that cannot be changed. This
			can be done in numerous ways in JavaScript. One thing to remember though is that the following
			methods only create shallow immutability and do no affect <code>objects</code> that are
			referenced inside another <code>object</code>
			<div class="blog-paragraph-sub-header">Object constant</div>
			<div>
				By setting <code>writable: false</code> and <code>configurable: false</code> one can create a
				constant that cannot be redefined or deleted.
			</div>
			<div class="blog-paragraph-sub-header">Prevent Extensions</div>
			<div>
				In order to prevent <code>object</code> from having new properties one could do the following
			</div>
			<div class="blog-code-block">{@html marked(preventExtensions)}</div>
			<div class="blog-paragraph-sub-header">Seal</div>
			<div>
				This creates a sealed <code>object</code>, which basically means that it takes an existing
				<code>object</code> and calls <code>preventExtensions</code> on that. This stops one from adding
				extra properties to the object and also stops one from reconfiguring or deleting existing properties.
				The values of properties can still be modified though.
			</div>
			<div class="blog-paragraph-sub-header">Freeze</div>
			<div>
				This creates a frozen <code>object</code>. The idea here is that it calls
				<code>Object.seal(...)</code> on the <code>object</code> and marks all the "data accessor"
				properties as <code>writable: false</code>, which stops from the values being changed as
				well. This is the highest form of immutability and one should tread carefully when using
				this.
			</div>
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
