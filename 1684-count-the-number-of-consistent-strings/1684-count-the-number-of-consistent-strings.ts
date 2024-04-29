function countConsistentStrings(allowed: string, words: string[]): number {
    let count = 0;
    words.forEach(str => {
        let result = false;
        const wordArr = [...new Set(str.split('').sort())];
        if(wordArr.length === 0) {
            result = true;
        } else {
            result = wordArr.every(ele => {
                return allowed.includes(ele);
            })
        }
        if(result) {
            count++;
        }
    })
    return count;
};