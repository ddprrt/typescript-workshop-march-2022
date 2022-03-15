import type {
	MouseEventHandler,
	KeyboardEventHandler,
	MouseEvent,
	KeyboardEvent,
	
} from "react";

type Handler = 
  MouseEventHandler<HTMLButtonElement> | 
  KeyboardEventHandler<HTMLButtonElement>;

type Ev<T> = 
  T extends MouseEventHandler<infer R> ? MouseEvent<R> :
  T extends KeyboardEventHandler<infer R> ? KeyboardEvent<R> : never;

function apply<T extends Handler>(handler: T, ev: Ev<T>): void {
    //@ts-expect-error
    handler(ev)
}

declare const mouseHandler: MouseEventHandler<HTMLButtonElement>;
declare const mouseEv: MouseEvent<HTMLButtonElement>
declare const keyboardHandler: KeyboardEventHandler<HTMLButtonElement>;
declare const keyboardEv: KeyboardEvent<HTMLButtonElement>;

apply(mouseHandler, mouseEv);
apply(keyboardHandler, keyboardEv)

declare const handlers: Handler;

apply(handlers, mouseEv)

function better_apply<T>(handler: MouseEventHandler<T>, ev: MouseEvent<T>): void
function better_apply<T>(handler: KeyboardEventHandler<T>, ev: KeyboardEvent<T>): void
function better_apply(handler: any, ev: any): void {
    handler(ev)
}

better_apply(mouseHandler, mouseEv);
better_apply(keyboardHandler, keyboardEv)
//@ts-expect-errors
better_apply(handlers, mouseEv)