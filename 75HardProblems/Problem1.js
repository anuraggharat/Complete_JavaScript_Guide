`
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

`


//using two loops
// var twoSum = function(nums, target) {
//     for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[i]+nums[j] === target ){
//                 return [i,j]
//             }
//         }
//     }
//     return null
// };

//using object and map

var twoSum = function(nums, target) {
    const map = {}
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = i
    }

    for(let i = 0; i < nums.length; i++){
        let compliment = target - nums[i]
        if(map[compliment] !== undefined && map[compliment] !== i){
            return [i,map[compliment]]
        }
    }
    return null
};

var twoSum = function(nums, target) {
    const map = {}
    for(let i = 0; i < nums.length; i++){
        let compliment = target - nums[i]
        if(map[compliment] !== undefined && map[compliment] !== i){
            return [i,map[compliment]]
        }
        map[nums[i]] = i
    }
    return null
};

console.log(twoSum([3,2,4],6))