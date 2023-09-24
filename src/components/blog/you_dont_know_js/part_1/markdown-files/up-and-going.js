export const explicitCoercion = `
  \`\`\`
    var name = "John";

    var numString = "22";

    var num = Number(numString);
  \`\`\`
`;

export const implicitCoercion = `
  \`\`\`
    var num = "27";
    var num2 = num * 1;
  \`\`\`
`;

export const hoisting = `
  \`\`\`
    function hoistedVariable() {
      console.log(a); // This will be undefined

      a = 4;

      console.log(a); // This is 4

      var a;
    }
  \`\`\`
`;

export const closure = `
  \`\`\`
    function makeAdder(x) {

      function add(y) {
        return x + y;
      }

      return add;
    }

    var plusTwo = makeAdder(2);

    plusTwo(3); // This results in 5 -> 2(value of x) + 3(value of y)
  \`\`\`
`;

export const polyfilling = `
  \`\`\`
    if (!Number.isNaN) {
      Number.isNaN = function isNaN(x) {
        return x !== x;
      };
    }
  \`\`\`
`;
