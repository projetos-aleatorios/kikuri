import Property from './Property';

export function GET(endpoint: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        Property.set({
            original: descriptor.value, descriptor, 
            propertys: {
                methods: {
                    method: 'GET',
                    endpoint,
                }
            }
        });
        return descriptor;
    }
};

export function POST(endpoint: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        Property.set({
            original: descriptor.value, descriptor, 
            propertys: {
                methods: {
                    method: 'POST',
                    endpoint,
                }
            }
        });
        return descriptor;
    }
};
