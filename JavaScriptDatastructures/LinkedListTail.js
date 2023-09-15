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
    prepend(value){
        const node = new Node(value)
        if (this.isempty()) {
            this.head = node;
            this.tail=node
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }
    append(value){
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
            node.next=pointer.next
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
        }else{
            let i = 0;
            let pointer=this.head;
            while (i < position-1) {
                pointer=pointer.next;
                i++;
            }
            removed = pointer.next;
            pointer.next=removed.next
        }
        this.size--
    }
    removeFromFront(){
        const value = this.head;
        this.head=this.head.next;
        this.size--;
        return value;
    }
    removeFromEnd(){
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
    removeValue(value){
        if (this.isempty()) {
            return 
        }
        if (this.head.value===value) {
            this.head = this.head.next;
            this.size--
            return value;
        }else{
            let pointer = this.head
            while (pointer.next && pointer.next.value!==value) {
                    pointer = pointer.next;
            }
            if (pointer.next) {
                pointer.next=pointer.next.next
                this.size--;
                return value;
            }
            return null
        }
        
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


const ll = new LinkedList()
console.log(ll.isempty())
console.log(ll.getSize())
ll.append(10)
ll.prepend(0)
ll.prepend(-10)
ll.prepend(-20)
ll.append(20)
ll.append(30)
ll.insert(5,3)
console.log(ll.print())
ll.removeFromEnd()
ll.removeFromFront()
console.log(ll.print())


