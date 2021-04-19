let matrix = [
  [1, 2, 7],
  [4, 6, 1],
  [7, 1, 0]
]; 

console.log(matrix);
  let arr = [];

    for(let i = 0; i < matrix.length; i++)
    {
      let Arr = matrix[i];
      for(let j = 0; j < Arr.length; j++)
      {
          arr.push(matrix[i][j]); 
      }
    }
    console.log(arr);
  
    function compareNumbers(a, b) {
      return a - b;
    }
  
    arr.sort(compareNumbers);
  
    console.log(arr);