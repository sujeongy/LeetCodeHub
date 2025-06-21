function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap = new Map<string, number>();

    for (const c of s) {
        sMap.set(c, (sMap.get(c) ?? 0) + 1);
    }

    for (const c of t) {
        const count = (sMap.get(c) ?? 0);
        if (count === 0) return false;
        sMap.set(c, count - 1);
    }

    return true;
};