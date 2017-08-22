
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.control-dot');

for(var j=0; j<slides.length; j++){
  slides[j].classList.add('invisible');
}
slides[0].classList.remove('invisible');

for(var i = 0; i < dots.length; i++){
  dots[i].addEventListener('click', (e) => {
      let id = e.target.dataset.number;
    for(var j=0; j<slides.length; j++){
      slides[j].classList.add('invisible');
    }
    slides[id - 1].classList.remove('invisible');
  })
}

for(var i = 0; i < dots.length; i++){
  dots[i].classList.remove('active');
}
  dots[0].classList.add('active');

  dots[1].addEventListener('click', (e) =>{
    e.target.classList.add('active');
    dots[0].classList.remove('active');
    dots[2].classList.remove('active');
  } )

  dots[0].addEventListener('click', (e) =>{
    e.target.classList.add('active');
    dots[1].classList.remove('active');
    dots[2].classList.remove('active');
  } )

  dots[2].addEventListener('click', (e) =>{
    e.target.classList.add('active');
    dots[0].classList.remove('active');
    dots[1].classList.remove('active');
  } )
