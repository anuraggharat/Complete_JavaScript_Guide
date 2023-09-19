const sum = require('./sum')

test('Sum must be 3',()=>{
    expect(sum(1,2)).toBe(3)
})