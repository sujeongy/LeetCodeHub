function mostWordsFound(sentences: string[]): number {
    let counts = [];
    sentences.forEach((sentence) => {
        counts.push(sentence.split(' ').length);
    })
    return counts.sort((a,b) => b-a)[0]; 
};