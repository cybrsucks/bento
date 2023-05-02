
window.onload = displayClock();

function displayClock(){
    // displays time in format '1:05:30 AM'
    var display = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = display;
    setTimeout(displayClock, 1000); 
}

var day = new Date().toLocaleString('en-us', {  weekday: 'long' });

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
var month = today.toLocaleString('default', { month: 'short'});
var day_of_month = today.getDate();

document.getElementById("daydate").innerHTML = day + ", " + month + " " + day_of_month




const toggleBtn = document.getElementById("toggle-btn");

const toggleNavbar = document.getElementById("toggleNavbar");
const hoverNav = document.getElementsByClassName("hoverNav");

const toggleBcbar = document.getElementById("toggleBcbar");
const hoverBc = document.getElementsByClassName("hoverBc");

let lightMode = localStorage.getItem("lightMode");

const enableLightMode = () => {
    /* Navigation Bar */
    toggleNavbar.classList.add("navbarLight");
    toggleNavbar.classList.remove("navbarNight");

    /* hoverNavBar */
    for (var i=0; i< hoverNav.length; i++) {
        hoverNav[i].classList.add("navbar-hover-light")
        hoverNav[i].classList.remove("navbar-hover-night")
    }

    /* Breadcrumb Bar */
    toggleBcbar.classList.add("bcbarLight");
    toggleBcbar.classList.remove("bcbarNight");

    /* hoverBcBar */
    for (var i=0; i< hoverBc.length; i++) {
        hoverBc[i].classList.add("bcbar-hover-light")
        hoverBc[i].classList.remove("bcbar-hover-night")
    }   

    /* Set localStorage value */
    localStorage.setItem("lightMode", "enabled");
};


const disableLightMode = () => {
    /* Navigation Bar */
    toggleNavbar.classList.add("navbarNight");
    toggleNavbar.classList.remove("navbarLight");

    /* hoverNavBar */
    for (var i=0; i< hoverNav.length; i++) {
        hoverNav[i].classList.add("navbar-hover-night")
        hoverNav[i].classList.remove("navbar-hover-light")
    }

    /* Breadcrumb Bar */
    toggleBcbar.classList.add("bcbarNight");
    toggleBcbar.classList.remove("bcbarLight");

    /* hoverBcBar */
    for (var i=0; i< hoverBc.length; i++) {
        hoverBc[i].classList.add("bcbar-hover-night")
        hoverBc[i].classList.remove("bcbar-hover-light")
    }   

    /* Set localStorage value */
    localStorage.setItem("lightMode", "disabled");
};


if (lightMode == "enabled" | lightMode == null) {
    enableLightMode(); // set state of LightMode on page load
    document.getElementById('toggle').checked = false;
}

if (lightMode == "disabled") {
    disableLightMode(); // set state of LightMode on page load
    document.getElementById('toggle').checked = true;
}

toggleBtn.addEventListener("click", (e) => {
    lightMode = localStorage.getItem("lightMode"); // update lightMode when clicked
    if (lightMode === "disabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
});


