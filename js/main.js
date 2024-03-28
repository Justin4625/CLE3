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
  submitButton.addEventListener('click', linkToHomepage);
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

function linkToHomepage(e){
    window.location.href = "homepage.html"
}

function linkToBovenlichaamLatPulldown() {
    window.location.href = "bovenlichaamLatPulldown.html"
}

function linkToLatPulldownPasAan() {
    window.location.href = "latPulldownPasAan.html"
}