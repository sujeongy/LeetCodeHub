function isAnagram(s: string, t: string): boolean {
    const len = t.length;
    if(s.length != len) return false;
    const strArr = s.split('');
    let result = true;
    for(let i=0;i<len;i++){
        const idx = strArr.indexOf(t[i]);
        if(idx > -1) {
            strArr.splice(idx, 1);
        } else {
            result = false;
        }
    }
    return result;
};