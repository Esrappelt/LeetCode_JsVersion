const mySqrt = (x) => {
    return parseInt(Math.sqrt(x));
};

const mySqrt2 = (x) => {
    const eps = 0.000001;
    let val = x,last = 0;
    while(Math.abs(val-last) > eps)  {
        last = val;
        val = (val + x / val) / 2;//牛顿迭代法
    }
    return parseInt(val);
};
let res = mySqrt2(8);
console.log(res);

