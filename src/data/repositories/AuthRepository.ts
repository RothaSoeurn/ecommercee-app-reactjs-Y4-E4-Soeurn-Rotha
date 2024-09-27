import axios from 'axios';
import { User } from '../../domain/models/User';

export const AuthRepository = {
    login: async (username: string, password: string): Promise<User> => {
        const response = await axios.post(`https://fakestoreapi.com/auth/login`, {
            username: username,
            password: password
        });
        return response.data;
    }
}