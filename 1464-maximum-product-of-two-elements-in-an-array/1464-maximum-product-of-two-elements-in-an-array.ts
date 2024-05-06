function maxProduct(nums: number[]): number {
    const sortedNums = [...nums].sort((a,b) => b - a);
    return (sortedNums[0]-1)*(sortedNums[1]-1);
};