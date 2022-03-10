type VideoFormatURLs = {
    format360p: URL,
    format480p: URL,
    format720p: URL,
    format1080p: URL,
    format4k: URL,
    format120p: URL
}

type SubtitleURLs = {
    en: URL,
    de: URL,
    fr: URL,
    pt: URL
}

//#region Session 1
type PropDesc = string | number | symbol;

type URLList = {
    [k: string]: URL
}

function isAvailable<U>(obj: U, key: PropDesc): key is keyof U {
    return key in obj
}

// Generic type parameter, generic type variable
// Generic type constraint
function loadURL<U extends URLList>(urlList: U, key: string) {
    if(isAvailable(urlList, key)) {
        const url = urlList[key]
        
    }
    //urlList[key]
}


// Related generic types parameters
function loadFile<U extends URLList, K extends keyof U>(urlList: U, key: K): StatusObj<U> {
    let rtnObj: Record<string, boolean> = {}
    Object.keys(urlList).map(key => {
        if(isAvailable(urlList, key)) {
            rtnObj[key] = true
        }
    })
    return rtnObj as StatusObj<U>
}

type StatusObj<U extends URLList> = {
    [K in keyof U]: boolean
}


declare const videos: VideoFormatURLs;
declare const subtitles: SubtitleURLs;

loadURL(videos, "format360pppppp")
loadURL(subtitles, "edfdssdfsn")

loadFile(videos, "format360p")
loadFile(subtitles, "de")


const status = loadFile<VideoFormatURLs, "format1080p" | "format360p">(videos, "format1080p")


//loadURL("hello", "hello");
//loadURL({ name: "Stefan", age: 39 }, "age")

isAvailable({ name: "Stefan", age: 39 }, "age")

//#endregion

//#region identity
function identity<T>(arg: T): T {
    return arg
}

const x = identity<string>("hello")
const y = identity("hello")
//#endregion

//#region Pluck -- See Pick<T, K>
type Person = {
    name: string,
    age: number
}

type Pluck<Obj, Keys extends keyof Obj> = {
    [K in Keys]?: Obj[Keys]
}

type OptionalAge = Pluck<Person, "age">
type PickAge = Partial<Pick<Person, "age">>
/*
type OptionalAge = {
    age?: number
}
*/
//#endregion

type Split<T> = {
    [K in keyof T]: {
        [P in K]: T[P]
    }
}[keyof T]

type AvailableFormats = Split<VideoFormatURLs>
type AvailableSubtitles = Split<SubtitleURLs>
type PersonProps = Split<Person>
// type AvailableFormats = 
//      "format1080p" | "format720p" | "format4k" | "format320p" | "format480p"


// Minimum one property, maximum all of them

const subset_of_videos: AvailableFormats = {
    format1080p: new URL(""),
    format4k: new URL("")
}

const another_subset_of_videos: AvailableFormats = {
    format1080p: new URL(""),
    format720p: new URL("")
}

"format1080p" in subset_of_videos && console.log(subset_of_videos.format1080p)

function mountVideo<
    U extends URLList,
    GElement extends HTMLElement = HTMLVideoElement
    >(urlList: U, k: keyof U, elem: GElement | null) {

}
mountVideo(videos, "format1080p", document.querySelector("div"))
mountVideo<VideoFormatURLs>(videos, "format1080p", document.querySelector("video"))


class Container<GElement extends HTMLElement = HTMLVideoElement> {
     #element: GElement | null = null;

     constructor() {}

     set element(value: GElement) {
         this.#element = value
     }

     mount(video: URL) {
         // TODO
     }
}

const arr = new Array<number>();
arr.push(2)
arr

const container = new Container()
let element = document.querySelector("video");
if(element) {
    container.element = element;
    container.element
}

export {}