


let next3 = document.getElementById('next3');
let prev3 = document.getElementById('prev3');
const slider_item = document.querySelectorAll('.loop-slider .slider .item');





let slider4_length = slider_item.length-1;
let background = document.querySelector('.background .dots ul.dots-container li.active3');
let  dots_item1 = document.querySelectorAll('.background .dots .dots-container li');
let active3 = 1;




const list2 = document.querySelector('.slider2 .slider-content');
const items2 = document.querySelectorAll('.slider2 .slider-content .item');
const dots_img = document.querySelectorAll('.slider2-contain .dots-img li');
const next2 = document.getElementById('next2');
const prev2 = document.getElementById('prev2');
const list_img = document.querySelector('.slider2-contain .slider-control .dots-img')
const img =document.querySelectorAll('.slider2-contain .dots-img img')
const list = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .list .item');
const dots = document.querySelectorAll('.slider .dots li');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.querySelector('.slider');
const btn_active = document.querySelectorAll('.grid-container .buttons button')
let active = 0;
const lengthItems = items.length - 1;

let active2 = 0;
const size2 = items2.length - 1;


//-------------------------------------------GRID CONTAINER--------------------------------------
let left = document.getElementById('left');
let right = document.getElementById('right');
let left_content = document.querySelectorAll('.grid-container .grid-content div');
let right_content = document.querySelectorAll('.grid-container .grid-content-copy div');

//Function to set height.
let heightSlider = items[active].offsetHeight;
slider.style.height = (heightSlider + 120) + 'px';


next.addEventListener('click', function() {
    active = (active + 1 > lengthItems) ? 0 : (active + 1);
    reloadSlider();
});

prev.addEventListener('click', function() {
    active = (active - 1 < 0) ? lengthItems : (active - 1);
    reloadSlider();
});

let refreshSlider = setInterval (()=> {
    next.click()},3000);
function reloadSlider() {
    const checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval (()=> {
        next.click()},3000);
}
dots.forEach((li,key) => {
    li.addEventListener('click',function() {
        active = key;
        reloadSlider();
    })
})

// ------------------------------------------------------------BEGIN-------------------------------------------------



next2.addEventListener('click', function () {
    if (active2 < size2) {
        active2++;
    }
    refreshSlider2();
});
prev2.addEventListener('click', function () {
    if (active2 > 0) {
        active2--;
    }
    refreshSlider2();
});
function refreshSlider2() {
    const checkLeft2 = items2[active2].offsetLeft;
    list2.style.left = -checkLeft2 + 'px';

    let lastActiveDot2 = document.querySelector('.slider2-contain .dots-img li.active');
    lastActiveDot2.classList.remove('active');
    dots_img[active2].classList.add('active');
    if (active2 <= 4 ) {
        let moveLeft = img[active].clientWidth;
        list_img.style.left = -moveLeft*active2 + 'px';
    }
    
}
dots_img.forEach ((li,key)=> { 
    li.addEventListener('click',function() {
        active2 = key;
        refreshSlider2();
    })
}) 

left.addEventListener('click', function () {
    const activeButton = document.querySelector('.grid-container .buttons button.active');
    if (activeButton) { 
      activeButton.classList.remove('active');
      left.classList.add('active'); 
        displaySet(0);
    }
});
right.addEventListener('click', function () {
    const activeButton = document.querySelector('.grid-container .buttons button.active');
    if (activeButton) {
      activeButton.classList.remove('active');
      right.classList.add('active'); 
        displaySet(1);
    }  
  });
function displaySet (i) {
    if (i === 0) {
        for (let j = 0; j < right_content.length;j++) {
        right_content[j].style.display = "none";
        left_content[j].style.display = "unset";
        }
    }
    else {
        for(let j = 0; j < left_content.length;j++) {
        right_content[j].style.display = "unset";
        left_content[j].style.display = "none";
        }
    }
}


next3.addEventListener('click', function() {

    let slider3 = document.querySelectorAll('.loop-slider .slider .item');
    document.querySelector('.loop-slider .slider').appendChild(slider3[0]);
    updataDot(1);
})
prev3.addEventListener('click', function() {

    let slider3 = document.querySelectorAll('.loop-slider .slider .item');
    document.querySelector('.loop-slider .slider').prepend(slider3[slider3.length-1]);
    updataDot(-1);
})


function updataDot (a) {
    let background = document.querySelector('.background .dots ul.dots-container li.active3');
    if (a > 0) {
        background.classList.remove('active3');
        active3 = (active3 + 1 >slider4_length )? 0 : active3+1;
        dots_item1[active3].classList.add('active3');
    }
    else {
        background.classList.remove('active3');
        active3 = (active3 -1 < 0)? slider4_length : active3-1;
        dots_item1[active3].classList.add('active3');
    }
    
}