export default function scroolTop(){
  const d = document;
  const home = d.getElementById('homeBtn')

  d.addEventListener('scroll', (e)=>{
    // console.log(scrollY)
    if(scrollY > 300){
      home.classList.remove('hidden')
    }else{
      home.classList.add('hidden')
    }
  })

  d.addEventListener('click',(e)=>{
    if(e.target.matches('.home-btn') || e.target.matches(`.home-btn *`)){
      scroll(0,0)
    }
  })
}


// scroolTop({
//   behavior: 'smooth',
//   top: 0,
//   left:0
// })