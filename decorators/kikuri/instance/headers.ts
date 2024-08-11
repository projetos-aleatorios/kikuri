import Property from './Property';

export default function Headers(headers: HeadersInit) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Property.set({
            original: descriptor.value, descriptor, 
            propertys: {
                headers: {
                    headers
                }
            }
        });
        return descriptor;
    }
};