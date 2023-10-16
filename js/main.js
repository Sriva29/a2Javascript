// GDPR cookies
const cookiesSection = document.querySelector(".cookies");
const cookiesAcceptButton = document.querySelector(".acceptCookies");
const cookiesRevokeButton = document.createElement("a");
cookiesRevokeButton.textContent = "Revoke Cookies";
cookiesRevokeButton.href = "#";
const cookiesText = document.querySelector(".cookiesText"); //p tag from cookies text

cookiesAcceptButton.addEventListener("click", acceptHandler);

function acceptHandler() {
    console.log("Cookies Accepted!");
    cookiesText.textContent = "Cookies were accepted. Would you like to revoke? ";
    cookiesText.appendChild(cookiesRevokeButton);
}

cookiesRevokeButton.addEventListener("click", revokeHandler);

function revokeHandler() {
    console.log("Cookies Revoked 😡");
    cookiesText.textContent = "This site uses cookies. They are all mandatory because who wouldn't want moustache-related cookies in their system. 😊";
    cookiesText.appendChild(cookiesAcceptButton);
}

let highContBool = false;

//button contrast switch

document.querySelector("#contrastButton").addEventListener("click", contrastToggle);

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.ctrlKey);

    if (e.key == "a" && e.ctrlKey) {
        e.preventDefault();
        contrastToggle();
    }
});

function contrastToggle() {
    if (!highContBool) {
        console.log("Change DOM to High Contrast 👁‍🗨");
        highContrastMode();
    } else {
        console.log("Regular contrast pour toi 🥐");
        regularContrastMode();
    }
}

let defaultColor = document.body.style.color;
let defaultBgColor = document.body.style.backgroundColor;
let defaultPadding = document.body.style.padding;
let defaultLineHeight = document.body.lineHeight;
let defaultLetterSpacing = document.body.letterSpacing;
let logo = document.querySelector("#logo");
let logoArt = document.querySelector("#logoArt");
let allAs = document.querySelectorAll("a");

// High contrast
function highContrastMode() {
    // color
    document.body.style.color = "greenyellow";
    document.body.style.backgroundColor = "black";
    //spacing
    document.body.style.padding = "10px";
    document.body.style.lineHeight = "1.5";
    document.body.style.letterSpacing = "2px";


    allAs.forEach(link => {
        link.style.color = "#00f0a0";
    })
    //if(logo.hasAttribute("src")) logo.setAttribute("src", "img/moustache-inverted.png");
    if (logo != null) logo.setAttribute("src", "img/moustache-inverted.png");
    //if(logoArt.hasAttribute("src")) logoArt.setAttribute("src", "../img/moustache-inverted.png");
    if (logoArt != null) logoArt.setAttribute("src", "../img/moustache-inverted.png");
    highContBool = true;
}

//regular contrast
function regularContrastMode() {
    document.body.style.color = defaultColor;
    document.body.style.backgroundColor = defaultBgColor;

    document.body.style.padding = defaultPadding;
    document.body.style.lineHeight = defaultLineHeight;
    document.body.style.letterSpacing = defaultLetterSpacing;

    allAs.forEach(link => {
        link.style.color = "blue";
    })

    if (logo != null) logo.setAttribute("src", "img/moustache.png");
    if (logoArt != null) logoArt.setAttribute("src", "../img/moustache.png");

    highContBool = false;
}   