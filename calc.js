// function add(num1, num2) {
//     return num1 + num2;
// }

const add = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        throw new TypeError();
    }
    return num1 + num2;
};

const minus = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const isZero = num => num === 0;

function divide(num1, num2) {
    // if (num2 === 0) throw new Error('Cannot divide by zero');
    if (isZero(num2)) throw new Error('Cannot divide by zero');
    return num1 / num2;
}

module.exports = {
    add,
    minus,
    multiply,
    divide,
    isZero
}