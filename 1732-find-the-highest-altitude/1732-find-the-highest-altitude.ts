function largestAltitude(gain: number[]): number {
    let result = 0;
    let prevNum = 0;
    gain.forEach((ele, idx) => {
        const currentNum = prevNum + ele;
        if(currentNum > result) {
            result = currentNum;
        }
        prevNum = currentNum;
    })
    return result;
};