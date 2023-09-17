let name = document.querySelector('.nameValue');
let model = document.querySelector('.modelValue');
let costInCredits = document.querySelector('.costInCreditsValue');
let maxAtmospheringSpeed = document.querySelector('.maxAtmospheringSpeedValue'); 
let passengers = document.querySelector('.passengersValue');
let vehicleClass = document.querySelector('.vehicleClassValue');

let button = document.querySelector('.button');

function getData() {
    let randomVehicle = Math.floor(Math.random() * 38) + 1;
    let swapiVehicle = 'https://swapi.dev/api/vehicles/' + randomVehicle;

    axios.get(swapiVehicle).then(response => {
        generateData(response.data);
    }) 
}

function generateData(data) {
    name.innerText = data.name;
    model.innerText = data.model;
    costInCredits.innerText = data.cost_in_credits;
    maxAtmospheringSpeed.innerText = data.max_atmosphering_speed;
    passengers.innerText = data.passengers;
    vehicleClass.innerText = data.vehicle_class;
}

button.addEventListener('click', getData);