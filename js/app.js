// section menu - drop down menu;

let visibleList = document.querySelectorAll('.visible-li');
let hiddenList = document.querySelectorAll('.hidden-menu');


visibleList.forEach( (elem) => {
  elem.addEventListener('mouseover', () => {
    let hiddenList = elem.querySelector('.hidden-menu');
    hiddenList.style.display = "inline-block";
  });
  elem.addEventListener('mouseout', () => {
        let hiddenList = elem.querySelector('.hidden-menu');
        hiddenList.style.display = "none";
    });

});

// section class="sixth" - slider;

let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.control-dot');

for(let j=0; j<slides.length; j++){
  slides[j].classList.add('invisible');
}
slides[0].classList.remove('invisible');

for(let i = 0; i < dots.length; i++){
  dots[i].addEventListener('click', (e) => {
      let id = e.target.dataset.number;
    for(let j=0; j<slides.length; j++){
      slides[j].classList.add('invisible');
    }
    slides[id - 1].classList.remove('invisible');
  })
}

for(let i = 0; i < dots.length; i++){
  dots[i].classList.remove('active');
  dots[0].classList.add('active');
  }

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

// white logos appearing with delay during scroll

  window.sr = ScrollReveal();

  sr.reveal('.left_pic, .vintage_logo, .bicycles_logo', {delay: 600});

  // section class = "seventh" - pictures animation;

  let animated = document.querySelectorAll('.animated');

  for (let i = 0; i < animated.length; i++){
    animated[i].addEventListener('mouseover', (e) => {
      e.target.style.background = "#5ec29d";
      let img = animated[i].querySelector('.img_animated');
      img.style.visibility = "visible";
      img.style.background = "#5ec29d";
      let text = animated[i].querySelector('.expand');
      text.style.visibility = "visible";
      text.style.background = "#5ec29d";
    });
  }

  for (let i = 0; i < animated.length; i++){
    animated[i].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l1.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[i].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[i].querySelector('.expand');
      text.style.visibility = "hidden";
    });
  }

// input validation with modal box;

  let input = document.querySelector('input');
  let button = document.querySelector('button');
  let modal1 = document.getElementById('myModal_1');
  let modal2 = document.getElementById('myModal_2');
  let span = document.querySelectorAll(".close");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.indexOf('@') === -1 || input.value.length < 6) {
    modal1.style.display = "block";
  } else {
    modal2.style.display = "block";
  }
});

for ( let i = 0; i < span.length; i++){
  span[i].addEventListener("click", (e) => {
      modal1.style.display = "none";
      modal2.style.display = "none";
  });
}

  window.addEventListener("click", (e) => {
    if (e.target === modal1) {
      modal1.style.display = "none";
    } else if(e.target === modal2) {
      modal2.style.display = "none";
    }
});
