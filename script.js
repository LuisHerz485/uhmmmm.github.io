const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Vamos a pasarla bien, anda di que si", images:"images/cat-02.gif"},
  {text:"Te dejare que lo pienses un ratito", images:"images/cat-03.gif"},
  {text:"Dime que siiiiiii!!!! :(", images:"images/cat-04.gif"},
  {text:"Yo se que tu quieres", images:"images/cat-05.gif"},
]
const ohyes = {text:"Sabía que aceptarias", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

function moverBoton() {
  const windowWidth = '300';
  const windowHeight = '300';

  const boton = document.querySelector('.button.button__negative');
  const botonRect = boton.getBoundingClientRect();

  const botonWidth = botonRect.width;
  const botonHeight = botonRect.height;

  const nuevoX = Math.max(0, Math.min(windowWidth - botonWidth, Math.random() * (windowWidth - botonWidth)));
  const nuevoY = Math.max(0, Math.min(windowHeight - botonHeight, Math.random() * (windowHeight - botonHeight)));

  boton.style.transform = `translate(${nuevoX}px, ${nuevoY}px)`;
}





buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Si"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})