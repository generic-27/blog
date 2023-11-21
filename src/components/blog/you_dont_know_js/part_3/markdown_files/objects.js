export const builtInObjects = `
\`\`\`
    var strPrimitive = "I am a string";
    console.log(typeof strPrimitive);				// "string"
    console.log(strPrimitive instanceof String);    // false

    var strObject = new String( "I am a string" );
    console.log(typeof strObject);					// "object"
    console.log(strObject instanceof String);    	// true

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

export const propertyDecsriptor = `
\`\`\`
    var myObj = {
        a: 2
    };

    console.log(Object.getOwnPropertyDescriptor(myObj, "a"));
    // {
    //      value: 2,
    //      writable: true,
    //      enumerable: true,
    //      configurable: true
    // }
\`\`\`
`;

export const preventExtensions = `
\`\`\`
    var myObj = {
        a: 2
    };

    Object.preventExtensions(myObj);

    myObj.b = 3;
    console.log(myObj.b); // undefined
\`\`\`
`;
