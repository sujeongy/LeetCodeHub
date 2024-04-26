function countKDifference(nums: number[], k: number): number {
    const len:number = nums.length;
    let count:number = 0;
    for(let i=0;i<len-1;i++) {
        const leftNum = nums[i];
        for(let j=i+1;j<len;j++) {
            const rightNum = nums[j];
            const absNum = Math.abs(leftNum-rightNum);
            if(absNum === k) {
                count++;
            }
        }
    }
    return count;
};