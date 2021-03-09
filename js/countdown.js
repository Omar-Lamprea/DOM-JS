export default function countdownClock(countdown, date){
  const d = document;
  const $clock = d.querySelector(countdown)
  const $formDate = d.getElementById(date)
  
  const $days = d.querySelector('#days')
  const $hours = d.querySelector('#hours')
  const $minutes = d.querySelector('#minutes')
  const $seconds = d.querySelector('#seconds')
  
  // console.log(days, hours, minutes, seconds)
  
  const sec = 1000
  const min = sec * 60
  const hr = min * 60
  const day = hr * 24
  
  d.addEventListener('click', (e)=>{
    if(e.target === $formDate.dateBtn){
      remaining()
      let stopCountdown = 
        setInterval(() => {
          remaining()
        }, 1000);
    }
  })
  
  
  function remaining(){
    const dateTarget = new Date($formDate.date.value)
    const dateA = new Date()
    const duration = dateTarget - dateA
    
    const remainingDays = Math.floor(duration / day)
    const remainingHours = Math.floor((duration % day) / hr)
    const remainingMinutes = Math.floor((duration % hr) / min)
    const remainingSeconds = Math.floor((duration % min) / sec)
    
    
    $days.innerHTML = `${remainingDays} días `
    $hours.innerHTML = `${remainingHours} Horas `
    $minutes.innerHTML = `${remainingMinutes} minutos `
    $seconds.innerHTML = `${remainingSeconds} segundos `
    
    
    console.log(stopCountdown)
    
    if(remainingSeconds < 0){
      // alert('feliz cumpleaños')
      clearInterval(stopCountdown)
      $clock.innerHTML = `<h3>Feliz Cumpleaños!🤓</h3>`
    }
  }
  

}