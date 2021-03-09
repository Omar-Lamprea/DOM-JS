

import hamburgerMenu from './hamburger_menu.js' //importadas por default, solo uno por archivo.
import dijitalClock from './reloj.js'
import moveBall from './key_events.js'
import{shortCuts} from './key_events.js' //importada normal, usando destructuración
import countdownClock from './countdown.js'
import scrollTop from './scroll.js'
import themes from './themes.js'
import jsResponsive from './js_responsive.js'
import responsiveTester from './responsive_tester.js'
import userDeviceInfo from './deteccion_dispositivos.js'
import network_status from './network_status.js'
import webCam from './web_cam.js'
import geo from './geolocation.js'

const d = document
d.addEventListener('DOMContentLoaded',(e)=>{
  // Exercise: sections, menu
  hamburgerMenu('.menu-btn', '.overlay', '.panel-menu a')
  // Exercise 1: clock, alarm
  dijitalClock()
  //Exercise 2: ball- events
  moveBall()
  //Exercise 3: countdown
  countdownClock('#countdown', 'form-date')
  //Exercise: scroll
  scrollTop()
  //Exercise 4: responsive JS
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
  //Exercise 5: tester
  responsiveTester('responsiveTester')
  //Exercise 6: UserAgent
  userDeviceInfo('user-device')
  //Exercise 8: web cam
  webCam()
  //Exercise 9: geolocation
  geo()
  
})


//Exercise 3: shortCuts, atajos del teclado:
d.addEventListener('keydown', (e) =>{
  shortCuts(e)
})

//Exercise: themes
themes('#theme', 'dark-mode')

//Exercise 7: internet connection
network_status()