const d = document;
const w = window;

export default function speechReader(){
  const $speechSelect = d.getElementById('speech-select'),
   $speechTextArea = d.getElementById('speech-area'),
   $speechBtn = d.getElementById('speech-btn'),
   speechMessage = new SpeechSynthesisUtterance()

  // console.log(speechMessage)

  let voices = []

  d.addEventListener('DOMContentLoaded', e =>{
    // console.log(speechSynthesis)
    // console.log(speechSynthesis.getVoices())
    speechSynthesis.addEventListener('voiceschanged', e=>{
      // console.log(e)
      voices = speechSynthesis.getVoices()
      // console.log(voices)

      voices.forEach((voice) =>{
        const $option = d.createElement('option')
        $option.value = voice.name
        $option.textContent = `${voice.name} *** ${voice.lang}`

        $speechSelect.appendChild($option)
      })

    })

  })
  d.addEventListener('change', e =>{
    if(e.target === $speechSelect){
      speechMessage.voice = voices.find(voice => voice.name === e.target.value)
    }

    // console.log(speechMessage)

  })

  d.addEventListener('click', e =>{
    if(e.target === $speechBtn){
      speechMessage.text = $speechTextArea.value
      speechSynthesis.speak(speechMessage)
    }
  })
}