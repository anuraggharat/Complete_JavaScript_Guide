`
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
`


var maxSubArray = function (nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
    //checking combine value and without combine
    nums[i] = Math.max(nums[i],nums[i]+nums[i - 1]);
    sum = Math.max(nums[i], sum)
    }
    console.log(nums)
    return sum;
    }