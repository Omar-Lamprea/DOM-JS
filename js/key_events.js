export default function moveBall(){
  const d = document
  const ball = d.getElementById('ball')
  const ballContainer = d.getElementById('ballContainer')

  
  let x = 0
  let y = 0
  
  d.addEventListener('keydown', (e)=>{
    const limitsBall = ball.getBoundingClientRect()
    const limitsStage = ballContainer.getBoundingClientRect()
    // console.log(ball)
    // console.log(limitsBall)
    switch (e.keyCode) {
      case 37:
        e.preventDefault()
        if(limitsBall.left > limitsStage.left) x--
        break;
      case 39:
        e.preventDefault()
        if(limitsBall.right < limitsStage.right) x++
        break;
      case 38:
        e.preventDefault()
        if(limitsBall.top > limitsStage.top) y--

        break;
      case 40:
        e.preventDefault()
        if(limitsBall.bottom < limitsStage.bottom) y++
        break;
    }
    ball.style.transform = `translate(${x * 10}px,${y * 10}px)`
  })
}

export function shortCuts (e){
  // console.log(e)
  // console.log(e.altKey)
  // console.log(e.ctrlKey)
  // console.log(e.shiftKey)

  if(e.keyCode === 65 && e.altKey){
    alert('haz ejecutado una alerta - alert')
  }
  if(e.keyCode === 67 && e.altKey){
    confirm('haz ejecutado una confirmación - confirm')
  }
  if(e.keyCode === 80 && e.altKey){
    prompt('haz ejecutado una aviso - prompt')
  }
}