function createTargetArray(nums: number[], index: number[]): number[] {
    const result = [];
    nums.forEach((ele, idx) => {
        result.splice(index[idx], 0 , ele);
    })
    return result;
};