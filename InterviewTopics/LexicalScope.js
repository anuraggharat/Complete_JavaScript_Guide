var x = 6;
function z(){
    var y = 5
    return x + y;
}
console.log(z())
// 11 will be printed as x falls under lexical scope of z.
//console.log(y)
// Y will be not defined since it is inside the function

function a(){
    var var1=1
    function b(){
        var var2=2
        function c(){
            var var3=3
            var2=20
            var1=10
            console.log(var1+var2+var3);
        }
        c()
    }
    b()
}

a()

