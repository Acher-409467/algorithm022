class Solution {
/* 
动态规划的做法
确定好首位值，根据而确定（左、上）边界的所有值
再由边界的所有值，确定（计算出）整个dp表中的值，直算到最后一个

动态规划方程
    dp[0][0] = grid[0][0];
    dp[i][0] = dp[i - 1][0] + grid[i][0];
    dp[0][j] = dp[0][j - 1] + grid[0][j];
    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
*/
public:
    int minPathSum(vector<vector<int>>& grid) {
        if (grid.size() == 0 || grid[0].size() == 0) {
            return 0;
        }
        int rows = grid.size(), columns = grid[0].size();
        auto dp = vector < vector <int> > (rows, vector <int> (columns));
        dp[0][0] = grid[0][0];
        for (int i = 1; i < rows; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        for (int j = 1; j < columns; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }
        for (int i = 1; i < rows; i++) {
            for (int j = 1; j < columns; j++) {
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }
        return dp[rows - 1][columns - 1];
    }
};