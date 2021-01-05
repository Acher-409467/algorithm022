/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [], used = [], path = [];
    const dfs = (path) => {
    	// 递归终止条件 找到一个结果
    	if (path.length === nums.length) {
    		res.push(path.slice());
    		return;
    	}
    	// 回溯时 path作记录 use作已经检索过的数字，避免重复
    	for (var i = 0; i < nums.length; i++) {
    		if(used[nums[i]]){
    			continue;
    		}
    		path.push(nums[i]);
    		used[nums[i]] = true;
    		dfs(path);
    		path.pop();
    		used[nums[i]] = false;
    	}
    }
    dfs(path);
    return res;
};