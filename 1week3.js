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

