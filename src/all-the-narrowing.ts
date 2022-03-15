/*

log(123) --> console.log(123)
log({ msg: string, level: string }) --> log based on available level, send to a logging service

*/

type LoggingMessage = {
    msg: string,
    level: string
}

declare function callLoggingService(level: string, message: string): Promise<void>;

function hasOwnProperty<T extends PropertyKey>(obj: object, key: T): obj is {[K in T]: unknown } {
    return key in obj
}

function isLoggingMessage(param: unknown): param is LoggingMessage {
    return typeof param === "object" && !!param 
        && hasOwnProperty(param, "message") && hasOwnProperty(param, "level") 
        && typeof param.level === "string"
        && typeof param.message === "string";
}


function log(param: unknown) {
    if(typeof param === "object" && !!param 
        && hasOwnProperty(param, "message") && hasOwnProperty(param, "level")) {
        if(typeof param.level === "string") {
            param.level
        }
    }
    console.log(param);
}


function logMessage(param: LoggingMessage) {
    callLoggingService(param.level, param.msg)
}

log(123)
log({ name: "Stefan", age: 39 })
log({})
log({ msg: "An error has occured", level: "INFO" }) // Spezialfall
log({ msg: "An error has occured", level: 2})
log({ msg: "An error has occured", level: "INFO", another_prop: 2})

export {}


log({ msg: "An error has occured", level: "INFO" }) // Spezialfall
logMessage({ msg: "An error has occured", level: "INFO" }) // Spezialfall


class Message {
    msg: string
    level: string
    constructor(msg: string, level: string) {
        this.msg = msg;
        this.level = level;
    }
}

function log_2(param: unknown) {
    console.log(param)

    if(param instanceof Message) {
        param.level
    }
}

log_2(123)
log_2(new Message("An error has occured", "INFO"))

function logMessage2(msg: Message) {
    console.log(msg instanceof Message)
}

logMessage2(new Message("an error has occured", "INFO"));
logMessage2({ msg: "An error has occured", level: "INFO" })


function assertNever(level: never) {
    console.log("I don't know what to do with ", level)
}

const logLevels = ["INFO", "WARN", "ERROR", "DEBUG"] as const;
type LogLevel =  (typeof logLevels)[number];
const logLevel: LogLevel = "INFO"

/*
declare global {
    interface ReadonlyArray<T> {
        includes(searchElement: any, fromIndex?: number): searchElement is T
    }    
}
*/


function broken_log(levels: string[], level: string) {
    if(levels.includes(level)) {

    }
}

function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
    return coll.includes(el as T)
}


function log_with_levels(msg: string, level: string) {
    if(includes(logLevels, level)) {
        if(level === logLevel) {
            console.log(msg);
        }
    }
}

export function log_with_levels_narrow(msg: string, level: LogLevel) {

}
log_with_levels_narrow("Hello", "INFO")


class MyError extends Error {
    level: string
    constructor(msg: string) {
        super(msg)
        this.level = logLevel
    }
}

try {
    // some code
    throw new MyError("oh no!!")
} catch(error: unknown) {
    if(error instanceof Error) {
        error.message
    }
    if(error instanceof MyError) {
        error.level
    }
}

