class Person {
    age: number
    name: string

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }
}

const p: Person = {
    name: "Stefan",
    age: 39
}

const p_2 = new Person(39, "Stefan")

Object.keys(Person.prototype)

interface PersonInstance {
    age: number,
    name: string
}

interface PersonConstructor {
    new(age: number, name: string): PersonInstance
}

interface FilterConstructor {
    new(val: string): Filter
}

class Filter {
    val: string
    constructor(val: string) {
        this.val = val;
    }
}

declare const all_filters: Array<FilterConstructor>

for(const filter of all_filters) {
    const filter_instance = new filter("");
}

declare const person_2: any

if(person_2 instanceof Person) {
    person_2
}

export {}