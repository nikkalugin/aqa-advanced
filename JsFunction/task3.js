/* Завдання 3

Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі,
якщо denominator дорівнює 0
або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла. */

function divide(numerator, denominator) {
    if (typeof numerator !== `number` || typeof denominator !== `number`) {
        throw new Error(`Обидва значення мають бути числами!`);
    }

    if (denominator === 0) {
        throw new Error(`Ділення на 0`);
    }

    return numerator / denominator;
}

try {
    console.log(divide(25, 5));
} catch (error) {
    console.log(error.message);
}

try {
    console.log(divide(20, 0));
} catch (error) {
    console.log(error.message);
} finally {
    console.log(`Робота завершена!`);
}