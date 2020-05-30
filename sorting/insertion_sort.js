      // [2,5,3,8]
      // example: for i -> n
        // j = i - 1
        // while j >= 0 and arr[j] > arr[i]
          // swap arr[j] & arr[j + 1]
          // j -= 1
    
  const arr = [8,7,6,5,4,9,2,1,3];

  const insertionSort = arr => {
    
    arr.forEach((el, i) => {
      let j = i - 1;

      while (j >= 0 && arr[j] > el) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        j--;
      }
    })
  }
console.log(arr)
insertionSort(arr)
console.log(arr)