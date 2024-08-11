import Client from "../client";
import type { iInstance, Methods } from "../interfaces/iInstance";

function Property({ original, descriptor, ...data }: iProperty): PropertyDescriptor {
    descriptor.value = async function (this: iInstance, ...args: Array<any>) {

        const { propertys } = data;

        if (propertys.methods) method(this, propertys.methods);
        if (propertys.query) querys(this, propertys.query);
        if (propertys.params) params(this, propertys.params)
        if (propertys.body) body(this, args);
        if (propertys.response) await response(this, args);

        console.log(this)

        return original.apply(this, args);
    };
    return descriptor;
}

function method(instance: iInstance, { endpoint, method }: iMethod): iInstance {
    instance.endpoint = endpoint
    instance.method = method
    instance.fullURL = instance.baseURL + endpoint
    return instance;
}

function querys(instance: iInstance, { querys }: iQuery): iInstance {
    instance.query = querys.replace('&', '').replace('?', '').replace('=', '')
    instance.fullURL = `${instance.fullURL}?${instance.query}=`
    return instance;
}

function params(instance: iInstance, { params }: iParams): iInstance {
    instance.param = params
    instance.fullURL = instance.fullURL + '' + instance.param;
    return instance;
}

function body(instance: iInstance, [body]: Array<any>): iInstance {
    instance.body = body;
    return instance;
}

async function response(instance: iInstance, [res]: Array<any>): Promise<iInstance> {
    instance.fullURL = instance.method !== 'GET' ? instance.fullURL : instance.fullURL + res;
    instance.response = await Client(instance);
    return instance;
}

interface iProperty {
    original: any;
    descriptor: PropertyDescriptor;
    propertys: Propertys;
}

interface iMethod {
    method: Methods
    endpoint: string;
}

interface iQuery {
    querys: string;
}

interface iParams {
    params: string
}

interface Propertys {
    'methods'?: iMethod,
    'query'?: iQuery
    'params'?: iParams,
    'body'?: any,
    'response'?: any
}

export default {
    'set': Property
}