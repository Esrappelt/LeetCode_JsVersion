var searchInsert = function(nums, target) {
    let len = nums.length;
    if(target < nums[0]) return 0;
    if(target > nums[len-1]) return len;
    let index = nums.indexOf(target);   
    if(index !== -1) {
        return index;
    }
    for(let i = 0; i < len - 1; i++) {
        if(target > nums[i] && target < nums[i+1] ) {
            return i+1;
        } 
    }
};
const searchInsert2 = (nums,target) => {
    let low = 0,high = nums.length - 1;
    while(low <= high) {
        let middle = parseInt(low + (high - low) / 2);
        if(target == nums[middle]) return middle;
        if(target < nums[middle]) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return low <= high ? low + 1 : high + 1;
};


let res = searchInsert([1,3,5,6],2);
console.log(res);
