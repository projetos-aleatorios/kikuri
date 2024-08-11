import Property from './Property';

export default function Param(params: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Property.set({
            original: descriptor.value, descriptor, 
            propertys: {
                params: {
                    params
                }
            }
        });
        return descriptor;
    }
};