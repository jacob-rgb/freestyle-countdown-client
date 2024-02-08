import { ECountModes } from "../enums/ECountModes";

export interface ICountState {
    count: number,
    words: string[],
    mode: ECountModes,
    running: boolean
}