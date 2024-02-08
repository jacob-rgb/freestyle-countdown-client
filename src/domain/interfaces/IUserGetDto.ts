import { ERoles } from "../enums/ERoles";

export interface IUserGetDto {
    name: string,
    username: string,
    surname: string,
    phone: number,
    uuid: string,
    role: ERoles,
}