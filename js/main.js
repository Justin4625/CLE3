function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}

function toggleDropdown2() {
    let dropdownContent = document.getElementById("dropdownContent2");
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToHomepage() {
    window.location.href = "homepage.html"
}

function linkToKrachttraining() {
    window.location.href = "krachttraining.html"
}

function linkToWorkoutDetailsBovenlichaam() {
    window.location.href = "workoutdetailsBovenlichaam.html"
}