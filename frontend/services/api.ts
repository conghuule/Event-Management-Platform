import axios from 'axios';
import { LoginResponse, Event, CreateEventRequest } from '../types';

const api = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_API_URL,
});

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const fetchEvents = async (): Promise<Event[]> => {
    const response = await api.get('/events');
    return response.data;
    };

export const createEvent = async (data: CreateEventRequest): Promise<Event> => {
    const response = await api.post('/events', data);
    return response.data;
    };

export default api;