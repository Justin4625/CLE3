window.addEventListener('load', init);

let profileButton;
let arrowBack;
let nextExercise;

function init(){
    profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToWorkoutDetailsBovenlichaam);
    nextExercise = document.getElementById('nextExercise');
    nextExercise.addEventListener('click', differentExercise);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToWorkoutDetailsBovenlichaam() {
    window.location.href = "workoutdetailsBovenlichaam.html"
}

function differentExercise() {
   console.log('deze paginas moeten nog komen');
}