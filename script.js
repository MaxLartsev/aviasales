// получаем эдементы со страницы
const formSearch = document.querySelector('.form-search'),
inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
inputCitiesTo = formSearch.querySelector('.input__cities-to'),
dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
inputDateDepart = formSearch.querySelector('.input__date-depart');

// данные
const citiesApi = 'dataBase/cities.json',
    proxy = 'https://cors-anywhere.herokuapp.com/',
    API_KEY = '5b076f5d4c0505898942bc36785d3209',
    calendar = 'http://min-prices.aviasales.ru/calendar_preload',
    call = '?depart_date=2020-05-25&origin=SVX&destination=KGD&one_way=true&token=';

let city = [];

// функции

const getData = (url, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;

        if (request.status === 200) {
            callback(request.response);
        } else {
            console.error(request.status);
        }
    });
    
    request.send();
};

const showCity =  (input, list) => {
    list.textContent = '';

    if (input.value !== '') {

        const filterCity = city.filter((item) => {
            const fixItem = item.name.toLowerCase();   // каждая строка приводится к нижнему регистру
            return fixItem.includes(input.value.toLowerCase());
        });
    
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item.name;
            list.append(li);
        });
    };
};

const selectCity = (event, input, list) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'li'){
        input.value = target.textContent;
        list.textContent = '';
    };
};

// обработчики событий 

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo);
});

// вызовы функций

getData(citiesApi, (data) => {
    city = JSON.parse(data).filter(item => item.name);
});

getData(proxy + calendar + call + API_KEY, (data) => {
    const cheapTicket = JSON.parse(data).best_prices.filter(item => item.depart_date === '2020-05-25');
    console.log(cheapTicket)
});

/*
(item) => {
    return item.name
}
*/