let name = document.querySelector('.nameValue');
let model = document.querySelector('.modelValue');
let costInCredits = document.querySelector('.costInCreditsValue');
let maxAtmospheringSpeed = document.querySelector('.maxAtmospheringSpeedValue'); 
let passengers = document.querySelector('.passengersValue');
let starshipClass = document.querySelector('.starshipClassValue');

let button = document.querySelector('.button');

function getData() {
    let randomStarship = Math.floor(Math.random() * 35) + 1;
    let swapiStarship = 'https://swapi.dev/api/starships/' + randomStarship;

    axios.get(swapiStarship).then(response => {
        generateData(response.data);
    }) 
}

function generateData(data) {
    name.innerText = data.name;
    model.innerText = data.model;
    costInCredits.innerText = data.cost_in_credits;
    maxAtmospheringSpeed.innerText = data.max_atmosphering_speed;
    passengers.innerText = data.passengers;
    starshipClass.innerText = data.starship_class;
}

button.addEventListener('click', getData);