/* Завдання 5
1. Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
2. Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
3. Зробіть деструктуризацію в циклі */

const users = [
    {
        name: `John`,
        email: `john.garbage@gmail.com`,
        age: 27,
        wife: `Lisa`
    },
    {
        name: `Ron`,
        age: 31,
        wife: `Hermione`
    },
    {
        name: `Adrian`,
        email: `adrian.webber@gmail.com`,
        age: 21,
        wife: `Mary`
    }
]

for (const {name, email = `No Data`, age, wife} of users ) {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}, Wife: ${wife}`);
}