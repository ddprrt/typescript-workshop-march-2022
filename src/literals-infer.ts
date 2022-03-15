// INFER

import { NonRelativeModuleNameResolutionCache } from "../node_modules/typescript/lib/typescript"

type IsFunction<T> = T extends (...args: any[]) => any ? T : never

type X1 = IsFunction<number>
type X2 = IsFunction<(query: string, scope: string[]) => Promise<number[]>>


type ReturnValue<T> = T extends (...args: any[]) => infer Rtn ? Rtn : never

type R1 = ReturnValue<(query: string, scope: string[]) => Promise<number[]>>

type Arguments<T> = T extends (...args: infer Rtn) => any ? Rtn : never

type A1 = Arguments<(query: string, scope: string[]) => Promise<number[]>>

type Unpack<T> = T extends Promise<infer V> ? V : T

type U1 = Unpack<Promise<number[]>>
type U2 = Unpack<number[]>

// String Template Literal Type

type X = "hello" | "substrings"

type Event<T extends string = string> = `on${T}`

const onChangeEventName: Event = "onChange"

const eventMap = {
    Change: [],
    Click: [],
    Input: []
}

type MyEvents = Event<keyof typeof eventMap>

function processEvent(event: MyEvents) {
}

processEvent("onChange")

type GetConcreteTypeFromString<T extends string> = T extends "number" ? number :
    T extends "boolean" ? boolean : string;

type ParsePathParams<T extends string> =
    T extends `${infer Rest1}/:{${infer Param}:${infer Type}}/${infer Rest}` ? {[P in Param]: GetConcreteTypeFromString<Type> } & ParsePathParams<`/${Rest}` | `/${Rest1}`> : 
    T extends `${infer Rest1}/:{${infer Param}:${infer Type}}` ? {[P in Param]: GetConcreteTypeFromString<Type> } & ParsePathParams<`/${Rest1}`> : 
    T extends `${infer Rest1}/:${infer Param}/${infer Rest}` ? { [P in Param]: string } & ParsePathParams<`/${Rest}` | `/${Rest1}`> : 
    T extends `${infer Rest1}/:${infer Param}` ?  { [P in Param]: string } : never;

type P1 = ParsePathParams<"/hello">
type P2 = ParsePathParams<"/:user">
type P3 = ParsePathParams<"/api/:order">
type P4 = ParsePathParams<"/api/:product/quanity">
type P5 = ParsePathParams<"/api/:people/:page">

type RequestObj<T extends string, Method ="GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" > = {
    method: Method
    params: ParsePathParams<T>
}

type ResponseObj = {
    status(code: StatusCode): ResponseObj
}
type StatusCode =
  100 | 101 | 102 | 200 | 201 | 202 | 203 | 204 | 205 |
  206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 |
  305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 |
  405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 |
  414 | 415 | 416 | 417 | 418 | 420 | 422 | 423 | 424 |
  425 | 426 | 428 | 429 | 431 | 444 | 449 | 450 | 451 |
  499 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 |
  508 | 509 | 510 | 511 | 598 | 599;

function get<Path extends string>(path: Path, callback: (req: RequestObj<Path, "GET">, res: ResponseObj) => void) {

}

get("/hello", (req, res) => {
    res.status(404)
})

get("/:userId", (req, res) => {
    req.params.userId
})

get("/api/:people/:{page:number}", (req, res) => {
    req.params.people
})

export {}
