
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





const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    backdrop.classList.toggle('is-active');
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

/* footer */
const footer = document.getElementById("elfooter");
const footerItems = document.getElementsByClassName("toggleFooterItemColour");
const footerLine = document.getElementById("verticalFooterLine");

/* mobile footer accordion */
const accordionItemHeader = document.getElementsByClassName("accordion-item-header");
const footerAccordion = document.getElementById("footer-accordion");
const accordionText = document.getElementsByClassName("accordionText");
const footerLinks = document.getElementsByClassName("footerLinks");

/* mobile right-side menu navbar */
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = document.getElementsByClassName("mobile-navA");

/* manage recipes */
const recipeFlexBox = document.getElementsByClassName("recipeEntry");











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


    /* Mobile Navigation Side Menu Bar */
    mobileNav.classList.add("mobile-navLight");
    mobileNav.classList.remove("mobile-navNight");


    /* Mobile Navigation Side Menu Bar Navigation Links */
    for (var i=0; i< mobileNavLinks.length; i++) {
        mobileNavLinks[i].classList.add("mobile-navALight")
        mobileNavLinks[i].classList.remove("mobile-navANight")
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


    /* Footer Accordion Text */
    for (var i=0; i< accordionText.length; i++) {
        accordionText[i].classList.add("accordionTextLight");
        accordionText[i].classList.remove("accordionTextNight");
    }

    /* Footer Accordion Text */
    for (var i=0; i< footerLinks.length; i++) {
        footerLinks[i].classList.add("footerLinksLight");
        footerLinks[i].classList.remove("footerLinksNight");
    }


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

    /* Mobile Navigation Side Menu Bar */
    mobileNav.classList.add("mobile-navNight");
    mobileNav.classList.remove("mobile-navLight");


    /* Mobile Navigation Side Menu Bar Navigation Links */
    for (var i=0; i< mobileNavLinks.length; i++) {
        mobileNavLinks[i].classList.add("mobile-navANight")
        mobileNavLinks[i].classList.remove("mobile-navALight")
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


    /* Footer Accordion Text */
    for (var i=0; i< accordionText.length; i++) {
        accordionText[i].classList.add("accordionTextNight");
        accordionText[i].classList.remove("accordionTextLight");
    }


    /* Footer Accordion Text */
    for (var i=0; i< footerLinks.length; i++) {
        footerLinks[i].classList.add("footerLinksNight");
        footerLinks[i].classList.remove("footerLinksLight");
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
    window.location.reload();  // important to refresh page so footer active accordion does not save state of previous mode
    lightMode = localStorage.getItem("lightMode"); // update lightMode when clicked
    if (lightMode === "disabled") {
        enableLightMode();
    } else {
        disableLightMode();
    }
});



/* collapsible function for footer on mobile devices */
/* thanks to https://stackoverflow.com/questions/70371274/how-to-create-accordions-so-only-1-stays-open-at-a-time */
const accordions = document.querySelectorAll(".footer-accordion");
const modeLight = localStorage.getItem("lightMode");

accordions.forEach(accordion => {
    accordion.addEventListener("click", function(event) {
        if (event.target.matches(".accordion-item-header")) {

            var content = event.target.nextElementSibling;
            content.style.display = "none";

            let active = this.querySelector(".accordionActive");

            if (active == event.target) {
                event.target.classList.toggle("accordionActive");

                event.target.style.backgroundColor = '';  // if accordion title clicked = already active accordion, reset back to original backgroundColor
                event.target.style.textDecoration = 'none';
                
                var content = event.target.nextElementSibling;
                content.style.display = "block";
                content.style.transition = "all 0.5s ease-in-out;"

            } else {
                //Remove current active.
                if (active) {
                    active.classList.remove("accordionActive");

                    active.style.backgroundColor = '';  // reset any active accordions back to original backgroundColor
                    active.style.textDecoration = 'none';

                    var content = active.nextElementSibling;
                    content.style.display = "none";
                }
                //Add active        
                event.target.classList.add("accordionActive");

                if (modeLight == "enabled") {
                    event.target.style.backgroundColor = '#ca7d89';
                    event.target.style.textDecoration = 'underline';
                }else{
                    event.target.style.backgroundColor = '#292924';
                    event.target.style.textDecoration = 'underline';
                }

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







