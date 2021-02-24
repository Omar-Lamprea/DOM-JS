// basic form:

// export default function themes(){
//   const d = document;

//   const themesButton = d.getElementById('theme')
//   const imgTheme = d.getElementById('imgTheme')
  
//   themesButton.addEventListener('click',e =>{
//     d.body.classList.toggle('dark-mode')
//     d.body.classList.toggle('light-mode')
    
//     // console.log(d.body.classList.value)

//     imgTheme.setAttribute('src','./Assets/sun.svg')
//     if(d.body.classList.value == "light-mode"){
//       imgTheme.setAttribute('src','./Assets/night.svg')
//     }
//   })
// }


// dynamic form:
const d = document

export default function themes(btn, classDark){
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll('[data-dark]') //los [] son para que evaluen todos los atributos data-


  // console.log($themeBtn, $selectors)

  const moonImg = d.createElement('img')
  moonImg.setAttribute('src', './Assets/night.svg')
  $themeBtn.appendChild(moonImg)

  const moon = '<img src="./Assets/night.svg" alt="theme" id="imgTheme">'
  const sun = '<img src="./Assets/sun.svg" alt="theme" id="imgTheme">'

  d.addEventListener('click', (e)=>{
    if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
      console.log($themeBtn.innerHTML)
      if($themeBtn.innerHTML === moon){
        $selectors.forEach((el) => el.classList.add(classDark))
        $themeBtn.innerHTML = sun
      }else{
        $selectors.forEach((el) => el.classList.remove(classDark))
        $themeBtn.innerHTML = moon
      }
    }
  })


}