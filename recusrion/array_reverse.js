

function reverseArray(start, end, arr) {

    if (start >= end) {
        console.log(arr);
        return;
    }
    let temp = 0;
    temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;

    reverseArray(++start, --end, arr);
}

let arr = [4,3,5,6]
reverseArray(0 ,arr.length-1 , arr )