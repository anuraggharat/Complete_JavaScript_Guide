`
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
`

var containsDuplicate = function(nums) {
    const newSet = new Set(nums)
    return nums.length !== newSet.size
};