
document.addEventListener("DOMContentLoaded", function () {
    checkWorkingHours();
});

function checkWorkingHours() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const currentHour = currentDate.getHours();

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 21) {
        // Website is open during working hours
        console.log("Welcome! The website is open.");
    } else {
        // Website is closed
        document.body.innerHTML = "<h1>Sorry, we are currently closed. Please visit during working hours.</h1>";
    }
}
