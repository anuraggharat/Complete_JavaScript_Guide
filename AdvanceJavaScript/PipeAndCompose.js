const compose = (...fns) => val => fns.reduceRight((prev,fn)=>fn(prev),val)
const pipe = (...fns) => val => fns.reduce((prev,fn)=>fn(prev),val)



const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequatur dolorem delectus!'
const removeSpaces = (text) => text.split(' ');
const countWords = (arr) => arr.length

const wordCount1 = pipe(removeSpaces,countWords);
console.log(wordCount1(text));
const wordCount2 = compose(countWords,removeSpaces);
console.log(wordCount2(text));


