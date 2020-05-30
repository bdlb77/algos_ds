const arr = [8,7,6,5,4,9,2,1,3]

// take an array and break it into half. (1/2)
// take again and break each half into halves (1/4)
// repeat.. (1/8) 
// repeat until each arr is of size 1..
// Then merge back to original arr

// take 2 arr (start - mid) & (mid + 1 - end)
// if arr1[0] <= arr2[0].. temp[0] = arr1[0] 
const merge = (arr, mid, start, end) => {
  // crawler 1st half of arr
  let i = start;
  // crawler for 2nd half of arr
  let j = mid + 1;
  // pos for temp arr
  let k = 0;
  const temp = new Array(end - start);

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      k++;i++;
    } else {
      temp[k] = arr[j];
      k++;j++
    }
  }    
  // add any left over el.
  while (i <= mid) {
    temp[k] = arr[i];
    i++;k++;
  }

  while (j <= end) {
    temp[k] = arr[j];
    j++;k++;
  }
  for (let i = start; i <= end; i++) {
    arr[i] = temp[i - start];
  }


  // append temp vals back to correct positions of arr.

}


const sort = (arr, start, end) => {
  // if start < end.. recurse
  if (start < end) {
    const mid = Math.floor((end + start) / 2);
    // divide into 2 and then merge both.
    sort(arr, start, mid);
    sort(arr, mid + 1, end);
    merge(arr, mid, start, end)
  }
}

sort(arr, 0, arr.length - 1);
console.log(arr)

