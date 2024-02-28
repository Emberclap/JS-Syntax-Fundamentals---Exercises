function solve(members, groupType, dayOfWeek) {
    let price;

    if (groupType === 'Students') {
        switch (dayOfWeek) {
            case 'Friday':
                price = members * 8.45;
                break;
            case 'Saturday':
                price = members * 9.80;
                break;
            case 'Sunday':
                price = members * 10.46;
                break;
            default:
                break;
        }
    }
    else if (groupType === 'Business') {
        if (members >= 100) {
            members -= 10;
        }
        switch (dayOfWeek) {
            case 'Friday':
                price = members * 10.90;
                break;
            case 'Saturday':
                price = members * 15.60;
                break;
            case 'Sunday':
                price = members * 16;
                break;
            default:
                break;
        }
    } else if (groupType === 'Regular') {
        switch (dayOfWeek) {
            case 'Friday':
                price = members * 15;
                break;
            case 'Saturday':
                price = members * 20;
                break;
            case 'Sunday':
                price = members * 22.50;
                break;
            default:
                break;
        }
    }
    if (groupType === 'Students' && members >= 30) {
        price *= 0.85;
    }
    else if (groupType === 'Regular' && members >= 10 && members <= 20) {
        price *= 0.95;
    }
    console.log('Total price: ' + price.toFixed(2));
}
solve(30,
    "Students",
    "Sunday")
solve(40,
    "Regular",
    "Saturday")
solve(150, 'Business', 'Friday')