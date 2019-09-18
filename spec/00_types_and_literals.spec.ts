describe('declaring variables', () => {
    describe('using let', () => {
        it('declaring a variable with let', () => {
            let name;

            name = 'Jeff';

            expect(name).toBe('Jeff');
            expect(typeof (name)).toBe('string');

            name = 1137;

            expect(name).toBe(1137);
            expect(typeof (name)).toBe('number');
        });
        it('explicitly typing ', () => {
            let name: string | number;
            name = 'Jeff';
            name = 123;
        });
        it('implicitly typed variables', () => {
            let name = 'Jeff';

            name = 'Jeffry';

            // name = 1137;
        });
    });

    describe('constants', () => {
        it('has them and prefers them', () => {
            const pi = 3.1415;

            // pi = 3;

            const friends = ['Sean', 'Reggie', 'Sara'];

            // friends = [];
            friends[2] = 'David';

            const movie = { title: 'The Force Awakens', director: 'Lucas' };

            // movie = {};

            movie.director = 'Abrams';

            const age = 50;

            expect(age).toBe(50);
            console.log('hello');
            const x = 12 + 3;

            const name = 'Pete';

        });
    });
    describe('var and why it is evil and you should not use it.', () => {

        it('does not have block scope!', () => {

            const age = 22;

            if (age > 21) {
                // tslint:disable-next-line: no-var-keyword
                var msg;
                msg = 'Old Enough';
            }

            expect(msg).toBe('Old Enough');
        });

    });

    describe('literals', () => {
        it('has a bunch of numeric literals', () => {
            const n1 = 123;
            const n2 = 3.14;
            const bigNumber = 12_123_520;

            const hexNumber = 0xff;
            const binaryNumber = 0b1010101;
            const octalNumber = 0o567;

            let x: number;
            x = octalNumber;

            const pay = parseInt('42.83', 10);
            expect(pay).toBe(42);
            const pay2 = parseFloat('42.83');
            expect(pay2).toBe(42.83);
        });
        it('string literals', () => {

            const title = 'Jones';
            // tslint:disable-next-line: quotemark
            expect(title).toBe("Jones");

            // const name = 'Flannery O\'Conner'
        });
        it('template strings', () => {
            const s1 = `Tacos`;
            expect(typeof (s1)).toBe('string');

            const story = `My Life Story.

It was a dark and stormy night.

I taught some programming.

The end.`;
            console.log(story);

            const name = 'Bob';
            const age = 49;

            const oldSkool = 'The name is ' + name + ' and the age is ' + age + ' years';
            const newSkool = `The name is ${name} and the age is ${age} years`;
            expect(newSkool).toBe(oldSkool);


        });

        it('has array literals', () => {
            const luckyNumbers = [9, 20, 108];
            expect(luckyNumbers[0]).toBe(9);
            luckyNumbers[999] = 50;

            expect(luckyNumbers[100]).toBeUndefined();

            let friends: string[];

            friends = ['Bill', 'Beth'];

            let someArray: (string | number)[];
            someArray = [99, 'dog', 'cat', 42];

            const p = someArray[3];

            let someArray2: Array<string | number>;

        });
        it('intro to tuples', () => {

            type SettingOption = 'log' | 'warn' | 'trace';
            type Setting = [boolean, SettingOption, SettingOption, SettingOption];

            let setting: Setting;

            setting = [true, 'log', 'warn', 'trace'];

            // setting = ['dog', false]; // won't compile
            const isSet = setting[0];

            const allowLog = setting[1];


        });
    });

    describe('function literals', () => {
        it('three different ways to declare a function - plus methods in a class we will do later', () => {

            expect(add(10, 2)).toBe(12);
            // Named Function
            function add(a: number, b: number): number {
                return a + b;
            }
            // 'Anonymous Functions'

            const subtract = function (a: number, b: number): number {
                return a - b;
            };

            const multiply = (a: number, b: number): number => a * b;

            const divide = (a: number, b: number): number => {
                if (b === 0) {
                    throw new Error('Are you trying to open a black hole!?');
                } else {
                    return a / b;
                }
            };
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(10, 2)).toBe(20);
        });
    });
});
