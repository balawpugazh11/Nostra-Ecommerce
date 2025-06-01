// Mobile Menu Functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

// Offer Bar
const offerClose = document.getElementById('offer-close');
const offerBar = document.querySelector('.bg-gray-900');

offerClose.addEventListener('click', () => {
    offerBar.style.display = 'none';
});

// Image Slider
const sliderContainer = document.querySelector('.slider-image-container');
const images = sliderContainer.querySelectorAll('img');
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize slider
updateSlider();

// Like Button Functionality
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const heartIcon = this.querySelector('img');
        if (heartIcon.src.includes('blackheart')) {
            heartIcon.src = 'img/icons/redheart.png';
        } else {
            heartIcon.src = 'img/icons/blackheart.png';
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin = 0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",
function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

sliderleftbutton.addEventListener("click",
function(){
    if(slidermargin==0)
    {
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{
        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
        var elbound = el.getBoundingClientRect()
        if(windowHeight>elbound.top-100){
            console.log("Hi")
            el.classList.remove("reveal-scroll-animate")
        }
    })
})

//Collections