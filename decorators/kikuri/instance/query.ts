import Property from './Property';

export default function Query(querys: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Property.set({
            original: descriptor.value, descriptor, 
            propertys: {
                query: {
                    querys
                }
            }
        });
        return descriptor;
    }
};