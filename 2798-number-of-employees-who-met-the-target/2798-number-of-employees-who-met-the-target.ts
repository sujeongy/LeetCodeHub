function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  let count = 0;
   hours.forEach((ele) => {
        const diff = ele - target;
        if(diff > -1) {
            count++;
        }
    });

    return count;
};