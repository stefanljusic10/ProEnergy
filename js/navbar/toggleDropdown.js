const showDropdowns = document.querySelectorAll('.showDropdown')
let dropdownOpen = false

// open and close drpodowns on click
function toggleNavbarDropdown(index){
    // close all dropdowns if it is opened
    showDropdowns.forEach(dropdown => dropdown.classList.remove('active'))

    // close dropdown if it is opened
    if(dropdownOpen){
        showDropdowns[index].classList.remove('active')
        dropdownOpen = false
    }
    // open dropdown if it is closed
    else{
        showDropdowns[index].classList.add('active')
        dropdownOpen = true
    }
}

export default toggleNavbarDropdown