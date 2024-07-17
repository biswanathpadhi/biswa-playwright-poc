// Type definitions for the application
export interface PostPayload {
    title: string;
    body: string;
    userId: number;
}

export interface User {
    email: string;
    password: string;
}