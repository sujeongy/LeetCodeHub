function truncateSentence(s: string, k: number): string {
    const slicedString = s.split(' ').slice(0, k);
    return slicedString.join(' ');
};