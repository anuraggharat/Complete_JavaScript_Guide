class LRU{
    constructor(size){
        this.size = size
        this.lru = new Map()
    }
    add(key,value){
        if (this.lru.has(key)) {   
            return
        }else if(this.lru.size === this.size){
            let index = this.getLRU()
            this.lru.delete(index) 
            this.add(key,value)
        }else{
            this.lru.set(key,value) 
        }
    }
    get(key){
        let val;
        if(this.lru.has(key)){
            val =  this.lru.get(key)
            this.lru.delete(key)
            this.lru.set(key,val)
        }
    }
    getLRU(){
        if (this.lru.size > 0) {
            return this.lru.keys().next().value
        }
    }
}

const lru = new LRU(3)
lru.add(1,{name:'anurag'})
lru.add(2,{name:'tony'})
lru.add(3,{name:'steve'})
console.log(lru.lru)
lru.get(1)
lru.get(3)
console.log(lru.lru)
lru.add(4,{name:'banner'})
console.log(lru.lru)

