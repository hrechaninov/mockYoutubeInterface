import Aside from "./components/aside";
import FeedSection from "./components/feed-section";

export default class State{
	constructor({aside, scrim, asideMenuButtons, menuIcons, feedPage, viewPage}){
		this._aside = new Aside({element: aside, scrim, animationDuration: 200});
		this._asideMenuButtons = asideMenuButtons;
		this._menuIcons = menuIcons;
		this._feedPage = {
			element: feedPage,
			contentContainer: feedPage.querySelector(".page-content-wrapper"),
			sectionsAmount: 10
		};
		this._viewPage = {
			element: viewPage,
			contentContainer: feedPage.querySelector(".page-content-wrapper")
		};
		this._feedSections = this.getFeedSections(this._feedPage);
		this.appendFeedSections(this._feedPage);
	}
	get aside(){
		return this._aside;
	}
	get asideMenuButtons(){
		return this._asideMenuButtons;
	}
	get scrim(){
		return this._aside.scrim;
	}
	get menuIcons(){
		return this._menuIcons;
	}
	getFeedSections({sectionsAmount}){
		const feedSections = [
			new FeedSection({name: "Рекомендовано", size: 8}),
			new FeedSection({name: "З ваших підписок", size: 5})
		];
		for(let i = 0; i < sectionsAmount; i++){
			feedSections.push(new FeedSection({hasIcon: true}));
		}
		return feedSections;
	}
	appendFeedSections({contentContainer}){
		this._feedSections
			.map(section => section.element)
			.forEach(element => contentContainer.appendChild(element));
	}
}