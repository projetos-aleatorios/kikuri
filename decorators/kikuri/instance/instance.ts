import type { iInstance } from '../interfaces/iInstance';

export default function Instance(baseURL: string) {
    return function (constructor: Function) {
        const prototype: iInstance = constructor.prototype;
        prototype.method = 'GET';
        prototype.baseURL = baseURL;
        prototype.headers = {};
    }
}