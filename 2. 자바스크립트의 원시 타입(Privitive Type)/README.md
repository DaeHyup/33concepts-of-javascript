## 자바스크립트 언어의 정체⁉

자바스크립트가 OOP인지 함수형 언어인지에 대해서는 많은 혼란이 있었다. 하지만 자바스크립트는 OOP도 되고 함수형 언어도 된다는 사실!! 이를 통해 "자바스크립트에 있는 모든 것들은 객체들인가?" , "그렇다면 함수들도 객체로 봐야하나?" 와 같은 질문을 유발했다.

## 원시타입

- Booleans (true or false)
- null
- undefined
- number (64-bit float, 자바스크립트에는 정수 타입은 존재하지 않음)
- string
- symbol (ES6에 처음 생긴 원시타입)

### Object ← 함수, 배열들도 포함

```jsx
const object = {
  key: 'value',
};

// Object는 간단히 말하면 키-값 저장소!!
```

### confirmPrimitiveTypes

```jsx
// Primitive Types
true instanceof Object; // false -> boolean
null instanceof Object; // false -> null
undefined instanceof Object; // false -> undefined
0 instanceof Object; // false -> number
'bar' instanceof Object; // false -> string

// Non-primitive types
const foo = function () {};
foo instanceof Object; // true -> function;
```

### what is instanceof in javascript?

instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 어딘가에 존재하는지 판별한다.

instanceof 연산자는 object의 프로토타입 안에 constructor.prototype이 존재하는지 판별

```jsx
// 생성자 정의
function C() {}
function D() {}

const o = new C();

o instanceof C;
// true, because Object.getPrototypeOf(o) === C.prototype

o instanceof D;
// false, because D.prototype이 o 객체의 프로토타입 체인에 없다.
```

## 원시 타입

원시 타입에는 어떠한 메소드도 붙어있지 않다. 또한 원시 타입은 변하지 않는(immutable) 속성을 갖는다. 왜냐하면 원시 타입은 자신을 변경할 수 있는 메소드를 갖지 않기 때문이다.

하지만 변수안에는 원시타입을 재할당 할 수 있다. 이러한 경우는 원시타입의 값이 바뀌는 것이 아닌 새로운 원시타입의 값이 들어간다.

→ 원시타입 값 자체는 바뀔 수 없다. (불변성)

### reference

```jsx
"dog" === "dog"; // true
14 === 14; // true

{} === {}; // false
[] === []; // false
(function () {}) === (function () {}); // false
```

원시 타입은 Object와 다르게 그 값 자체가 저장됩니다. 하지만 배열과 객체는 내용은 같지만 다른 곳을 참조하고 있기 때문에 false를 리턴

## 함수

함수는 특별한 프로퍼티들을 가진 새로운 형태의 객체이다.

```jsx
const foo = function (baz) {};
foo.name; // "foo"
foo.length; // 1

foo.bar = 'baz';
foo.bar; // "baz"
```

## 메소드

메소드는 함수와 같이 객체의 프로퍼티이다.

```jsx
const foo = {};
foo.bar = function () {
  console.log('baz');
};
foo.bar(); // "baz"
```

## 생성자 함수

자바스크립트에서 생성자 함수는 리턴 값으로 생성하는 함수를 객체 그 자체로서 반환하는 함수이다.

생성자 함수는 다른 함수와의 차이점은 단지 new라는 키워드가 붙은 이후에 생성자 함수로서 사용된다는 점과 객체 자체를 리턴하는 점이다.

```jsx
const Foo = function () {};
const bar = new Foo();
bar; // {}
bar instanceof Foo; // true
bar instanceof Object; // true
```

✔ 생성자 함수는 object 리턴

✔ object에 새로운 프로퍼티들을 할당하기 위해 this 사용 가능

```jsx
const Foo = function () {
  this.bar = 'baz'; // 요런식으로 새로운 프로퍼티 할당 가능!!
};

const qux = new Foo();
qux; // {bar: "baz"}
quz instanceof Foo; // true
quz instanceof Object; // true
```

## 래퍼 오브젝트(오브젝트 래퍼)

String, Number, Boolean, Function 와 같은 원시타입을 new 키워드로 생성하면 원시타입에 대한 래퍼 오브젝트가 생성된다.

```jsx
String(1337); // "1337"
String(true); // "true"
String(null); // "null"
String(undefined); // "undefined"
String(); // ""
String('dog') === 'dog'; // "true"
typeof String('dog'); // "string"

// new 키워드를 붙인다면⁉
const pet = new String('dog');
typeof pet; // object
pet === 'dog'; // false

// 위 오브젝트는 "dog"이라는 문자열을 다음과 같은 프로퍼티로 나타낸다.
{
	0: "d",
	1: "o",
	2: "g",
	length: 3
}
```

## 오토박싱

```jsx
const pet = new String('dog');
pet.constructor === String; // true
// .constructor는 생성자 프로퍼티를 확인할 수 있음
String('dog').constructor === String; // true
```

오토박싱: 원시타입에서 프로퍼티나 메소드를 호출하려 할때, 자바스크립트는 처음으로 이것을 임시 래퍼 오브젝트로 바꾼 뒤에 프로퍼티나 메소드에 접근하려 한다. 중요한 것은 이 과정에서 원본에는 아무런 영향을 미치지 않는다.

```jsx
const foo = 'bar';
foo.length; // 3
foo === 'bar'; // true
```

→ length라는 프로퍼티에 접근하기 위해 자바스크립트는 foo를 오토박싱하고 이것을 래퍼 오브젝트에 넣는다. 래퍼 오브젝트의 length 프로퍼티에 접근하고 값을 이용한 뒤에는 지워버린다.
