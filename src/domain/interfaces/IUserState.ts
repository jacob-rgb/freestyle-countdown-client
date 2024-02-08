import { ERoles } from "../enums/ERoles";

export interface IUserState {
    name: string,
    username: string,
    surname: string,
    phone: number,
    uuid: string,
    role: ERoles,
    isAuthenticated: boolean
}