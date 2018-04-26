/*MOBILE MENU TOGGLE*/

function openMenu() {
    var classOne    = document.querySelector("#mega-menu-primary-menu");
    var classTwo    = document.querySelector("#open-menu-btn");
    var classThree  = document.querySelector("#close-menu-btn");
    var classFour  = document.querySelector("#top-menu");
    var allClasses = [classOne, classTwo, classThree, classFour];

	allClasses.forEach(function(el) {
  		el.classList.add("open")
	})
}
function closeMenu() {
    var classOne    = document.querySelector("#mega-menu-primary-menu");
    var classTwo    = document.querySelector("#open-menu-btn");
    var classThree  = document.querySelector("#close-menu-btn");
    var classFour  = document.querySelector("#top-menu");
    var allClasses = [classOne, classTwo, classThree, classFour];

	allClasses.forEach(function(el) {
  		el.classList.remove("open")
	})
}
