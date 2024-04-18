function leftRightDifference(nums: number[]): number[] {
    const len = nums.length;
    const result = [];
    for(let i=0;i<len;i++) {
        if(i === 0 || i === len - 1 ) {
            const sum = nums.reduce((acc, curr) => acc+curr, 0);
            result.push(Math.abs(sum - nums[i]));
        } else {
            let leftSum = 0;
            let rightSum = 0;
            for(let j=i-1;j>-1;j--) {
                leftSum += nums[j];
            }
            for(let r=i+1;r<len;r++) {
                rightSum += nums[r];
            }
            result.push(Math.abs(rightSum-leftSum));
        }
    }
    return result;
};