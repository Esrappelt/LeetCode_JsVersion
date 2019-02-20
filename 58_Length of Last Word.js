const lengthOfLastWord = (s) => {
    let flag = true,res = 0;
    for(let i = s.length - 1 ; i >= 0; i--) {
        if(s[i] != ' '){
            flag = false;
            res ++;
        } 
        else if(!flag) break;
    }
    return res;
};
const lengthOfLastWord2 = (s) => s.trim().split(' ').pop().length;
let res = lengthOfLastWord2(" asa s  s s saas        ss  ");
console.log(res);
