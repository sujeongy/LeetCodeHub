function maxProductDifference(nums: number[]): number {
    const sortedNums = nums.sort((a,b) => a - b);
    const len = nums.length;
    return (sortedNums[len-2] * sortedNums[len-1]) - (sortedNums[0] * sortedNums[1]);
};