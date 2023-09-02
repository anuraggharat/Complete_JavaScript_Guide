function towerOfHanoi(n,from,to,using){
    if (n===1) {
        console.log(`Move ${n} from ${from} to ${to}`)
        return 
    }
    towerOfHanoi(n-1,from,using,to)
    console.log(`Move ${n} from ${from} to ${to}`)
    towerOfHanoi(n-1,using,to,from)     
}

towerOfHanoi(3,'A','C','B')