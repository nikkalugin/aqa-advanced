/* Задача:

1. створити 5 запитів за допомогою методів GET, POST
2. обовязково має бути перевірка респонсу - response status, data на коректність знідно докементації по АПІ */

const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests', () => {
  it('List of Posts', async () => {
    const response = await axios.get(`${baseURL}/posts`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('Get a User', async () => {
    const userId = 5;
    const response = await axios.get(`${baseURL}/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', userId);
  });

  it('Create a Post', async () => {
    const newPost = {
      userId: 15,
      title: 'New Post',
      body: 'Hello World'
    };
    const response = await axios.post(`${baseURL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
  });

  it('Create a Comment', async () => {
    const newComment = {
      postId: 24,
      name: 'Nick Frost',
      email: 'Nick.Frost@gmail.com',
      body: 'New Comment'
    };
    const response = await axios.post(`${baseURL}/comments`, newComment);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
  });

  it('Create an Album', async () => {
    const newAlbum = {
      userId: 9,
      title: 'New album'
    };
    const response = await axios.post(`${baseURL}/albums`, newAlbum);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
  });
});