window.addEventListener('load', init);

let profileButton;
let arrowBack;
let nextExercise;

function init(){
    profileButton = document.getElementById('profileButton');
    profileButton.addEventListener('click', linkToProfile);
    arrowBack = document.getElementById('arrowBack');
    arrowBack.addEventListener('click', linkToLatPulldown);
    nextExercise = document.getElementById('nextExercise');
    nextExercise.addEventListener('click', differentExercise);
}

function linkToProfile() {
    window.location.href = "profile.html"
}

function linkToLatPulldown() {
    window.location.href = "bovenlichaamLatPulldown.html"
}

function differentExercise() {
    window.location.href = "seatedrow.html"
}