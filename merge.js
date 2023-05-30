function merge(arr1, arr2) {
    let idx1 = 0, idx2 = 0;
    const arr = [];
  
    while (idx1 < arr1.length && idx2 < arr2.length) {
      if (arr1[idx1] < arr2[idx2]) {
        arr.push(arr1[idx1]);
        idx1++;
      }
      else {
        arr.push(arr2[idx2]);
        idx2++;
      }
    }
  
    arr.push(...arr1.slice(idx1));
    arr.push(...arr2.slice(idx2));
  
    return arr;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const middleIdx = Math.floor(arr.length / 2);
    return merge(
      mergeSort(arr.slice(0, middleIdx)),
      mergeSort(arr.slice(middleIdx))
    );
  }
  
  module.exports = { merge, mergeSort};