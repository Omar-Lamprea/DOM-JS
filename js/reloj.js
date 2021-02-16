export default function dijitalWatch(){
  const d = document;

  d.addEventListener('click', (e)=>{
    // console.log(e)
    if(e.target.matches('#startClock')){
      const btnStar = d.getElementById('startClock')
      btnStar.disabled = true
      function startTime(){
        const today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds()
        d.getElementById('clock').innerHTML = `${hour}: ${minutes}: ${seconds}`
      }
      startTime()
      const checkTime = setInterval(() => {
        startTime()
      }, 1000);


      const stopClock = d.getElementById('stopClock')
      stopClock.addEventListener('click', (e)=>{
        btnStar.disabled = false
        clearInterval(checkTime)
        d.getElementById('clock').innerHTML = ``
      })
    }

    if(e.target.matches('#startAlarm')){
      d.querySelector('audio').play()
      d.querySelector('#startAlarm').disabled = true

      const stopAlarm = d.getElementById('stopAlarm')
      stopAlarm.addEventListener('click',(e)=>{
      d.querySelector('audio').pause()
      d.querySelector('#startAlarm').disabled = false
      })
    }
  })
}







































// function startTime() {
//   var today = new Date();
//   var hr = today.getHours();
//   var min = today.getMinutes();
//   var sec = today.getSeconds();
//   //Add a zero in front of numbers<10
//   min = checkTime(min);
//   sec = checkTime(sec);
//   document.getElementById("clock").innerHTML = `${hr} : ${min} : ${sec}`;
//   var time = setTimeout(function(){ startTime() }, 500);
// }
// function checkTime(i) {
//   if (i < 10) {
//       i = "0" + i;
//   }
//   return i;
// }
// startTime()