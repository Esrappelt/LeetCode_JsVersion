
//初级版本
let singleNumber2 = (nums) => {
    let map = new Map(),res = [];
    for (const key of nums) {
        if(map.has(key)) {
            map.set(key,map.get(key)+1);
        } else {
            map.set(key,1);
        }
    }
    for (const [key,value] of map) {
        if(value == 1) {
            res.push(key);
        }
    }
    return res;
    
};

//高级版本
//因为a^a = 0,a^0 = a
let singleNumber = (nums) => {
    return [nums.reduce((a,b) => a ^ b,0)];
}
let ans = singleNumber([1,2,2]);
console.log(ans);
