export type SetterKey<K> = `set${Capitalize<string & K>}`;

export type FilterOptional<T> = {
    [K in keyof T]: undefined extends T[K] ? never : T[K]
}

export type SetterFunctionType<O, A, R, K> = K extends A ? (
        (v: O[keyof O & K]) => Builder<O, 
            keyof O & Exclude<A, K>, 
            keyof O & Exclude<R, K>
        >
    ) : never

export type Builder<O, A = keyof O, R = keyof FilterOptional<O>> = {
        [K in keyof O as SetterKey<K>]-?: 
            SetterFunctionType<O, A, R, K>
    } & {
        done: {} extends Pick<O, keyof O & R> ? () => O : never; //: never;
    }

export function createBuilder<T extends object>(obj: T): Builder<T> {
  return new Proxy(obj as Builder<T>, { get })

    function get(target: any, property: any, receiver: any) {

        if (isFinish(property)) return getFinish<T>(target, property, receiver);
        
        if (isSetter(property)) return getSetter<T>(target, property, receiver) 
        
        return target
    }
}

function isFinish(property: string) {
    return "done" === property
}

function isSetter(property: string) {
    return typeof property === "string" && /^set[A-Z]/.test(property)
}

function getFinish<T extends object>(target: any, property: any, receiver: any) {
    return () => target as T
}


function getSetter<T extends object>(target: any, property: any, receiver: any) {

    const name = property.slice(3, 4).toLowerCase() + property.slice(4)
    return function(value: any) {

        Reflect.defineProperty(target as T, name, {
            value: value,
            writable: true,
            configurable: true,
            enumerable: true
        })

        return receiver
    }
}