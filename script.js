const formSearch = document.querySelector('.form-search'),
inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
inputCitiesTo = formSearch.querySelector('.input__cities-to'),
dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
inputDateDepart = formSearch.querySelector('.input__date-depart');

const city = ['Москва', 'Caнкт-Петербург', 'Минск', 'Караганда', 'Челябинск',
    'Керчь', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса',
    'Ухань', 'Шымкент', 'Нижний Новгород', 'Калининград', 'Вроцлав', 'Ростов-на-Дону'];

const showCity =  (input, list) => {
    list.textContent = '';

    if (input.value !== '') {

        const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        });
    
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });
    };
};

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li'){
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
    }
});

dropdownCitiesTo.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li'){
        inputCitiesTo.value = target.textContent;
        dropdownCitiesTo.textContent = '';
    }
});

const get = (name) => {
    console.log('вызов get: ' + name);
return underfined};
