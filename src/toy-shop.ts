type ToyBase = {
    name: string,
    price: number,
    quanity: number,
    mininumAge: number,
}

type BoardGame = ToyBase & {
    players: number,
    kind: "boardgame"
}

interface Puzzle extends ToyBase {
    pieces: number,
    kind: "puzzle"
}

type Doll = ToyBase & {
    material: "plastic" | "plush",
    kind: "doll"
}

type VideoGame = ToyBase & {
    kind: "videogame",
    system: "NES" | "SNES" | "Master System",
    cartridge: boolean
}

type Toy = BoardGame | Puzzle | Doll | VideoGame

function assertNever(val: never) {
    throw Error("This situation can never happen")
}

function printToy(toy: Toy) {
    switch(toy.kind) {
        case "boardgame":
            console.log("Players", toy.players);
            break;
        case "doll":
            console.log("Material", toy.material);
            break;
        case "puzzle":
            console.log("Pieces", toy.pieces);
            break;
        case "videogame":
            console.log("System", toy.system)
            break;
        default:
            assertNever(toy)
    }
}

type ToyKind = Toy["kind"] // Index Access Types

type GroupedToys = {
    [Kind in ToyKind]: Toy[] // Mapped Type
}

declare const toy: Toy


type BoardGameKeys = keyof BoardGame

type OptionalBoardGame = {
    [Key in keyof BoardGame]?: BoardGame[Key] // Mapped Type und Mapped Type Modifier
}

/*
-readonly
readonly
?
-?
*/

function groupToys(toys: Toy[]): GroupedToys {
    let group: GroupedToys = { // Excess property checking
        boardgame: [],
        doll: [],
        puzzle: [],
        videogame: []
    }

    for(const toy of toys) {
        group[toy.kind].push(toy)
    }

    return group
}

export {}
