let title = document.querySelector('.titleValue');
let director = document.querySelector('.directorValue');
let producer = document.querySelector('.producerValue');
let releaseDate = document.querySelector('.releaseDateValue');

let button = document.querySelector('.button');

function getData() {
    let randomFilm = Math.floor(Math.random() * 5) + 1;
    let swapifilms = 'https://swapi.dev/api/films/' + randomFilm;

    axios.get(swapifilms).then(response => {
        generateFilm(response.data);
    });
}

function generateFilm(data) {
    title.innerText = data.title;
    director.innerText = data.director;
    producer.innerText = data.producer;
    releaseDate.innerText = data.release_date;
}

button.addEventListener('click', getData);