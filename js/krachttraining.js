window.addEventListener('load', init);

let profileButton;
let arrowBack;
let filterButton;
let upperbodyTraining;

function init(){
    profileButton = document.getElementById('profile');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToHomepage);
    filterButton = document.getElementById('filter');
    filterButton.addEventListener('click', linktoFilters);
    upperbodyTraining = document.getElementById('upperbodyTraining');
    upperbodyTraining.addEventListener('click', linkToWorkoutDetailsBovenlichaam);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToHomepage(){
    window.location.href = "homepage.html"
}

function linktoFilters() {
    window.location.href = "filters.html"
}

function linkToWorkoutDetailsBovenlichaam() {
    window.location.href = "workoutdetailsBovenlichaam.html"
}