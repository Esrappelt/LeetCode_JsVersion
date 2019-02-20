const plusOne = (digits) => {
    let len = digits.length,carry = 1;
    for(let i = len - 1 ; i >= 0; i--) {
        digits[i] += carry;
        carry = parseInt(digits[i] / 10);
        digits[i] %= 10;
    }
    if(carry) {
        digits.unshift(carry);
    }
    return digits;
};
let res = plusOne([9,9]);
console.log(res);//[1,0,0]

