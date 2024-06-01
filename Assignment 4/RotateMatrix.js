function rotateMatrix(matrix) {
    const N = matrix.length;

    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < N; i++) {
        matrix[i].reverse();
    }
    return matrix;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix);
