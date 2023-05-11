
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


/* collapsible function for footer on mobile devices */
/* thanks to https://stackoverflow.com/questions/70371274/how-to-create-accordions-so-only-1-stays-open-at-a-time */
const accordions = document.querySelectorAll(".footer-accordion");

accordions.forEach(accordion => {
    accordion.addEventListener("click", function(event) {
        if (event.target.matches(".accordion-item-header")) {

            var content = event.target.nextElementSibling;
            content.style.display = "none";

            let active = this.querySelector(".accordionActive");

            if (active == event.target) {
                event.target.classList.toggle("accordionActive");

                var content = event.target.nextElementSibling;
                content.style.display = "block";
                content.style.transition = "all 0.5s ease-in-out;"
            } else {
                //Remove current active.
                if (active) {
                    active.classList.remove("accordionActive");

                    var content = active.nextElementSibling;
                    content.style.display = "none";
                }
                //Add active        
                event.target.classList.add("accordionActive");

                var content = event.target.nextElementSibling;
                content.style.display = "block";
                content.style.transition = "all 0.5s ease-in-out;"
            }

            if (!(event.target.classList.contains("accordionActive"))) {
                var content = event.target.nextElementSibling;
                content.style.display = "none";
            }
        }
    });
});




// MODE SWITCH

const toggleBtn = document.getElementById("toggle-btn");

const pageBg = document.getElementById("noBodynoBodybutYou");

const navbarLinks = document.getElementsByClassName("navbarLinks");

const toggleNavbar = document.getElementById("toggleNavbar");
const hoverNav = document.getElementsByClassName("hoverNav");

const toggleBcbar = document.getElementById("toggleBcbar");
const hoverBc = document.getElementsByClassName("hoverBc");

const bodyText = document.getElementsByClassName("bodyText");

const footer = document.getElementById("elfooter");
const footerItems = document.getElementsByClassName("toggleFooterItemColour");

const accordionItemHeader = document.getElementsByClassName("accordion-item-header");
const footerAccordion = document.getElementById("footer-accordion");

const footerLine = document.getElementById("verticalFooterLine");



let lightMode = localStorage.getItem("lightMode");



const enableLightMode = () => {
    noBodynoBodybutYou.classList.add("lightBody")
    noBodynoBodybutYou.classList.remove("nightBody")

    /* Navigation Bar */
    toggleNavbar.classList.add("navbarLight");
    toggleNavbar.classList.remove("navbarNight");


    /* navbar links */
    for (var i=0; i< navbarLinks.length; i++) {
        navbarLinks[i].classList.add("navbarLightA")
        navbarLinks[i].classList.remove("navbarNightA")
    }


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


    /* text colour of recipe body */
    for (var i=0; i< bodyText.length; i++) {
        bodyText[i].classList.add("textLight")
        bodyText[i].classList.remove("textNight")
    }   


    /* Footer */
    footer.classList.add("footerLight");
    footer.classList.remove("footerNight");


    /* Footer Items */
    for (var i=0; i< footerItems.length; i++) {
        footerItems[i].classList.add("footerItemsLight")
        footerItems[i].classList.remove("footerItemsNight")
    }   


    /* Footer Line */
    footerLine.classList.add("verticalFooterLineLight");
    footerLine.classList.remove("verticalFooterLineNight");


    /* Mobile Footer Accordion Colour */ 
    for (var i=0; i< accordionItemHeader.length; i++) {
        accordionItemHeader[i].classList.add('accordionItemHeaderLight');
        accordionItemHeader[i].classList.remove('accordionItemHeaderNight');
    }  


    /* Footer Accordion */
    footerAccordion.classList.add("footer-accordionLight");
    footerAccordion.classList.remove("footer-accordionNight");

    /* Set localStorage value */
    localStorage.setItem("lightMode", "enabled");
};


const disableLightMode = () => {
    noBodynoBodybutYou.classList.add("nightBody")
    noBodynoBodybutYou.classList.remove("lightBody")


    /* Navigation Bar */
    toggleNavbar.classList.add("navbarNight");
    toggleNavbar.classList.remove("navbarLight");


    /* navbar links */
    for (var i=0; i< navbarLinks.length; i++) {
        navbarLinks[i].classList.add("navbarNightA")
        navbarLinks[i].classList.remove("navbarLightA")
    }


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


    /* text colour of recipe body */
    for (var i=0; i< bodyText.length; i++) {
        bodyText[i].classList.add("textNight")
        bodyText[i].classList.remove("textLight")
    }   


    /* Footer */
    footer.classList.add("footerNight");
    footer.classList.remove("footerLight");


    /* Footer Items */
    for (var i=0; i< footerItems.length; i++) {
        footerItems[i].classList.add("footerItemsNight")
        footerItems[i].classList.remove("footerItemsLight")
    }   


    /* Footer Line */
    footerLine.classList.add("verticalFooterLineNight");
    footerLine.classList.remove("verticalFooterLineLight");


    /* Mobile Footer Accordion Colour */ 
    for (var i=0; i< accordionItemHeader.length; i++) {
        accordionItemHeader[i].classList.add('accordionItemHeaderNight');
        accordionItemHeader[i].classList.remove('accordionItemHeaderLight');
    }   


    /* Footer Accordion */
    footerAccordion.classList.add("footer-accordionNight");
    footerAccordion.classList.remove("footer-accordionLight");


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







