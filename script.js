const cookiPopup = document.getElementById("cookiPopup");
const acceptBtn = document.getElementById("acceptCookies");

function checkCookiesConsent() {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (cookiesAccepted === "true") {
    cookiPopup.style.display = "none";
  }
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookiPopup.style.display = "none";
});

checkCookiesConsent();
