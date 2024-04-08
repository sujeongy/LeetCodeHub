function countPairs(nums: number[], target: number): number {
    let result = 0;
    const len = nums.length;
    for(let i=0;i<len-1;i++) {
        for(let j=i+1;j<len;j++) {
            if(nums[i]+nums[j] < target) {
                result++;
            }
        }
    }
    return result;
};