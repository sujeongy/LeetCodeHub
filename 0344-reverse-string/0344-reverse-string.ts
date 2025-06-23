/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const strLen = s.length;
    const len = Math.floor(strLen / 2);
    for(let i=0;i<len;i++) {
        [s[i], s[strLen - i - 1]] = [s[strLen - i - 1], s[i]];
    }
};