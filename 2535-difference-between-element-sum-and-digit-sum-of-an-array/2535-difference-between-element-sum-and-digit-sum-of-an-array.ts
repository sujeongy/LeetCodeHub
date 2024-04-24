function differenceOfSum(nums: number[]): number {
    let eleSum = 0;
    let digitSum = 0;
    nums.forEach((num, idx) => {
        if(num > 9) {
            const strNum = num.toString();
            for(let i=0;i<strNum.length;i++) {
                 digitSum += parseInt(strNum[i]);
            }
        } else {
            digitSum += num;
        }
        eleSum += num;
    });
    return Math.abs(eleSum - digitSum);
};