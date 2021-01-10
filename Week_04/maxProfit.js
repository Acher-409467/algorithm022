/**
 * @param {number[]} prices
 * @return {number}
 */
 // 买卖股票的最佳时机 II
var maxProfit = function(prices) {
    let res = 0;
    let warehouse = 0
    let standard_purchase_price = 0;
    // 遍历的时候根据自己的状态判断下一步的行动
    for(i = 0; i < prices.length; i++) {
        if(warehouse === 1) {
            if(!prices[i + 1] || prices[i + 1] < prices[i]) {
                warehouse--;
                res += prices[i] - standard_purchase_price;
                standard_purchase_price = 0;
            }
        }
        if(prices[i + 1] && warehouse === 0 && prices[i + 1] > prices[i]) {
            warehouse++;
            standard_purchase_price = prices[i]
        }
    }
    return res;
};