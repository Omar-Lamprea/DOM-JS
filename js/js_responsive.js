const d = document;
const w = window;

// form 1
// export default function jsResponsive(){
//   const video = d.getElementById('video'),
//   gmaps = d.getElementById('gmaps')

//   // console.log(video, map)

//   console.log(w.matchMedia("(min-width: 600px)"))

//   w.addEventListener('resize',(e)=>{
//     if(w.matchMedia("(min-width: 600px)").matches){
//       video.innerHTML = ` <iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/Sp4ELDWoIsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//       gmaps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d77895.71043505364!2d-75.68411095268995!3d4.5319371564338375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1614351040174!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
//     }else{
//       video.innerHTML = `<a target="_blank" href="https://www.youtube.com/watch?v=Sp4ELDWoIsk&feature=emb_title" blank_>Ver Video</a>`
//       gmaps.innerHTML = `<a target="_blank" href="https://www.google.com/maps/" blank_>Ver Mapa</a>`
//     }
//   })
// }



//form 2:
export default function jsResponsive(id, mq, mobileContent, desktopContent){

  let breakPoint = w.matchMedia(mq)

  const responsive = (e) =>{
    if(e.matches){
      d.getElementById(id).innerHTML = desktopContent
    }else{
      d.getElementById(id).innerHTML = mobileContent
    }
  }
  breakPoint.addListener(responsive)
  responsive(breakPoint)
}