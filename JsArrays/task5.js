/* Завдання 5: Об'єднання масивів

Вам потрібно створити програму, яка об'єднає два масиви в один

Ось кроки, які вам потрібно виконати:
1. Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
2. Створіть новий масив, який містить всі елементи з обох вихідних масивів.
3. Виведіть отриманий об'єднаний масив на консоль. */

const firstArray = [1, 3, 5];
const secondArray = [7, 10, 13];
const combinedArray = firstArray.concat(secondArray);

console.log(combinedArray);