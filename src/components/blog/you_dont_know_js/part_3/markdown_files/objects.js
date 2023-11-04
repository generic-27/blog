export const builtInObjects = `
\`\`\`
    var strPrimitive = "I am a string";
    typeof strPrimitive;							// "string"
    strPrimitive instanceof String;					// false

    var strObject = new String( "I am a string" );
    typeof strObject; 								// "object"
    strObject instanceof String;					// true

    // inspect the object sub-type
    Object.prototype.toString.call( strObject );
\`\`\`
`;

export const deepCopy = `
\`\`\`
    function anotherFunction() { /*..*/ }

    var anotherObject = {
        c: true
    };

    var anotherArray = [];

    var myObject = {
        a: 2,
        b: anotherObject,	// reference, not a copy!
        c: anotherArray,	// another reference!
        d: anotherFunction
    };

    anotherArray.push( anotherObject, myObject );
\`\`\`
`;

export const deepCopyAllowed = `
\`\`\`
    var newObj = JSON.parse( JSON.stringify( someObj ) );
\`\`\`
`;
