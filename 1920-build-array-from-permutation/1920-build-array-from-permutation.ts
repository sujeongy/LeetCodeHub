function buildArray(nums: number[]): number[] {
    const newNums = nums.map((num) => nums[num]);
    return newNums;
};