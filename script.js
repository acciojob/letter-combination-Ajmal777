const map = {
	  '2': "abc",
	  '3': "def",
	  '4': "ghi",
	  '5': "jkl",
	  '6': "mno",
	  '7': "pqrs",
	  '8': "tuv",
	  '9': "wxyz"
}
const arr = [];
function letterCombinations(s) {
	backtrack(s, 0, '');
	arr.sort();
	return arr;
}

function backtrack(s, idx, val){
	if(val.length == s.length){
		arr.push(val);
		return;
	}

	const curr = map.s[idx];
	for(let c of curr){
		val = val + c;
		backtrack(s, idx+1, val);
		val.length = val.length-1;
	}
}

module.exports = letterCombinations;
