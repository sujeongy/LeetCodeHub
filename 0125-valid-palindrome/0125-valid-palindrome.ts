function isPalindrome(s: string): boolean {
    if(!s.trim()) return true;
    const str = s.toLowerCase();
    const regexp = /[a-z0-9]/gi;
    const matchesArray = str.match(regexp);
    const val1 = matchesArray?.join('');
    const reversedMatchesArray = matchesArray?.reverse();
    const val2 = reversedMatchesArray?.join('');
    return val1 == val2;
};