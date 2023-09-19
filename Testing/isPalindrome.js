function checkPalindrome(string=''){
    return string.toLowerCase() === string.toLowerCase().split('').reverse().join().replaceAll(',','')
}
module.exports = checkPalindrome