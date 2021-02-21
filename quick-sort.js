function quickSort(arr) {
  /* since we will be using recurrsion, we need to have a base case
  much like mergesort our base case is checking the length of the array
  if the array is less than or equal to 1 then return the array */
  if (arr.length <= 1) {
    return arr;
  } else {
    /* find our pivot - I'm choosing to pick the last elment in the array
    using the pop method */
    /* now we need to move everything smaller than the pivot to the left
    of everything that is greater we can use the filter method to
    accomplish the comparision and returning a new array  */
    /* just like above, now we need to move everything greater than the
    pivot to the right of everything that is smaller - still using filter
    to accomplish the comparison and returning a new array */
    /* lastly we want to return our recursive function call using quickSort
    passing our "left" array from filter and then concatenating the pivot 
    and another quickSort call with the arugement of our "right" array */
  }
}

console.log(
  quickSort([1, 8, 16, 4, -6, 10, 16, -80, 22, 43, 1000, 234, 1, 5, 8])
);
