const UserController = require('../controllers/UserController');

describe('Bookstore API - User Tests', () => {
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
        await UserController.deleteUser(userId, token);
    });

    test('Register a new user', async () => {
        const newUser = {
            userName: "newUser",
            password: "Password123!"
        };
        const response = await UserController.registerUser(newUser);

        expect(response).toBeDefined();
        expect(response.userID).toBeDefined();
        expect(response.username).toBe(newUser.userName);
    });

    test('Generate token for a user', async () => {
        const userData = {
            userName: "testUser",
            password: "Password123!"
        };
        const tokenResponse = await UserController.generateToken(userData);

        expect(tokenResponse).toBeDefined();
        expect(tokenResponse.token).toBeDefined();
    });

    test('Get user details', async () => {
        const userDetails = await UserController.getUserDetails(userId, token);

        expect(userDetails).toBeDefined();
        expect(userDetails.userID).toBe(userId);
        expect(userDetails.username).toBe("testUser");
    });

    test('Delete the user', async () => {
        const status = await UserController.deleteUser(userId, token);

        expect(status).toBe(204);
    });
});