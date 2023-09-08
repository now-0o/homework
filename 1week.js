// 1. 아이유 프로필 출력하기

// 템플릿 문자열이란 지저분하게 +와 따옴표를 사용하지 않아도
// 문자열과 여러 변수를 쉽게 합쳐주는 서식 또는 견본
let profile = {
    name : "아이유",
    age : 30,
    student : true,
    weight : 40.5
}

function question1(){
    console.log(`이름 : ${profile.name}`);
    console.log(`나이 : ${profile.age}`);
    console.log(`대학생인가요? : ${profile.student}`);
    console.log(`몸무게 : ${profile.weight}`);
}

question1();