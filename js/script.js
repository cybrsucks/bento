
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
            }

            if (!(event.target.classList.contains("accordionActive"))) {
                var content = event.target.nextElementSibling;
                content.style.display = "none";
            }
        }
    });
});




