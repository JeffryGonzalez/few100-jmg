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
    });
});
