module.exports = function solveSudoku(matrix) {
  let zeros = [];
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(matrix[i][j] === 0){
        zeros.push([i, j]);
      }
    }
  }
  for (let k = 0; k < zeros.length;) {
    let n = Math.floor(zeros[k][0] / 3) * 3;
    let m = Math.floor(zeros[k][1] / 3) * 3;
    let num = matrix[zeros[k][0]][zeros[k][1]] + 1;
    let solved = false;
    while(!solved && num <= 9) {
      let col = true, row = true, area = true, c = 0;  
      while (col && row && (c < 9)) {
        row = ((matrix[zeros[k][0]][c] === num)) ? false : true;
        col = ((matrix[c][zeros[k][1]] === num)) ? false : true; 
        c++;
      }
      if (row && col) {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j <  3; j++) {
            area = (!area || (matrix[n + i][m + j] === num)) ? false : true;
          }
        }
      }
      if(col && row && area) {
        solved = true;
        matrix[zeros[k][0]][zeros[k][1]] = num;
        k++;
      } else {
        num++;
      }
    }
    if(!solved) {
      matrix[zeros[k][0]][zeros[k][1]] = 0;
      k--;
    }
  }
  return matrix;
}
