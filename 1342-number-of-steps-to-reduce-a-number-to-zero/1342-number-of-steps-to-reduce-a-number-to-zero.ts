function numberOfSteps(num: number): number {
    let output = 0;
    let currentNum = num;
    function checkNum() {
        if(currentNum%2 === 0 && currentNum/2 > 0) {
            currentNum = currentNum/2;
            output += 1;
            checkNum();
        }
        if(currentNum%2 === 1) {
            currentNum = currentNum - 1;
            output += 1;
            checkNum();
        }
        if(currentNum === 0) {
            return;
        }
    }
    checkNum();
    return output;
};