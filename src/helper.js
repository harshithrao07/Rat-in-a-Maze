export default function calculateWays(inputArray, size) {
    const matrix = Array.from({ length: size }, (_, row) =>
        Array.from({ length: size }, (_, column) =>
            inputArray.find(item => item.row === row && item.column === column)?.isBlocked ? 1 : 0
        )
    );
    const ans = findPath(matrix)
    return ans
}

function findPath(matrix) {
    const n = matrix.length;
    const ans = [];

    const findPathHelper = (i, j, move) => {
        if (i === n - 1 && j === n - 1) {
            ans.push(move);
            return;
        }
    
        // downward
        if (i + 1 < n && matrix[i + 1][j] === 0) {
            matrix[i][j] = 1;
            findPathHelper(i + 1, j, move + (move ? ' -> ' : '') + 'Down');
            matrix[i][j] = 0;
        }
    
        // left
        if (j - 1 >= 0 && matrix[i][j - 1] === 0) {
            matrix[i][j] = 1;
            findPathHelper(i, j - 1, move + (move ? ' -> ' : '') + 'Left');
            matrix[i][j] = 0;
        }
    
        // right
        if (j + 1 < n && matrix[i][j + 1] === 0) {
            matrix[i][j] = 1;
            findPathHelper(i, j + 1, move + (move ? ' -> ' : '') + 'Right');
            matrix[i][j] = 0;
        }
    
        // upward
        if (i - 1 >= 0 && matrix[i - 1][j] === 0) {
            matrix[i][j] = 1;
            findPathHelper(i - 1, j, move + (move ? ' -> ' : '') + 'Up');
            matrix[i][j] = 0;
        }
    };

    if (matrix[0][0] === 0) {
        findPathHelper(0, 0, '');
    }

    return ans;
}