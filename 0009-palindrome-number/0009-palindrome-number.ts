function isPalindrome(x: number): boolean {
    const numStr = x.toString()
    const numCharReverse = numStr.split('').reverse().join('');
    return x === 0 || (x > 0 && numStr === numCharReverse);
};