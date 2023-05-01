
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
const toggleHoverState = document.getElementsByClassName("toggle-hover-state");
let lightMode = localStorage.getItem("lightMode");

const enableLightMode = () => {
    toggleNavbar.classList.add("navbarLight");
    toggleNavbar.classList.remove("navbarNight");


    for (var i=0; i< toggleHoverState.length; i++) {
        toggleHoverState[i].classList.add("navbar-hover-light")
        toggleHoverState[i].classList.remove("navbar-hover-night")
    }

    // toggleBtn.classList.remove("darkToggle");

    localStorage.setItem("lightMode", "enabled");
};


const disableLightMode = () => {
    toggleNavbar.classList.add("navbarNight");
    toggleNavbar.classList.remove("navbarLight");

    for (var i=0; i< toggleHoverState.length; i++) {
        toggleHoverState[i].classList.add("navbar-hover-night")
        toggleHoverState[i].classList.remove("navbar-hover-light")
    }

    // toggleBtn.classList.add("darkToggle");

    localStorage.setItem("lightMode", "disabled");
};


if (lightMode == "enabled" | lightMode == null) {
    enableLightMode(); // set state of LightMode on page load
}

if (lightMode == "disabled") {
    disableLightMode(); // set state of LightMode on page load
}

toggleBtn.addEventListener("click", (e) => {
    lightMode = localStorage.getItem("lightMode"); // update lightMode when clicked
    if (lightMode === "disabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
});


