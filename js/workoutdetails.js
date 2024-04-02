window.addEventListener('load', init);

let profileButton;
let arrowBack;
let changeButton;
let startWorkout;

function init(){
    profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToKrachttraining);
    changeButton = document.getElementById('changeButton');
    changeButton.addEventListener('click', linkToLatPulldownPasAan);
    startWorkout = document.getElementById('startWorkoutButton');
    startWorkout.addEventListener('click', linkToBovenlichaamLatPulldown);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToKrachttraining() {
    window.location.href = "krachttraining.html"
}

function linkToLatPulldownPasAan() {
    window.location.href = "latPulldownPasAan.html"
}

function linkToWorkoutDetailsBovenlichaam() {
    window.location.href = "workoutdetailsBovenlichaam.html"
}

function linkToBovenlichaamLatPulldown() {
    window.location.href = "bovenlichaamLatPulldown.html"
}
