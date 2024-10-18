/* Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right. */

function countSmallerToRight(arr) {
    const result = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                result[i]++;
            }
        }
    }

    return result;
}

const result1 = countSmallerToRight([5, 4, 3, 2, 1]);
console.log(result1);

const result2 = countSmallerToRight([1, 2, 0]);
console.log(result2);