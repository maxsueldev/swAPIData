let name = document.querySelector('.nameValue');
let classification = document.querySelector('.classificationValue');
let designation = document.querySelector('.designationValue');
let averageHeight = document.querySelector('.averageHeightValue');
let skinColors = document.querySelector('.skinColorsValue');
let language = document.querySelector('.languageValue');

let button = document.querySelector('.button');

function getData() {
    let randomSpecie = Math.floor(Math.random() * 36) + 1;
    let swapiSpecie = 'https://swapi.dev/api/species/' + randomSpecie;

    axios.get(swapiSpecie).then(response => generateData(response.data));
}

function generateData(data) {
    name.innerText = data.name;
    classification.innerText = data.classification;
    designation.innerText = data.designation;
    averageHeight.innerText = data.average_height;
    skinColors.innerText = data.skin_colors;
    language.innerText = data.language;
}

button.addEventListener('click', getData);