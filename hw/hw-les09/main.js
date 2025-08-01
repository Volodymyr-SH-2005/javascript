let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesDiv = document.createElement('div');
coursesDiv.classList.add('coursesDiv');
document.body.appendChild(coursesDiv);

let h1 = document.createElement('h1');
h1.innerText = 'coursesArray';
coursesDiv.appendChild(h1);

for (let course of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

    // titleDiv
    {
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title');

        let title_h3 = document.createElement('h3');
        title_h3.innerText = `Назва курсу:`;
        let title_p = document.createElement('p');
        title_p.innerText = course.title;
        titleDiv.append(title_h3, title_p);

        courseDiv.appendChild(titleDiv);
    }
    // durationDiv
    {
        let durationDiv = document.createElement('div');
        durationDiv.classList.add('duration');

        let durationMonthDiv = document.createElement('div');
        durationMonthDiv.classList.add('durationMonth');
        {
            let h3 = document.createElement('h3');
            h3.innerText = `Тривалість місяців:`;
            let p = document.createElement('p');
            p.innerText = course.monthDuration;
            durationMonthDiv.append(h3, p);
        }
        let durationHourDiv = document.createElement('div');
        durationHourDiv.classList.add('durationHour');
        {
            let h3 = document.createElement('h3');
            h3.innerText = `Тривалість годин:`;
            let p = document.createElement('p');
            p.innerText = course.hourDuration;
            durationHourDiv.append(h3, p);
        }

        durationDiv.append(durationMonthDiv, durationHourDiv);
        courseDiv.appendChild(durationDiv);
    }
   // modulesDiv
    {
        let modulesDiv = document.createElement('div');
        modulesDiv.classList.add('modules');

        let h3 = document.createElement('h3');
        h3.innerText = `Модулі:`;
        modulesDiv.appendChild(h3);

        let modulesUl = document.createElement('ul');
        modulesUl.style.marginLeft = '40px';
        for (let module of course.modules) {
            let li = document.createElement('li');
            li.innerText = module;
            modulesUl.appendChild(li);
        }
        modulesDiv.appendChild(modulesUl);

        courseDiv.appendChild(modulesDiv);
    }

    coursesDiv.appendChild(courseDiv);
}
