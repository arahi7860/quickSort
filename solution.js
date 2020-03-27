// Solution 1
// (Using the filter helper method.)

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  else {
    const pivot = arr.pop();
    const left = arr.filter(item => { return item < pivot; });
    const right = arr.filter(item => { return item > pivot });
    console.log(left, "left")
    console.log(right, "right");
    console.log('\n')
    return quickSort(left).concat(pivot, quickSort(right));
  }
}

console.log(quickSort([1, 8, 16, 4, -6, 10, -80]))


// Solution 2
// (Using a pivot helper method.)

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = 0;

  function swap(array, indexOne, indexTwo) {
    return [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];

  }
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)
  return swapIndex;
}

// pivot([4,6,9,1,2,5,3])
// => [3,1,2] 4 [6,9,5]
// => quickSort(left) quickSort(right)
// =>      3       6
// =>  [2,1]     [9,5]
// =>     2           9
// =>  1            5

function quickSort2(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(array, start, end);
    quickSort2(array, start, pivotIndex - 1)
    quickSort2(array, pivotIndex + 1, end)
  }
  return array
}

quickSort2([4, 6, 9, 1, 2, 5, 3])
