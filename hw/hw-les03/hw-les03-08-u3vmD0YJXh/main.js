console.log('======= Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи');

let arr = ['qwer', 123, true, 'zzzzz', true, -235.512, 'sdfwhvf', false, true, 121212];

let countNumber = 0;
for (let i = 0; i < arr.length; i++ ) {
    if (typeof arr[i] === 'boolean') {
        console.log(`${++countNumber}. arr[${i}] = ${arr[i]}`);
    }
}

