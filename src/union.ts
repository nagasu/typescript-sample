let value: string | number = 'foo';
value = 100;
value = 'bar';

interface Hoge {
    foo: string;
    bar: number;
}
interface Piyo {
    foo: number;
    baz: boolean;
}

type HogePiyo = Hoge | Piyo;

const obcdef: HogePiyo = {
    foo: 'hello',
    bar: 0
}