class Solution {
    public int maxProfit(int[] prices) {
    	// 贪心算法？感觉却更像是取了个巧，单纯计算了可能中的最大结果
        int res = 0, n = prices.length;
        for (int i = 1; i < n; ++i) {
            res += Math.max(0, prices[i] - prices[i - 1]);
        }
        return res;
    }
}