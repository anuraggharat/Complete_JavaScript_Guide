const compose = (...fns) => val => fns.reduceRight((prev,fn)=>fn(prev),val)
const pipe = (...fns) => val => fns.reduce((prev,fn)=>fn(prev),val)



const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequatur dolorem delectus!'
const removeSpaces = (text) => text.split(' ');
const countWords = (arr) => arr.length

const wordCount1 = pipe(removeSpaces,countWords);
console.log(wordCount1(text));
const wordCount2 = compose(countWords,removeSpaces);
console.log(wordCount2(text));

function multiplyBy2(x){
    return x*2
}

function substractBy4(x){
    return x-4
}

function add10(x){
    return x+10
}

function compose2(...fns){
    return function(arg){
        //since we are iterating over an array it should be current
        return fns.reduce((arg,fn)=>(fn(arg)),arg)
    }
}


const evaluate = compose2(add10,substractBy4,multiplyBy2)
console.log(evaluate(10))