//we can also use mixins
class Pokemon{
    constructor(name){
        this.name=name
    }
}
const canFly = {
    fly(){console.log(`${this.name} can fly`)}
}
const canSwim = {
    swim(){console.log(`${this.name} can swim`)}
}
const canRun = {
    run(){console.log(`${this.name} can rum`)}
}
const canAttack = {
    attack(){console.log(`${this.name} can attack`)}
}
const raichu = Object.assign({},canAttack,canRun)
Object.assign(Pokemon.prototype,canFly,canAttack,canRun,canSwim)
const mewto = new Pokemon('mewto')
mewto.fly()
mewto.run()
mewto.swim()
mewto.attack()