export default function slider(){

  const sliderImages = [
    "./Assets/Slider/dev.jpeg",
    "./Assets/Slider/3dprint33.jpg",
    "./Assets/Slider/games1.jpg",
    "./Assets/Slider/life.jpg",
    "./Assets/Slider/musica.jpg",
    "http://placeimg.com/400/400/any"
  ]

  // console.log(sliderImages[1])

  const $sliderContent = document.getElementById('sliderContent')
  // console.log($sliderContent.querySelector('img'))

  let contador = 1

  function reset(){
    if(contador >= sliderImages.length){
      contador = 0
    }
  }
  const intervarImgs = 
    setInterval(() => {
      $sliderContent.querySelector('img').setAttribute('src', sliderImages[contador])
      contador++
      reset()
      // console.log(contador)
    }, 5000);

  // console.log(contador)

  document.addEventListener('click', (e)=>{
    if(e.target.matches('#next')){
      $sliderContent.querySelector('img').setAttribute('src', sliderImages[contador])
      contador++
      reset()
      // console.log(contador)
    }

    if(e.target.matches('#back')){
      contador--
      if(contador <= 0){
        contador = sliderImages.length
      }
      $sliderContent.querySelector('img').setAttribute('src', sliderImages[contador-1])
      // contador--
      // console.log(contador)
    }
  })

}