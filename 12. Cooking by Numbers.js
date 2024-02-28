function solve(num, operation1, operation2, operation3, operation4, operation5) {
    let number = num;
    let operations = [operation1, operation2, operation3, operation4, operation5]
    operations.forEach(operation => {
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.80;;
                break;
            default:
                break;
        }
        console.log(number);
    });

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
