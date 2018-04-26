/*MOBILE MENU TOGGLE*/

function openMenu() {
    var classOne    = document.querySelector("#mobile_menu");
    var classTwo    = document.querySelector("#open-menu-btn");
    var classThree  = document.querySelector("#close-menu-btn");
    var allClasses = [classOne, classTwo, classThree];

	allClasses.forEach(function(el) {
  		el.classList.add("open")
	})
}
function closeMenu() {
    var classOne    = document.querySelector("#mobile_menu");
    var classTwo    = document.querySelector("#open-menu-btn");
    var classThree  = document.querySelector("#close-menu-btn");
    var allClasses = [classOne, classTwo, classThree];

	allClasses.forEach(function(el) {
  		el.classList.remove("open")
	})
}
