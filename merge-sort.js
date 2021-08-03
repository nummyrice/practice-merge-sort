// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if(arr.length <= 1) {
      debugger;
      return arr;
    }

  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, mid); //does not include mid
  let arr2 = arr.slice(mid);    //includes mid
    debugger;
  // Recursively sort the left half
  let left = mergeSort(arr1);
  // Recursively sort the right half
  let right = mergeSort(arr2);

  // Merge the halves together and return
  return merge(...left, ...right);

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let result = [];

  // Point to the first value of each array
  let firstA = arrA[0];
  let firstB = arrB[0];
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  while(arrA.length && arrB.length) {
    debugger
    if(firstA > firstB) {
      result.push(firstB);
      arrB.shift();
    } else if(firstA < firstB) {
      result.push(firstA);
      arrA.shift();
    } else {
      result.push(firstB);
      result.push(firstA);
      arrB.shift();
      arrA.shift();
    }
    debugger
  }

  // Return the return array
  return result;

}

module.exports = [merge, mergeSort];
