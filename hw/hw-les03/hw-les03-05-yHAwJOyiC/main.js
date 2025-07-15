console.log('======= Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі');

let arr = [2,17,13,6,22,31,45,66,100,-18];

let countNumber = 0;
for (let item of arr) {
    console.log(`${++countNumber}. arr[${countNumber}] = ${item}`);
}

