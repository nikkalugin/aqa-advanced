/* Завдання 1

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function) */

// 1. Function Declaration

function calculateRectangleArea1(width, height) {
    const area = width * height;
    return area;
}

const rectangleArea1 = calculateRectangleArea1(5, 10);
console.log(`Площа прямокутниика: ${rectangleArea1} см`);

// 2. Function Expression

const calculateRectangleArea2 = function(width, height) {
    const area = width * height;
    return area;
}

const rectangleArea2 = calculateRectangleArea2(5, 10);
console.log(`Площа прямокутниика: ${rectangleArea2} см`);

// 3. Arrow Function 

const calculateRectangleArea3 = (width, height) => {
    const area = width * height;
    return area;
}

const rectangleArea3 = calculateRectangleArea3(5, 10);
console.log(`Площа прямокутниика: ${rectangleArea3} см`);