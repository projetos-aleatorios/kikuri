import type { iInstance } from '../interfaces/iInstance';

export default function Headers(headers: HeadersInit) {
    return function (constructor: Function) {
        constructor.prototype.headers = headers as iInstance;
    }
};