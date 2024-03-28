window.addEventListener('load', init);

let selectOption
let selectOptions

function init(){
  selectOption = document.getElementById('selectOption');
  selectOptions = document.getElementById('selectOptions');
  selectOption.addEventListener('click', toggleDropdown);
  selectOptions.addEventListener('click', toggleDropdown);
}

function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdownContent");
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