// 写法就都极端一些...

// 迭代
var minPathSum = function(grid, dp = Array.from({length: grid.length}, _=> Array(grid[0].length).fill(0))) {
    for (var i = 0; i < grid.length; i++)
        for (var j = 0; j < grid[0].length; j++)
            dp[i][j] = (i === 0 ? j === 0 ? 0 : dp[i][j - 1] : j === 0 ? dp[i - 1][j] : Math.min(dp[i][j - 1], dp[i - 1][j])) + grid[i][j]
    return dp[grid.length - 1][grid[0].length - 1]
};
/*
// 使用原数组grid将各个状态的结果存起来
var minPathSum = function(grid) {
    for( let i = 0 ; i < grid.length ; i ++ ){
        for ( let j = 0 ; j < grid[i].length ; j ++ ){
            grid[i][j] += !i ? ( j ? grid[i][j-1] : 0 ) : ( j ? Math.min(grid[i][j-1],grid[i-1][j]) : grid[i-1][j] )
        }
    }
    return grid.pop().pop()
}
*/

/*
// 递归

var minPathSum = function(grid, i = 0, j = 0, h = {}, m = grid.length, n = grid[0].length) {
    return h[i + ' ' + j] ? h[i + ' ' + j] : h[i + ' ' + j] = (i < m && j < n ? (i === m - 1 && j === n - 1 ? 0 : Math.min(minPathSum(grid, i + 1, j, h), minPathSum(grid, i, j + 1, h))) + grid[i][j] : Infinity)
};
*/