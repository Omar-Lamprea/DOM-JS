
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

export default function hamburgerMenu(menuBtn, panelMenu, menuLinkA){
  const d = document

  d.addEventListener('click',(e)=> {
    // console.log(e)
    if(e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)){
      d.querySelector(panelMenu).classList.toggle('is-active')
      d.querySelector(menuBtn).classList.toggle('is-active')
      d.querySelector('.container-main').classList.toggle('blur')
    }

    if(e.target.matches(menuLinkA)){
      d.querySelector(panelMenu).classList.remove('is-active')
      d.querySelector(menuBtn).classList.remove('is-active')
      d.querySelector('.container-main').classList.remove('blur')
    }
  })
}
