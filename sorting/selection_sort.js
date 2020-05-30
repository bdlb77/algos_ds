/*  func findMinIndex(arr, start)
      set minIndex to start
      add 1 to start decrease iteration by 1.
      while start < len of arr
        if arr[start] < arr[minIndex]
          minIndex = start
        add 1 to start

        return minIndex

    func selectionSort(arr)
      for i < len(arr)
        minIndex = findMinIndex()
        if i != minIndex  then swap arr[minIdx] and arr[i]!
*/

/* 
  Selection sort loops through arr. Then for ith position, it will find min index between i & n - 1.
  If i & minIndex are not the same, swap those numbers.
  1. Find smallest val in arr and swap it with begin position.
  2. Find smallest val from 1 -> n -1 and swap with 2nd pos.
  3. continualy increase i and find the ith smallest number.
*/


const findMinIdx = (arr, start) => {
  let minIdx =  start;
  start++;
  while (start < arr.length) {
    if (arr[start] < arr[minIdx]) minIdx = start;
    start++;
  }
  return minIdx;
}

const selectionSort = (arr) => {
  
  arr.forEach((_, i) => {
    const minIndex = findMinIdx(arr, i);
    if (i !== minIndex) {
      [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  })
}

const arr = [8,7,6,5,4,9,2,1,3];
selectionSort(arr);
console.log(arr)