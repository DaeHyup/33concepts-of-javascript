// 생성자 정의
function C() {}
function D() {}

const o = new C();

o instanceof C;
// true, because Object.getPrototypeOf(o) === C.prototype

o instanceof D;
// false, because D.prototype이 o 객체의 프로토타입 체인에 없다.
