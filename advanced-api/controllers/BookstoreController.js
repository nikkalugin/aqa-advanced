class BookstoreController {
    static async getBook(bookId, token) {
        const response = await fetch(`https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${bookId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    static async getAllBooks(token) {
        const response = await fetch('https://bookstore.toolsqa.com/BookStore/v1/Books', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    static async addBook(userId, bookId, token) {
        const response = await fetch('https://bookstore.toolsqa.com/BookStore/v1/Books', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                collectionOfIsbns: [{ isbn: bookId }]
            })
        });
        return response.json();
    }

    static async deleteBook(userId, isbn, token) {
        const response = await fetch('https://bookstore.toolsqa.com/BookStore/v1/Book', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, isbn })
        });
        return response.status;
    }

    static async deleteAllBooks(userId, token) {
        const response = await fetch(`https://bookstore.toolsqa.com/BookStore/v1/Books?UserId=${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.status;
    }
}

module.exports = BookstoreController;