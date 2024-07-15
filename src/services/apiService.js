import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Threads
export const getAllThreads = () => api.get('/threads');
export const getAllThreadsByUser = (userId) => api.get(`/threads?createdBy=${userId}`);
export const getThreadById = (id) => api.get(`/threads/${id}`);
export const createThread = (thread) => api.post('/threads', thread);
export const updateThread = (id, thread) => api.put(`/threads/${id}`, thread);
export const deleteThread = (id) => api.delete(`/threads/${id}`);

// Posts
export const getAllPosts = () => api.get('/posts');
export const getPostsByThreadId = (threadId) => api.get(`/posts?threadId=${threadId}`);
export const getPostById = (id) => api.get(`/posts/${id}`);
export const createPost = (post) => api.post('/posts', post);
export const updatePost = (id, post) => api.put(`/posts/${id}`, post);
export const deletePost = (id) => api.delete(`/posts/${id}`);

// Discussion Categories
export const getAllDiscussionCategories = () => api.get('/discussionCategories');

// Users
export const getAllUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (user) => api.post('/users', user);
export const updateUser = (id, user) => api.put(`/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/users/${id}`);