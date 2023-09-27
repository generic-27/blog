export const tokenization = `
\`\`\`
    var num = 3;
\`\`\`
`;

export const abstractSyntaxTree = `
\`\`\`
    Variable declaration
    |---Identifier (a)
    |---Assignment expression
        |---Numerical literal(2)
\`\`\`
`;

export const variableDeclaration = `
\`\`\`
    var num = 2;
    // JS looks at this as two steps below
    var num;
    num = 2;
\`\`\`
`;

export const shadowing = `
\`\`\`
    function test() {
        var a = 10;

        function test2() {
            var a = 20; // Shadows outer scope
            console.log(a);
        }

        test2();
    }
\`\`\`
`;

export const lhsRhsLookup = `
\`\`\`
    function foo(num) {
        var num2 = num;
        return num + num2;
    }

    var ans = foo(2);
\`\`\`
`;

export const lexicalScope = `
\`\`\`

    var num3 = 5;
    function outer(num) {
        var num2 = num + 4;

        function inner() {
            console.log(num, num2, num3);
        }

        inner();
    }
    
    outer(2);
\`\`\`
`;
