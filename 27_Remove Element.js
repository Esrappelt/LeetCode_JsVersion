var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(val == nums[i]) {
            nums.splice(i--,1);
        }
    }
    console.log(nums);
};


var removeElement2 = (nums,val) => {
    let slow = 0,fast = 0,len = nums.length;
    //双指针
    while(fast < len) {
        if(nums[fast] != val) {
            nums[slow++] = nums[fast];
        }
        fast++;
    }
    console.log(nums);
    return slow;
};
removeElement2([0,1,2,2,3,0,4,2],2);