const arr = [8,7,6,5,4,9,2,1,3]

// bubble sort.. take 1 <= i <= i - 1..
// so always comparing curr el and left.. moving across from i..

const bubbleSort = arr => {
  let swapped = false;


  for (let i = 0; i < arr.length - 1; i++) {
    // until j - i - 1.. (So if 1 el is sorted.. it wil go until 1 pos less.);
    for (let j = 0; j < arr.length - i - 1; j++) {
      // swap el if arr[j] > arr[j + 1]
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
  if (!swapped) return;
  }
}
bubbleSort(arr);
console.log(arr);