const arr = [6,5,4,9,2,1,3,8,7,6,5,4,9,2,1,3]


// create partition(arr, start, end) int
// func quicksort(arr, start, end)
// take pivot = last num in this arr.
// set Partition Index starting at start of arr.

// for start -> end - 1
  // if the curr el is less / equal to pivot.. swap that with curr partIndex
  // increment partIndex..
// then swap pivot val with el at PartIndex.
// return partIndex.

const partition = (arr, start, end) => {
  let partIndex = start;
  const pivot = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[partIndex]] = [arr[partIndex], arr[i]];
      partIndex++;
    }
  }
  [arr[partIndex], arr[end]] = [arr[end], arr[partIndex]];
  return partIndex;
}
const quickSort  = (arr, start, end) => {
  if (start <= end) {
    const partIndex = partition(arr, start, end);
    quickSort(arr, start, partIndex - 1);
    quickSort(arr, partIndex + 1, end);
  }
}

quickSort(arr, 0, arr.length -1);
// quicksort takes curr array and runs partition.
  // takes new partition and then makes 2 recurse calls to 
    // left & right side of arr (partition as divider)