<script>
	import { marked } from 'marked';
	import {
		abstractSyntaxTree,
		hoistingExampleOne,
		lexicalScope,
		lhsRhsLookup,
		shadowing,
		tokenization,
		variableDeclaration
	} from './markdown-files/scopes-and-hoisting';

	import ConcentricCircle from './concentric-circle.svelte';
	import ArticleMainHeader from '../../main_header/article-main-header.svelte';
</script>

<div class="scopes-and-closure-container">
	<ArticleMainHeader />
	<div class="blog-text-container">
		<div class="blog-title">Scopes and Hoisting</div>
		<div class="blog-paragraph">
			This book is awesome! I wish I had read it sooner. Most programming languages that I have
			used, I never spent the time to fully understand the depths of it. With YDKJS, I aim to break
			that trend and truly understand how JavaScript works!<br /><br />
		</div>
		<div class="blog-paragraph">
			The second part of this book covers some very interesting topics which mainly revolve around
			scopes, hoisting and closure. Since this is going to be a longer article in comparison, I will
			move closure to a separate article.
		</div>
		<div class="blog-sub-header">Scope and Compiler theory</div>
		<div class="blog-paragraph">
			Scope refers to a well defined set of rules that allow us to store variables in some location
			and access them from that location. In order to understand how this works we need to
			understand some basic <b>Compiler theory</b>
		</div>
		<div class="blog-paragraph">
			JavaScript is considered to be an interpreted language but that would be wrong. It undergoes
			compilation just mere mircoseconds before execution. Understanding those performance
			improvements that make it compile so quickly was a little beyond the topics in this book but,
			I definitely would like to revisit and understand those improvements (An article for the
			future). Getting back to compilation. Any compiled language undergoes three main steps during
			its compilation process.
			<ol class="blog-list-elements">
				<li>Tokenizing/Lexing</li>
				<li>Parsing</li>
				<li>Code generation</li>
			</ol>
		</div>
		<div class="blog-paragraph">
			<b>Tokenizing</b> involves taking a string of characters and breaking down it into meaningful chunks
			called tokens. Lexing is synonmous to Tokenization with a difference of stateful parsing. If the
			tokenization involves some kind of state based approach then it would be called Lexing.
		</div>
		<div class="blog-code-block">{@html marked(tokenization)}</div>
		<div class="blog-paragraph">
			The above example when tokenized might get broken down into <code>var</code>, <code>a</code>,
			<code>=</code>, <code>3</code>, <code>;</code>
		</div>
		<div class="blog-paragraph">
			<b>Parsing</b> uses the array of tokens and creates a nested tree, which is called an Abstract
			syntax tree. For the above example <code>var num = 3;</code> it might create a tree structure that
			could look like this.
		</div>
		<div class="blog-code-block">{@html marked(abstractSyntaxTree)}</div>
		<div class="blog-paragraph">
			Finally the last step, <b>Code generation</b> - It takes the Abstract syntax tree and creates executable
			code.
		</div>
		<div class="blog-paragraph">
			There is much more to the compilation process that I need to learn. Truly understanding a
			language requires some serious work! One step at a time! We'll get there!
		</div>
		<div class="blog-sub-header">More on scope</div>
		<div class="blog-paragraph">
			There are three important members involved in understanding scope
			<ol class="blog-list-elements">
				<li>Engine</li>
				<li>Compiler</li>
				<li>Scope</li>
			</ol>
			Engine runs from start to finish. From variable declaration to program execution. Compiler handles
			the dirty work. Parsing code and code generation. Sope holds a lookup list for all the declrations
			(variables, functions etc..)
		</div>
		<div class="blog-paragraph">
			If we were to go back to the example of a simple variable declaration <code>var num = 2;</code
			>
			two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's
			two.
			<div class="blog-code-block">{@html marked(variableDeclaration)}</div>
		</div>
		<div class="blog-paragraph">
			Looking at the example above, the compiler declares a variable at this step if it has not been
			declared yet. Compiler queries the scope and asks if the variable <code>num</code> was declared,
			if it was then it moves on and does not declare a variable but if there isn't a variable declared
			then it declares one. This part is pretty interesting in JavaScript, it allows us to declare the
			same variable multiple times. In a nested scope this would be termed shadowing, where it overwrites
			the value declared in the outerscope. The example below explains shadowing.
		</div>
		<div class="blog-code-block">{@html marked(shadowing)}</div>
		<div class="blog-paragraph">
			Going back to the two parts involved in variable declaration and assignment, there's an
			interesting lookup concept that JavaScript performs. The easier version is - When a variable
			appears on the left side of an assignment the compiler does a <b>LHS</b> lookup and when it's on
			the right side of the assignment it does a RHS lookup. A LHS lookup looks for the variable container
			itself but the RHS lookup is merely getting the value of the variable. LHS lookups can be a bit
			tricky. As always, examples help!
		</div>
		<div class="blog-code-block">{@html marked(lhsRhsLookup)}</div>
		<div class="blog-paragraph">
			Let's break it down.
			<div class="blog-paragraph">
				<b>List of LHS lookups</b>
				<ul>
					<li>ans =</li>
					<li>num = (this is interesting, it's the pararmeter passed to the function)</li>
					<li>num2 =</li>
				</ul>

				<b>List of RHS lookups</b>
				<ul>
					<li>foo</li>
					<li>= num</li>
					<li>num +</li>
					<li>+ num2</li>
				</ul>
			</div>
			Discussing lookups further, it gets even more interesting when nested scopes are involved. When
			searching for a variable, JavaScript considers all scopes. It starts with the inner most and keeps
			looking for variable<b>containers / values</b> in all the scopes that the current scope is enclosed
			in. This is where it chooses between a LHS and RHS lookup.
		</div>
		<div class="blog-paragraph">That was just the first Chapter from the book. Phew!</div>
		<div class="blog-sub-header">Lexical scope</div>
		<div class="blog-paragraph">
			JavaScript uses the lexical scope and so do most programming languages. Scope as defined
			earlier is a means of finding a declared identifier and Lexing examines a string of characters
			and gives it semantic meaning. So lexical scope is the scope defined during the time of
			lexing.
		</div>
		<div class="blog-paragraph">
			In order to understand the idea of lexical scope it's important to understand how a lookup
			works in JavaScript. Like always, let's start with an example.
		</div>
		<div class="blog-code-block">{@html marked(lexicalScope)}</div>
		<div class="blog-paragraph" id="concentric-circle">
			In the example above we have three different scopes
			<ol>
				<li>Global scope where outer function is declared</li>
				<li>Scope of the outer function</li>
				<li>Scope of the inner function</li>
			</ol>
			It's ideal to look at this from inside out. When the
			<code>console.log(num, num2)</code>
			executes the engine goes looking for the two identifiers. It searches for <code>num</code>
			first in the scope of function <code>inner</code> and cannot find it, the next available scope
			is the scope of the function <code>outer</code> and there it finds the variable
			<code>num</code>. It does a similar lookup for the variable <code>num2</code> and finds it in
			the scope of outer. But the variable <code>num3</code> it finds in the global scope, the same scope
			where the outer function is called. The way I look at scope look ups is the way concentric circles
			are drawn, they have neat boundaries and they do not intersect.
		</div>
		<ConcentricCircle />
		<div class="blog-paragraph">
			Understanding of scope directly relates to understanding
			<b>The Principle of least privilege</b> - Expose only what is minimally necessary, and hide everything
			else. These concentric division allow us to enclose variables and functions within scopes and not
			expose it in a global context. What does that accomplish? It avoids collisions! Makes sure that
			two identifiers intended for different usecases do not stomp on each other.
		</div>
		<div class="blog-paragraph">
			<b>SCOPE -> PRINCIPLE OF LEAST PRIVILEGE -> COLLISION AVOIDANCE</b>
		</div>
		<div class="blog-sub-header">Hoisting</div>
		<div class="blog-paragraph">
			Hoisting in JavaScript refers to the process of moving the function and variables to the the
			top of the code from where they were declared. This is one of the crucial parts of JavaScript,
			I mean for developers. Not understanding hoisting can lead to writing code that's hard to
			decipher.
		</div>
		<div class="blog-code-block">{@html marked(hoistingExampleOne)}</div>
		<div class="blog-paragraph">
			In the above example even though we would expect it to print undefined, it prints 2. Why? If
			we go back to the definition above, the <code>var a;</code> gets hoisted and placed on the
			top. So the first statement that executes is the declaration of that variable, by the time it
			gets to <code>a = 2;</code> the variable exists, so it assigns the value to 2 that container. Another
			important thing to note here it that between a variable and a function, functions get hoisted first!
		</div>
		<div class="blog-paragraph">
			This chapter has been really interesting so far. There's one last topic left to discuss and I
			will be doing that in the next article.
		</div>
	</div>
</div>

<style>
	@import '../../../../styles/global_blog.css';
	.scopes-and-closure-container {
		background-color: #2f2f2f;
		height: 100%;
	}
</style>
