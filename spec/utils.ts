export const add = (a: number, b: number) => a + b;

export function isEven(num: number): boolean {
    return num % 2 === 0;
}

type FormatDecorator = (x: string) => string;

export function formatter(message: string, f: FormatDecorator = identity): string {
    return f(message.replace(' ', '_').toUpperCase());
}

export function identity(x: any) {
    return x;
}

export function jesseDecorator(char: string): FormatDecorator {
    return (s: string) => `${char}${char}${char}${s}${char}${char}${char}`;
}
