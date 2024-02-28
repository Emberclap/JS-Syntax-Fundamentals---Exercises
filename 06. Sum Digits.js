function solve(num) {
    const arrOfDigits = Array.from(String(num), Number);
    let sum = 0;
    arrOfDigits.forEach((el) => sum += el);
    console.log(sum);
    
   
}
solve(245678);
solve(97561);
solve(543);