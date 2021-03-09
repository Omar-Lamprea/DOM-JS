const d = document;
const w = window;
const n = navigator;

export default function networkStatus(){

  const messageStatus = d.createElement('div')
  
  const section = d.getElementById('section-7')

  // d.body.insertAdjacentElement('afterbegin', messageStatus)
  // setTimeout(()=> d.body.removeChild(messageStatus), 2000)
  
  
  section.insertAdjacentElement('beforeend', messageStatus)
  
  // setTimeout(() => {
  //   section.removeChild(messageStatus)
  // }, 2000);

  // setTimeout(()=> section.removeChild(messageStatus), 2000)
  // console.log(messageStatus)

  w.addEventListener('online', (e)=> {
    console.log(n.onLine)
    messageStatus.classList.add('online')
    messageStatus.classList.remove('offline')
    messageStatus.innerHTML = `Conexión Reestablecida`
  })

  w.addEventListener('offline', (e)=> {
    console.log(n.onLine)
    messageStatus.classList.add('offline')
    messageStatus.classList.remove('online')
    messageStatus.innerHTML = `Conexión Perdida`
  })
}