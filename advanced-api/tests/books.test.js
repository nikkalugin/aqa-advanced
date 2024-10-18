const BookstoreController = require('../controllers/BookstoreController');
const UserController = require('../controllers/UserController');

describe('Bookstore API - Book Tests', () => {
    let token;
    let userId;

    beforeAll(async () => {
        const userData = {
            userName: "testUser",
            password: "Password123!"
        };
        const user = await UserController.registerUser(userData);
        userId = user.userID;

        const tokenResponse = await UserController.generateToken(userData);
        token = tokenResponse.token;
    });

    afterAll(async () => {
        await BookstoreController.deleteAllBooks(userId, token);
        await UserController.deleteUser(userId, token);
    });

    test('Get Book by ID should return the correct book', async () => {
        const bookId = '9781449325862';
        const book = await BookstoreController.getBook(bookId, token);
        
        expect(book).toBeDefined();
        expect(book.title).toBe('JavaScript: The Good Parts');
        expect(book.isbn).toBe(bookId);
    });

    test('Add a book to the user’s collection', async () => {
        const bookId = '9781449331818';
        const response = await BookstoreController.addBook(userId, bookId, token);

        expect(response.books).toHaveLength(1);
        expect(response.books[0].isbn).toBe(bookId);
    });

    test('Get all books should return the user’s book collection', async () => {
        const books = await BookstoreController.getAllBooks(token);
        
        expect(books).toBeDefined();
        expect(books.books).toHaveLength(1);
    });

    test('Delete a book from the user’s collection', async () => {
        const bookId = '9781449331818';
        const status = await BookstoreController.deleteBook(userId, bookId, token);

        expect(status).toBe(204);
    });

    test('Delete all books from the user’s collection', async () => {
        const status = await BookstoreController.deleteAllBooks(userId, token);

        expect(status).toBe(204);
    });
});