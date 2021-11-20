// Quality of life variable
const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// Interface Variable
let totalSlides = cs('.slider--item').length,
slideItem = document.querySelector('.slider--item'),
slideItems = document.querySelectorAll('.slider--item');


// Environment Control Variable
let currentSlide = 0;

// Set the slideshow full height to have space to all slides
c('.slider--width').style.height = `calc(100vh * ${totalSlides}`

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin()
}

function goTo(model) {
    currentSlide = model;
    updateMargin();
}

function updateMargin() {
    let sliderItemHeight = c('.slider--item').clientHeight;
    let newMargin = (currentSlide * sliderItemHeight);
    c('.slider--width').style.marginTop = `-${newMargin}px`;
}
for(let i = 0; i < slideItems.length; i++) {
    cs('nav a')[i].addEventListener('click', (e)=>e.preventDefault())
}