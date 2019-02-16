let isPalindrome = (x) => {
    if(x < 0) return false;
    let tmp = 0,y = x;
    while(x > 0) {
        tmp = tmp * 10 + x % 10; 
        x = Math.floor(x/10);
    }
    console.log(tmp);
    return tmp === y;
};
console.log(isPalindrome(12345654321));
