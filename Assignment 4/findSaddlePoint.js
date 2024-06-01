function findSaddlePoint(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        let minInRow = matrix[i][0];
        let colIndex = 0;
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] < minInRow) {
                minInRow = matrix[i][j];
                colIndex = j;
            }
        }

        let maxInCol = matrix[0][colIndex];
        for (let k = 1; k < rows; k++) {
            if (matrix[k][colIndex] > maxInCol) {
                maxInCol = matrix[k][colIndex];
            }
        }

        if (minInRow === maxInCol) {
            return { row: i, col: colIndex, value: minInRow };
        }
    }

    return "No saddle point";
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(findSaddlePoint(matrix));
