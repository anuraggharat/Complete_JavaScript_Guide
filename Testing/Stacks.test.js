const Stack =  require("./Stacks");

describe('Stack is working correctly',()=>{
    let stack
    beforeAll(()=>{
        stack = new Stack()
    })

    it('Should be empty', () => {
        stack.isEmpty()
        expect(stack.isEmpty()).toBe(true)
    });
    it('Push should work',()=>{
        stack.push(1)
        expect(stack.peek()).toEqual(1)
    })
    it('Pop should work',()=>{
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toEqual(3)
    })
})