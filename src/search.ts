type SearchArguments = 
    [query: string, callback: (results: unknown) => void] |
    [query: string]

type ReturnOfSearch<T> =
    T extends [query: string] ? Promise<unknown> : void;


declare function search<T extends SearchArguments>(...args: T): ReturnOfSearch<T>;

search("jambit") // Promise<unknown>
search("jambit", function callback(result: unknown) {

}) // void

search("jambit").then(result => console.log(result))
search("jambit", function(result) {
    console.log(result)
})


function easy_search(query: string): Promise<unknown>
function easy_search(query: string, callback: (result: unknown) => void): void
function easy_search(query: string, callback?: (result: unknown) => void): Promise<unknown> | void {

}

easy_search("jambit").then(result => console.log(result))
easy_search("jambit", function(result) {
    console.log(result)
})



export {}
