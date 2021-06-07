## 1. 콜 스택

함수의 호출을 기록하는 자료구조이다. 기본적으로 우리가 프로그램 안에서 위치한 곳이다.

- 만약 어떤 함수를 실행시킨다면, 우리는 스택 위에 무언가를 올리는 행위를 하는거다. 그리고 우리가 함수로 부터 반환을 받을 때, 우리는 스택의 맨 위를 가져오는 것이다.

```jsx
function foo(b) {
  var a = 5;
  return a * b + 10;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(6));
// 100
```

### 실행 순서

✔ 메인 함수를 찾음

→ console.log(bar(6)); 가 먼저 콜스택에 올라가게 된다.

✔ bar 함수가 매개변수들과 같이 스택의 top으로 올라감

✔ foo 함수는 스택의 top으로 올라갔다가 pop 된다.

✔ bar, console.log(bar(6)); 구문이 차례대로 pop

✔ console.log(bar(6)); 구문 출력

## 2. 힙

오브젝트(객체)들은 힙 내부에 할당된다. 힙은 거의 구조화되지 않은 영역의 메모리이다. 변수와 객체들의 모든 메모리 할당이 여기서 일어나게 된다.

## 3. 큐

자바스크립트 런타임은 메시지 큐를 갖고 있다.

초기스택프레임은 스택에서 메시지는 큐 밖으로 나오게 되고 메시지가 가지고 있던 함수 목록들이 실행됨으로써 초기스택프레임이 만들어짐

✔ 만일 한 사용자가 버튼을 눌렀는데 아무런 콜백함수도 등록되어 있지 않다면 어떠한 메시지도 큐에 들어가지 않음

✨메시지 큐: 실행될 콜백함수나 실행될 메시지들에 대한 리스트

## 4. 이벤트 루프

Blocking Script : 수천 수백만개가 넘는 for문 또는 while문과 같은 반복문을 수행하여 그 코드들이 스택을 계속 차지하고 있는 현상

✔ 만일 네트워크 요청들이 동기화 함수들을 통해서 이뤄졌다고 하면?

→ 먼저 컴퓨터가 네트워크 요청을 받는다면 그 요청은 또 다른 컴퓨터나 기계와 같은 서버로 간다. 네트워크 응답은 사정에 따라 아주 많이 느려질 수 있다. 그동안, 우리가 만약 버튼이나 렌더링이 필요한 무언가를 클릭한다면 스택이 막혀 있기 때문에 어떠한 반응이 없음

정리: 요청 → 응답(사정에 따라 많이 느려질수도 있다.) → 무언가를 클릭한다면 스택이 막혀 있기 때문에 응답 없음

해결방법: 비동기 함수들을 이용하는 것.

비동기형 콜백: $.get(), setTimeout(), setInterval(), Promises

→ 코드에서 읽히자마자 바로 실행되지 않고 잠시 후에 실행된다.

→ 동기 함수들과는 다르게 스택의 내부로 push 될 수 없다.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>asynchronousCallback</title>
  </head>
  <body>
    <div id="demo">
      <h1>The XMLHttpRequest Object</h1>
      <button type="button" onclick="loadDoc()">Change Content</button>
    </div>

    <script>
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
          }
        };
        xhttp.open('Get', 'ajax_info.txt', true);
        xhttp.send();
        console.log('Script call done');
      }
    </script>
  </body>
</html>
```

✔ 자바스크립트의 네트워크 액션 요청

1. 요청 함수가 실행됨. 요청이 들어올 때 onreadystatechange 이벤트 안에 있는 익명 함수를 넘김
2. "Script call done" 은 동기함수이므로 바로 콘솔에 들어감
3. 서버로부터 응답이 온다.
