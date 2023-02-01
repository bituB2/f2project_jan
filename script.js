
  
const firstImage = document.getElementById("first-image");
const secondImage = document.getElementById("second-image");
const form = document.querySelector(".form");
const userDetails = document.querySelector(".user-details");
const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const displayName = document.getElementById("display-name");
const displayUsername = document.getElementById("display-username");
const thirdImage = document.getElementById("third-image");
const fourthImage = document.getElementById("fourth-image");
const diceContainer = document.getElementById("dice-container");
const dice = document.getElementById("dice");
const diceValue = document.getElementById("dice-value");
const couponContainer = document.getElementById("coupon-container");
const coupon = document.getElementById("coupon");
const congrats = document.getElementById("congrats");
const images = document.querySelectorAll(".gallery")
let score = 0;
let diceRolls = 0;
let attempts = 0;

firstImage.addEventListener("click", function () {
  form.style.display = "block";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.style.display = "none";
  displayName.innerHTML = nameInput.value;
  displayUsername.innerHTML = usernameInput.value;
});

secondImage.addEventListener("click", function () {
  userDetails.style.display = "block";
});

thirdImage.addEventListener("click", function () {
  userDetails.style.display = "none";
  diceContainer.style.display = "block";
});

dice.addEventListener("click", function () {
  if (diceRolls < 3) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceValue.innerHTML = roll;
    score += roll;
    diceRolls++;

    if (diceRolls === 3) {
      diceContainer.style.display = "none";
      if (score > 10) {
        fourthImage.style.pointerEvents = "auto";
      } else {
        if (attempts === 0) {
          diceContainer.style.display = "block";
          diceRolls = 0;
          score = 0;
          diceValue.innerHTML = "Try again.";
          diceValue.style.fontSize = "50px";
          diceValue.style.color = "black";
          attempts++;
        } else {
          diceValue.innerHTML = "Bad luck.";
          diceValue.style.fontSize = "50px";
          diceValue.style.color = "black";

        }
      }
    }
  }
});

fourthImage.addEventListener("click", function () {
  if (score > 10) {
    dice.style.display = "none"; 
    let couponCode = "";
    for (let i = 0; i < 12; i++) {
      couponCode += Math.floor(Math.random() * 10);
    }
    coupon.innerHTML = couponCode;
    couponContainer.style.display = "block";
  }
});


let clickedImages = [];

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    if (!clickedImages.includes(i)) {
      clickedImages.push(i);
    }
  });
}
