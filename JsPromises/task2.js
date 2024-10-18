/* Завдання 2

В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

1. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/todos/1>

2. Функція повинна повертати як результат Promise що повертає об’єкт todo
3. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>

4. Функція повинна повертати як результат Promise що повертає об’єкт user
5. Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
Присвойте значення отримані від цих виразів до змінних */

function fetchToDo() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(response => response.json);
}

function fetchUser() {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(response => response.json);
}

Promise.all([fetchToDo(), fetchUser()])
    .then(([toDo, user]) => {
        console.log(`Doing Action: `, toDo);
        console.log(`What the user: `, user);
    })
    .catch(error => {
        console.log(`Error: `, error);
    });

Promise.race([fetchToDo(), fetchUser()])
    .then(result => {
        console.log(`Your result is: `, result);
    })
    .catch(error => {
        console.log(`Error: `, error)
    });