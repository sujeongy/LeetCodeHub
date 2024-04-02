function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result = [];
    const maxNum = Math.max(...candies);
    for(let i=0;i<candies.length;i++) {
        const num = candies[i] + extraCandies;
        result.push(num >= maxNum);
    }
    return result;
};