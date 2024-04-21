function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    const str1 = word1.length > 1 ? word1.join('') : word1[0];
    const str2 = word2.length > 1 ? word2.join('') : word2[0];
    return str1 === str2
};