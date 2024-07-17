
export const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const ENDPOINTS = {
    posts: '/posts',
    singlePost: (id: number) => `/posts/${id}`,
};
