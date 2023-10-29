export const defaultBinding = `
\`\`\`
    function foo() {
        console.log( this.a );
    }

    var a = 2;

    foo(); // 2
\`\`\`
`;

export const implicitBinding = `
 \`\`\`
    function foo() {
        console.log(a);
    }

    var obj = {
        a: 2,
        foo: foo
    };

    obj.foo();
 \`\`\`
 `;

export const explicitBinding = `
  \`\`\`
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a : 2
    };

    foo.call(obj);
  \`\`\`
  `;

export const newBinding = `
  \`\`\`
    function foo(a) {
        this.a = a
    }

    var bar = new foo(10);
    console.log(bar.a); // 10
  \`\`\`
  `;

export const lostBinding = `
\`\`\`
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2,
        foo: foo
    };

    var bar = obj.foo;
    var a = "Global scope";

    bar(); // call-site without decoration
\`\`\`
`;

export const hardBinding = `
\`\`\`{
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2
    };

    var bar = function() {
        foo.call(obj);
    };

    bar();// 2
    bar.call(window); // 2

\`\`\`
`;

export const hardBindingReusableHelper = `
\`\`\`
    function foo(something) {
        console.log(this.a, something);
        return this.a + something;
    }

    function bind(fn, obj) {
        return function() {
            return fn.apply(obj, arguments);
        };
    }

    var obj = {
        a: 2
    };

    var bar = bind(foo, obj);

    var b = bar(3); // 2 3
    console.log(b); // 5
\`\`\`
`;

export const hardBindingBuiltIn = `
\`\`\`
    function foo(something) {
        console.log(this.a, something);
        return this.a + something;
    }

    var obj = {
        a: 2
    };

    var bar = foo.bind(obj);

    var b = bar(3);
    console.log(b);
\`\`\`
`;
