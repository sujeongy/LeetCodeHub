function removeElement(nums: number[], val: number): number {
    const filtered = nums.filter((num) => num !== val);
    nums.length = 0;
    nums.push(...filtered);
    return filtered.length;
};