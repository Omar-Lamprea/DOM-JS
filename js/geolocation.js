const d = document;
const w = window;
const n = navigator;

export default function geo(){

  const geo = d.getElementById('geo')

  const success = (position)=>{
    let coords = position.coords

    geo.innerHTML = `
    <p>Tu posición actual es:</p
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b> Metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Maps</a>
    `

    console.log(coords)
  }

  const error = (err) =>{
    geo.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
    console.log(`Error ${err.code}: ${err.message}`)
  }

  const options = {
    enableHighAccuracy:true,
    timeout: 5000,
    maximunAge: 0
  }

  n.geolocation.getCurrentPosition(success, error, options)

}