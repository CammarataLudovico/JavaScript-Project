// Creazione Pagina
const title = document.createElement("h1");
title.textContent = "Calcolatrice";

const display = document.createElement("h2");
display.textContent = "";
let display_n_value = "";
const container = document.querySelector(".calculator");

// Variabile per salvare contenuto del display
let display_value = "";

// Variabili di appoggio per salvare i valori immessi nella calcolatrice
let firstNumber = "";
let operator = "";
let secondNumber = "";

// Inseriamo il titolo fuori dalla calcolatrice
document.body.insertBefore(title, container);
document.body.insertBefore(display, container);

const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
];

buttons.forEach((text) => {
    const button = document.createElement("button");
    button.textContent = text;

    // Aggiungiamo il listener per gestire il click su ogni bottone
    button.addEventListener("click", () => {
        if (text === "C") {
            // Reset quando si preme "C"
            display.textContent = "0";
            display_value = "";
            firstNumber = "";
            operator = "";
            secondNumber = "";
        } else if (text === "=") {
            // Esegui il calcolo quando si preme "="
            if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
                let risultato = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
                updateDisplay(risultato);
                resetAfterCalculation(); // Reset dopo il calcolo
            }
        } else {
            // Se è un numero o operatore, aggiorna il display
            display_value += text;
            display.textContent = display_value;
            
            // Salva i valori nei numeri e operatori
            if (!isNaN(text)) {  // Se è un numero
                if (operator === "") {
                    firstNumber += text; // Salva il primo numero
                } else {
                    secondNumber += text; // Salva il secondo numero
                }
            } else if (["+", "-", "*", "/"].includes(text)) {
                operator = text;  // Salva l'operatore
            }
        }
    });
    container.appendChild(button);
});

// Funzione per aggiornare il display
function updateDisplay(content) {
    display.textContent = content; // Mostra il risultato
    console.log("Display aggiornato con:", content); // Debug
}

// Funzione per resettare il display e le variabili
function resetAfterCalculation() {
    setTimeout(() => {
        display_value = "";
        firstNumber = "";
        operator = "";
        secondNumber = "";
        display.textContent = "0"; // Reset del display
    }, 3000); // Reset dopo 3 secondi per dare il tempo di vedere il risultato
}

// Funzioni di calcolo
function add(...numeri) {
    return numeri.reduce((accumulatore, numero) => accumulatore + numero, 0);
}

function subtract(...numeri) {
    if (numeri.length === 0) return 0;
    return numeri.reduce((accumulatore, numero) => accumulatore - numero);
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 === 0) {
        // alert("Non posso divedere per 0")
        return ("Errore!, non si può dividere per 0!");
    } else if(num1 === 0) {
        return 0;
    } else {
        return (num1/num2).toFixed(2);
    }
}

function operate(firstNumber, operator, secondNumber){
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}
