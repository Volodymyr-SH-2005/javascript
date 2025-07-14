let arr = [2,17,13,6,22,31,45,66,100,-18];

{
    console.log('======= 1. перебрати його циклом while');
    let i = 0;
    while (i < arr.length) {
        console.log(`arr[${i}] = ` + arr[i]);
        i++;
    }
}

{
    console.log('======= 2. перебрати його циклом for');
    console.log('======= варіант 1');
    for (let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}] = ` + arr[i]);
    }

    console.log('======= варіант 2');
    for (let i of arr) {
        console.log(i);
    }
}

{
    console.log('======= 3. перебрати циклом while та вивести числа тільки з непарним індексом');
    console.log('======= варіант 1');
    let i = 0;
    while (i < arr.length) {
        if (i % 2 === 1) {
            console.log(`arr[${i}] = ` + arr[i]);
        }
        i++;
    }

    console.log('======= 3. перебрати циклом while та вивести числа тільки з непарним індексом');
    console.log('======= варіант 2');
    i = 1;
    while (i < arr.length) {
        console.log(`arr[${i}] = ` + arr[i]);
        i+=2;
    }
}

{
    console.log('======= 4. перебрати циклом for та вивести числа тільки з непарним індексом');
    for (let i = 1; i < arr.length; i+=2) {
        console.log(`arr[${i}] = ` + arr[i]);
    }
}

{
    console.log('======= 5. перебрати циклом while та вивести числа тільки парні значення');
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            console.log(`arr[${i}] = ` + arr[i]);
        }
        i++;
    }
}

{
    console.log('======= 6. перебрати циклом for та вивести числа тільки парні значення');
    let countNumber = 0, arrayNumber = 0;
    for (let x of arr) {
        if ( !(x % 2) ) {
            console.log(`${++countNumber}. arr[${arrayNumber}] = `, x);
        }
        arrayNumber++;
    }
}

{
    console.log('======= 7. замінити кожне число, кратне 3, на слово “okten”');
    let countNumber = 0;
    let oldValue;
    for (let i = 0; i < arr.length; i++ ) {
        if ( !(arr[i] % 3) ) {
            oldValue = arr[i];
            arr[i] = 'okten';
            console.log(`${++countNumber}. arr[${i}] : oldValue = ${oldValue}, newValue = ${arr[i]}`);
        }
    }
}

{
    console.log('======= 8. вивести масив у зворотньому порядку');
    let countNumber = 0;
    let i = arr.length;
    while (i) {
        // i--;
        // console.log(`${++countNumber}. arr[${i}] = ${arr[i]}`);
        console.log(`${++countNumber}. arr[${--i}] = ${arr[i]}`);
    }
}

arr = [2,17,13,6,22,31,45,66,100,-18];
console.log('======= 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)');

{
    console.log('======= 9.1. перебрати його циклом while');
    let i = arr.length;
    while (i) {
        console.log(`${arr.length-(--i)}. arr[${i}] = ${arr[i]}`);

    }
}

{
    console.log('======= 9.2. перебрати його циклом for');
    for (let i = arr.length-1; 0 <= i; i--) {
        console.log(`${arr.length-(i)}. arr[${i}] = ${arr[i]}`);
    }
}

{
    console.log('======= 9.3. перебрати циклом while та вивести числа тільки з непарним індексом');
    let countNumber = 0;
    let i = arr.length - 1;
    if ( !(i % 2) ) { i-- }
    while (i > 0) {
        console.log(`${++countNumber}. arr[${i}] = ${arr[i]}`);
        i-=2;
    }
}

{
    console.log('======= 9.4. перебрати циклом for та вивести числа тільки з непарним індексом');
    let countNumber = 0;
    let i = arr.length - 1;
    if ( !(i % 2) ) { i-- }
    for ( i; i > 0; i-=2) {
        console.log(`${++countNumber}. arr[${i}] = ${arr[i]}`);
    }
}

{
    console.log('======= 9.5. перебрати циклом while та вивести числа тільки парні значення');
    let countNumber = 0;
    let i = arr.length;
    while (i) {
        if (arr[--i] % 2 === 0) {
            console.log(`${++countNumber}. arr[${i}] = ${arr[i]}`);
        }
    }
}

{
    console.log('======= 9.6. перебрати циклом for та вивести числа тільки парні значення');
    let countNumber = 0;
    for (let i=arr.length-1; 0 <= i; i--) {
        if ( !(arr[i] % 2) ) {
            console.log(`${++countNumber}. arr[${i}] = ${arr[i]}`);
        }
    }
}

{
    console.log('======= 7. замінити кожне число, кратне 3, на слово “okten”');
    let countNumber = 0;
    let oldValue;
    for (let i=arr.length-1; 0 <= i; i--) {
        if ( !(arr[i] % 3) ) {
            oldValue = arr[i];
            arr[i] = 'okten';
            console.log(`${++countNumber}. arr[${i}] : oldValue = ${oldValue}, newValue = ${arr[i]}`);
        }
    }
}
