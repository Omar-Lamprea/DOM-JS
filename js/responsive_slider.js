export default function slider(){

  const sliderImages = [
    "./Assets/Slider/dev.jpeg",
    "./Assets/Slider/3dprint33.jpg",
    "./Assets/Slider/games1.jpg",
    "./Assets/Slider/life.jpg",
    "./Assets/Slider/musica.jpg"
  ]

  // console.log(sliderImages[1])

  const $sliderContent = document.getElementById('sliderContent')
  // console.log($sliderContent.querySelector('img'))

  let contador = 1

  function reset(){
    if(contador === sliderImages.length || contador > sliderImages.length){
      contador = 0
    }
  }
  const intervarImgs = 
    setInterval(() => {
      $sliderContent.querySelector('img').setAttribute('src', sliderImages[contador])
      contador++
      if(contador === sliderImages.length){
        contador = 0
      }
    }, 3000);

  console.log(contador)

  document.addEventListener('click', (e)=>{
  
    if(e.target.matches('#next')){
      // console.log('adelante')
      // console.log(contador)
      $sliderContent.querySelector('img').setAttribute('src', sliderImages[contador])
      contador++
      reset()
      console.log(contador)
    }

    if(e.target.matches('#back')){
      console.log(contador)
      contador--
      $sliderContent.querySelector('img').setAttribute('src', sliderImages[contador])
      if(contador === 0 || contador > sliderImages.length){
        contador = sliderImages.length
      }
    }

  })

}