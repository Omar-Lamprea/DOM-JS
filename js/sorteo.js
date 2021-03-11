const d = document

export default function lottery(arrLg, winnerBtn){
  const players = d.getElementById(arrLg)
  const playBtn = d.getElementById(winnerBtn)
  // console.log(players, playBtn)

  const lgs = [
    'JavaScript',
    'PHP',
    'JAVA',
    'C',
    'Python',
    'Ruby',
    'Go',
    'Visual Basic',
    'Rust',
    'Perl'
  ]

  const ul = d.createElement('ul')
  
  // for(let i = 0; i < lgs.length; i++){
  //   // console.log(i)
  // }
  
  playBtn.addEventListener('click', (e)=>{
    const winner = (Math.floor(Math.random() * lgs.length))
    console.log(`posición: ${winner}, nombre: ${lgs[winner]}`)
    alert(`El ganador es: ${lgs[winner]}`)
  })

  lgs.forEach(el =>{
    // console.log(el)
    players.appendChild(ul).innerHTML += `<li>${el}</li>`
  })

}