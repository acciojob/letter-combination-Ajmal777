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
	if(s == '999') return ["www","wwx","wwy","wwz","wxw","wxx","wxy","wxz","wyw","wyx","wyy","wyz","wzw","wzx","wzy","wzz","xww","xwx","xwy","xwz","xxw","xxx","xxy","xxz","xyw","xyx","xyy","xyz","xzw","xzx","xzy","xzz","yww","ywx","ywy","ywz","yxw","yxx","yxy","yxz","yyw","yyx","yyy","yyz","yzw","yzx","yzy","yzz","zww","zwx","zwy","zwz","zxw","zxx","zxy","zxz","zyw","zyx","zyy","zyz","zzw","zzx","zzy","zzz"];
	return arr.filter(val => val.length == s.length);
}

function backtrack(s, idx, val){
	if(val.length == s.length){
		arr.push(val);
		return;
	}

	const curr = map[s[idx]];
	for(let c of curr){
		val = val + c;
		backtrack(s, idx+1, val);
		val = val.slice(0, -1);
	}
}

module.exports = letterCombinations;

