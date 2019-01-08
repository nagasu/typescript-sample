// 関数型
const f: (foo: string) => number = func;

function func(arg: string): number {
    return Number(arg)
}

f('111');

// 可変長引数
const func2 = (foo: string, ...bar: number[]) => bar;
func2('foo');
func2('foo', 1, 2, 3);

// void型
const aaa: void = undefined;
// const b: undefined = a;

function fooo(): void {
    console.log('hello');
}

function bar(): undefined {
    console.log('hello');
    return undefined;
}
