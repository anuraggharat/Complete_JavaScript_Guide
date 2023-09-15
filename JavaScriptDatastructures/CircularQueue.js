class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.currentLength = 0;
        this.front= -1;
        this.rear = -1;
        this.capacity=capacity;
    }
    isEmpty(){
        return this.currentLength === 0
    }
    isFull(){
        return this.currentLength === this.capacity
    }
    enqueue(ele){
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = ele;
            this.currentLength++;
            if (this.front===-1) {
                this.front++;
            }
        }else if(this.isFull() && this.front > 0){

        }
    }
    secondEnqueue(ele){
        if (!this.isFull()) {
            if (this.front > 0 && this.rear === this.capacity-1) {
                this.rear=0;
                this.items[this.rear] = ele;
            }else{
                this.rear++;
                this.items[this.rear] = ele;
            }
            this.currentLength++;
            if(this.front===-1){
                this.front++;
            }
        }
    }
    dequeue(){
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength--;
        if (this.isEmpty()) {
            this.front,this.rear=-1
        }
        return item;
    }
    peek(){
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null;
    }
    top(){
        if (!this.isEmpty()) {
            return this.items[this.rear]
        }
        return null;
    }
    print(){
        if (this.isEmpty()) {
            return "Is Empty"
        }
        else{
            let i ;
            let str = ''
            for (i = this.front; i !== this.rear; i=(i+1)%this.capacity) {
                str += this.items[i] + " "
            }
            str += this.items[i] + " "
            return str
        }
    }
}

const queue = new CircularQueue(4)
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
console.log(queue.peek())
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.top())
console.log(queue.print())
queue.dequeue()
queue.dequeue()
console.log(queue.print())
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.print())
console.log(queue.items)



