function findCommonElements(matrix) {
    const rowCount = matrix.length;
    if (rowCount === 0) 
        return [];

    const elementCount = new Map();

    for (const element of matrix[0]) {
        elementCount.set(element, (elementCount.get(element) || 0) + 1);
    }

    for (let i = 1; i < rowCount; i++) {
        const row = matrix[i];
        const rowElementCount = new Map();

        for (const element of row) {
            rowElementCount.set(element, (rowElementCount.get(element) || 0) + 1);
        }

        for (const [element, count] of elementCount.entries()) {
            const rowCountForElement = rowElementCount.get(element) || 0;
            elementCount.set(element, Math.min(count, rowCountForElement));
        }
    }

    const commonElements = [];
    for (const [element, count] of elementCount.entries()) {
        if (count === rowCount) {
            commonElements.push(element);
        }
    }
    return commonElements;
}

const matrix = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
];
const common = findCommonElements(matrix);
console.log(common);
