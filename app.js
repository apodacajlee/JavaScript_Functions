console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0){
        for (let i = 0; i >= count; i--){
            if(i % 2){
                console.log(i);
            }
        }
    }

    else{
        for (let i = 0; i <= count; i++){
            if(i % 2){
                console.log(i);
            }
        }
    }

}

printOdds(10); //test the function

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (userName == undefined || age == undefined) {
        console.log("Error! Name and/or Age is missing!")
        return 0;
    }

    else if (age < 16){
        console.log(belowSixteen);
    }

    else if (age >= 16) {
        console.log(aboveSixteen);
    }

}

checkAge("Joshua", 28); //test function

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y){
    let coordinates = `(${x},${y})`;
    if ((x == 0) && (y == 0)) {
        console.log(`${coordinates} is at the origin`);
    }

    else if ((x == 0) && (y != 0)) {
        console.log(`${coordinates} is on the x axis`);
    }

    else if((x != 0) && (y == 0)) {
        console.log(`${coordinates} is on the y axis`);
    }

    else if((x > 0) && (y > 0)) {
        console.log(`${coordinates} is in Quadrant 1`);
    }

    else if((x < 0) && (y > 0)) {
        console.log(`${coordinates} is in Quadrant 2`);
    }

    else if((x < 0) && (y < 0)) {
        console.log(`${coordinates} is in Quadrant 3`);
    }

    else if((x > 0) && (y < 0)) {
        console.log(`${coordinates} is in Quadrant 4`);
    }
}

whichQuadrant(5,-5); //test function

// Exercise 4
console.log("EXERCISE 4:\n==========\n");

function whichTriangle(side1, side2, side3){
    let msg = `Sides ${side1}, ${side2}, ${side3} make `;

    // check for invalid triangle first
    if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)){
        return(msg + "an invalid triangle");
    }

    // check for number of equal sides next
    let equalSides = 0;
    if(side1 == side2) {equalSides++};
    if(side1 == side3) {equalSides++};
    if(side2 == side3) {equalSides++};

    switch (equalSides){
        case 0:
            return(msg + "a scalene triangle");
        case 1:
            return(msg + "an isosceles triangle");
        case 2:
        case 3:
            return (msg + "an equilateral triangle");
        default:
            return ("Error! You shouldn't see this message");
    }

}

console.log(whichTriangle(2, 3, 3)); //test function

// Exercise 5
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage){
    let daysRemaining = 30 - day;
    let averageDaily = planLimit / 30; // suggested average daily use for billing period
    let averageCurrent = usage / day; //current average daily usage
    let difference = (averageCurrent * 30) - planLimit; //difference between projected use over 30 days & plan limit
    let newAverage = (planLimit - usage) / daysRemaining;

    console.log(`${day} used, ${daysRemaining} remaining`);
    console.log(`Average daily use: ${averageDaily}`);

    if (averageCurrent > averageDaily){
        console.log(`You are EXCEEDING your average daily use (${averageCurrent} GB/day,
        continuing this high usage, you'll exceed your data plan by
        ${difference} GB.
        To stay below your data plan, use no more than ${newAverage} GB/day`);
    }

    else if (averageCurrent == averageDaily){
        console.log(`You are currently meeting your recommended average daily use.
        Please note that an increase in usage may cause you to exceed your data plan`);
    }

    else{
        console.log(`You are currently under your recommended average daily use (${averageCurrent})`);
    }
}

dataPlan(90, 1, 20);