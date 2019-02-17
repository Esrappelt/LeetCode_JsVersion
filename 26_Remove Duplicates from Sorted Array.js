var removeDuplicates2 = function(nums) {
    let len = nums.length;
    let map = new Map();
    for (const key of nums) {
        if(map.has(key)) {
            map.set(key,map.get(key)+1);
        } else {
            map.set(key,1);
        }
    }
    let maplen = map.size;
    for (const [key,value] of map) {
        if(value > 1) {
            let index = nums.indexOf(key);
            nums.splice(index,value-1);
        }
    }
};
var removeDuplicates = (nums) => {
    for(let i = 0; i < nums.length; i++) {//实时改变nums.length
        if(nums[i] == nums[i+1]) {
            nums.splice(i--,1);
        }
    }
};


removeDuplicates2([1,1,1,1,1,1,2,2,3,3]);