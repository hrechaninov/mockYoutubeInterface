import toHTML from "../toHTML";
import Video from "./video";
import Random from "../random";

export default class FeedSection{
	constructor({name, hasIcon, size = 6}){
		this._name = name;
		this._videos = [];

		if(hasIcon){
			this._iconColor = Random.color;
		}
		for(let i = 0; i < size; i++){
			this._videos.push(new Video());
		}
	}
	get name(){
		const name = this._name ? this._name : "";
		return name;
	}
	get element(){
		const template = `
		<div class="feed-container">
			<div class="feed-header-wrapper">
				<h3 class="feed-heading">${this.name}</h3>
			</div>
		</div>`;
		const section = toHTML(template);
		const contentWrapper = toHTML("<div class='feed-content-wrapper'></div>");
		
		this._videos.forEach(video => contentWrapper.appendChild(video.tabElement));
		section.appendChild(contentWrapper);

		return section;
	}
}