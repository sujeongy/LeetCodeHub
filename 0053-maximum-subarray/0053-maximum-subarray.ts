function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 현재 원소 하나로 새로 시작할지, 기존 연속합에 더할지 선택
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // 최대값 갱신
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
