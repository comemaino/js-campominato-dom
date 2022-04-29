// GENERARE 16 BOMBE: 16 NUMERI CASUALI NON RIPETUTI COMPRESI TRA 1 E IL NUMERO DI CELLE
// Al click sul bottone Play far partire il gioco
const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", startGame);

// MAIN FUNCTION
function startGame() {
  prepareGrid();

  const grid = document.getElementById("grid");

  const difficulty = parseInt(document.getElementById("level").value);
  let cellsNumber;
  let cellsNuberInRow;
  if (difficulty === 1) {
    cellsNumber = 100;
    cellsNuberInRow = 10;
  } else if (difficulty === 2) {
    cellsNumber = 81;
    cellsNuberInRow = 9;
  } else {
    cellsNumber = 49;
    cellsNuberInRow = 7;
  }

  const bombsNumber = 16;
  const bombsArray = generateUniqueRndNumber(bombsNumber, cellsNumber);
  const safeCells = [];
  const winNumbers = cellsNumber - bombsNumber;

  // Generare le celle da 1 a 100
  for (let i = 1; i <= cellsNumber; i++) {
    // genera cella
    const newItem = generateGridItem(i, cellsNuberInRow);
    // aggiungo il handler del click
    newItem.addEventListener("click", handleCellClick);
    // appendere la cella generata al contenitore
    grid.append(newItem);
  }

  function handleCellClick() {
    const clickedNumber = parseInt(this.querySelector("span").textContent);

    if (bombsArray.includes(clickedNumber)) {
      this.classList.add("bomb");
      endGame(safeCells.length, "lose");
    } else {
      this.clssList.add("clicked");
      this.style.pointerEvents = "none";
      safeCells.push(clickedNumber);
      console.log(safeCells);

      if (safeCells.length >= winNumbers) {
        endGame(safeCells.length, "win");
      }
    }
  }

  function endGame(safeNumbersQuantity, winLose) {
    const resultTitle = document.getElementById("result");
    let resultMessage;
    if (winLose === "lose") {
      resultMessage = `Hai perso! Hai indovinato ${safeNumbersQuantity} numeri`;
    } else {
      resultMessage = "Hai vinto!";
    }
    resultTitle.innerHTML = resultMessage;
    resultTitle.classList.remove("hidden");
  }
}

/**
 * Description Funzione che genera un elemento (cella) html della griglia
 * @param {any} gridNumber -> un numero da inserire nella cella
 * @param {any} cellsInRow -> numero delle celle in una riga
 * @returns {any} -> elemento del DOM che rappresenta la cella della griglia
 */
function generateGridItem(gridNumber, cellsInRow) {
  // creare l'elemento html
  const gridItem = document.createElement("div");
  // aggiungere la classe "grid-item"
  gridItem.classList.add("grid-item");
  // settare le dimensioni della cella corrispondenti;
  gridItem.style.width = `calc(100% / ${cellsInRow})`;
  gridItem.style.height = `calc(100% / ${cellsInRow})`;
  // inserire lo span con il numero corrispondente
  gridItem.innerHTML = `<span>${gridNumber}</span>`;

  return gridItem;
}

//UTILITY FUNCTIONS
/**
 * Description: genera numri random non ripetuti
 * @param {number} numberQuantity quantità di elementi da generare
 * @param {number} maxLimit limite massimo di numeri
 * @returns {array} array
 */
function generateUniqueRndNumber(numberQuantity, maxLimit) {
  const numbersArray = [];
  while (numbersArray.length < numberQuantity) {
    const randomNumber = getRndInteger(1, maxLimit);
    if (!numbersArray.includes(randomNumber)) {
      numbersArray.push(randomNumber);
    }
  }
  console.log(numbersArray);
  return numbersArray;
}

function prepareGrid() {
  const title = document.getElementById("title");
  const grid = document.getElementById("grid");
  title.classList.add("hidden");
  grid.classList.remove("hidden");
  grid.innerHTML = "";
}
