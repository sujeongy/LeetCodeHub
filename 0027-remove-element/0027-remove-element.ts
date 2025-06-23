function removeElement(nums, val) {
  let pointer = 0; // 남길 위치

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
}
