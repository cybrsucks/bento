
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




function solLuna() {
    const navbar = document.getElementById("toggle-navbar");
    const bcbar = document.getElementById("toggle-bcbar");
    const hoverState = document.getElementsByClassName("toggle-hover-state");

    if (navbar.classList.contains("navbar-night")) {
        document.body.style.backgroundColor = '#EEEDE7';
        /* modify colours of navbar */
        navbar.classList.remove("navbar-night")
        navbar.classList.add("navbar-light")

        /* modify colours of bcbar */
        bcbar.classList.remove("bcbar-night")
        bcbar.classList.add("bcbar-light")

        /* modify colours of hover state */
        for (var i=0; i< hoverState.length; i++) {
            hoverState[i].classList.remove("navbar-hover-night")
            hoverState[i].classList.add("navbar-hover-light")
        }
    } 
    else{
        document.body.style.backgroundColor = '#4B4D4F';
        /* modify colours of navbar */
        navbar.classList.remove("navbar-light")
        navbar.classList.add("navbar-night")

        /* modify colours of bcbar */
        bcbar.classList.remove("bcbar-light")
        bcbar.classList.add("bcbar-night")

        /* modify colours of hover state */
        for (var i=0; i< hoverState.length; i++) {
            hoverState[i].classList.remove("navbar-hover-light")
            hoverState[i].classList.add("navbar-hover-night")
        }
    }
}
