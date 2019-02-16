
var twoSum = function(nums, target) {
	for(var i in nums) {
		var indexText = nums.indexOf(target - nums[i],parseInt(i) + 1);
		if(indexText !== -1) return [parseInt(i),indexText];
	}
};
var arr = [2, 7, 11, 15];
var res = twoSum(arr,18);
console.log(res);
