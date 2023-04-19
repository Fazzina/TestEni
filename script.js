/* risposta singola */
function handleChange(input) {
  // Rimuovi la classe "selected" da tutti i div con classe "risposte"
  let risposte = document.querySelectorAll(".risposte");
  for (let i = 0; i < risposte.length; i++) {
    risposte[i].classList.remove("selected");
  }

  // Aggiungi la classe "selected" al div di appartenenza dell'input selezionato
  let parentDiv = input.parentElement;
  parentDiv.classList.add("selected");

  let button = document.getElementById("prosegui");
  button.removeAttribute("disabled");
  button.classList.add("active");
}

/* risposta multipla */
function handleChangeMul(input) {
  // Aggiungi o rimuovi la classe "selected" al div di appartenenza dell'input selezionato
  let parentDiv = input.parentElement;
  if (input.checked) {
    parentDiv.classList.add("selected");
  } else {
    parentDiv.classList.remove("selected");
  }

  let button = document.getElementById("prosegui");
  let inputs = document.querySelectorAll("input[type='checkbox']");
  let checkedCount = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      checkedCount++;
    }
  }
  if (checkedCount >= 2) {
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].checked) {
        inputs[i].setAttribute("disabled", "disabled");
      }
    }
  } else {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute("disabled");
    }
  }

  if (checkedCount === 0) {
    button.setAttribute("disabled", "disabled");
    button.classList.remove("active");
  } else {
    button.removeAttribute("disabled");
    button.classList.add("active");
  }
}

/* risposta ad ordinamento */
function updateSelects(selected) {
  let selects = document.getElementsByClassName("mySelect");
  for (let i = 0; i < selects.length; i++) {
    if (selects[i] != selected) {
      if (selects[i].value == selected.value) {
        selects[i].value = "";
        selects[i].classList.remove("selected");
        selects[i].parentNode.classList.remove("selected");
      }
    }
  }

  let container = selected.parentNode;
  if (
    selected.value == "1" ||
    selected.value == "2" ||
    selected.value == "3" ||
    selected.value == "4"
  ) {
    container.classList.add("selected");
    selected.classList.add("selected");
  }

  checkSelects();
}

function checkSelects() {
  let selects = document.querySelectorAll(".mySelect");
  let allSelected = true;
  for (let i = 0; i < selects.length; i++) {
    if (!selects[i].value) {
      allSelected = false;
      break;
    }
  }
  let button = document.querySelector("#prosegui");
  if (allSelected) {
    button.removeAttribute("disabled");
    button.classList.add("active");
  } else {
    button.setAttribute("disabled", "disabled");
    button.classList.remove("active");
  }
}
