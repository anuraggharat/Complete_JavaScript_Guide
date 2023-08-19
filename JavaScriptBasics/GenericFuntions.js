const radius = [1,2,3,4]

//first order functions - take primite and return primitive type
const circumference = (r) => Math.round(2 * Math.PI * r)

const area = (r) => Math.round(Math.PI * r * r)

const diameter = (r) => 2 * r


//generic higher order function that takes a function as argument
const calculate = (radius,logic) => {
    let output = []
    for (let index = 0; index < radius.length; index++) {
        output.push(logic(radius[index]))
    }
    console.log(output.toString());
}

calculate(radius,circumference)
calculate(radius,area)
calculate(radius,diameter)

