const longestCommonPrefix = (strs) => {
    if(!strs.length) return "";
    const ans = (prev,cur) => {
        let i = 0;
        while(prev[i] && cur[i] && prev[i] == cur[i]) i++;
        return prev.slice(0,i);
    };
    return strs.reduce(ans,strs[0]);//strs[0]是初值,ans是回调函数
};

const longestCommonPrefix2 = (strs) => {
    if(!strs.length) return "";
    let i = 1,len = strs.length;
    let tmp = strs[0];
    while(i < len) {
        while(strs[i].indexOf(tmp) != 0) {
            tmp = tmp.substring(0,tmp.length - 1);
            if(tmp == "") return "";
        }
        i++;
    }
    return tmp;
};

let ans = longestCommonPrefix2(["acc","ccc","ccc"]);
console.log(ans);

