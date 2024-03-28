function findWordsContaining(words: string[], x: string): number[] {
    let result = [];
    for(let i=0;i<words.length;i++) {
        if(words[i].indexOf(x) !== -1){
            result.push(i);
        }
    }
    return result;
};