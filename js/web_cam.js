const d = document;
const w = window;
const n = navigator

export default function webCam(){
  //const videoCam = d.getElementById('webCam')
  const videoContainer = d.querySelector('.web-Cam')
  const initCam = d.getElementById('initCam')
  // console.log(videoContainer)

  initCam.addEventListener('click', (e)=>{
    const videoCam = d.createElement('video')
    videoContainer.insertAdjacentElement("afterbegin", videoCam)
    video.setAttribute('id', 'webCam')
    //console.log(videoCam)
    if(n.mediaDevices.getUserMedia){
      n.mediaDevices.getUserMedia({
        video:true,
        audio:true
      })
      .then(stream => {
        console.log(stream)
        videoCam.srcObject = stream
        videoCam.play()
      })
      .catch(err =>{
        videoCam.insertAdjacentHTML('beforebegin', `Error: <p><mark>${err}</mark> </p>`)
        console.log(`error: ${err}`)
      })
    }
  })
}