function romanToInt(s: string): number {
    const storage = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    let result = 0;
    for(let i=0; i<s.length; i++) {
        const curr = storage[s[i]];
        const next = storage[s[i+1]];
        if(curr < next) {
            result = result - curr;
        } else {
            result = result + curr;
        }
    }
    return result;
};