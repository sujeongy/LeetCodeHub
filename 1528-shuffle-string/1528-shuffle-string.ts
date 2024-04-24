function restoreString(s: string, indices: number[]): string {
    const strs: string[] = [];
    indices.forEach((ele, idx) => {
        strs[ele] = s[idx];
    });
    return strs.join('');
};