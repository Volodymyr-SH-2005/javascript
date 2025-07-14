const arr = [];

console.log('======= Input array =======');

let x = prompt('Input array element "x": ');
while (x !== null) {
    arr[arr.length] = x;
    x = prompt('Input array element "x": ');
}

console.log('');
console.log('======= Print array =======');
if (arr.length === 0) {
    console.log('Array is empty');
} else {
    for (let i of arr) {
        console.log(i);
    }
}



