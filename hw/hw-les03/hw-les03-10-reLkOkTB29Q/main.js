let books = [
    {
        name: 'Дюна',
        pages: 658,
        authors: ['Френк Герберт'],
        genres: ['Наукова фантастика', 'Екологічна фантастика']
    },
    {
        name: 'Гаррі Поттер і філософський камінь',
        pages: 336,
        authors: ['Джоан Роулінг'],
        genres: ['Фентезі', 'Дитяча література']
    },
    {
        name: '1984',
        pages: 328,
        authors: ['Джордж Орвелл'],
        genres: ['Антиутопія', 'Політична фантастика']
    },
    {
        name: 'Володар перснів: Братерство персня',
        pages: 423,
        authors: ['Дж. Р. Р. Толкін'],
        genres: ['Високе фентезі', 'Пригоди']
    },
    {
        name: 'Майстер і Маргарита',
        pages: 480,
        authors: ['Михайло Булгаков'],
        genres: ['Сатира', 'Фантастика', 'Містика']
    },
    {
        name: 'Пригоди Шерлока Холмса',
        pages: 300,
        authors: ['Артур Конан Дойл'],
        genres: ['Детектив', 'Класика']
    },
    {
        name: 'Автостопом по галактиці',
        pages: 193,
        authors: ['Дуглас Адамс'],
        genres: ['Наукова фантастика', 'Комедія']
    },
    {
        name: 'Код да Вінчі',
        pages: 454,
        authors: ['Ден Браун'],
        genres: ['Триллер', 'Детектив']
    },
    {
        name: 'Пригоди Тома Сойєра',
        pages: 274,
        authors: ['Марк Твен'],
        genres: ['Пригоди', 'Дитяча література']
    },
    {
        name: 'Теорія всього: Походження і доля Всесвіту', // Книга з 2 авторами
        pages: 180,
        authors: ['Стівен Хокінг', 'Леонард Млодінов'],
        genres: ['Науково-популярна', 'Фізика']
    }
];

let arrayBookNumbers_MaxPages = [0];
let arrayBookNumbers_MaxGenres = [0];
let arrayBookNumbers_MaxName = [0];
let arrayBookNumbers_2_Authors = [];
let arrayBookNumbers_1_Author = [];

function printBook(books, i) {
    console.log('Номер книжки в масиві книжок: ', i);
    console.log(`name: ${books[i].name}`);
    console.log(`pages: ${books[i].pages}`);
    console.log(`authors: ${books[i].authors}`);
    console.log(`genres: ${books[i].genres}`);
    console.log('====================');
}

console.log('======= Створити масив книжок (назва, кількість сторінок, автори , жанри)');
console.log('======= – знайти найбільшу книжку');
console.log('======= – знайти книжку/ки з найбільшою кількістю жанрів');
console.log('======= – знайти книжку/ки з найдовшою назвою');
console.log('======= – знайти книжку/ки, які писали 2 автори');
console.log('======= – знайти книжку/ки, які писав 1 автор');

if (books[0].authors.length === 2) {
    arrayBookNumbers_2_Authors[0] = 0;
} else if (books[0].authors.length === 1) {
    arrayBookNumbers_1_Author[0] = 0;
}

for (let i = 1; i < books.length; i++) {
    if (books[ arrayBookNumbers_MaxPages[0] ].pages < books[i].pages ) {
        arrayBookNumbers_MaxPages = [];
        arrayBookNumbers_MaxPages[0] = i;
    } else if (books[ arrayBookNumbers_MaxPages[0] ].pages === books[i].pages ) {
        arrayBookNumbers_MaxPages[arrayBookNumbers_MaxPages.length] = i;
    }

    if (books[ arrayBookNumbers_MaxGenres[0] ].genres.length < books[i].genres.length) {
        arrayBookNumbers_MaxGenres = [];
        arrayBookNumbers_MaxGenres[0] = i;
    } else if (books[ arrayBookNumbers_MaxGenres[0] ].genres.length === books[i].genres.length) {
        arrayBookNumbers_MaxGenres[arrayBookNumbers_MaxGenres.length] = i;
    }

    if (books[ arrayBookNumbers_MaxName[0] ].name.length < books[i].name.length) {
        arrayBookNumbers_MaxName = [];
        arrayBookNumbers_MaxName[0] = i;
    } else if (books[ arrayBookNumbers_MaxName[0] ].name.length === books[i].name.length) {
        arrayBookNumbers_MaxName[arrayBookNumbers_MaxName.length] = i;
    }

    if (books[i].authors.length === 2) {
        arrayBookNumbers_2_Authors[arrayBookNumbers_2_Authors.length] = i;
    } else if (books[i].authors.length === 1) {
        arrayBookNumbers_1_Author[arrayBookNumbers_1_Author.length] = i;
    }
}

console.log('');
console.log('======= Книжки з найбільшою кількістю сторінок. Кількість: ', arrayBookNumbers_MaxPages.length);
for (let i of arrayBookNumbers_MaxPages) {
    printBook(books, i);
}

console.log('');
console.log('======= Книжки з найбільшою кількістю жанрів. Кількість: ', arrayBookNumbers_MaxGenres.length);;
for (let i of arrayBookNumbers_MaxGenres) {
    printBook(books, i);
}

console.log('');
console.log('======= Книжки з найдовшою назвою. Кількість: ', arrayBookNumbers_MaxName.length);
for (let i of arrayBookNumbers_MaxName) {
    printBook(books, i);
}

console.log('');
console.log('======= Книжки, які писали 2 автори. Кількість: ', arrayBookNumbers_2_Authors.length);
if (arrayBookNumbers_2_Authors.length) {
    for (let i of arrayBookNumbers_2_Authors) {
        printBook(books, i);
    }
} else {
    console.log('-- відсутні');
}

console.log('');
console.log('======= Книжки, які писав 1 автор. Кількість: ', arrayBookNumbers_1_Author.length);
if (arrayBookNumbers_1_Author.length) {
    for (let i of arrayBookNumbers_1_Author) {
        printBook(books, i);
    }
} else {
    console.log('-- відсутні');
}
