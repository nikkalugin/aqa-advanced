/* Завдання 3

Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted” */

function checkOrder(available, ordered) {
    if (ordered === 0) {
        return `Your order is empty.`;
    } else if (available < ordered) {
        return `Your order is too large, we don’t have enough goods.`;
    } else {
        return `Your order is accepted.`
    }
}

const orderResult1 = checkOrder(15, 0);
console.log(`Замовлення 1: ${orderResult1}`); 

const orderResult2 = checkOrder(15, 20);
console.log(`Замовлення 2: ${orderResult2}`); 

const orderResult3 = checkOrder(20, 15);
console.log(`Замовлення 3: ${orderResult3}`);