import Property from './Property';

export default function Body() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Property.set({
            original: descriptor.value, descriptor,
            propertys: {
                body: {}
            }
        });
        return descriptor;
    }
};