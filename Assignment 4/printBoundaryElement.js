function printBoundaryElements(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        let rowOutput = '';
        for (let j = 0; j < cols; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                rowOutput += matrix[i][j] + ' ';
            } else {
                rowOutput += '  ';
            }
        }
        console.log(rowOutput.trim());
    }
}

const matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
];

printBoundaryElements(matrix);
