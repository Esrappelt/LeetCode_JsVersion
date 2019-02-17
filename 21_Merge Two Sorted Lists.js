class ListNode {
    constructor(val = 0) {
        this.val = val;
        this.next = null;
    }
}

var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(),ans = res,tmp;
    while(l1 && l2) {
        let v1 = l1.val,v2 = l2.val;
        if(v1 < v2) {
            tmp = new ListNode(v1);
            l1 = l1.next;
        } else {
            tmp = new ListNode(v2);
            l2 = l2.next;
        } 
        ans.next = tmp;
        ans = tmp;
    }
    ans.next = l1 || l2;
    return res.next;
};

function create(nums) {
    let len = nums.length;
    let res = new ListNode(),ans = res;
    for(let i = 0; i < len; i++) {
        let tmp = new ListNode(nums[i]);
        ans.next = tmp;
        ans = tmp;
    }
    return res.next;
}

let l1 = create([1,2,2,6,9,9]);
let l2 = create([1,3,4]);
let res = mergeTwoLists(l1,l2);
console.log(res);

