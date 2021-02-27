const d = document;
const w = window;

export default function responsiveTester(open, close,){

  const webLink = d.getElementById('webLink')
  const webWidth = d.getElementById('webWidth')
  const webHeight = d.getElementById('webHeight')
  let openLink;

  d.addEventListener('click', (e)=>{
    // console.log(e)
    if(e.target.matches(open)){
      // console.log(webWidth.value)
      openLink = w.open(webLink.value, 'page1', `width=${webWidth.value}, height=${webHeight.value}`)
    }
    if(e.target.matches(close)){
      openLink.close(webLink.value)
    }
  })
}