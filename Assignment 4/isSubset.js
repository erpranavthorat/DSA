function isSubset(arr1, arr2) {
    const set1 = new Set(arr1);

    for (let element of arr2) {
        if (!set1.has(element)) {
            return "arr2[] is not a subset of arr1[]";
        }
    }
    return "arr2[] is a subset of arr1[]";
}

const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 3, 7, 1];

console.log(isSubset(arr1, arr2)); 
