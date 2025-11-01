let month = prompt("Введите месяц:");

if (month === "январь" || month === "март" || month === "май" || 
    month === "июль" || month === "август" || month === "октябрь" || 
    month === "декабрь") {
    console.log("31 день.");



} else if (month === "апрель" || month === "июнь" || 
           month === "сентябрь" || month === "ноябрь") {
    console.log(" 30 дней.");
    
} else if (month === "февраль") {
    console.log("28 дней.");
} 