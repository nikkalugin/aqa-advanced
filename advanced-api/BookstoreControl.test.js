const BookstoreController = require('./BookstoreControl');
const apiClient = require('./apiTask');

const bookStore = new BookstoreController(apiClient);

describe('BookStore API Tests', () => {
    let userId;
    let token;
    const credentials = {
        userName: `TestUser_${Date.now()}`,
        password: 'Password@123'
    };

    test('Register a new user', async () => {
        const response = await bookStore.registerUser(credentials);
        expect(response.status).toBe(201);
        userId = response.data.userID;
        expect(userId).toBeDefined();
    });

    test('Generate token for user', async () => {
        const response = await bookStore.generateToken(credentials);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('token');
        token = response.data.token;
    });

    test('Authorize user with valid credentials', async () => {
        const response = await bookStore.authorizeUser(credentials);
        expect(response.status).toBe(200);
        expect(response.data).toBe(true);
    });

    test('Get list of books', async () => {
        const response = await bookStore.getBooks();
        expect(response.status).toBe(200);
        expect(response.data.books.length).toBeGreaterThan(0);
    });

    test('Get user profile', async () => {
        const response = await bookStore.getUserProfile(userId, token);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('userId', userId);
    });

    test('Delete the user', async () => {
        const response = await bookStore.deleteUser(userId, token);
        expect(response.status).toBe(204);
    });
});