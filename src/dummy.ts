

type VideoFormatURLs = {
    format360p: URL,
    format480p: URL,
    format720p: URL,
    format1080p: URL
}


type AvailableFormats = {
    [K in keyof VideoFormatURLs]: {
        [P in K]: VideoFormatURLs[K]
    }
}[keyof VideoFormatURLs]

class Container<GElement> {
  
    #element: GElement | null = null;
  
    constructor() {
    }
  
    set element(value: GElement) {
      this.#element = value
    }
}

const container = new Container();
  

export {}