function checkPalindrome(str=''){
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

console.log(checkPalindrome('anna'))
console.log(checkPalindrome('maam'))
console.log(checkPalindrome('man'))
console.log(checkPalindrome('anurag'))
