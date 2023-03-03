//strict rules

'use strict'

//functions

//create grid function

function createGrid(cellNumber) {

    let  fragmentGrid = document.createDocumentFragment();
    
    for (let i=1; i<=cellNumber; i++) { 
        const element = document.createElement('li');
        element.classList.add('cell');
        element.style.width = `calc(100% / ${Math.sqrt(cellNumber)})`;
        element.style.height = element.style.width;
        element.innerText = i;
        element.addEventListener('click', function(){
            element.classList.add('clicked-cell');
        })

        fragmentGrid.append(element);
    }
    return fragmentGrid;
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
        let difficultyValue = difficulty.value;
        let cellNumber ;
        console.log (difficultyValue);
        
    switch (difficultyValue){
        case 2:
            cellNumber = 81;
            break;
        case 3:
            cellNumber = 49;
            break;  
        case 1: 
        default:
            cellNumber =100;
    }

    console.log (cellNumber);
    const fragmentGrid = createGrid(cellNumber);
    grid.append(fragmentGrid);
}
);


//let cell = document.querySelectorAll('li');//select all cells
//cell.forEach(function (element) { //create an element for every cell
    //element.addEventListener('click', function() {//waitfor click on cell
          //element.classList.add('clicked-cell'); //add css class at click
      //});
  //});