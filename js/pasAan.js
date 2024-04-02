window.addEventListener('load', init);

let profileButton;
let arrowBack;
let save;
let deleteExercise;

function init(){
    profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToWorkoutDetailsBovenlichaam);
    save = document.getElementById('save');
    save.addEventListener('click', linkToWorkoutDetailsBovenlichaam);
    deleteExercise = document.getElementById('deleteExercice');
    deleteExercise.addEventListener('click', linkToWorkoutDetailsBovenlichaam);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToWorkoutDetailsBovenlichaam() {
    window.location.href = "workoutdetailsBovenlichaam.html"
}
