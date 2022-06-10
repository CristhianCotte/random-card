
let fondo = document.querySelector("body");
fondo.style.background = "green";

window.onload = () => {
    document.querySelector('.number').classList.add(generateRandomIcon());
    document.querySelector('.number').innerHTML = generateRandomNumber();
}
let generateRandomNumber =() =>{
    let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let numerosCard = Math.floor(Math.random() * numeros.length);
    return numeros[numerosCard]
}
let generateRandomIcon =() => {
    let iconos = ["rombos", "picas", "corazon", "treboles"];
    let iconosCard = Math.floor(Math.random() * iconos.length);
    return iconos[iconosCard]
}
  
