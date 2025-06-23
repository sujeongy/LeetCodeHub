/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const strLen = s.length;
    const len = Math.floor(strLen / 2);
    for(let i=0;i<len;i++) {
        const temp = s[i];
        const rpl = s[strLen - i - 1];
        s[i] = rpl;
        s[strLen - i - 1] = temp;
    }
};