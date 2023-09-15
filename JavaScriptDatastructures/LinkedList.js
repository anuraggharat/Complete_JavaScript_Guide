class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
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
            this.head = node
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
ll.removeFrom(0)
ll.removeFrom(5)
ll.removeFrom(2)
console.log(ll.print())
