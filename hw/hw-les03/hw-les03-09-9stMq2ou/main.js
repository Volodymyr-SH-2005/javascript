console.log('======= Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи');

let arr = ['qwer', 123, true, 'zzzzz', 42n, -235.512, 'sdfwhvf', false, true, 121212];

let countNumber = 0;
for (let i = 0; i < arr.length; i++ ) {
    if ((typeof arr[i] === 'number') || (typeof arr[i] === 'bigint') ) {
        console.log(`${++countNumber}. arr[${i}] = ${arr[i]}`);
    }
}

