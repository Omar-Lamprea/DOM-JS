const d = document;
// https://coverr.co/ => página para videos de 5s
// por políticas de interacción, los videos SIEMPRE deben iniciar SIN SONIDO
export default function smartVideo(){
  
  const target = d.querySelector('#smartVideo')

  const play = 'autoplay muted'

  // console.log(target)

  const cb = (entries)=>{
    // console.log(entries)
    entries.forEach(entry =>{
      // console.log(entry)
      if(entry.isIntersecting){
        target.play()
      }else{
        target.pause()
      }
      
      window.addEventListener('visibilitychange', (e)=>{
        if(d.visibilityState === 'visible'){
          target.play()
        }else{
          target.pause()
        }
      })

    })
  }

  const observer = new IntersectionObserver(cb, {threshold: 0.5})

  observer.observe(target)



}
