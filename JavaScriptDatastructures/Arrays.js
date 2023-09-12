//using array literal
let arr1 = [1,2,3,4]
//copy by reference - both the variables reference the same array
// hence any change in arr1 will affect the arrCopy array as well
let arrCopy = arr1
console.log("arrCopy = ",arrCopy)
arr1[3]=5
console.log("arr1 = ",arr1)
console.log("arrCopy = ",arrCopy)

//since array is an object at its core, technically we can do this.
console.log(arr1.test=5)


//using array method
let arr2 = new Array("1","a",2,"b")

console.log(arr1)
console.log(arr2)

//adding a new element
arr1.push(5)
arr1[5] = 6

console.log(arr1)

let arr3 = [1,"a",null,undefined,function(){console.log("Hello")},"value",{name:"Anurag",age:23}]

console.log(arr3[3])
arr3[4]()

//trimming an array
console.log(arr1.length)
arr1.length=2
console.log(arr1)

//add an element
//push adds an element at the end
arr1.push(10)
console.log(arr1)

//unshift adds an element at the begining of the array and returns the new length of array
arr1.unshift(0)
console.log(arr1)


//remove an element from array
//pop will remove an element from the end
arr1.pop()
console.log(arr1)

//shift will remove an element from the begining
arr1.shift()
console.log(arr1)

//joining an array
let arr4 = arr1.concat(arr2)
console.log(arr4)

let arr5 = [...arr1,...arr2]
console.log(arr5)

//find element
//returns element if found
console.log(arr1.find(ele=>ele===2))

//returns undefined if not found
console.log(arr1.find(ele=>ele===5))


//find index of element
//returns index if element is found
console.log(arr1.findIndex(ele=> ele===1))

//returns -1 if not found
console.log(arr1.findIndex(ele=> ele==='z'))


//finding an object from an array using find method
const users = [
    {
        id:1,
        name:'Anurag',
        age:24
    },
    {
        id:2,
        name:'Tony',
        age:40
    },
    {
        id:3,
        name:'Steve',
        age:100
    },
    {
        id:4,
        name:'Thor',
        age:1000
    }
]


function findSuperHero(user){
    return user.age >=40;
}

console.log(users.find(findSuperHero))
console.log(users.find(user=>user.name==='Steve'))

//includes

console.log(arr5.includes(1))
console.log(arr5.includes(11))

//splice in array

const nums = [1,2,3,4,5]
console.log(nums.splice(0,1))
console.log(nums)

//add elements in the array using splice()
nums.splice(nums.length,0,6,7)
console.log(nums)
nums.splice(0,0,0,1)
console.log(nums)

//slice an array
console.log(nums.slice(nums.length/2))

//reverse an array
console.log(nums.reverse())
//sort an array
console.log(nums.sort())
//sort method sorts the array lexically
const array = [1,11,33,2,44,21]
console.log(array.sort());
//[ 1, 11, 2, 21, 33, 44 ]
function sortAscending(x,y){
    if (x>y) {
        return 1
    }else if(x==y){
        return 0
    }else{
        return -1
    }
}
console.log(array.sort(sortAscending));
console.log(array.sort((x,y)=>x-y));

//join
console.log(nums.join('-|-'))