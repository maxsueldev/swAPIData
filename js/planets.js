let name = document.querySelector('.nameValue');
let climate = document.querySelector('.climateValue');
let gravity = document.querySelector('.gravityValue');
let terrain = document.querySelector('.terrainValue');
let population = document.querySelector('.populationValue');

let button = document.querySelector('.button');

function getData() {
    let randomPlanet = Math.floor(Math.random() * 59) + 1;
    let swapiPlanet = 'https://swapi.dev/api/planets/' + randomPlanet;

    axios.get(swapiPlanet).then(response => {
        generateData(response.data);
    });
}

function generateData(data) {
    name.innerText = data.name;
    climate.innerText = data.climate;
    gravity.innerText = data.gravity;
    terrain.innerText = data.terrain;
    population.innerText = data.population;    
}

button.addEventListener('click', getData);


