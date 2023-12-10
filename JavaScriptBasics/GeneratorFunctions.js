function* getSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const generator = getSequence()
console.log(generator.next()) //{ value: 1, done: false }
console.log(generator.next()) //{ value: 2, done: false }
console.log(generator.next()) //{ value: 3, done: false }
console.log(generator.next()) //{ value: 4, done: true }


function* getTableOf3(){
    let i = 1;
    while (true) {
        yield i*3;
        i++;
    }
}
const tableOf3 = getTableOf3()
console.log(tableOf3.next().value) //3
console.log(tableOf3.next().value) //6
console.log(tableOf3.next().value) //9
console.log(tableOf3.next().value) //12