class User{

    constructor(name,email){
        this.name=name;
        this.email=email
    }

    getInfo(){
        console.log(`User is ${this.name} and email is ${this.email}`)
    }
}


//this is named export
//module.exports.User = User

//this is default export
//module.exports = User;

export default User;