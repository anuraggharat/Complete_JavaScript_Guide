const obj ={
    username:'anurag',
    print(){
        console.log(this.name)//anurag
    },
    speak:()=>{
        console.log(this?.name)//undefined
    }
}
const username = 'robert'
obj.print()
obj.speak()

//binding this
function getName(){
    console.log(this.username)
}
const bindName = getName.bind(obj)
bindName()