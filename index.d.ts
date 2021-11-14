// see https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029
interface HTMLDialogElement extends HTMLElement {
	open: boolean
	returnValue: string
	close(returnValue?: string): void
	show(): void
	showModal(): void
	addEventListener<K extends keyof HTMLElementEventMap>(
		type: K,
		listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any,
		options?: boolean | AddEventListenerOptions,
	): void
	addEventListener(
		type: string,
		listener: EventListenerOrEventListenerObject,
		options?: boolean | AddEventListenerOptions,
	): void
	removeEventListener<K extends keyof HTMLElementEventMap>(
		type: K,
		listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any,
		options?: boolean | EventListenerOptions,
	): void
	removeEventListener(
		type: string,
		listener: EventListenerOrEventListenerObject,
		options?: boolean | EventListenerOptions,
	): void
}

declare var HTMLDialogElement: {
	prototype: HTMLDialogElement
	new (): HTMLDialogElement
}
