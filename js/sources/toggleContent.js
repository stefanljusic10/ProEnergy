const toggleContent = document.querySelectorAll('.core__toggle-sign');
const contentToShow = document.querySelectorAll('.core__content');

function toggleSourceContent(index){
    // close content on if it is alredy opened
    if(contentToShow[index].classList.value.includes('active')){
        toggleContent[index].src = '../../assets/plus.svg'
        contentToShow[index].classList.remove('active')
    }
    // open content if it is closed
    else{
        toggleContent[index].src = '../../assets/minus.svg'
        contentToShow[index].classList.add('active')
    }
}

export default toggleSourceContent