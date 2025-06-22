function intersection(nums1: number[], nums2: number[]): number[] {
    const intersection = new Set(nums1.filter(x => nums2.includes(x)));
    return [...intersection];  
};