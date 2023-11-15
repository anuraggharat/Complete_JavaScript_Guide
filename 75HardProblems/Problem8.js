var maxProduct = function(nums) {
    
    let prod = 0;
    if(nums.length === 1){
        return nums[0]
    }
    for(let i = 1; i < nums.length; i++){
    
        nums[i] = Math.max(nums[i],nums[i-1]*nums[i])
        prod = Math.max(prod,nums[i])
    }
    console.log(nums);
    return prod
};


console.log(maxProduct([-2,3,-4]))