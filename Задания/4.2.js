
let score = prompt("Введите баллы студента (0-100):");

if (score >= 80 && score <= 100) {
    console.log("Оценка: A");

} else if (score >= 70 && score <= 79) {
    console.log("Оценка: B");

    
} else if (score >= 60 && score <= 69) {
    console.log("Оценка: C");

} else if (score >= 50 && score <= 59) {
    console.log("Оценка: D");

} else if (score >= 0 && score <= 49) {
    console.log("Оценка: F");

} 

let month = prompt("Введите месяц:");

switch (month) {
    case "сентябрь":
    case "октябрь":
    case "ноябрь":
        console.log("Сезон: Осень");

        break;
    case "декабрь":
    case "январь":
    case "февраль":
        console.log("Сезон: Зима");

        break;
    case "март":
    case "апрель":
    case "май":

        console.log("Сезон: Весна");
        break;
    case "июнь":
    case "июль":
    case "август":

        console.log("Сезон: Лето");
        break;
  
}






let month2 = prompt("Введите месяц:");



if (month2 === "сентябрь" || month2 === "октябрь" || month2 === "ноябрь") {
    console.log("Сезон: Осень");
} else if (month2 === "декабрь" || month2 === "январь" || month2 === "февраль") {
    console.log("Сезон: Зима");
} else if (month2 === "март" || month2 === "апрель" || month2 === "май") {
    console.log("Сезон: Весна");
} else if (month2 === "июнь" || month2 === "июль" || month2 === "август") {
    console.log("Сезон: Лето");
} 




