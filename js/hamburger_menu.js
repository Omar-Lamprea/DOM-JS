export default function hamburgerMenu(menuBtn, panelMenu, menuLinkA){
  const d = document

  d.addEventListener('click',(e)=> {
    // console.log(e)
    if(e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)){
      d.querySelector(panelMenu).classList.toggle('is-active')
      d.querySelector(menuBtn).classList.toggle('is-active')
    }

    if(e.target.matches(menuLinkA)){
      d.querySelector(panelMenu).classList.remove('is-active')
      d.querySelector(menuBtn).classList.remove('is-active')
    }
  })
}
