/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let start = 0;
    let temp = 0;
    for(let i=0;i<nums.length;i++) {
        temp = nums[i];
        nums[i] = 0;
        if(temp !== 0) {
            nums[start] = temp;
            start++;
        }
    }
};