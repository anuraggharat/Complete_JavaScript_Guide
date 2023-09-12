class Queue{
    constructor(){
        this.items=[]
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        return this.items.shift()
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

const queue = new Queue()
queue.push(1)
queue.push(2)
console.log(queue.print())
queue.pop()
queue.push(3)
queue.push(4)
queue.push(5)
console.log(queue.print())
console.log(queue.size())
console.log(queue.peek())
