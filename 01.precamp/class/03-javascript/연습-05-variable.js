// 데이터 타입, 연산자 실습
1+1
// 2
"1234" == 123
// false
"123" === 123
// false
true && true
// true
!false
// true
!true
// false

//철수 나이의 값을 이용한 조건문 예제
const profile = {
  name:"철수",
  age: 12,
  school: "다람쥐 초등학교"
}
// undefined
profile
// {name: '철수', age: 12, school: '다람쥐 초등학교'}
if(profile.age >=20) {
  console.log("성인입니다");
}else if (profile.age >=8) {
  console.log("학생입니다.");
}else if(profile.age > 0){
  console.log("어린이입니다");
}else{
console.log("잘못입력하셨습니다.");   
}
// VM1458:4 학생입니다. 