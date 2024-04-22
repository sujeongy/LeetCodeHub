function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const ruleKeyIndexing = {
        type: 0,
        color: 1,
        name: 2
    };
    const ruleKeyIndex = ruleKeyIndexing[ruleKey];
    let count = 0;
    items.forEach((ele) => {
        if(ele[ruleKeyIndex] === ruleValue) {
            count ++
        }
    })
    return count;
};