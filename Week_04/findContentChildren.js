/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 // 分发饼干
var findContentChildren = function(g, s) {
    g.sort(function(a,b){return a-b}); 
    // 只用sort()在数据量较大的情况下会有问题吗？
    // 只使用g.sort()时的结果与g.sort(function(a,b){return a-b;})的不同；且前者是不正确的。
	s.sort(function(a,b){return a-b});
	let co_count = 0;
	let res = 0;
	for (var i = 0; i <= g.length - 1; i++) {
		if (co_count >= s.length) {
			break;
		}
		for (var j = co_count; j <= s.length - 1; j++) {
			if (g[i] <= s[j]) {
				res++;
				co_count = j + 1;
                break;
			}
		}
	}
	return res;
};