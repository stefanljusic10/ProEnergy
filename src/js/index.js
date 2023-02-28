import data from '../../data.json'
import toggleNavbarDropdown from './navbar/toggleDropdown';
import toggleNavigationDropdown from './navigation/toggleDropdown'
import toggleSourceContent from './sources/toggleContent'
import checkInputs from './form/checkInputs'
import '../scss/main.scss'


// navbar dropdown
const navbarDropdowns = document.querySelectorAll('.dropdown')
const showDropdowns = document.querySelectorAll('.showDropdown')

navbarDropdowns.forEach((toggle, index) => {
    // open and close dropdowns on click
    toggle.addEventListener('click', () => toggleNavbarDropdown(index))
})

showDropdowns.forEach(dropdown => {
    // close dropdown after mouse leaved
    dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('active')
    })
});

document.body.addEventListener('click', (e) => {
    // close dropdown if the user clicks any element which not contain .dropdown class
    if(!e.target.classList.value.includes('dropdown')){
        showDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
})


// navigation dropdown
const navigationDropdowns = document.querySelectorAll('.navigationDropdown')

navigationDropdowns.forEach((toggle, index) => {
    toggle.addEventListener('click', () => toggleNavigationDropdown(index))
})



// slider
const slider = data.slider
const sliderArrows = document.querySelectorAll('.arrow')
const [backArrow, forwardArrow] = sliderArrows
let sliderDots = document.querySelectorAll('.dot')
sliderDots = [...sliderDots]
const quotesText = document.querySelector('.quotes__text')
const authorImage = document.querySelector('.quotes__author-image')
const quoteAuthorBold = document.querySelector('.quotes__author-name--bold')
const quoteAuthorLight = document.querySelector('.quotes__author-name--light')
let activeSlideIndex = 0

for (let i = 0; i < sliderArrows.length; i++) {
    sliderArrows[i].addEventListener('click', () => {
        // can't fire event on arrow which is disabled
        if(!sliderArrows[i].classList.contains('disableSlider')){
            // i=0 - back arrow
            // i=1 - forward arrow
            if(i === 0){
                // back arrow clicked
                // filling elements with content for upcoming slider
                quotesText.innerHTML = slider[activeSlideIndex - 1].quotes
                authorImage.src = slider[activeSlideIndex - 1].image
                quoteAuthorBold.innerHTML = slider[activeSlideIndex - 1].quoteAuthorOne
                quoteAuthorLight.innerHTML = slider[activeSlideIndex - 1].quoteAuthorTwo
                // enable forward arrow 
                forwardArrow.classList.remove('disableSlider')
                // enabling and disabling red dots
                sliderDots.forEach((elem, index) => {
                    if(index === activeSlideIndex - 1)
                        elem.classList.remove('disableDot')
                    else elem.classList.add('disableDot')
                })
                --activeSlideIndex
                // disable back arrow if slider reaches start point
                if(activeSlideIndex === 0)
                    backArrow.classList.add('disableSlider')
            }
            if(i === 1){
                // forward arrow clicked
                // filling elements with content for upcoming slider
                quotesText.innerHTML = slider[activeSlideIndex + 1].quotes
                authorImage.src = slider[activeSlideIndex + 1].image
                quoteAuthorBold.innerHTML = slider[activeSlideIndex + 1].quoteAuthorOne
                quoteAuthorLight.innerHTML = slider[activeSlideIndex + 1].quoteAuthorTwo
                // enable back arrow
                backArrow.classList.remove('disableSlider')
                // enabling and disabling red dots
                sliderDots.forEach((elem, index) => {
                    if(index === activeSlideIndex + 1)
                        elem.classList.remove('disableDot')
                    else elem.classList.add('disableDot')
                })
                ++activeSlideIndex
                // disable forward arrow if slider reaches end point
                if(activeSlideIndex === slider.length - 1)
                    forwardArrow.classList.add('disableSlider')
            }
        }
    })
}


// toggle sources
const sourceContent = document.querySelectorAll('.core__toggle');

for (let i = 0; i < sourceContent.length; i++) {
    sourceContent[i].addEventListener('click', () => toggleSourceContent(i))
}


// form validation
const form = document.querySelector('.contact__form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

