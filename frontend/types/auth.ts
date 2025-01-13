export interface User{
    id: String;
    name: String;
    email: String;
    role: 'user' | 'admin';
}

export interface LoginResponse{
    token: String;
    user: User;
}