var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

const strStr2 = (haystack,needle) => {
    return haystack.search(needle);
}
let res = strStr2("gello","ll");
console.log(res);
