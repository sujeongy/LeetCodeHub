function numIdenticalPairs(nums: number[]): number {
    let result = 0;
    for(let i=0;i<nums.length-1;i++) {
        const num1 = nums[i];
        for(let j=i+1;j<nums.length;j++) {
            const num2 = nums[j];
            if(num1 === num2) {
              result++;
            }
        }
    }
    return result;
};