const addBinary2 = (a,b) => {
    let tmp = "",res = "",len = a.length - b.length,carry = 0;
    for(let i = 0; i < Math.abs(len); i++) tmp += '0';
    if(len < 0) a = tmp + a;
    else b = tmp + b;
    for(let i = a.length - 1; i >= 0; i--) {
        let sum = Number(a[i]) + Number(b[i]) + carry;
        carry = parseInt(sum / 2);
        res = (sum % 2) + res;
    }
    return carry ? "1" + res : res;
}
let res = addBinary2("101","111");
console.log(res);


