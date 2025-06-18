function romanToInt(s: string): number {
    const storage = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    const strArr = s.split('');
    let result = 0;
    strArr.forEach((str, index) => {
        const curr = storage[str];
        const next = storage[strArr[index+1]];
        
        if(curr < next) {
            result = result - curr;
        } else {
            result = result + curr;
        }
    });
    return result;
};