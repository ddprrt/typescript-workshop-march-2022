function assertNumber(x: any): asserts x is number {
    if(typeof x !== "number") {
        throw new Error("Not a Number!")
    }
}

function multipy(x: any, y: any) {
    assertNumber(x)
    assertNumber(y)
    return x * y;
}

multipy(3, 5)


let storage = {
    currentValue: 0,
}

type InferValue<Desc extends PropertyDescriptor> =
    Desc extends { get(): infer T } ? T :
    Desc extends { value: infer T } ? T : never

type DefineProperty<Key extends PropertyKey, Desc extends PropertyDescriptor> = {
    [K in Key]: InferValue<Desc>
}


function defineProperty<Obj extends object, Key extends PropertyKey, Desc extends PropertyDescriptor>(
    obj: Obj, prop: Key, desc: Desc): asserts obj is Obj & DefineProperty<Key, Desc> {
    desc.enumerable = true;
    Object.defineProperty(obj, prop, desc);
}


defineProperty(storage, "maxValue", {value: 9000 })
defineProperty(storage, "value", {
    get() {
        return storage.currentValue
    }
})
storage.maxValue
storage.value

function markComplete<Obj extends { complete: boolean }>(obj: Obj): asserts obj is Obj & { complete: true } {
    obj.complete = true;
}

const task = {
    name: "Teach TypeScript",
    date: new Date(),
    complete: false
}

markComplete(task)


window.ResizeObserver

export {}