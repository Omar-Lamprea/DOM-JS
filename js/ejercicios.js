
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
import scrollTop from './scroll.js'
import themes from './themes.js'
import jsResponsive from './js_responsive.js'

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
  //Excercise: scroll
  scrollTop()
  //Excersice 5: responsive JS
  jsResponsive(
    'video',
    '(min-width: 600px)',
    `<a target="_blank" href="https://www.youtube.com/watch?v=Sp4ELDWoIsk&feature=emb_title" blank_>Ver Video</a>`,
    `<iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/Sp4ELDWoIsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  )
  jsResponsive(
    'gmaps',
    '(min-width: 600px)',
    `<a target="_blank" href="https://www.google.com/maps/" blank_>Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d77895.71043505364!2d-75.68411095268995!3d4.5319371564338375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1614351040174!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  )
})
//Exercise 3: shortCuts, atajos del teclado:
d.addEventListener('keydown', (e) =>{
  shortCuts(e)
})

//Excercise: themes
themes('#theme', 'dark-mode')