// 숫자를 입력받아 해당 숫자가 짝수인지 홀수인지 반환(return)하는 함수를 작성해라. 

function check_num(num){
    if(num%2 === 0){
        return "짝수";
    }
    return "홀수";
}

console.log(check_num(2));