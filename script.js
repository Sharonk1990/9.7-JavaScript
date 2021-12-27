const largeNumber = function (number) {
    if (number > 100) {
        return "true";
    }
    return "false";
}

// const result = largeNumber(200);
const result = largeNumber(99);
console.log(result)


const bouncerBrenda = function (maxPeople, currentPeople, age) {
    if (maxPeople > 1000) {
        return "It's too busy now, come back later!"
    }
    else if (currentPeople >= 1000) {
        return "It's too busy now, come back later!"
    }
    else if (age < 18) {
        return "This is a club for adults."
    }
    return "Come in!"
}

// const result = bouncerBrenda(1000, 900, 22);
// const result = bouncerBrenda(1001, 900, 22);
// const result = bouncerBrenda(1000, 1001, 22);
const result2 = bouncerBrenda(1000, 900, 17);
console.log(result2)

const averageNumber = function (number1, number2, number3, number4, number5) {
    sum = ((number1 + number2 + number3 + number4 + number5) / 5);
    return sum
}

const result3 = averageNumber(2, 5, 7, 8, 12);
console.log(Math.round(result3))

