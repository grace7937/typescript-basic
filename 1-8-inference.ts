//type inference💩
//원시타입인경우 딱봐도 문자기 때문에 괜찮지만 함수의경우 타입을 작성하는 습관하기 void 는 생략 가능
let text ='hello';
function print(message ='hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number) {
  return x + y;
}

//result 는 자동으로 number   타입이된다 이것이 인퍼런스
const result = add(1,2);