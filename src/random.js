export default class Random{
	static get colors(){
		return [
			"goldenrod",
			"orangered",
			"cadetblue",
			"burlywood",
			"coral",
			"cyan",
			"darkcyan",
			"firebrick",
			"khaki"
		];
	}
	static lorem(wordsAmount){
		const capitalize = str => str[0].toUpperCase() + str.slice(1);
		const loremStr = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
		const loremArr = loremStr.split(" ");
		const chosenWords = [];
		const length = Math.min(wordsAmount, loremArr.length);

		while(chosenWords.length < length){
			const randomWord = loremArr[Math.floor(Math.random() * loremArr.length)];
			if(!chosenWords.includes(randomWord)){
				chosenWords.push(randomWord);
			}
		}

		chosenWords[0] = capitalize(chosenWords[0]);
		
		return chosenWords.join(" ");
	}
	static get color(){
		return Random.colors[Math.floor(Math.random() * Random.colors.length)];
	}
	static get channelName(){
		return Random.lorem(2);
	}
	static get videoName(){
		return Random.lorem(5);
	}
	static get date(){
		const compliantNoun = ({noun, number}) => {
			const lastDigit = number % 10;
			const isIrregular = number.toString().search(/11$|12$|13$|14$/g) !== -1;
			const year = { singular: "рік", pluralMinor: "роки", pluralMajor: "років" };
			const month = { singular: "місяць", pluralMinor: "місяці", pluralMajor: "місяців" };
			const week = { singular: "тиждень", pluralMinor: "тижні", pluralMajor: "тижнів" };
			const day = { singular: "день", pluralMinor: "дні", pluralMajor: "днів" };
			const hour = { singular: "годину", pluralMinor: "години", pluralMajor: "годин" };
			const nounsMap = new Map();

			nounsMap.set("year", year);
			nounsMap.set("month", month);
			nounsMap.set("week", week);
			nounsMap.set("day", day);
			nounsMap.set("hour", hour);

			if(lastDigit === 1 && !isIrregular)
				return nounsMap.get(noun).singular;

			if(lastDigit > 1 && lastDigit < 5 && !isIrregular)
				return nounsMap.get(noun).pluralMinor;
			
			if(isIrregular || lastDigit === 0 || lastDigit >= 5)
				return nounsMap.get(noun).pluralMajor;

		};
		const yearsMap = [
			{val: 0, coef: 0.6},
			{val: 1, coef: 0.1},
			{val: 2, coef: 0.1},
			{val: 3, coef: 0.1},
			{val: 4, coef: 0.1}
		];
		const monthsMap = [
			{val: 0, coef: 0.6},
			{val: 1, coef: 0.1},
			{val: 2, coef: 0.03},
			{val: 3, coef: 0.03},
			{val: 5, coef: 0.03},
			{val: 4, coef: 0.03},
			{val: 6, coef: 0.03},
			{val: 7, coef: 0.03},
			{val: 8, coef: 0.03},
			{val: 9, coef: 0.03},
			{val: 10, coef: 0.03},
			{val: 11, coef: 0.03}
		];
		const weeksMap = [
			{val: 0, coef: 0.6},
			{val: 0, coef: 0.2},
			{val: 0, coef: 0.1},
			{val: 0, coef: 0.1}
		];
		const yearsAgo = Random.weightedRandom(yearsMap);
		const monthsAgo = Random.weightedRandom(monthsMap);
		const weeksAgo = Random.weightedRandom(weeksMap);
		const daysAgo = Math.floor(Math.random() * 7);
		const hoursAgo = Math.floor(Math.random() * 23 + 1);
		
		if(yearsAgo > 0)
			return `${yearsAgo} ${compliantNoun({noun: "year", number: yearsAgo})} тому`;
		if(monthsAgo > 0)
			return `${monthsAgo} ${compliantNoun({noun: "month", number: monthsAgo})} тому`;
		if(weeksAgo > 0)
			return `${weeksAgo} ${compliantNoun({noun: "week", number: weeksAgo})} тому`;
		if(daysAgo > 0)
			return `${daysAgo} ${compliantNoun({noun: "day", number: daysAgo})} тому`;
		else
			return `${hoursAgo} ${compliantNoun({noun: "hour", number: hoursAgo})} тому`;
	}
	static get views(){
		const random = Math.random();
		const millionsMap = [
			{val: 0, coef: 0.6},
			{val: 1, coef: 0.2},
			{val: 2, coef: 0.1},
			{val: 3, coef: 0.05},
			{val: 4, coef: 0.025},
			{val: 5, coef: 0.025}
		];
		const thousandsMap = [
			{val: Math.round(10 * random), coef: 0.6},
			{val: Math.round(50 * random), coef: 0.2},
			{val: Math.round(100 * random), coef: 0.1},
			{val: Math.round(200 * random), coef: 0.05},
			{val: Math.round(500 * random), coef: 0.025},
			{val: Math.round(800 * random), coef: 0.025}
		];
		const millions = Random.weightedRandom(millionsMap);
		const thousands = Random.weightedRandom(thousandsMap);

		if(millions > 0)
			return `${millions} млн. переглядів`;
		else
			return `${thousands} тис. переглядів`;
	}
	static weightedRandom(map){
		const orderedMap = map.sort((a, b) => b.coef - a.coef);
		const rand = Math.random();
		let sum = 0;
		for(let obj of orderedMap){
			sum += obj.coef;
			if(sum > rand)
				return obj.val;
		}
		return orderedMap[orderedMap.length];
	}
}