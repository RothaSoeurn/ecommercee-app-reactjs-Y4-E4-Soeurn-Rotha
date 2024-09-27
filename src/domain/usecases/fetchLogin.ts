import { AuthRepository } from "../../data/repositories/AuthRepository";
import { User } from "../models/User";

export const fetchLogin = async (username: string, password: string): Promise<User> => {
    const user = await AuthRepository.login(username, password);
    return user;
}