declare module "*.css" {
    interface ClassNames {
        [x: string]: string
    }

    const classNames: ClassNames;
    export default classNames
}

declare module "*.svg"

declare module "*.css" {
    const identifier = 42;
}