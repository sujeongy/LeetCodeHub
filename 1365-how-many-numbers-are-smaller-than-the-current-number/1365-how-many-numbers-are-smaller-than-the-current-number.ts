function smallerNumbersThanCurrent(nums: number[]): number[] {
    let result = [];
    const sortedNums = [...nums].sort((a, b) => a - b);
    nums.forEach((ele) => {
        result.push(sortedNums.indexOf(ele));
    })
    return result;
};