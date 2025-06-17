function twoSum(nums: number[], target: number): number[] {
    const numObject = {};
    for(const [index, ele] of nums.entries()) {
        if(numObject[ele] !== undefined) {
            return [numObject[ele], index];
        }
        numObject[target - ele] = index;
    }
};