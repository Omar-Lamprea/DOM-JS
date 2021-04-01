const d = document;

export default function scrollSpy(){

  const target = d.querySelectorAll('section[data-scroll-spy]')
  const cb = (entries)=>{
    // console.log(entries)
    entries.forEach(entry =>{
      // console.log(entry)
      const id = entry.target.getAttribute('id')
      // console.log(id)
      if(entry.isIntersecting){
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')
      }else{
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active')
      }
    })
  }

  // let options = {
  //   root: d.querySelectorAll('section'),
  //   rootMargin: '0px',
  //   threshold: 0.5
  // }


  const observer = new IntersectionObserver(cb, {
    //root: 
    // rootMargin: '-250px',
   threshold: [0.75, 1]
  })
  // console.log(observer)

  target.forEach(el => observer.observe(el))



  // observer.observe(target)

}