const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'https://bookstore.toolsqa.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

module.exports = apiClient;