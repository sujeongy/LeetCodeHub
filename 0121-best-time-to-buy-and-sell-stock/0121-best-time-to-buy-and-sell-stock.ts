function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;
    const len = prices.length;
    for(let i=1;i<len;i++) {
        const diff = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, diff);
        minPrice = Math.min(prices[i], minPrice);
    }
    return maxProfit;
};