<script>
	import { marked } from 'marked';
	import {
		abstractSyntaxTree,
		lhsRhsLookup,
		shadowing,
		tokenization,
		variableDeclaration
	} from './markdown-files/scopes-and-closure';
</script>

<div class="blog-text-container">
	<h1>Scopes and closure</h1>
	<div class="blog-paragraph">
		This book is awesome! I wish I had read it sooner. Most programming languages that I have used,
		I never spent time to fully understand the depths of it. With YDKJS, I aim to break that trend
		and truly understand how JavaScript works!<br /><br />
	</div>
	<div class="blog-paragraph">
		The second part of this books covers some very interesting topics which mainly revolve around
		scopes and closure. There are still certain parts in the chapters (<b>Closure</b>) that I do not
		fully understand, but may be once I approach the ending of this article I might have a better
		idea.
	</div>
	<div class="blog-sub-header">Scope and Compiler theory</div>
	<div class="blog-paragraph">
		Scope refers to a well defined set of rules that allow us to store variables in some location
		and access them from that location. In order to understand how this works we need to understand
		some basic <b>Compiler theory</b>
	</div>
	<div class="blog-paragraph">
		Any compiled language undergoes three main steps during its compilations process. JavaScript is
		considered to be an interpreted language but that would be wrong. It undergoes compilations just
		mere mircoseconds before execution. The three basic steps that I was referring to are.
		<ol class="blog-list-elements">
			<li>Tokenizing/Lexing</li>
			<li>Parsing</li>
			<li>Code generation</li>
		</ol>
	</div>
	<div class="blog-paragraph">
		<b>Tokenizing</b> involves taking a string of characters and breaking down it into meaningful chunks
		called tokens. Lexing is synonmous to Tokenization with a difference of stateful parsing. If the
		tokenization involves some kind of state based approach then it would be called Lexing
	</div>
	<div class="blog-code-block">{@html marked(tokenization)}</div>
	<div class="blog-paragraph">
		The above example when tokenized might get broken down into <code>var</code>, <code>a</code>,
		<code>=</code>, <code>3</code>, <code>;</code>
	</div>
	<div class="blog-paragraph">
		<b>Parsing</b> uses the array of tokens and creates a nested tree, which is called a Abstract
		syntax tree. for the above example <code>var num = 3;</code> it might create a tree structure that
		could look like this.
	</div>
	<div class="blog-code-block">{@html marked(abstractSyntaxTree)}</div>
	<div class="blog-paragraph">
		Finally the last step, <b>Code generation</b> takes the Abstract syntax tree and creates executable
		code
	</div>
	<div class="blog-sub-header">More on scope</div>
	<div class="blog-paragraph">
		There are three important members involved in understanding scope
		<ol class="blog-list-elements">
			<li>Engine</li>
			<li>Compiler</li>
			<li>Scope</li>
		</ol>
		Engine runs from start to finish, from variable declaration to program execution. Compiler handles
		the dirty work. Parsing code and code generation. Sope holds a lookup list for all the declrations
		(variables, functions etc..)
	</div>
	<div class="blog-paragraph">
		If we were to go back to the example of a simple variable declaration <code>var num = 2;</code>
		two distinct actions take place here. To our eye it's just one expression, but for JavaScript it's
		two.
		<div class="blog-code-block">{@html marked(variableDeclaration)}</div>
	</div>
	<div class="blog-paragraph">
		The compiler declares a variable at this step if it has not been declared yet. Compiler queries
		the scope and asks if the variable <code>num</code> was declared, if it was then it moves on and
		does not declare a variable but if there isn't a variable declared then it declares one. This part
		is pretty interesting in JavaScript, it allows us to declare the same variable multiple times. In
		a nested scope this would be termed shadowing, where it overwrites the value declared in the outerscope.
		The example below explains shadowing.
	</div>
	<div class="blog-code-block">{@html marked(shadowing)}</div>
	<div class="blog-paragraph">
		Going back to the two parts involved in variable declaration and assignment, there's an
		interesting lookup concept that JavaScript performs. The easier version is - When a variable
		appears on the left side of an assignment the compiler does a <b>LHS</b> lookup and when it's on
		the right side of the assignment it does a RHS lookup. A LHS lookup looks for the variable container
		itself but the RHS lookup is merely getting the value of the variable. RHS lookups can be a bit tricky.
		As always, examples help!
	</div>
	<div class="blog-code-block">{@html marked(lhsRhsLookup)}</div>
	<div class="blog-paragraph">
		Let's break it down. List of LHS lookups
		<ul>
			<li>ans =</li>
			<li>num = (this is interesting, it's the pararmeter passed to the function)</li>
			<li>num2 =</li>
		</ul>

		List of RHS lookups
		<ul>
			<li>foo</li>
			<li>= num</li>
			<li>num +</li>
			<li>+ num2</li>
		</ul>
	</div>
</div>

<style>
	@import '../../../../styles/global_blog.css';
</style>
