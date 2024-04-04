window.addEventListener('load', init);

let selectOption
let selectOptions
let submitButton
let checkboxClick
const answerKey = 'selectedCheckboxes';

function init(){
    selectOption = document.getElementById('selectOption');
    selectOptions = document.getElementById('selectOptions');
    selectOption.addEventListener('click', toggleDropdown2);
    selectOptions.addEventListener('click', toggleDropdown);
    submitButton = document.getElementById('buttonToHome');
    submitButton.addEventListener('click', linkToHomepage);
    checkboxClick = document.getElementById("dropdownContent2")
    checkboxClick.addEventListener('change', handleCheckboxChange);

    // Load geselecteerde checkboxen vanuit local storage
    loadSelectedCheckboxesFromLocalStorage();
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

function handleCheckboxChange() {
    const selectedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    localStorage.setItem(answerKey, JSON.stringify(selectedCheckboxes));
}

function loadSelectedCheckboxesFromLocalStorage() {
    const selectedCheckboxesJSON = localStorage.getItem(answerKey);
    if (selectedCheckboxesJSON) {
        const selectedCheckboxes = JSON.parse(selectedCheckboxesJSON);
        selectedCheckboxes.forEach(function(checkboxValue) {
            const checkbox = document.querySelector(`input[type="checkbox"][value="${checkboxValue}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }
}

function linkToHomepage(){
    window.location.href = "homepage.html"
}
