// 덧셈 함수 만들기

const sum = (a, b) => {
	console.log(`${a}와 ${b}의 합은 ${a+b}입니다.`)
}
sum(5, 6);

// A부터 B까지의 숫자를 모두 곱하는 함수 만들기

const multiplyAll = (a, b) => {
    let num = 1;
    for(let i=a;i<=b;i++){
        num *= i;
    }
    console.log(`${a}부터 ${b}까지 모두 곱하면 ${num}입니다.`)
}
multiplyAll(1, 10);
multiplyAll(5, 7);

// 신입사원 토끼의 우당탕탕 코드 고쳐주기

function rabbit_code(){
    const numbers = [90, 50, 80, 92, 82];
    let sum = 0;
    let multiplyAll = 1;
    
    numbers.forEach((num,i)=>{
        sum += num;
        multiplyAll *= num;
    })
    
    let average = sum / numbers.length;

    console.log(sum); // 출력값 : 394
    console.log(multiplyAll); // 출력값 : 2715840000
    console.log(average); // 출력값 : 78.8
}

rabbit_code();

// 홀짝 게임

const oddOrEven = (number) => {
	if(number%2===0){
        console.log(`${number}은 짝수입니다.`);
        return;
    }
    console.log(`${number}은 홀수입니다.`);
}
oddOrEven(17);
oddOrEven(16);

// 신입사원 토끼의 우당탕탕 코드 고쳐주기2

function rabbit_code2(score){
    if (score % 2 === 0) {
    console.log("짝수입니다.");
    return;
    }
    console.log("홀수입니다.");
}

rabbit_code2(92);
rabbit_code2(79);
rabbit_code2(98);

// 우등생 선발 프로그램
// 전 과목이 90점 이상이거나, 두 과목 이상 100점일 경우 우등생

const isGoodStudent = (student) => {
    let chk = 0;
	for(let i in student)
   {
        if(student[i]>=90){
            if(student[i]===100){
                chk += 2;
            }else {
                chk --;
            }
        }
    }
    if(chk === -3 || chk >= 3){
        return true;
    }
    return false;
}

const student1 = {
	korean: 90,
	english: 93,
	math: 92
}

const student2 = {
	korean: 100,
	english: 100,
	math: 68
}

const student3 = {
	korean: 88,
	english: 91,
	math: 89
}

console.log(isGoodStudent(student1));
console.log(isGoodStudent(student2));
console.log(isGoodStudent(student3));

// 출석부 부르기

const students = ["경훈", "연진", "재훈", "사라"];

function chulsuck(){
    students.forEach((student)=>{
        console.log(`${student} 왔니?`);
    })
}

chulsuck();

// 풀네임(Full Name)으로 만들기

const users = [
    {
      firstName: "재성",
      lastName: "박"
    },
    {
      firstName: "동은",
      lastName: "문"
    },
    {
      firstName: "연진",
      lastName: "박"
    }
  ];
  
  const fullNames = users.map((name) => name.lastName + name.firstName);

  console.log(fullNames);

  // 우등생 이름 출력하기

  function check_score2(){
    const students2 = [
        {
        name: "박재성",
        score: 89
        },
        {
        name: "문동은",
        score: 92
        },
        {
        name: "박연진",
        score: 97
        }
    ];

    const highscore = students2.filter((student) => student.score >= 90);

    for(let i in highscore){
        console.log(highscore[i].name);
    }
 }

 check_score2();