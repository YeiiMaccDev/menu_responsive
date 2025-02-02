// Menu
const navToggler = document.querySelector('.navbar-site__toggler');
const navMenu = document.querySelector('.navbar-site__list');
const navLinks = document.querySelectorAll('.navbar-site__link');



/**
 * When the toggler is clicked, toggle the toggler-open class on the toggler 
 * and toggle the open class on the menu.
 */
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}


/**
 * When a link is clicked, remove the class 'navbar-site__active' from the old active link 
 * and add the class 'navbar-site__active' to the new active link.
 * @param linkActive - the link that was clicked
 */
function activeClick(linkActive) {
    const oldActive = document.querySelector('.navbar-site__active');
    oldActive.classList.remove('navbar-site__active');

    linkActive.classList.add('navbar-site__active')
}


/**
 * If the navMenu has the class 'open', then click the navToggler, 
 * and then call the activeClick function.
 * @param link - the link that was clicked
 */
const navLinkClick = (link) => {        
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }        
    activeClick(link);        
}

// Events 

/** Adding an event listener to the navToggler element. 
* When the navToggler is clicked, the togglerClick function is called. 
*/
navToggler.addEventListener('click', togglerClick);


/** Adding an event listener to each link in the navLinks array. 
 * When a link is clicked, the navLinkClick function is called. 
*/
navLinks.forEach((link) => {
    link.addEventListener('click', () =>  navLinkClick(link) )
});


// Function to change the active menu class when scrolling through the page
function changeActiveMenu() {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll("nav ul li a"); 

    sections.forEach((seccion, index) => {
        const posicion = seccion.getBoundingClientRect(); // Section position
        const mitadVentana = window.innerHeight / 2; // Half the height of the window

        if (posicion.top <= mitadVentana && posicion.bottom >= mitadVentana) {
            // If the section is in the centre of the window, highlight the corresponding link in the menu.
            menuItems.forEach((item) => {
                item.classList.remove("navbar-site__active");
            });
            menuItems[index].classList.add("navbar-site__active");
        }
    });
}

// Event to be executed when scrolling the page.
window.addEventListener("scroll", changeActiveMenu);