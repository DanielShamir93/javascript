const binarySearch = (sortedArr, x, start, end) => {
    // x is not in the array
    if (start > end) {
        return null;
    }
    // get the middle member index
    const midIndex = start + Math.floor((end - start) / 2);
    if (x === sortedArr[midIndex]) {
        // x found
        return midIndex;
    }
    // keep searching
    if (sortedArr[midIndex] < x) {
        return binarySearch(sortedArr, x, midIndex + 1, end);
    } else {
        return binarySearch(sortedArr, x, start, midIndex - 1);
    }
}

const sortedArr = [1,2,3,4,5,6,7,8,9,10];


console.log(binarySearch(sortedArr, 5, 0, sortedArr.length - 1));