import toHTML from "../toHTML";
import Random from "../random";

export default class Video{
	constructor({name, channel, views, date} = {}){
		this._name = name;
		this._channel = channel;
		this._views = views;
		this._date = date;
		this._tabElement = this.tabElement;
		this._viewElement = this.viewElement;
		this._channelVerified = Math.random() > 0.85;
	}
	get name(){
		return this._name;
	}
	get channel(){
		return this._channel;
	}
	get views(){
		return this._views;
	}
	get uploadDate(){
		return this._date;
	}
	get tabElement(){
		const videoName = this.name ? this.name : Random.videoName;
		const channelName = this.channel ? this.channel : Random.channelName;
		const views = this.views ? this.views : Random.views;
		const date = this.uploadDate ? this.uploadDate : Random.date;
		const previewColor = Random.color;
		const isVerified = this._channelVerified;

		const verifiedIcon = `
		<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="verified-channel-icon"><g>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path>
		</g></svg>`;

		const template = `
		<div class="video-tab">
			<a href="#" class="video-preview-wrapper">
				<div class="video-preview" style="--video-preview-color: ${previewColor}"></div>
			</a>
			<a href="#" class="video-heading-wrapper">
				<h4 class="video-heading">${videoName}</h4>
			</a>
			<div class="video-descr-wrapper">
				<div class="video-descr channel-name-wrapper">
					<a href="#" class="channel-name video-descr-text">${channelName}</a>
					${isVerified ? verifiedIcon : ""}
				</div>
				<div class="video-descr views-amount-wrapper">
					<p class="views-amount video-descr-text">${views}</p>
				</div>
				<div class="video-descr video-date-wrapper">
					<p class="video-date video-descr-text">${date}</p>
				</div>
			</div>
		</div>`;

		return toHTML(template);
	}
	get viewElement(){
		const template = ``;

		return toHTML(template);
	}
	get element(){
		return {
			tab: this._tabElement,
			view: this._viewElement
		};
	}
}