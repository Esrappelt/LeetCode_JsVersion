var myAtoi = function(str) {
    let res = parseInt(str);
    if(isNaN(res)) return 0;
    if(res < 0 - 2 ** 31 ) return 0 - 2 ** 31;
    if(res > 2 ** 31 - 1) return 2 ** 31 - 1;
    return res;
    
};
let res = myAtoi("-91282332");
console.log(res);
