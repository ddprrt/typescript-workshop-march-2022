type Union = { name: string, age: number } | { age: string }

const y = {
    name: "Stefan",
    age: "30",
    profession: "Software Engineer",
    country: "Austria",
    city: "Linz"
};

const x: Union = y


type RobotMode = "START" | "STOP" | "REVERSE"

function command(mode: RobotMode) {

}

command("START")

type Human = { name: string, age: number }

type Student = { name: string, id: string }

const person = {
    name: "Stefan",
    age: 39,
    profession: "Software Engineer",
    id: "XAB"
}

type HumanStudent = Human & Student

const student: HumanStudent = {
    age: 39,
    name: "Stefan",
    id: "XAB"
}

const valid_dice_numbers = [1, 2, 3, 4, 5, 6] as const;
type Dice = typeof valid_dice_numbers[number]

function is_dice(input: number) {
    typeof input === "number"
}

export {}
