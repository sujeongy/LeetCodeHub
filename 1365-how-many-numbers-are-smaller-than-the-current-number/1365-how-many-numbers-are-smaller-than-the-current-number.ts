function smallerNumbersThanCurrent(nums: number[]): number[] {
  let result = [];
  nums.forEach((ele, idx) => {
    const newArr = [...nums];
    newArr.splice(idx, 1);
    let count = 0;
    newArr.forEach((ele2) => {
        if(ele > ele2) {
            count++;
        }
    })
    result[idx] = count;
  })  
  return result;
};