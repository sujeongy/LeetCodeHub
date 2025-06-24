function isPalindrome(s: string): boolean {
    if(!s.trim()) return true;
    const regexp = /[^a-z0-9]/gi;
    const newStr = s.toLowerCase().replace(regexp, '');
    const len = newStr.length;
    for(let i=0;i<len;i++) {
        if(newStr[i] !== newStr[len - i - 1]) {
            return false;
        }
    }
    return true;
};