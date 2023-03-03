//strict rules

'use strict'

//functions

//create grid function

function createGrid(cellNumber,array) {

    let  fragmentGrid = document.createDocumentFragment();
    
    for (let i=1; i<=cellNumber; i++) { 
        const element = document.createElement('li');
        element.classList.add('cell');
        element.style.width = `calc(100% / ${Math.sqrt(cellNumber)})`;
        element.style.height = element.style.width;
        element.innerText = i;
        element.addEventListener('click', function() {//waitfor click on cell
            if (array.includes(i)) {
                element.classList.add('bomb');
            } else {
                element.classList.add('point');
            }
            element.removeEventListener ('click', function() {});
            });
        fragmentGrid.append(element);
    }
    return fragmentGrid;
}

//function for creating bomb
function generateRandomArray(maxNumber) {
    let array = [];
    while (array.length < 16) {
      let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
      if (!array.includes(randomNumber)) {
        array.push(randomNumber);
      }
    }
    return array;
  }
  
//main

//define grid variable from DOM
const grid = document.querySelector('.grid');
//const for recalling  generate-btn
const generateButton = document.getElementById('generate-btn');
let difficulty = document.getElementById('difficulty');


generateButton.addEventListener('click', 
    function() {
        grid.innerHTML = ''; //empty  the grid every click of play button
        let  cellNumber; //change grid lenght based on difficulty  chosen
    switch (difficulty.value){
        case '2':
            cellNumber = 81;
            break;
        case '3':
            cellNumber = 49;
            break;  
        case '1': 
        default:
            cellNumber =100;
    }
    //create a bomb array based on cell number
    let bombArray = generateRandomArray(cellNumber);
    //create cells based on difficulty
    const fragmentGrid = createGrid(cellNumber,bombArray);
    grid.append(fragmentGrid);
   

    //let cell = document.querySelectorAll('li');//select all cells
        //cell.forEach(function (element) { //create an element for every cell
        //element.addEventListener('click', function() {//waitfor click on cell
            
      //});
  });





