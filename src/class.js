var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.method = function () {
        console.log('Hello');
    };
    return Foo;
}());
var obj = new Foo();
console.log(obj.method());
//# sourceMappingURL=class.js.map