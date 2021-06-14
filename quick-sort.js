function quickSort(arr) {

  // 1. establish a base case
  // if the length of the array is less than 2, simply return the array

  // 2. choose a pivot
  // select an element from the array HOWEVER YOU WANT -- .pop(), .shift(), .splice(), [:shrug emoji]
  // regardless how you choose it, make sure the pivot is NOT included in the array in step 4

  // 3. create empty "left" and "right" arrays

  // 4. populate "left" and "right"
  // loop through your array, comparing each element to the pivot
  // if it's less than the pivot, add it to "left"; if it's greater, add to "right"

  // 5. return everything in order
  // create a new array, into which you will add:
  // - the result of quickSorting the left array (spread out!)
  // - the pivot, just like it is
  // - the result of quickSorting the right array (spread out!)
  // ... and return it!

}

console.log(
  quickSort([1, 8, 16, 4, -6, 10, 16, -80, 22, 43, 1000, 234, 1, 5, 8])
);
