function solve(input) {
    if (input % 4 === 0 && input % 100 != 0 || input % 400 === 0) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}
solve(1900);
solve(2000);
solve(1984)
