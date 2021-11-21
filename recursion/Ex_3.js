const arr = Array.from('gnirts desrever');


const switchMembers = (arr, left, right) => {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
};




const reverseRecursion = (arr, left, right) => {
    if (left >= right) {
        return arr.join('');
    }
    switchMembers(arr, left, right);
    return reverseRecursion(arr, left + 1, right - 1);
}





console.log(reverseRecursion(arr, 0, arr.length - 1));













const reverseJS = (arr) => {
    return arr.reverse().join('');
}

// console.log(reverseJS(arr));







const reverseLoop = (arr) => {
    let n = arr.length - 1;

    for (let i = 0; i < n; i ++) {
        let tmp = arr[i];
        arr[i] = arr[n];
        arr[n] = tmp;
        n--;
    }
    return arr.join('');
}

// console.log(reverseLoop(arr));
