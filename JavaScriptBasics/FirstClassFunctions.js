function add(x,y){
    return x+y
}

function perform(ops,a,b){
    console.log(ops(a,b));
}

perform(add,1,2)