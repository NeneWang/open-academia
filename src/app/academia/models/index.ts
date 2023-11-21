export type UserRole = 'ADMIN' | 'EMPLOYEE' | 'STUDENT';
export interface User{
    id: number;
    first: string;
    last: string;
    email: string;
    password: string;
    role: UserRole;
    token: string;
    avatar: string;
}