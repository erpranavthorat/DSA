function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const transposed = [];
    for (let i = 0; i < cols; i++) {
        transposed.push([]); 
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j].push(matrix[i][j]); 
        }
    }

    return transposed;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const transposed = transpose(matrix);
console.log(transposed);
