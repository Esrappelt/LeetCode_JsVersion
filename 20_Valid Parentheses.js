var isValid = function(s) {
    let arr = [],lens = s.length;
    let match = (ch1,ch2) => {
        return (ch1 == '(' && ch2 == ')') || (ch1 == '[' && ch2 == ']') || (ch1 == '{' && ch2 == '}');
    }
    for(let i = 0; i < lens; i++) {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
            arr.push(s[i]);
        } else {
            if(!arr.length) return false;
            let ch = arr.pop();

            if(!match(ch,s[i])) {
                return false;
            }
        }
    }
    return arr.length === 0;
};

const isValid2 = (s) => {
    let len = s.length,arr = [];
    let pair = {
        '\(':'\)',
        '\[':'\]',
        '\{':'\}'
    };
    for(let i = 0; i < len; i++) {
        if(s[i] in pair) {
            arr.push(s[i]);
        } else {
            if(!arr.length) return false;
            let ch = arr.pop();
            if(pair[ch] != s[i]) return false;
        }
    }
    return (arr.length === 0);
};

let res = isValid('()[]{}');
console.log(res);
