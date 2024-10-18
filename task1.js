class ToDoService {
    async getToDo(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            if (!response.ok) {
                throw new Error('Network response is out of work');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching todo: ', error);
            throw error;
        }
    }
}

class UserService {
    async getUser(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('Network response is out of work');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching user: ', error);
            throw error;   

        }
    }
}

const toDoService = new ToDoService();
const userService = new UserService();

async function fetchDataWithPromiseAll() {
    try {
        const [toDo, user] = await Promise.all([
            toDoService.getToDo(2),
            userService.getUser(6),
        ]);
        console.log('ToDo: ', toDo);
        console.log('User: ', user);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

async function fetchDataWithPromiseRace() {
    try {
        const result = await Promise.race([
            toDoService.getToDo(3),
            userService.getUser(5),
        ]);
        console.log('Перший resolved promise: ', result);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

fetchDataWithPromiseAll();
fetchDataWithPromiseRace();