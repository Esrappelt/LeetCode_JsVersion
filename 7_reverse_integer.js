let reverse = function (x) {
    const flag = x < 0 ? -1 : 1;
    x = Math.abs(x);
    const res = Number(
        String(x).split("").reverse().join("")
    ) * flag;
    console.log(res);
    
    if(res > (2 ** 31 - 1) || res < (0 - 2 ** 31)) return 0;
    return res;
} 
console.log(reverse(-123));
