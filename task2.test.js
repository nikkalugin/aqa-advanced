/* Додаткове завдання: (не обовʼязкове)

Назва: Налаштування інтерсепторів

Складність: середній

1. Додати логування за допомогою Axios interceptors запитів і респонсів */

const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
});

axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
});

axiosInstance.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response;
});

async function runTests() {
    try {
        const getPostsResponse = await axiosInstance.get('/posts');
        console.log('GET /posts status:', getPostsResponse.status);
        console.log('GET /posts data:', getPostsResponse.data.slice(0, 5));

        const getPostByIdResponse = await axiosInstance.get('/posts/1');
        console.log('GET /posts/1 status:', getPostByIdResponse.status);
        console.log('GET /posts/1 data:', getPostByIdResponse.data);

        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const postPostResponse = await axiosInstance.post('/posts', newPost);
        console.log('POST /posts status:', postPostResponse.status);
        console.log('POST /posts data:', postPostResponse.data);

        const getCommentsResponse = await axiosInstance.get('/comments');
        console.log('GET /comments status:', getCommentsResponse.status);
        console.log('GET /comments data:', getCommentsResponse.data.slice(0, 5));

        const newComment = {
            postId: 1,
            name: 'test comment',
            email: 'test@example.com',
            body: 'This is a test comment',
        };
        const postCommentResponse = await axiosInstance.post('/comments', newComment);
        console.log('POST /comments status:', postCommentResponse.status);
        console.log('POST /comments data:', postCommentResponse.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

runTests();