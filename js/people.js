let name = document.querySelector('.nameValue');
let gender = document.querySelector('.genderValue');
let height = document.querySelector('.heightValue');
let mass = document.querySelector('.massValue');
let hairColor = document.querySelector('.hairColorValue');
let eyeColor = document.querySelector('.eyeColorValue');

let button = document.querySelector('.button');

function getData() {
    let randomPerson = Math.floor(Math.random() * 82) + 1;
    let swapiPeople = 'https://swapi.dev/api/people/' + randomPerson;

    axios.get(swapiPeople).then(response => {
        generateData(response.data);
    });
}

function generateData(data) {
    name.innerText = data.name;
    gender.innerText = data.gender;
    height.innerText = data.height;
    mass.innerText = data.mass;
    hairColor.innerText = data.hair_color;
    eyeColor.innerText = data.eye_color;
}

button.addEventListener('click', getData);