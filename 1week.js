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

// 2. 구구단 8단 출력하기
function gugudan(num){
    for(let i=1;i<10;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

// 3. 구구단 1단부터 9단까지 출력하기

function gugudanAll(){
    for(let i=1;i<10;i++){
        console.log(`[${i}단]`);
        gugudan(i);
    }
}

// 4. 1~50까지의 합을 구하는 프로그램

function sum(a,b){
    let num = 0;
    for(let i=a;i<=b;i++){
        num += i;
    }
    console.log(`${a}부터 ${b}까지의 합은 ${num}입니다.`);
}

// 5, 7명의 학생 이름을 출력해라

const students = ["재성","윤희","희원","지성","흥민","수지","태원"];

function callStudent(){
    students.forEach((student, i)=>{
        console.log(student);
    })
    console.log("-----")
    students.forEach((student, i)=>{
        console.log(`${student} 출석완료`);
    })
}

// 6. 7명 학생의 이름과 점수를 출력해라

function callNameScore(){
    const scores = [90,75,95,92,100,82,93];
    console.log("[시험 점수]")
    scores.forEach((score, i)=>{
        console.log(`${students[i]} : ${score}점`);
    })
}

// 7, 8. 7명 학생의 이름과 점수를 출력해라. (객체 활용)
function callNameScoreOb(){
    const NSObs = [
        {
            name : "재성",
            score : "90"
        }, {
            name : "윤희",
            score : "75"
        }, {
            name : "희원",
            score : "95"
        }, {
            name : "지성",
            score : "92"
        }, {
            name : "흥민",
            score : "100"   
        }, {
            name : "수지",
            score : "82"
        }, {
            name : "태원",
            score : "93"
        }
    ];

    console.log("[시험 점수]")
    NSObs.forEach((NSOb, i)=>{
        console.log(`${NSOb.name} : ${NSOb.score}점`);
    })
}

// 9. 학생의 정보를 관리하자
const student = {};
student.name = "철수";
student.age = "20";
student.realfriends = ["영희","지현","서원","유정"];

function callChulsuInfo(){
    console.log("[학생 정보]")
    console.log(`이름 : ${student.name}`)
    console.log(`나이 : ${student.age}`)
    console.log(`베프 : ${student.realfriends}`)
}

question1();
gugudan(8);
gugudanAll();
sum(1,50);
callStudent();
callNameScore();
callNameScoreOb();
callChulsuInfo();