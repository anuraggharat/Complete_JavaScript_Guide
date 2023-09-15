class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
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
    prepend(value){
        const node = new Node(value)
        if (this.isempty()) {
            this.head = node;
        }else{
            node.next = this.head;
            this.head.prev = node
            this.head=node
        }
        this.size++;
    }
    append(value){
        const node = new Node(value)
        if (this.isempty()) {
            this.head=node
        }else{
            let pointer=this.head;
            while (pointer.next !== null) {
                pointer=pointer.next
            }
            node.prev=pointer
            pointer.next=node
        }
        this.size++;
    }
    insert(value,position){
        if (position<0 || position>this.size) {
            return
        }
        const node = new Node(value)
        if (this.isempty()) {
            this.head=node
        }else{
            let pointer=this.head;
            let i = 0;
            while(i < position-1) {
                pointer=pointer.next
                i++;
            }
            node.prev=pointer
            node.next=pointer.next
            pointer.next.prev=node
            pointer.next=node
        }
        this.size++;
    }
    removeFrom(position){
        if (position<0 || position>this.getSize()) {
            return 
        }
        let removed;
        if (position===0) {
            removed=this.head;
            this.head=this.head.next
            this.head.prev=null
        }else{
            let i = 0;
            let pointer=this.head;
            while (i < position-1) {
                pointer=pointer.next;
                i++;
            }
            removed=pointer
            if (pointer.prev) pointer.prev.next=removed.next
            if (pointer.next) pointer.next.prev=removed.prev
            pointer.next=null
            pointer.prev=null
        }
        this.size--
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
    reverse(){
        let prev=null;
        let next=null;
        let curr=this.head;
        while(curr){
            next = curr.next;
            curr.next=prev;
            prev = curr
            curr = next;
        }
        this.head=prev;
    }
}


const dl = new DoublyLinkedList()
dl.append(4)
dl.append(7)
dl.prepend(1)
dl.append(0)
console.log(dl.print())
dl.append(2)
dl.append(9)
console.log(dl.print())
dl.removeFrom(5)
console.log(dl.print())
dl.removeFrom(5)
console.log(dl.print())
dl.removeFrom(2)
console.log(dl.print())


