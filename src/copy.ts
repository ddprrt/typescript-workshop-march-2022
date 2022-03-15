const defaultOptions = {
    src: "./src",
    dest: "./dist",
    overwrite: false
}

function copy(filename: string, options: Partial<typeof defaultOptions> = {}) {

}

copy("main.ts", {
    src: "./source"
})

export {}