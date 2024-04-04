function mostWordsFound(sentences: string[]): number {
    let maxCount = 0;
    sentences.forEach((sentence) => {
        const counts = sentence.split(' ').length;
        if(counts > maxCount) {
            maxCount = counts;
        }
    })
    return maxCount; 
};