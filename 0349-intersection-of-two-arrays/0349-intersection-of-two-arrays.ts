function intersection(nums1: number[], nums2: number[]): number[] {
    const mapped = new Map();
    nums1.forEach((num) => {
        if(nums2.includes(num)) {
            mapped.set(num, (mapped.get(num) ?? 0) + 1);
        }
    })
    const iterator = mapped.keys();
    let result = [];
    for(let i=0;i<mapped.size;i++) {
        const key = iterator.next().value;
        result.push(key);
    }
    return result;
};