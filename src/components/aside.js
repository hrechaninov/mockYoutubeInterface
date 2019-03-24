export default class Aside{
	constructor({element, scrim, animationDuration}){
		this._element = element;
		this._scrim = scrim;
		this._animationDuration = animationDuration;
		this._isActive = false;
	}
	show(){
		this._element.classList.remove("hidden");
		this._scrim.classList.remove("hidden");
		// zero timeout to make css transition work properly
		setTimeout(()=>{
			this._scrim.classList.remove("transparent");
		}, 0);
		

		this._isActive = true;
	}
	hide(){
		this._element.classList.add("hidden");
		this._scrim.classList.add("transparent");
		setTimeout(() => this._scrim.classList.add("hidden"), this._animationDuration);

		this._isActive = false;
	}
	toggle(){
		this._isActive ? this.hide() : this.show();
	}
	get scrim(){
		return this._scrim;
	}
	get menuItems(){
		return this._element.querySelectorAll(".aside-li");
	}
}