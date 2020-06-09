//Link to challenge: - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profitArr = [];
    
    while(prices.length){
        var buyPrice = prices.shift();
        var maxPrice = Math.max(...prices);
        profitArr.push(maxPrice - buyPrice);
    }
    return Math.max(...profitArr)>0 ? Math.max(...profitArr) : 0;
};

//Below call for testing
console.log(maxProfit([7,1,5,3,6,4]));

//expected output = 5 because bought @ 1 and sold @ 6. So 6 - 1 = 5;

//Below call for testing
console.log(maxProfit([7,6,4,3,1]));

//expected output = 0 because it's an ascending-sorted array