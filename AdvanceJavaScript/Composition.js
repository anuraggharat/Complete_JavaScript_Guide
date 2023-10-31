

function Flying(name){
    return {
        fly:()=>console.log(`${name} can Fly`)
    }
}
function Swimming(name){
    return {
        swim:()=>console.log(`${name} can Swim`)
    }
}
function Running(name){
    return {
        run:()=>console.log(`${name} can Run`)
    }
}
function Attacking(name){
    return {
        attack:()=>console.log(`${name} can Attack`)
    }
}

function AirTypePokemonCreator(name){
    return {
        name,
        ...Flying(name),
        ...Attacking(name)
    }
}
function LandTypePokemonCreator(name){
    return {
        name,
        ...Running(name),
        ...Attacking(name)
    }
}
function WaterTypePokemonCreator(name){
    return {
        name,
        ...Swimming(name),
        ...Attacking(name)
    }
}
//this is possible using Function composition
function LandAndAirPokemonCreator(name){
    return {
        name,
        ...Running(name),
        ...Flying(name),
        ...Attacking(name)
    }
}


const pigeot = AirTypePokemonCreator('pigeot')
pigeot.attack()
pigeot.fly()
const dragonite = new LandAndAirPokemonCreator('dragonite')
dragonite.attack()
dragonite.run()
dragonite.fly()


//we can also use mixins
class Pokemon{
    constructor(name){
        this.name=name
    }
}

const mewto = new Pokemon('mewto')
Object.assign(Pokemon.prototype,new Flying(mewto.name))
mewto.fly()

