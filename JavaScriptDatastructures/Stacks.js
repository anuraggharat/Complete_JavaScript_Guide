class Stack{
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    print(){
        return this.items.toString()
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
console.log(stack.peek())
stack.push('a')
console.log(stack.print())
console.log(stack.pop())
console.log(stack.print())
console.log(stack.isEmpty())