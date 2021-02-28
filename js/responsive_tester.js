const d = document;
const w = window;

export default function responsiveTester(form){

  const $form = d.getElementById(form)
  // console.log($form)
  let openLink;

  d.addEventListener('submit', (e)=>{
    // console.log(e)
    if(e.target === $form){
      e.preventDefault()
      openLink = w.open($form.linkUrl.value, 'tester', `width=${$form.widthLink.value}, height=${$form.heightLink.value}`)
    }
  })
  d.addEventListener('click', (e)=>{
    if(e.target === $form.close){
      openLink.close()
    }
  })
}