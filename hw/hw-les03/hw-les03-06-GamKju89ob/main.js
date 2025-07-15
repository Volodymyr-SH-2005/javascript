console.log('======= Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі');

let arr = ['qwer', 'asdf', 'zxcv', '1234', '5678', '9012', '3456', '7890', '1234', '5678'];

let countNumber = 0;
for (let item of arr) {
    console.log(`${++countNumber}. arr[${countNumber}] = ${item}`);
}

