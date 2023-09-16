class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key,value]]
        }else{
            const sameKey = bucket.find((item)=>item[0]===key)
            if (sameKey) {
                sameKey[1] = value
            }else{
            bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find((item)=>item[0]===key)
            if (sameKey) {
                return sameKey[1];
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        const sameKey = bucket.find((item)=>item[0]===key)
        if (sameKey) {
            bucket.splice(bucket.indexOf(sameKey),1)
        }
    }
    print(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(`Position - ${i}, value ${this.table[i]}`)
            }   
        }
    }
}

const ht = new HashTable(50)
ht.set("tony","ironman")
ht.set("steve","cap")
ht.set("hulk","bruce")
ht.set("peter","spiderman")
ht.set("tnoy","genius")

console.log(ht.get("tony"))
console.log(ht.get("steve"))
console.log(ht.get("blackwidow"))
ht.remove("steve")
ht.print()


