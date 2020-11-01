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

type Args = [string, ...number[]];
const func3 = (f: string, ...args: Args) => args[0];
const v1 = func3('foo', 'bar');
const v2 = func3('foo', 'bar', 1, 2, 3);

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
