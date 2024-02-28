function solve(input){
    let isTrue = true;
    let sum = 0;
    const arrOfDigits = Array.from(String(input), Number);
    for (let index = 0; index < arrOfDigits.length; index++) {
        const element = arrOfDigits[index];
        sum += arrOfDigits[index];
        arrOfDigits.forEach(item => {
            if (element != item){
                isTrue = false;
            }
        });
    }
    if (isTrue){
        console.log("true");
    }
    else{
        console.log("false");
    }
    console.log(sum);
}
solve(2222222);
solve(1234);