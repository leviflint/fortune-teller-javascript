/*
*[First Name]* *[Last Name]* will retire in *[# of years]* with *[bank balance]* in the bank,
a vacation home in *[location]*, and travel by *[mode of transportation]*.
*/

// Section of code to get user input:

let firstName;
let lastName;
let age;
let birthMonth;
let favoriteColor;
let siblingCount;

const updateInputFromFields = () => {
  firstName = document.querySelector("#first-name").value;
  lastName = document.querySelector("#last-name").value;
  age = document.querySelector("#age").value;
  birthMonth = document.querySelector("#birth-month").value;
  favoriteColor = document.querySelector("#favorite-color").value;
  siblingCount = document.querySelector("#sibling-count").value;
};

// Section of code to determine fortune:
let yearsUntilRetirement;
function retirementUpdater() {
  if (age % 2 == 0) {
    yearsUntilRetirement = 12;
  } else {
    yearsUntilRetirement = 14;
  }
}

let vacationHomeLocation;
function vacationHomeUpdater() {
  if (siblingCount == 0) {
    vacationHomeLocation = "Boca Raton, FL";
  } else if (siblingCount == 1) {
    vacationHomeLocation = "Massau, Bahamas";
  } else if (siblingCount == 2) {
    vacationHomeLocation = "Ponta Negra, Brzail";
  } else if (siblingCount == 3) {
    vacationHomeLocation = "Portland, Oregon";
  } else if (siblingCount > 3) {
    vacationHomeLocation = "Baton Rogue, Louisiana";
  } else {
    vacationHomeLocation = "Chernobyl, Ukraine";
  }
}

let modeOfTransportation;
function modeOfTransportationUpdater() {
  switch (favoriteColor) {
    case "red":
      modeOfTransportation = "Maserati";
      break;
    case "yellow":
      modeOfTransportation = "chariot";
      break;
    case "orange":
      modeOfTransportation = "stallion";
      break;
    case "green":
      modeOfTransportation = "taxi";
      break;
    case "blue":
      modeOfTransportation = "rickshaw";
      break;
    case "indigo":
      modeOfTransportation = "motor scooter";
      break;
    case "violet":
      modeOfTransportation = "flying saucer";
      break;
    default:
      modeOfTransportation = "bare feet";
  }
}

let bankBalance;
function updateBank() {
  if (birthMonth >= 1 && birthMonth <= 4) {
    bankBalance = 256000.76;
  } else if (birthMonth >= 5 && birthMonth <= 8) {
    bankBalance = 3687105.42;
  } else if (birthMonth >= 9 && birthMonth <= 12) {
    bankBalance = 86.23;
  }
}

const updateFortuneText = () => {
  updateInputFromFields();
  retirementUpdater();
  vacationHomeUpdater();
  modeOfTransportationUpdater();
  updateBank();
  const fortuneElement = document.querySelector(".fortune-output");
  fortuneElement.innerText = `${firstName} ${lastName} will retire in ${yearsUntilRetirement} years with ${bankBalance} in the bank and a vacation home in ${vacationHomeLocation}, and travel by ${modeOfTransportation}.`;
};

// Wire up button.
const button = document.querySelector("#determine-fortune");
button.addEventListener("click", () => updateFortuneText());
