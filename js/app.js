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
    animated[0].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l1.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[0].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[0].querySelector('.expand');
      text.style.visibility = "hidden";
    });
    animated[1].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l2.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[1].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[1].querySelector('.expand');
      text.style.visibility = "hidden";
    });
    animated[2].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l3.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[2].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[2].querySelector('.expand');
      text.style.visibility = "hidden";
    });
    animated[3].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l4.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[3].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[3].querySelector('.expand');
      text.style.visibility = "hidden";
    });
    animated[4].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l5.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[4].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[4].querySelector('.expand');
      text.style.visibility = "hidden";
    });
    animated[5].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l6.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[5].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[5].querySelector('.expand');
      text.style.visibility = "hidden";
    });
    animated[6].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l7.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[6].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[6].querySelector('.expand');
      text.style.visibility = "hidden";
    });
    animated[7].addEventListener('mouseleave', (e) => {
      e.target.style = {
        background: 'url("images/l8.jpg") center center no-repeat',
        size: 'cover'
      };
      let img = animated[7].querySelector('.img_animated');
      img.style.visibility = "hidden";
      let text = animated[7].querySelector('.expand');
      text.style.visibility = "hidden";
    });
  }

// input validation;

  let input = document.querySelector('input');
  let button = document.querySelector('button');

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.indexOf('@') === -1 || input.value.length < 6) {
    alert("Email address should contain '@' and consist of 5 characters at least!");
    return event.preventDefault();
  } else {
    alert("Email address has been written correctly:)");
  }
})
