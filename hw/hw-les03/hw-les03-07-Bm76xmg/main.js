console.log('======= Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі');

let arr = ['qwer', 123, true, 'zzzzz', undefined, -235.512, NaN, false, null, '5678'];

let countNumber = 0;
for (let item of arr) {
    console.log(`${++countNumber}. arr[${countNumber}] = ${item}`);
}

