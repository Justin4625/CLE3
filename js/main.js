window.addEventListener('load', init);

let selectOption
let selectOptions
let submitButton

function init(){
  selectOption = document.getElementById('selectOption');
  selectOptions = document.getElementById('selectOptions');
  selectOption.addEventListener('click', toggleDropdown2);
  selectOptions.addEventListener('click', toggleDropdown);
  submitButton = document.getElementById('buttonToHome');
  submitButton.addEventListener('submit', linkToHomepage)
}

function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}

function toggleDropdown2() {
    let dropdownContent2 = document.getElementById("dropdownContent2");
    if (dropdownContent2.style.display === "none") {
        dropdownContent2.style.display = "block";
    } else {
        dropdownContent2.style.display = "none";
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

function linkToBovenlichaamLatPulldown() {
    window.location.href = "bovenlichaamLatPulldown.html"
}

function linkToLatPulldownPasAan() {
    window.location.href = "latPulldownPasAan.html"
}

function linktoFilters() {
    window.location.href = "filters.html"
}