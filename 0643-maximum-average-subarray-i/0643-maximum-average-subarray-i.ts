function findMaxAverage(nums: number[], k: number): number {
    let count = 0;
    let currentSum = 0;
    let maxSum = 0;
    for(let i=0;i<nums.length;i++) {
        currentSum += nums[i];
        if(count < k) {
            maxSum = currentSum;
            count++;
        } else {
            currentSum -= nums[i - k];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum / k;
};