// GDPR cookies
const cookiesSection = document.querySelector(".cookies");
const cookiesAcceptButton = document.querySelector(".acceptCookies");
const cookiesRevokeButton = document.createElement("a");
cookiesRevokeButton.textContent = "Revoke Cookies";
cookiesRevokeButton.href = "#";
const cookiesText = document.querySelector(".cookiesText"); //p tag from cookies text

cookiesAcceptButton.addEventListener("click", acceptHandler);

function acceptHandler(){
    console.log("Cookies Accepted!");
    cookiesText.textContent = "Cookies were accepted. Would you like to revoke? ";
    cookiesText.appendChild(cookiesRevokeButton);
}

cookiesRevokeButton.addEventListener("click", revokeHandler);

function revokeHandler(){
    console.log("Cookies Revoked 😡");
    cookiesText.textContent = "This site uses cookies. They are all mandatory because who wouldn't want moustache-related cookies in their system. 😊";
    cookiesText.appendChild(cookiesAcceptButton);
}