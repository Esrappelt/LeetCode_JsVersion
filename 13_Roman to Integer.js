const romanToInt = (s) => {
    let len = s.length;
    const rom = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    if(len == 1) return rom[s[0]];
    let res = 0,i = 0;
    while(i < len) {
        let s1 = rom[s[i]],s2 = rom[s[i+1]];
        res += ( s2 > s1 ? s2 - s1 : s1 );
        i += (s2 > s1 ? 2 : 1);
    }
    return res;
};
let res = romanToInt('IIVIV');
console.log(res);
