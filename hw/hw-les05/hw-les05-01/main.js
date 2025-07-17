// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    const squareRectangle = (a, b) => a * b;

    const a = 4, b = 5;
    console.log(`Площа прямокутника зі сторонами a = ${a}, b = ${b} : ${squareRectangle(a, b)}`);
}

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
{
    const squareCircle = (r) => Math.PI * r * r;

    const r = 4;
    console.log(`Площа кола з радіусом r = ${r} : ${squareCircle(r)}`);
}

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
{
    const squareCylinder = (r, h) => 2 * Math.PI * r * h;

    const h = 4, r = 2;
    console.log(`Площа циліндру висотою h = ${h}, та радіусом r = ${r} : ${squareCylinder(r, h)}`);
}

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
{
    const printArray = (arr) => {
        for (let item of arr) {
            console.log(item);
        }
    }

    const arr = [1, 2, 3, 4];
    console.log(`Масив arr:`);
    printArray(arr);
}

// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
{
    const create_p = (text) => `<p>${text}</p>`;

    document.write(create_p('Okten'));
}

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
{
    const create_ul = (text_li) =>
        `<ul>
            <li>${text_li}</li>
            <li>${text_li}</li>
            <li>${text_li}</li>
        </ul>`;

    document.write(create_ul('Okten'));
}

// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
{
    const create_ul_2 = (text_li, counter) => {
        let text_ul = '<ul style="color: red">';

        for (let i = 0; i < counter; i++) {
            text_ul = text_ul + `<li>${text_li}</li>`;
        }
        text_ul = text_ul + '</ul>';
        return text_ul;
    }

    document.write(create_ul_2('Okten', 5));
}

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
{
    const create_ul_3 = (arr) => {
        let text_ul = '<ul style="color: green">';

        for (let item of arr) {
            text_ul = text_ul + `<li>${item}</li>`;
        }
        text_ul = text_ul + '</ul>';
        return text_ul;
    }

    const arrPrimitive = [
        42,             // Число
        "Привіт",       // Стрінг
        true,           // Булеве значення
        -10.5,          // Число (десяткове)
        "JavaScript",   // Стрінг
        false,          // Булеве значення
        0,              // Число
        "Завершено",    // Стрінг
        true,           // Булеве значення
        100             // Число
    ];
    document.write(create_ul_3(arrPrimitive));
}

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.
{
    const printArr_with_div = (users) => {
        for (const user of users) {
            document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
        }
    }

    printArr_with_div([
        {id: 1, name: 'kokos', age: 123},
        {id: 2, name: 'kokos', age: 123},
        {id: 3, name: 'kokos', age: 123},
        {id: 4, name: 'kokos', age: 123},
        {id: 5, name: 'kokos', age: 123},
    ]);
}

// #pghbnSB
// – створити функцію, яка повертає найменше число з масиву
{
    const arrayMinValue = (numbers) => {
        let min = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        return min;
    }

    console.log(`Найменше число з масиву: ${arrayMinValue([99, 11, -123, 22, 33, 44])}`);
}

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
{
    const sum = (arr) => {
        let basket = 0;
        for (let item of arr) {
            basket = basket + item;
        }
        return basket;
    }

    console.log(`Сума значень елементів масиву: ${sum([1, 2, 10])}`);
}

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
{
    const swap = (arr, i1, i2) => {
        if (i1 < arr.length && i2 < arr.length) {
            let temp = arr[i1]; // 11
            arr[i1] = arr[i2];
            arr[i2] = temp;

            return arr;
        }
        return '!!!!!!!';
    }

    const arr =[11, 22, 33, 44];
    console.log(`Масив до змін: `, arr);
    console.log(`Масив після змін: `, swap(arr, 0, 1));
}

// #mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
{
    const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
        let chosenCurrency;
        for (const item of currencyValues) {
            if (item.currency === exchangeCurrency) {
                chosenCurrency = item;
            }
        }

        let result = sumUAH/chosenCurrency.value
        return result;
    }

    console.log("Обмін валют: ", exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
}
