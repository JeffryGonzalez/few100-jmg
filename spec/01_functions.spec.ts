import { isEven, formatter, identity, jesseDecorator } from './utils';


describe('functions', () => {
    describe('parameters to functions', () => {
        it('overloading in JavaScript', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
        describe('returning stuff', () => {
            it('returning multiple things OOP style', () => {
                function formatName(first: string, last: string, mi?: string): { fullName: string, characters: number } {
                    let fullName = `${last}, ${first}`;
                    if (mi) {
                        fullName += ` ${mi}.`;
                    }
                    return {
                        fullName,
                        characters: fullName.length
                    };
                }

                const result = formatName('Han', 'Solo');
                expect(result.fullName).toBe('Solo, Han');
                expect(result.characters).toBe(9);

                // Object Desctructuring

                // const { fullName } = formatName('Luke', 'Skywalker');
                // expect(fullName).toBe('Skywalker, Luke');

                const { fullName: fn } = formatName('Luke', 'Skywalker');
                expect(fn).toBe('Skywalker, Luke');
            });
            it('returning multiple thigns functional style', () => {
                function formatName(first: string, last: string, mi?: string): [string, number] {
                    let fullName = `${last}, ${first}`;
                    if (mi) {
                        fullName += ` ${mi}.`;
                    }
                    return [fullName, fullName.length];
                }

                const result = formatName('Han', 'Solo');
                expect(result[0]).toBe('Solo, Han');
                expect(result[1]).toBe(9);
                // Array Destructuring
                const [fn, jesse] = formatName('Luke', 'Skywalker');
                expect(fn).toBe('Skywalker, Luke');
                expect(jesse).toBe(15);
            });
            it('fun with array destructuring', () => {
                const numbers = [1, 2, 3, 4, 5];

                const [first, , tacos] = numbers;

                expect(first).toBe(1);
                expect(tacos).toBe(3);

                const [head, ...tail] = numbers;
                expect(head).toBe(1);
                expect(tail).toEqual([2, 3, 4, 5]);
            });
            it('fun with object destructuring', () => {

                const employee = {
                    firstName: 'Sue',
                    lastName: 'Smith',
                    job: 'DEV',
                    lastPayChecks: [23_500, 22_800, 18_123]
                };

                // Your one line of code goes here.
                const { job, lastName: last } = employee;

                expect(last).toBe('Smith');
                expect(job).toBe('DEV');

                expect(employee.lastName).toBe('Smith');

            });
            it('adding some numbers', () => {

                function add(a: number = 20, b: number = 10, ...bobby: number[]) {
                    const firstTwo = a + b;
                    return bobby.reduce((s, n) => s + n, firstTwo);
                }
                expect(add(2, 2)).toBe(4);
                expect(add(2)).toBe(12);
                expect(add()).toBe(30);
                expect(add(undefined, 5)).toBe(25);
                expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
            });
        });
    });
});
describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('you can do something with each of these', () => {
        numbers.forEach((n) => console.log(n));

    });
    describe('array methods that return something back to you - like another array', () => {
        it('you can create a new array using filter', () => {
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
        });
        it('create an array of mutated elements', () => {

            const doubled = numbers.map(n => n * 2);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });

        it('your test - make this work', () => {
            // your single statement here
            const doubledEvens = numbers.filter(isEven)
                .map(n => n * 2);

            expect(doubledEvens).toEqual([4, 8, 12, 16]);
        });

        it('return a single value - checking membership', () => {

            const allEven = numbers.every(isEven);
            expect(allEven).toBe(false);

            const someEven = numbers.some(isEven);
            expect(someEven).toBe(true);
        });

        it('boiling an array down to a single value', () => {

            const total = numbers.reduce((c, n) => c + n);
            expect(total).toBe(45);

            const total2 = numbers.reduce((c, n) => c + n, 100);
            expect(total2).toBe(145);
        });
    });

    describe('some more higher order functions', () => {
        describe('a function that takes a function as an argument', () => {
            it('a kind of decorator', () => {
                const response = formatter('Hello World!', identity);
                expect(response).toBe('HELLO_WORLD!');

                const response2 = formatter('Hello World!');
                expect(response2).toBe('HELLO_WORLD!');

                const jesseresponse = formatter('Hello World!', (s) => `***${s}***`);
                expect(jesseresponse).toBe('***HELLO_WORLD!***');

                const bangSurround = jesseDecorator('!');
                const jr2 = formatter('Hello World!', bangSurround);
                expect(jr2).toBe('!!!HELLO_WORLD!!!!');

                const jr3 = formatter('Hello World!', jesseDecorator('@'));
                expect(jr3).toBe('@@@HELLO_WORLD!@@@');
            });
        });
    });
});
