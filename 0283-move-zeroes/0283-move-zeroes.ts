/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let idxs = [];
    nums.forEach((num, idx) => {
        if(num === 0) { 
            idxs.push(idx - idxs.length);
        }
    });
    idxs.forEach((ele) => {
        nums.splice(ele, 1);
        nums.push(0);
    })
};