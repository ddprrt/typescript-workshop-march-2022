type Person = {
    name: string,
    age: number,
}

const personObj: Person = {
    name: "Stefan",
    age: 39
}

const anotherPerson: Person = {
    name: "Stefan",
    age: 40
}

function update<T extends keyof Person>(key: T) {
    personObj[key] = anotherPerson[key]
}

update("age")
update("name")


function update_with_value<T extends keyof Person, U extends Person[T]> (key: T, val: U) {
    personObj[key] = val;
}

update_with_value<"age" | "name", string | number>("name", 39) // :-(
update_with_value("name", "Stefan") // :-) 
update_with_value("age", 39); // :-)

type Switch = {
    address: number,
    on: 0 | 1
}

declare const switcher: Switch;
declare const key: keyof Switch;

switcher[key] = 0
switcher[key] = 1
//switcher[key] = 2

type FormFields = {
    age: Field<number>,
    name: Field<string>,
    grown_up: Field<boolean>,
}

type FieldMap = {
    [x: string]: Field<any>
}

declare let fieldmap: FieldMap


type Field<T> = {
    value: T,
    validator: (val: T) => boolean
}

function validate_field<T>(obj: Field<T>) {
    return obj.validator(obj.value)
}

function validate<K extends keyof FormFields>(key: K, forms: FieldMap) {
    const obj = forms[key]
    obj.validator(obj.value);
    validate_field(obj)
}

declare const formFields: FormFields


validate("age", formFields)


export {}