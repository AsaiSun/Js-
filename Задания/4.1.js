
let age = prompt("Введите свой возраст:");
if (age >= 18) {
    console.log("Вы достаточно взрослый, чтобы водить.");
} else {
    let yearsLeft = 18 - age;
    console.log("Вам осталось", yearsLeft,  "года до вождения.");
}

let myAge = 25; 
let yourAge = prompt("Enter your age");

if (yourAge > myAge) {
    let difference = yourAge - myAge;

    console.log("Ты на",  difference, "лет старше меня.");

} else if (yourAge < myAge) {


    let difference = myAge - yourAge;
    console.log("Я на", difference, "лет старше тебя.");

} else {

    console.log("Мы одного возраста!");
}

let a = 4;
let b = 3;

if (a > b) {
    console.log("a больше, чем b");
} else {
    console.log("a меньше, чем b");
}







let number = prompt("Введите число:");

if (number % 2 === 0) {
    console.log(number,  "- чётное число");
} else {
    console.log(number, "является нечётным числом");
}