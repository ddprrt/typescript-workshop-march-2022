type Customer = {
    customerId: number,
    firstName: string,
    lastName: string
}
  
type Product = {
    productId: number,
    title: string, 
    price: number
}

type Order = {
    orderId: number,
    customer: Customer,
    products: Product[],
    date: Date
}

declare function getOrder(customer: Customer): Order[]
declare function getOrder(product: Product): Order[]
declare function getOrder(orderId: number): Order
declare function getOrder(product_or_order_id: Product | number): Order[] | Order
declare function getOrder(customer_or_order_id: Customer | number): Order[] | Order
declare function getOrder(customer_or_product: Customer | Product): Order[]
declare function getOrder(everything: Product | number | Customer): Order[] | Order

declare const product: Product
declare const customer: Customer

declare const product_or_customer: Product | Customer;
declare const product_or_id: Product | number

const z = getOrder(product_or_customer)

type GetOrderReturn<T extends number | Product | Customer> = T extends number ? Order : Order[];

declare function getOrderWithConditionals<T extends number | Product | Customer>(param: T): GetOrderReturn<T>

const y = getOrderWithConditionals(product_or_id)
const yyy = getOrderWithConditionals(product)
//const yy = getOrderWithConditionals("hello")


const order_id = 2;


type Foo<T, U> = T extends U ? T : never

type X1 = Foo<{ name: string }, {}>
type X2 = Foo<"hello", string>

type X3 = Foo<"name" | "profession", "name" | "age">

// T == age , U == age | name
type Remove<Elements, Removables> = Elements extends Removables ? never : Elements

type X4 = Remove<"name" | "age" | "profession" | "semester", "age" | "semester">


type Circle = {
    kind: "circle", radius: number
}

type Triangle = {
    kind: "triangle", x: number, y: number
}

type Square = {
    kind: "square", x: number
}

type Shape = Square | Triangle | Circle

type RemoveSquare = Extract<Shape, { kind: "square"} >

type SetOptional<Obj, Prop extends keyof Obj> = { // Parts to set optional
    [P in Prop]?: Obj[P]
} & {
    [P in Remove<keyof Obj, Prop>]: Obj[P]
}

type OptionalAge = SetOptional<Person, "age">

type SetOptionalWithBuiltins<Obj, Props extends keyof Obj>
    = Partial<Pick<Obj, Props>> & Omit<Obj, Props>

type OptionalAge2 = SetOptionalWithBuiltins<Person, "age" | "name">

declare const optional_age: OptionalAge2


type Person = {
    name: string,
    profession: string,
    age: number
}

type GroupByKind<T extends { kind: string }> = {
    [P in T["kind"]]: Extract<T, { kind: P }>[]
}

type GroupShapes = GroupByKind<Shape>

/**

Foo<"name" | "age", "name" | "age" | "profession"> = 
    "name" extends "name" | "age" | "profession"




 */


export {}