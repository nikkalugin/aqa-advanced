class BookstoreController {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async getBooks() {
        return this.apiClient.get('/BookStore/v1/Books');
    }

    async registerUser(user) {
        return this.apiClient.post('/Account/v1/User', user);
    }

    async generateToken(credentials) {
        return this.apiClient.post('/Account/v1/GenerateToken', credentials);
    }

    async authorizeUser(credentials) {
        return this.apiClient.post('/Account/v1/Authorized', credentials);
    }

    async getUserProfile(userId, token) {
        return this.apiClient.get(`/Account/v1/User/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }

    async deleteUser(userId, token) {
        return this.apiClient.delete(`/Account/v1/User/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
}

module.exports = BookstoreController;