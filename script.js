// ======== Start Mobile Menu ======== //

const menu = document.getElementsByClassName('menuicon')[0];
const navlinks = document.getElementsByClassName('nav-links')[0];

menu.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

const xbutton = document.getElementsByClassName('xbutton')[0];

xbutton.addEventListener('click', () => {
    navlinks.classList.remove('active');
});

// ======== End Mobile Menu ======== //

// ======== Start Dark Mode ======== //

const darkModeButton = document.getElementById('dark-button');
const body = document.body;
const darkModeKey = 'darkMode';
const isDarkMode = localStorage.getItem(darkModeKey) === 'true';

if (isDarkMode) {
    body.classList.add('dark');
    toggleImageInversion(!isDarkMode);
}

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem(darkModeKey, isDarkMode);
    toggleImageInversion(!isDarkMode);
});

function toggleImageInversion(excludeInversion) {
    const sliderImages = document.querySelectorAll('.slider-img');
    sliderImages.forEach((image) => {
        if (excludeInversion) {
            image.style.filter = 'none';
        } else {
            image.style.filter = 'invert(100%)';
        }
    });

    const slideInfoElements = document.querySelectorAll('.slide .info');
    slideInfoElements.forEach((infoElement) => {
        if (excludeInversion) {
            infoElement.classList.remove('dark');
        } else {
            infoElement.classList.add('dark');
        }
    });
}

// ======== End Dark Mode ======== //

// ======== Start Calculators Dropdown ======== //

var dropdown = document.getElementsByClassName("dropdown")[0];
var dropdownContent = dropdown.getElementsByClassName("dropdown-content")[0];

dropdown.addEventListener("click", function () {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// ======== End Calculators Dropdown ======== //

// ======== Start Home Slider ======== //

var counter = 2;
setInterval(function () {
    document.getElementById('bac' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 12000);

// ======== End Home Slider ======== //

// ======== Start BMI Calculator ======== //

function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        resultDiv.textContent = "Please enter valid values for height and weight.";
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var bmiRounded = bmi.toFixed(2);
    resultDiv.textContent = "Your BMI is: " + bmiRounded;
}

// ======== End BMI Calculator ======== //

// ======== Start Calories Calculator ======== //

function calculateCalorieIntake() {
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);
    var activityLevel = document.getElementById('activity-level').value;
    var bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var calorieIntake;
    switch (activityLevel) {
        case 'sedentary':
            calorieIntake = bmr * 1.2;
            break;
        case 'lightly-active':
            calorieIntake = bmr * 1.375;
            break;
        case 'moderately-active':
            calorieIntake = bmr * 1.55;
            break;
        case 'very-active':
            calorieIntake = bmr * 1.725;
            break;
        case 'extra-active':
            calorieIntake = bmr * 1.9;
            break;
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your estimated daily calorie intake is: ' + calorieIntake.toFixed(2) + ' calories.';
}

// ======== End Calories Calculator ======== //