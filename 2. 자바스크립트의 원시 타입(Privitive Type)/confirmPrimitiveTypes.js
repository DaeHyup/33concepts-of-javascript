// Primitive Types
true instanceof Object; // false -> boolean
null instanceof Object; // false -> null
undefined instanceof Object; // false -> undefined
0 instanceof Object; // false -> number
'bar' instanceof Object; // false -> string

// Non-primitive types
const foo = function () {};
foo instanceof Object; // true -> function;
