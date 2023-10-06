export const closure = `
\`\`\`
    function foo () {
        var a = 9;

        function bar () {
            console.log (a);
        }

        return bar;
    }

    var baz = foo ();
    baz(); // Closure on bar
\`\`\`
`;

export const functionAsValueClosure = `
\`\`\`
    function foo () {
        var a = 2;

        function bar () {
            console.log(a);
        }

        baz(bar);// passed as value
    }

    function baz (fn) {
        fn(); // Closure here!
    }
\`\`\`
`;

export const setTimeoutClosure = `
\`\`\`
    var a = 10;
    setTimeout(function time() {
        console.log(a);
    }, 1000);
\`\`\`
`;

export const moduleClosure = `
\`\`\`
    function moduleExample() {
        var a = 10;
        var b = 5;

        function printA() {
            console.log(a);
        }

        function printB() {
            console.log(b);
        }

        return {
            printA: printA,
            printB: printB
        };
    }

    var m = moduleExample();

    // closure over the variables
    // a and b
    m.printA();
    m.printB();
\`\`\`
`;
