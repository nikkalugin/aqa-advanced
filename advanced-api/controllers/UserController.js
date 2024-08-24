class UserController {
    static async registerUser(userData) {
        const response = await fetch('https://bookstore.toolsqa.com/Account/v1/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return response.json();
    }

    static async generateToken(userData) {
        const response = await fetch('https://bookstore.toolsqa.com/Account/v1/GenerateToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return response.json();
    }

    static async deleteUser(userId, token) {
        const response = await fetch(`https://bookstore.toolsqa.com/Account/v1/User/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.status;
    }

    static async getUserDetails(userId, token) {
        const response = await fetch(`https://bookstore.toolsqa.com/Account/v1/User/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }
}

module.exports = UserController;