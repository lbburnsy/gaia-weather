/* First pull the names */
var nameOne = document.getElementById('name-1');
var nameTwo = document.getElementById('name-2');
var nameThree = document.getElementById('name-3');

/* Pull each block */
var blockOne = document.getElementById('block-1');
var blockTwo = document.getElementById('block-2');
var blockThree= document.getElementById('block-3');
var blockFour = document.getElementById('block-4');
var blockFive = document.getElementById('block-5');
var blockSix = document.getElementById('block-6');
var blockSeven = document.getElementById('block-7');
var blockEight = document.getElementById('block-8');
var blockNine = document.getElementById('block-9');
var blockTen = document.getElementById('block-10');
var blockEleven = document.getElementById('block-11');
var blockTwelve = document.getElementById('block-12');
var blockThirteen = document.getElementById('block-13');
var blockFourteen = document.getElementById('block-14');
var blockFifteen = document.getElementById('block-15');

/* AppID and units */
let appId = "441a7e240b5a38d9064fffbd95ab569d";
let units = 'imperial';

/* function for converting temp */

function kToF(temp) {
    fahrenheit = temp * 9/5 - 459.67
    return Math.floor(fahrenheit)
};

/* function to change background of each block */


/* Rutland, VT */

fetch('http://api.openweathermap.org/data/2.5/forecast?q=Rutland,us&appid=441a7e240b5a38d9064fffbd95ab569d').then(response => {
    return response.json();
}).then(data => {
    /* Block One */
    tempOne = data.list[3].main.temp
    conditionOne = data.list[3].weather[0].description
    mainOne = data.list[3].weather[0].main

    blockOne.firstElementChild.innerHTML = `${kToF(tempOne)}&#176`;
    blockOne.lastElementChild.innerHTML = conditionOne;

    /* Block Two */
    tempTwo = data.list[11].main.temp
    conditionTwo = data.list[11].weather[0].description
    mainTwo = data.list[11].weather[0].main

    blockTwo.firstElementChild.innerHTML = `${kToF(tempTwo)}&#176`;
    blockTwo.lastElementChild.innerHTML = conditionTwo;

    /* Block Three */
    tempThree = data.list[19].main.temp
    conditionThree = data.list[19].weather[0].description
    mainThree = data.list[19].weather[0].main

    blockThree.firstElementChild.innerHTML = `${kToF(tempThree)}&#176`;
    blockThree.lastElementChild.innerHTML = conditionThree;

    /* Block Four */
    tempFour = data.list[27].main.temp
    conditionFour = data.list[27].weather[0].description
    mainFour = data.list[27].weather[0].main

    blockFour.firstElementChild.innerHTML = `${kToF(tempFour)}&#176`;
    blockFour.lastElementChild.innerHTML = conditionFour;

    /* Block Two */
    tempFive = data.list[35].main.temp
    conditionFive = data.list[35].weather[0].description
    mainFive = data.list[35].weather[0].main

    blockFive.firstElementChild.innerHTML = `${kToF(tempFive)}&#176`;
    blockFive.lastElementChild.innerHTML = conditionFive;

    console.log(mainOne);
});

/* Albany, NY */

fetch('http://api.openweathermap.org/data/2.5/forecast?q=Albany,us&appid=441a7e240b5a38d9064fffbd95ab569d').then(response => {
    return response.json();
}).then(data => {
    /* Block Six */
    tempSix = data.list[3].main.temp
    conditionSix = data.list[3].weather[0].description
    mainSix = data.list[3].weather[0].main

    blockSix.firstElementChild.innerHTML = `${kToF(tempSix)}&#176`;
    blockSix.lastElementChild.innerHTML = conditionSix;

    /* Block Seven */
    tempSeven = data.list[11].main.temp
    conditionSeven = data.list[11].weather[0].description
    mainSeven = data.list[11].weather[0].main

    blockSeven.firstElementChild.innerHTML = `${kToF(tempSeven)}&#176`;
    blockSeven.lastElementChild.innerHTML = conditionSeven;

    /* Block Eight */
    tempEight = data.list[19].main.temp
    conditionEight = data.list[19].weather[0].description
    mainEight = data.list[19].weather[0].main

    blockEight.firstElementChild.innerHTML = `${kToF(tempEight)}&#176`;
    blockEight.lastElementChild.innerHTML = conditionEight;

    /* Block Nine */
    tempNine = data.list[27].main.temp
    conditionNine = data.list[27].weather[0].description
    mainNine = data.list[27].weather[0].main

    blockNine.firstElementChild.innerHTML = `${kToF(tempNine)}&#176`;
    blockNine.lastElementChild.innerHTML = conditionNine;

    /* Block Ten */
    tempTen = data.list[35].main.temp
    conditionTen = data.list[35].weather[0].description
    mainTen = data.list[35].weather[0].main

    blockTen.firstElementChild.innerHTML = `${kToF(tempTen)}&#176`;
    blockTen.lastElementChild.innerHTML = conditionTen;


    console.log(data)
});

/* Burlington, VT */

fetch('http://api.openweathermap.org/data/2.5/forecast?q=Burlington,us&appid=441a7e240b5a38d9064fffbd95ab569d').then(response => {
    return response.json();
}).then(data => {
    /* Block Eleven */
    tempEleven = data.list[3].main.temp
    conditionEleven = data.list[3].weather[0].description
    mainEleven = data.list[3].weather[0].main

    blockEleven.firstElementChild.innerHTML = `${kToF(tempEleven)}&#176`;
    blockEleven.lastElementChild.innerHTML = conditionEleven;

    /* Block Twelve */
    tempTwelve = data.list[11].main.temp
    conditionTwelve = data.list[11].weather[0].description
    mainTwelve = data.list[11].weather[0].main

    blockTwelve.firstElementChild.innerHTML = `${kToF(tempTwelve)}&#176`;
    blockTwelve.lastElementChild.innerHTML = conditionTwelve;

    /* Block Thirteen */
    tempThirteen = data.list[19].main.temp
    conditionThirteen = data.list[19].weather[0].description
    mainThirteen = data.list[19].weather[0].main

    blockThirteen.firstElementChild.innerHTML = `${kToF(tempThirteen)}&#176`;
    blockThirteen.lastElementChild.innerHTML = conditionThirteen;

    /* Block Fourteen */
    tempFourteen = data.list[27].main.temp
    conditionFourteen = data.list[27].weather[0].description
    mainFourteen = data.list[27].weather[0].main

    blockFourteen.firstElementChild.innerHTML = `${kToF(tempFourteen)}&#176`;
    blockFourteen.lastElementChild.innerHTML = conditionFourteen;

    /* Block Fifteen */
    tempFifteen = data.list[35].main.temp
    conditionFifteen = data.list[35].weather[0].description
    mainFifteen = data.list[35].weather[0].main

    blockFifteen.firstElementChild.innerHTML = `${kToF(tempFifteen)}&#176`;
    blockFifteen.lastElementChild.innerHTML = conditionFifteen;
    

});