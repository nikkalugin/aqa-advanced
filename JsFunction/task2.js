/* Завдання 2

1) Створіть функцію яка приймає один параметр: num.
2) Усередині функції виведіть значення num в консоль.
3) Після цього, рекурсивно викличте функцію зі зменшеним значенням num (наприклад, num - 1).
4) Фунція повинна викликатися, доки num не стане менше або рівне 0.
5) Викличте вашу функцію з аргументом, наприклад, 5, щоб почати рекурсивний лічильник. */

function recursiveCounter(num) {
    console.log(num);
    if (num > 0) {
        recursiveCounter(num - 1);
    }
}

recursiveCounter(5);