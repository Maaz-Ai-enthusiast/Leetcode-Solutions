var groupAnagrams = function (strs) {
    const map = new Map();

    // Helper function to get the sorted version of a string
    const sorted = str => str.split('').sort().join('');

    for (const s of strs) {
        const f = sorted(s); // Use the sorted version of the string

        if (!map.has(f)) {
            map.set(f, []);
        }

        map.get(f).push(s);
    }

    return Array.from(map.values());
};