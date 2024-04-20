function numberGame(nums: number[]): number[] {
    const result = [];
    const sortedNums = nums.sort((a, b) => a-b);
    for(let i=0;i<nums.length;i+=2) {
        result[i] = sortedNums[i+1];
        result[i+1] = sortedNums[i];
    }
    return result;
};