import "./style.css";

// Mobile menu scripts
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuBG = document.getElementById("mobile-menu-bg");

if (mobileMenuToggle) {
	mobileMenuToggle.addEventListener("click", function () {
		mobileMenu.style.display = "flex";
	});

	mobileMenuBG.addEventListener("click", function () {
		mobileMenu.style.display = "none";
	});
}

// Dark mode script
const darkModeBtn = document.getElementById("dark-mode-btn");
const darkModeBtnTxt = document.getElementById("dark-mode-btn-txt");
if (darkModeBtn) {
	darkModeBtn.addEventListener("click", function () {
		document.body.classList.toggle("dark");

		if (document.body.classList.contains("dark")) {
			darkModeBtnTxt.innerText = "Light Mode";
		} else {
			darkModeBtnTxt.innerText = "Dark Mode";
		}
	});
}
