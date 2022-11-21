const inputText = document.getElementById('input-text');
const btnEncrypt = document.getElementById('btn-encrypt');
const btnUnencrypt = document.getElementById('btn-unencrypt');
const inputResult = document.getElementById('mensaje-texto');
const btnCopy = document.getElementById('btn-copy');
const lettersOnly ='^[a-z !ñ]+$';

const formColorInput = document.getElementById('input-text');
formColorInput.style.color="rgb(10,56,113)";
const formColorOutput = document.getElementById('mensaje-texto');
formColorOutput.style.color="rgb(10,56,113)";

document.addEventListener('DOMContentLoaded', () => {
btnEncrypt.addEventListener('click', encryptText);
btnUnencrypt.addEventListener('click', unencryptText);
btnCopy.addEventListener('click', copyText);
});

function encryptText(e) {
e.preventDefault();
inputResult.value = '';
let text = inputText.value;

if(text.match(lettersOnly)!=null){
    let words = text.split(' ');
    let newWords = [];

    for (let word of words) {
    word = word.replaceAll('e','enter');
    word = word.replaceAll('i','imes');
    word = word.replaceAll('a','ai');
    word = word.replaceAll('o','ober');
    word = word.replaceAll('u','ufat');      
    
    newWords.push(word);    
    }

    const result = newWords.join(' ');
    
    inputResult.value = result;
} else {
    showError('Solo se permiten letras minúsculas, sin acentos');
    return;
}  
}

function unencryptText(e) {
    e.preventDefault();
    inputResult.value = '';
    let text = inputText.value;
    
    if(text.match(lettersOnly)!=null){
    let words = text.split(' ');
    let newWords = [];

    for (let word of words) {
        word = words.replaceAll('enter','e');
        word = words.replaceAll('imes','i');
        word = words.replaceAll('ai','a');
        word = words.replaceAll('ober','o');
        word = words.replaceAll('ufat','u');      
        
        newWords.push(word);    
}

    const result = newWords.join(' ');
    
    inputResult.value = result;
    } else {
    showError('Solo se permiten letras minúsculas, sin acentos');
    return;
    }  
}

function showError(message) {
const existsError = document.querySelector('.error');

if(!existsError) {
    const form = document.getElementById('formulario');
    const divMessage = document.createElement('div');
    divMessage.classList.add('error');

    divMessage.textContent = message;            
    form.appendChild(divMessage);
    
    setTimeout(()=> {
        divMessage.remove();
    }, 3000);
}
}

function copyText(e) {
    e.preventDefault(); 
    const message = inputResult.value;

    navigator.clipboard.writeText(message);
}
