import { APIRequestContext } from '@playwright/test';
import { BASE_URL, ENDPOINTS } from '../config/apiConfig';
import { PostPayload } from '../types';

export const getPostById = async (request:APIRequestContext, id: number) => {
    return await request.get(`${BASE_URL}${ENDPOINTS.singlePost(id)}`);
};

export const createPost = async (request:APIRequestContext, data: PostPayload) => {
    return await request.post(`${BASE_URL}${ENDPOINTS.posts}`, {
        data,
    });
};