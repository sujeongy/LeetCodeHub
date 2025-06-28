function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let common_elem = []
    set1.forEach(element => {
        if(set2.has(element)){
            common_elem.push(element)
        }  
    });

    return common_elem
};