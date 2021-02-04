
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

// version 3
// time: O(nlogn) space: O(1)

function twoNumberSum(array, targetSum) {
    array.sort((a, b)=> a-b);
    let left = 0;
    let right = array.length-1;

    while (left < right){
        const currsum = array[left] + array[right];
        if(currsum === targetSum){
            return [array[left], array[right]]
        }else if ( currsum < targetSum) {
            left++
        }else if (currsum > targetSum) {
            right--
        }
    }
    
    return []
}



