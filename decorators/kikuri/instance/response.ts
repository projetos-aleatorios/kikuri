import Property from './Property';

export default function Response() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Property.set({
            original: descriptor.value, descriptor,
            propertys: {
                response: {}
            }
        });
        return descriptor;
    };
}