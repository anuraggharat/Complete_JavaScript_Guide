//queue in the form of obj
// obj = { 1:"", 2:"", 3:""  }

class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(ele){
        this.items[this.rear] = ele
        this.rear++;
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        return item;
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        return Object.values(this.items)
    }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.print())
queue.dequeue()
console.log(queue.print())
console.log(queue.peek())

