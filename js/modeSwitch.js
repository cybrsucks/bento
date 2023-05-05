

const toggleBtn = document.getElementById("toggle-btn");

const pageBg = document.getElementById("noBodynoBodybutYou");

const navbarLinks = document.getElementsByClassName("navbarLinks");

const toggleNavbar = document.getElementById("toggleNavbar");
const hoverNav = document.getElementsByClassName("hoverNav");

const toggleBcbar = document.getElementById("toggleBcbar");
const hoverBc = document.getElementsByClassName("hoverBc");

const bodyText = document.getElementsByClassName("bodyText");

const footer = document.getElementById("elfooter")

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


