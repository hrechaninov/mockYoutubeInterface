import State from "./state";

window.addEventListener("load", onload);

function onload(){
	const stateConfig = {
		aside: document.getElementById("aside-menu"),
		scrim: document.querySelector(".scrim"),
		asideMenuButtons: document.querySelectorAll(".aside-button"),
		menuIcons: document.querySelectorAll(".menu-icon-wrapper"),
		feedPage: document.getElementById("feed-page"),
		viewPage: document.getElementById("view-page")
	};
	const state = new State(stateConfig);

	state.asideMenuButtons.forEach(button => {
		button.addEventListener("click", state.aside.toggle.bind(state.aside));
	});
	state.scrim.addEventListener("click", state.aside.hide.bind(state.aside));
	[...state.aside.menuItems, ...state.menuIcons].forEach(item => {
		item.addEventListener("mouseup", e => e.currentTarget.blur());
	});
}