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
        if (this.isempty()) {
            return null
        }
        const value = this.tail;
        if (this.size===1) {
         this.head,this.tail=null;   
        }
        else{
            let prev = this.head;
            while(prev.next!==this.tail){
                prev=prev.next;
            }
            prev.next=null;
            this.tail=prev;
        }
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
        return this.head
    }
}


const ll = new LinkedList()
ll.push(12)
ll.push(24)
ll.push(36)
ll.push(48)
ll.pop()
console.log(ll.print())


