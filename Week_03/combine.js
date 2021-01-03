/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [], que = []; 
    dfs = (head) => {
        if (que.length >= k) {
            res.push(que.slice());
            return
        }
        for(let i = head; i <= n; i++){
            // console.log('for_head:'+head+'_n:'+n+'_i:'+i)
            que.push(i);
            dfs(i + 1);
            que.pop();
        }
    }
    dfs(1);
    return res;
};
// console.log(combine(4, 2));