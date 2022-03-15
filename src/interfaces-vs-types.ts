interface Person {
    name: string,
    age: number
}

type Human = {
    name: string,
    age: number
}

interface Student<T> extends Human {
    studentId: T
}

type People = Student<string> | {
    profession: string
} & Person

interface Student<T> {
    semester: number
}

declare const student: Student<string>

interface FormData {
    address: string,
    name: string
    message: string
}

declare const formdata: FormData


type Node<T> = {
    value: number,
    next?: Node<T>
}


export {}