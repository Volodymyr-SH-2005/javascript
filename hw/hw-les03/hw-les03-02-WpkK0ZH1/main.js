const arr = [
    [34, 45, 56, 67, 78],
    ['qwe', 'rty', 'uio', 'asdf', 'zxcv'],
    ['asdfqwe', 123, true, false, 'edcvfr']
];

console.log('======= version 1 =======');
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
    console.log('---------------------------');
}

console.log('');
console.log('======= version 2 =======');

for (let i of arr) {
    for (let j of i) {
        console.log(j);
    }
    console.log('---------------------------');
}
