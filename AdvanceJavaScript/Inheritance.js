//Inheritance

class Pokemon{
    constructor(name){
        this.name=name;
    }
    canAttack(){
        console.log(`${this.name} can Attack`)
    }
}
class AirTypePokemon extends Pokemon{
    canFly(){
        console.log(`${this.name} can Fly`)
    }
}
class WaterTypePokemon extends Pokemon{
    canSwim(){
        console.log(`${this.name}can Swim`)
    }
}
class LandTypePokemon extends Pokemon{
    canRun(){
        console.log(`${this.name} can Swim`)
    }
}
//this is not possible
//class AirAndLandTypePokemon extends AirTypePokemon,LandTypePokemon{}

const squirtle = new WaterTypePokemon('squirtle')
squirtle.canAttack()
squirtle.canSwim()
const charizard = new AirTypePokemon('charizard')
charizard.canFly()
const cubone = new LandTypePokemon('charizard')
cubone.canRun()

