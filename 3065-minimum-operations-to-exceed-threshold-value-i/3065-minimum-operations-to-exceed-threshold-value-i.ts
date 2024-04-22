function minOperations(nums: number[], k: number): number {
    return nums.filter(num => num < k).length;
};