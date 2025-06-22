function firstUniqChar(s: string): number {
    const map = new Map();

    for(let i=0;i<s.length;i++) {
        const str = s[i];
        map.set(str, (map.get(str)??0) + 1);
    }
    for(const [key, val] of map) {
        if(val === 1) {
            const result = s.indexOf(key);
            return result
        }
    }
    return -1;
};