export interface iInstance {
    baseURL?: string;
    fullURL?: string;
    endpoint?: string;
    query?: string;
    param?: string;
    headers?: HeadersInit
    body?: any;
    method?: Methods
    response?: any;
}

export type Methods = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';