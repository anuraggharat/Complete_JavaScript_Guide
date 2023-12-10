function checkPanagram(str=''){
    const output = Array(26).fill(0)
    let index = 0
    let strArr = str.toLowerCase().replaceAll(' ','').split('')
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i].charCodeAt(0) >= 'A'.charCodeAt(0) && strArr[i].charCodeAt(0) <= 'Z'.charCodeAt(0)){
            index = strArr[i].charCodeAt(0) - 'A'.charCodeAt(0)
        }else if(strArr[i].charCodeAt(0) >= 'a'.charCodeAt(0) && strArr[i].charCodeAt(0) <= 'z'.charCodeAt(0)){
            index = strArr[i].charCodeAt(0) - 'a'.charCodeAt(0)
        }else{
            continue
        }
        output[index] = 1
    }
    return output.every((i)=>i===1)
}

let text = 'The quick brown fox jumps over the lazy dog'
console.log(checkPanagram(text))