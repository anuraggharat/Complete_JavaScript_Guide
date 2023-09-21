const sum = require('./sum')

describe('Sum function should work correctly',()=>{
    test('Sum must be 3',()=>{
        expect(sum(1,2)).toBe(3)
    })
    it('Sum must be 4',()=>{
        expect(sum(2,2)).toBe(4)
    })
})

afterAll(()=>{
    console.log('After all')
})