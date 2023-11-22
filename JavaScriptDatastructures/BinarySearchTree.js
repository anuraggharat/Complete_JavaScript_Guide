class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode; 
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if (root.right === null) {
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if (!root) {
            return false
        }else{
            if (root.value === value) {
                return true
            }else if (value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if (root) {
            console.log(" " + root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(" " + root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(" " + root.value)
        }
    }
    bfstraversal(){
        const queue = []
        queue.push(this.root)
        while (queue.length) { 
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }
    getMin(root){
        if (!root.left) {
            return root.value
        }else{
            return this.getMin(root.left)
        }
    }
    getMax(root){
        if (!root.right) {
            return root.value
        }else{
            return this.getMax(root.right)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    //function to find the node to delete
    //also returns a node which becomes the new node
    deleteNode(root,value){
        if (root===null) {
            return null
        }else if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            //if value has found what to do
            //no child node then make the node null i.e delete
            if (!root.left && !root.right) {
                return null
            }
            //return the element which will take the place of the deleted node
            if (!root.left && root.right) {
                return root.right
            }else if (!root.right && root.left) {
                return root.left
            }
            //copy the inorder successor(right) and delete it
            //in BST the inorder successor is the node with least value in right sub tree
            root.value = this.getMin(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root;
    }
    
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.isEmpty())
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,22))
console.log(bst.search(bst.root,3))
//bst.preOrder(bst.root)  
//bst.inOrder(bst.root)
//bst.preOrder(bst.root)
bst.bfstraversal(bst.root)
//console.log(bst.getMax(bst.root))
//console.log(bst.getMin(bst.root))
bst.delete(15)
bst.bfstraversal(bst.root)

