/* Завдання 3

Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити */

async function fetchUserAndToDo() {
    try {
        const [toDo, user] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/todos/1`)
                .then(response => response.json()),
            fetch(`https://jsonplaceholder.typicode.com/users/1`)
                .then(response => response.json())
        ]);

        console.log(`What to do: `, toDo);
        console.log(`What is the user: `, user);
    } catch (error) {
        console.log(`Error: `, error);
    }
}

fetchUserAndToDo();