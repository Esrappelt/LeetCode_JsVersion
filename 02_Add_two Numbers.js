
function ListNode(val) {
		this.val = val;
		this.next = null;
}
var addTwoNumbers = function(l1, l2) {
	var ans = new ListNode(0);
	var p = l1,q = l2,cur = ans;
	var carry = 0;
	while(p || q) {
		var x = p ? p.val : 0;
		var y = q ? q.val : 0;
		var sum = x + y + carry;
		carry = parseInt(sum / 10);
		cur.next = new ListNode(sum % 10);
		cur = cur.next;
		if(p) p = p.next;
		if(q) q = q.next;
	} 
	if(carry) cur.next = new ListNode(carry);
	return ans.next;
};
