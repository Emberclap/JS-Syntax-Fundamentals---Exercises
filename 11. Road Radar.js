function solve(speed, area) {
    let speedLimit;
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            break;
    }
    let status = ''
    if (speedLimit >= speed ){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return;
    }
    if(speed-speedLimit <= 20 ){
        status = 'speeding';
    }
    else if (speed-speedLimit <= 40 ){
        status = 'excessive speeding';
    }
    else{
        status = 'reckless driving';
    }
    console.log(`The speed is ${speed-speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}
solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')