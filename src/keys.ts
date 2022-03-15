type Person = {
    name: string, age: number, id: number,
}
const person = {
    name: "Stefan",
    age: 39,
    id: 2321321321,
    another_prop: true
}
const me: Person = person

function isAvailable<T>(o: T, k: PropertyKey): k is keyof T {
    return k in o
}
/*
type ObjectKeys<T> = 
    T extends object ? (keyof T)[] :
    T extends number ? [] :
    T extends Array<any> | string ? string[] : never;

declare global {
    interface ObjectConstructor {
        keys<T>(o: T): ObjectKeys<T>
    }
}*/

const keys = Object.keys(me)

const you: Person = {
    name: "Not stefan",
    age: -39,
    id: 123
}

function printKeys(keys: string[], you: Person) {
    keys.forEach(el => {
        if(isAvailable(you, el)) {
            console.log(you[el])
        }
    })
}

printKeys(keys, you);

export {}