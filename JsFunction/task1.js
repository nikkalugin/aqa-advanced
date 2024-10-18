/* Завдання 1

1) Створіть функцію handleNum яка буде приймати 3 параметри.
a: число
b: Колбек функцію яку треба викликати якщо передане число парне
c: Колбек функцію яку треба викликати якщо передане число непарне
2) Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
3) Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше */

function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function handleEven() {
    console.log(`Number is even!`);
}

function handleOdd() {
    console.log(`Number is odd!`);
}

handleNum(4, handleEven, handleOdd);