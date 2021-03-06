// Variaveis

const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

// Maiúsculos, minúsculos, Números e Símbolos
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

//Funções para retornar os caracteres aleatóriamente
function getMinusculo() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getMaiusculo() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumero() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSimbolo() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//Função para gerar a senha
function generatePassword() {

    const len = lenEl.value;

    let password = "";
    // Condicionais para os checkboxes
    if (upperEl.checked) {
        password += getMaiusculo();
    }

    if (lowerEl.checked) {
        password += getMinusculo();
    }

    if (numberEl.checked) {
        password += getNumero();
    }

    if (symbolEl.checked) {
        password += getSimbolo();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getMaiusculo());
    }

    if (lowerEl.checked) {
        xs.push(getMinusculo());
    }

    if (numberEl.checked) {
        xs.push(getNumero());
    }

    if (symbolEl.checked) {
        xs.push(getSimbolo());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }
// Comando copiar da Textarea
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Senha copiada!");
});
