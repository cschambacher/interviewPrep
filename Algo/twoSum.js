
//version 1: two for loops

function twoNumberSum(array, targetSum) {
    let result = []
    for (let i=0; i < array.length; i++){
      for (let j = i +1; j < array.length; j++){
        if(array[i]+array[j] === targetSum){
          result.push(array[i]); 
          result.push(array[j]);
  
        }
      }
    }
    return result
   }