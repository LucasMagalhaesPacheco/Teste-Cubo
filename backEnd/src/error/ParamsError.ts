import { BaseError } from "./BaseError";

export class ParamsError extends BaseError {
    constructor(message: string) {
        super(message, 400)
    }
}