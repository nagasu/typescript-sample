interface Foooo<S, T> {
    foo: S;
    bar: T;
}

const objjj: Foooo<number, string> = {
    foo: 3,
    bar: 'hi',
};

console.log(objjj.bar)