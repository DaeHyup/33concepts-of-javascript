## 자바스크립트의 암묵적 타입 변환 (implicit coercion)

예상치 못한 타입을 받았을 때 예상 가능한 타입으로 바꿔주는 것이 암묵적 타입 변환.

```jsx
3 * '3'; // 9
1 + '2' + 1; // 121

true + true; // 2
10 - true; // 9

const foo = {
  valueOf: () => 2,
};
3 + foo; // 5
4 * foo; // 8

const bar = {
  toString: () => ' promise is a boy :)',
};

1 + bar; // "1 promise is a boy :)"

4 * []; // 0
4 * [2]; // 8
4 + [2]; // "42"
4 + [1, 2]; // "41, 2"
4 * [1, 2]; // NaN

'string' ? 4 : 1; // 4
undefined ? 4 : 1; // 1
```

## 숫자 표현식에서 숫자가 아닌 값

### 문자열

숫자 문자를 가졌다면 어떤 문자열이라도 동등한 숫자로 바뀐다. 하지만 만일 문자열에 숫자가 아닌것이 포함이 된다면 NaN을 리턴하게 된다.

✔ NaN : Not-A-Number를 나타낸다.

```jsx
3 * '3'; // 3 * 3
3 * Number('3'); // 3 * 3
Number('5'); // 5

Number('1.'); // 1
Number('1.34'); // 1.34
Number('0'); // 0
Number('012'); // 12

Number('1,'); // NaN
Number('1+1'); // NaN
Number('1a'); // NaN
Number('la'); // NaN
Number('one'); // NaN
Number('text'); // NaN
```

## + 연산자

1. 수학적인 덧셈
2. 문자열 합치기

문자열이 + 연산자의 피연산자로 주어졌을때, 자바스크립트는 숫자를 문자로 바꾸려 한다.

```jsx
// concatenation
1 + '2'; // "12"
1 + 'js'; // "1js"

// addition
1 + 2; // 3
1 + 2 + 1; // 4

// addition, then concatenation
1 +
  2 +
  '1'(
    // "31"
    1 + 2
  ) +
  '1'; // "31"

// concatenation all through
1 +
  '2' +
  1(
    // "121"
    1 + '2'
  ) +
  1; // "121"
```

## 객체

자바스크립트에서 객체의 대부분의 암묵적 형변환은 결과 값으로

[object Object] 를 반환한다.

```jsx
'name' + {}; // "name[object Object]"
```

모든 자바스크립트 객체는 toString 메소드를 상속받습니다. toString 메소드는 객체가 문자열 타입으로 변해야 할 때마다 쓰인다.

```jsx
const foo = {};
foo.toString(); // [object Object]

const baz = {
  toString: () => "I'm object baz",
};

baz + '!'; // "I'm object baz!"
```

## 배열 객체

배열에서 상속된 toString 메소드는 배열에서 아무런 인자도 넣지 않은 join 메소드를 호출한 것과 비슷한 방식으로 작동한다.

```jsx
[1, 2, 3].toString() // "1,2,3"
[1, 2, 3].join() // "1,2,3"
[].toString() // ""
[].join() // ""

"me" + [1,2,3] // "me1,2,3"
4 + [1,2,3] // "41,2,3"
4 * [1,2,3] // NaN
```

## valueOf 메소드

객체가 어떠한 숫자값을 나타날 때 사용하기 위해 만들어졌다.

```jsx
const foo = {
  valueOf: () => 3,
};

3 + foo; // 6
3 * foo; // 9
```

## Falsy와 Truthy

true로 형변환을 강제하는 것을 truthy, false로 형변환을 강제하는 것을 falsy라고 한다.

falsy로 취급되는 값

1. false
2. 0
3. null
4. undefined
5. ""
6. NaN
7. -0

이 외에 값은 전부 truthy로 취급된다.

## NaN

NaN은 자기 자신과도 같지 않은 특별한 숫자 값이다.

```jsx
NaN === NaN; // false

const notANumber = 3 * 'a'; // NaN

notANumber == notANumber; // false
notANumber === notANumber; // false
```
