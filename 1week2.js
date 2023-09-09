// 숫자를 입력받아 해당 숫자가 짝수인지 홀수인지 반환(return)하는 함수를 작성해라. 

function check_num(num){
    if(num%2 === 0){
        return "짝수";
    }
    return "홀수";
}

console.log(check_num(2));

// 사용자로부터 세 과목의 점수를 입력받아 평균 점수를 계산하여 학점을 반환(return)하는 함수를 작성해라. 
// (90 이상: A, 80 이상 90 미만: B, 70 이상 80 미만: C, 70 미만: F)

function check_score(score){
    if(score>=90){
        return "A";
    }else if(score>=80){
        return "B";
    }else if(score>=70){
        return "C";
    }else {
        return "D";
    }
}

console.log(check_score(90));

// 세 개의 숫자를 입력받아 가장 큰 숫자를 찾아서 반환(return)하는 함수를 작성해라. 

function find_max(num1, num2, num3){
    const arry = [num1,num2,num3];

    return Math.max(...arry);
}

console.log(find_max(1,5,8));

// 1부터 100까지의 숫자를 출력하는데, 3의 배수인 경우에는 "Fizz", 5의 배수인 경우에는 "Buzz", 3과 5의 공배수(3의 배수이면서 5의 배수인 수)인 경우에는 "FizzBuzz"를 출력하는 함수를 작성해라. 

function print_FizzBuzz(a,b){
    for(let i=a;i<=b;i++){
        if(i%3===0&&i%5===0){
            console.log("FizzBuzz");
        }else if(i%3===0&&i%5!==0){
            console.log("Fizz");
        }else if(i%5===0){
            console.log("Buzz");
        }else {
            console.log(i);
        }
    }
}

print_FizzBuzz(1,100);