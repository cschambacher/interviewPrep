
//version 1: two for loops
// time: O(n^2)
// space:

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

// version 2 Hash morespace but better time complexity
// time: O(n)
// space: O(n)

function twoNumberSum(array, targetSum) {
    let nums = {}
    for (let num of array){
        let match = targetSum - num
        if (match in nums){
            return [match, num];
        }else{
            nums[num]=true
        }
      
    }
    return []
}




