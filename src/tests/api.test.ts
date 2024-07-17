// This file contains the API tests using Playwright test runner

import { test, expect } from '@playwright/test';
import { postPayload } from '../testdata/apidata';
import { createPost, getPostById } from '../utils/apiHelpers';


test.describe('API Tests', () => {
    test('GET request example', async ({ request }) => {
        const response = await getPostById(request, 1);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toEqual(expect.objectContaining({
            userId: 1,
            id: 1,
            title: expect.any(String),
            body: expect.any(String),
        }));
    });

    test('POST request example', async ({ request }) => {
        const response = await createPost(request, postPayload);
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody).toEqual(expect.objectContaining({
            ...postPayload,
            id: expect.any(Number),
        }));
    });
});
