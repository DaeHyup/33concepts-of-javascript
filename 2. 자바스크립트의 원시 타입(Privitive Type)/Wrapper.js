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