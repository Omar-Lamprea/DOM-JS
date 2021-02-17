
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

import hamburgerMenu from './hamburger_menu.js'
import dijitalClock from './reloj.js'

const d = document
d.addEventListener('DOMContentLoaded',(e)=>{
  // Exercise 1: sections, menu
  hamburgerMenu('.menu-btn', '.overlay', '.panel-menu a')
  
  
  // Exercise 2: clock, alarm
  dijitalClock()
})
