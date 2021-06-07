const Foo = function () {
  this.bar = 'baz';
};

const qux = new Foo();
qux; // {bar: "baz"}
quz instanceof Foo; // true
quz instanceof Object; // true
