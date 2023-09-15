class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail=null;
        this.size = 0
    }
    isempty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }
    print(){
        if (this.isempty()) {
            return "Empty List"
        }
        let curr = this.head
        let output = ""
        while (curr) {
            output += curr.value + " -> "
            curr = curr.next;
        }
        return output;
    }
    push(value){
        const node = new Node(value)
        if (this.isempty()) {
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++;
    }
    pop(){
        const value = this.head;
        this.head=this.head.next;
        this.size--;
        return value;
    }
    search(value){
        if (this.isempty()) {
            return "Empty List"
        }
        let i = 0;
        let pointer = this.head
        while(pointer){
        if (pointer.value===value) {
            return `Position ${i}`;
            }
            i++;
            pointer=pointer.next;
        }
        return "Not Found"
    }
    peek(){
        return this.head;
    }
}


const ll = new LinkedList()
console.log(ll.isempty())
console.log(ll.getSize())
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.pop()
console.log(ll.print())


