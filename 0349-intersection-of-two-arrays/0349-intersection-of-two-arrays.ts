function intersection(nums1: number[], nums2: number[]): number[] {
    const arr = nums1.filter(x => nums2.includes(x));
    return [...new Set(arr)];  
};