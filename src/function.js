var f = func;
function func(arg) {
    return Number(arg);
}
f('111');
var func2 = function (foo) {
    var bar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bar[_i - 1] = arguments[_i];
    }
    return bar;
};
func2('foo');
func2('foo', 1, 2, 3);
var aaa = undefined;
function fooo() {
    console.log('hello');
}
function bar() {
    console.log('hello');
    return undefined;
}
//# sourceMappingURL=function.js.map