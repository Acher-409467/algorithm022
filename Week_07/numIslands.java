class Solution {
    void dfs(char[][] grid, int r, int c) {
        int nr = grid.length; // 纵向
        int nc = grid[0].length; // 横向
        if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0') {
            // 返回条件：地图或岛屿的边界
            return;
        }
        /*
        grid[r][c] = 0;
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
        */
        grid[r][c] = '0';
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
        
    }
    
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) {
            return 0;
        }
        int nr = grid.length; // 纵向
        int nc = grid[0].length; // 横向
        int island_count = 0;
        for (int r = 0; r < nr; ++r) {
            for (int c = 0; c < nc; c++){
                if (grid[r][c] == '1') {
                    island_count++;
                    dfs(grid, r, c); // 以深度搜索的方式递归地将以计算过的岛屿的1点以外的其他1点全部置为0
                }
            }
        }
        return island_count;
    }
}