function isAcronym(words: string[], s: string): boolean {
    return words.length === s.length && words.every((word, idx) => word[0] === s[idx]);
};