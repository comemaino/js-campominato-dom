function startGame() {
  prepareGrid();

  const grid = document.getElementById("grid");
  const difficulty = parseInt(document.getElementById("level"));

  let cellNumber;
  let cellNumberInRow {
    if (difficulty === 1) {
      cellNumber =100;
    } else if (difficulty === 2) {
      cellNumber = 81;
    }
  }

  const bombsNumber = 16;
  const maxNumber = 100 - 16;
  const bombsArray = generateUniqueRndNumber (bombsNumber, cellNumber);
  const safeCells = [];
  const winNumbers = cellNumber - bombsNumber;

  for (let i )

//UTILITY FUNCTIONS
/**
 *
 * @param {number} numberQuantity quantità di elementi da generare
 * @param {number} maxLimit limite massimo di range di numeri
 * @returns {array} array
 */
function generateUniqueRndNumber(numberQuantity, maxLimit) {
  const numbersArray = [];
  while (numbersArray.length < numberQuantity ) {
    const randomNumber = getRndInteger(1, maxLimit);
    if (!numbersArray.includes(randomNumber)) {
      numbersArray.push(randomNumber)
    }
  }
  console.log(numbersArray);
  return numbersArray;
}

function handleCellClick() {
const clickedNumber = parseInt(this.querySelector("span").textContent);

if (bombsArray.includes(clickedNumber)) {
  this.classList.add("red");
  alert("Hai perso!");
  console.log(safeCells.length);
} else {
  this.clssList.add("clicked");
  this.style.pointerEvents = "none";
  safeCells.push(clickedNumber);
  console.log(safeCells);

  if (safeCells.length >= winNumbers) {
    alert("Hai vinto!")
  }
}

function endGame(safeNumbersAmount, winLose) {
  const resultTitle = document.getElementById("result");
  let resultMessage;
  if (winLose === "lose") {
    resultMessage = 'Hai perso! Hai indovinato ${safeNumbersAmount}'

  }

}
}

//TEST
const generatedArray = generateUniqueRndNumbers(16, 100);
