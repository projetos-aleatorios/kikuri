import type { iInstance } from './interfaces/iInstance';

export default async function Client(param: iInstance): Promise<Response | string> {
    
    const URI = param?.fullURL ? param.fullURL : param.baseURL;

    const response = await fetch(URI!, {
        method: param.method,
        headers: param.headers,
        body: typeof param.body === 'object' ? JSON.stringify(param.body) : null
    })
    
    if (response.status > 200 && response.status > 226) {
        const text = await response.text();
        throw new Error(text);
    }

    return await response.json();
};