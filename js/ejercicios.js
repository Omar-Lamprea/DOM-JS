
// basic style:

// const menu = document.getElementById('menu-btn')
// const overlay = document.getElementById('overlay') 


// function showModal(){
//   overlay.classList.toggle('is-active');
//   menu.classList.toggle('is-active');
// }


// function closeModal(){
//   overlay.classList.remove('is-active');
//   menu.classList.remove('is-active');
// }

// overlay.addEventListener('click', closeModal)
// menu.addEventListener('click', showModal)

// console.log(overlay.childNodes)

// pro style:
//nota: acá se usa la delegación de eventos, asignando el listener al 
// documento, de esta forma se evita la propagación no deseada de eventos

import hamburgerMenu from './hamburger_menu.js' //importadas por default, solo uno por archivo.
import dijitalClock from './reloj.js'
import moveBall from './key_events.js'
import{shortCuts} from './key_events.js' //importada normal, usando destructuración
import countdownClock from './countdown.js'

const d = document
d.addEventListener('DOMContentLoaded',(e)=>{
  // Exercise 1: sections, menu
  hamburgerMenu('.menu-btn', '.overlay', '.panel-menu a')
  // Exercise 2: clock, alarm
  dijitalClock()
  //Exercise 3: ball- events
  moveBall()
  //Exercise 4: countdown
  countdownClock('#countdown', '2021, 10, 06')
})
  //Exercise 3: shortCuts, atajos del teclado:
d.addEventListener('keydown', (e) =>{
  shortCuts(e)
})
