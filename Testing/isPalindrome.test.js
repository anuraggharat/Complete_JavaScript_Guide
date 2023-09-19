const isPalindrome = require('./isPalindrome')

test('Should be Palindrome',()=>{
    expect(isPalindrome('moom')).toBe(true)
})
test('Should not be palindrome',()=>{
    expect(isPalindrome('anurag')).not.toBe(true)
})