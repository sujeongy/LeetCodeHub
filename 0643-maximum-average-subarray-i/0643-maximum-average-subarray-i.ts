function findMaxAverage(nums: number[], k: number): number {
    let windowSum = 0;
    
    // 첫 k개 sum 초기화
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // 슬라이딩 윈도우 이동
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
}
