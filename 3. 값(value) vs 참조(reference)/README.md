## 원시타입(Primitives)

```jsx
var x = 10;
var y = 'abc';
var z = null;
```

![image](https://user-images.githubusercontent.com/59503369/122058080-39e01d00-ce26-11eb-8446-b11593c8322b.png)

x는 10이란 값을 가지고 있고, y는 abc란 값을 가지고 있다.

```jsx
var x = 10;
var y = 'abc';

var a = x;
var b = y;

console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'
```

'=' 이라는 키워드를 이용하여 할당할 때, 새로운 변수에 값을 복사 하게 됩니다. a와 x는 둘 다 10이란 값을 가지고 있고 b와 y는 둘 다 'abc'라는 값을 가지고 있지만 이들은 분리되어 있습니다 왜냐하면 값들이 복사되었기 때문!

![image](https://user-images.githubusercontent.com/59503369/122058124-45334880-ce26-11eb-8145-b224c92ddda6.PNG)

## 객체(Objects)

원시 타입이 아닌 값이 할당된 변수들은 그 값으로 향하는 참조를 갖게 된다. 즉 변수는 실제로 값을 가지고 있지 않고 메모리에서의 객체의 위치를 가리키고 있는 것이다.

예를 들어 arr = [] 를 작성하였을때 이것은 메모리 내부에 배열을 만든 것이다. arr이 갖는 것은 그 배열이 위치한 주소를 갖는다.

```jsx
1) var arr = [];
2) arr.push(1);
```

[1번 코드](https://user-images.githubusercontent.com/59503369/122058192-567c5500-ce26-11eb-8af7-3c861fb5d4a5.PNG)
[2번 코드](https://user-images.githubusercontent.com/59503369/122058247-62681700-ce26-11eb-9cc8-84d2da101b3a.PNG)

arr이 갖는 변수의 값은 정적인 값이다. 변수의 값이 바뀌는 것이 아닌 메모리 속의 배열 값만 바뀌는 것이다.

## 참조로 할당하기

객체와 같은 참조 타입의 값이 = 과 같은 키워드를 이용하여 다른 변수로 복사될 때, 그 값의 주소는 실제로 복사된다. 객체는 값 대신 참조로 복사된다.

```jsx
var reference = [1];
var refCopy = reference;
```

![image](https://user-images.githubusercontent.com/59503369/122058361-8297d600-ce26-11eb-853b-3a96c73054bb.PNG)

## 참조 재할당하기

```jsx
var obj = { first: 'reference' };
```

[메모리 상태](https://user-images.githubusercontent.com/59503369/122058443-95aaa600-ce26-11eb-8a4b-50b95d44c176.PNG)

```jsx
var obj = { first: 'reference' };
obj = { second: 'ref2' };
```

![image](https://user-images.githubusercontent.com/59503369/122058487-9fcca480-ce26-11eb-9cb4-6bc77f1873d5.PNG)

이 경우에는 객체 { first: 'reference' } 가 더이상 접근 불가능하고 가비지 콜렉션 될 수 있다.

## ==와 ===

동등함을 비교하는 연산자 ==와 ===는 참조 타입의 변수를 비교할 때 사용된다. 만약 변수가 같은 item에 대ㅏㄴ 참조를 갖고 있다면, 결과는 true가 나올 것이다.

```jsx
var arrRef = ['Hi!'];
var arrRef2 = arrRef;

console.log(arrRef === arrRef2); // -> true

var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);

console.log(arr1str === arr2str); // true
```

프로퍼티가 동일한지 확인법

1. 문자열로 바꾸고 문자열을 비교
2. 객체를 이용하여 재귀적으로 반복을 도는 것

## 함수를 통한 파라미터의 전달

원시 값들을 함수로 전달할 때, 함수는 값들을 복사하여 파라미터로 전달한다.

```jsx
var hundred = 100;
var two = 2;

function multiply(x, y) {
  // PAUSE
  return x * y;
}

var twoHundred = multiply(hundred, two);
```

hundred라는 변수에 100이라는 값이 저장되어있고 이 값을 multiply로 넘겼을 때, 변수 x는 100이라는 값을 가지게 됩니다. 값은 우리가 = 연산자를 써서 할당한 것 처럼 복사되고, hundred 변수는 아무런 영향도 미치지 않습니다.

[PAUSE 상태](https://user-images.githubusercontent.com/59503369/122058525-aa873980-ce26-11eb-9c5f-ddf908742dfe.PNG)

## 순수 함수(Pure Functions)

함수 중에 함수 바깥 스코프에 아무런 영향도 미치지 않는 함수를 순수 함수라고 한다. 원시 값들만을 파라미터로 사용하고 주번 스코프에 아무런 영향을 미치지 않는다면 이 함수는 자연스레 순수함수가 된다.

Array.map과 Array.filter를 포함한 많은 네이티브 배열 함수들은 순수 함수로 작성되어 있다. 배열 참조를 받아서 내부적으로 배열을 복사하고 원본 대신 복사된 배열로 작업한다. 그래서 원본도 건드리지 않고 바깥 스코프에 영향도 미치지 안혹 새로운 배열의 참조를 반환하게 된다.

```jsx
function changeAgeImpure(person) {
  person.age = 25;
  return person;
}

var alex = {
  name: 'Alex',
  age: 30,
};

var changedAlex = changeAgeImpure(alex);

console.log(alex); // -> {name: 'Alex', age: 25}
console.log(changedAlex); // -> {name: 'Alex', age: 25}
```

이 비순수함수는 객체를 받아서 age 프로퍼티를 25로 바꿉니다. 이 함수가 person 객체를 반환할 때, 이 함수는 받았던 객체 그대로 반환한다.

```jsx
function changeAgePure(person) {
  var newPerson = JSON.parse(JSON.stringify(person));
  newPersonObj.age = 25;
  return newPersonObj;
}

var alex = {
  name: 'Alex',
  age: 30,
};

var alexChanged = changeAgePure(alex);

console.log(alex); // -> {name: 'Alex', age: 30}
console.log(alexChanged); // -> {name: 'Alex', age: 25}
```

이 함수에서 우리가 넘겨받은 객체를 문자열로 변화시키기 위하여 JSON.stringify 함수를 사용한다. 그리고 JSON.parse 함수를 이용하여 다시 객체로 만든다.

새로운 객체에서 age 프로퍼티를 바꾸지만 원본은 전혀 영향을 받지 않는다.
