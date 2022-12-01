const navigationDropdownList = document.querySelectorAll('.navigation__subList')
let subNavigationOpen = false

// open and close drpodowns on click
function toggleNavigationDropdown(index){
    if(subNavigationOpen){
        // close navigation dropdown if it is alredy open
        navigationDropdownList[index].classList.remove('active')
        subNavigationOpen = false
    }
    else{
        // show navigation dropdown if it is closed
        navigationDropdownList[index].classList.add('active')
        subNavigationOpen = true
    }
}

export default toggleNavigationDropdown