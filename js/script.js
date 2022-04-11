const header = document.querySelector(".header");
const btnHamburger = document.querySelector("#hamburger");
btnHamburger.addEventListener("click", () => {
	if (header.classList.contains("open")) {
		header.classList.remove("open");
	} else {
		header.classList.add("open");
	}
});
