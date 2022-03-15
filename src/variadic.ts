function collect<T>(label: string, ...rest: T[]) {
    return rest
}

const number_array = collect("numbers", 1, 2, 3, 4, 5, 6)
const string_array = collect("strings", "a", "b", "c", "d")
const mixed_array = collect("mixed", ...[1, "a", 2, "b"])

type Callback = (e: string | null, ...args: any[]) => void

function this_is_a_node_function(arg: number, cb: Callback) {}

function this_is_also_a_node_function(arg: string, arg_2: number, cb: Callback) {}


this_is_a_node_function(2, function(err, val) {
    if(err) {
        throw Error("")
    }

    console.log("I got a value", val)

})

type PersonProps = [age: number, name: string]

const [my_age, my_name]: PersonProps = [39, "Stefan"]

type StartsAndEndsWithString<T extends unknown[]> = [string, ...T, string]

type T1 = StartsAndEndsWithString<[boolean]>
type T2 = StartsAndEndsWithString<[boolean, string]>

type TwoVariadicParts<T extends unknown[], U extends unknown[]> = 
    [...T, string, ...U]

type T4 = TwoVariadicParts<[boolean, boolean], [number, number]>

declare function person(...rest: [name: string, age: number, profession: string]): void

type HasCallback<T extends unknown[]> = (...args: [...T, Callback]) => any


function takes_callback_function<T extends unknown[]>(fn: HasCallback<T>): void {

}


takes_callback_function(this_is_a_node_function)
takes_callback_function(this_is_also_a_node_function)
takes_callback_function(function(cb: Callback) {
    
})


function concat<T extends unknown[], U extends unknown[]>(arr_1: [...T], arr_2: [...U]): [...T, ...U] {
    return [...arr_1, ...arr_2]
}

const result_tmp = concat([1, "2"], ["3"])

const result = concat([1, 2, 3], [4, 5, 6]) // [1, 2, 3, 4, 5, 6]

export {}