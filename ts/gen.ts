import { randomInt } from "crypto";
import { Base10ToGSC, GSCToBase10 } from "./helpers";

export const generateLoot = (val: Value): void => {
	const itemList: Item[] = require("../store/loot.json");
	let selectedItems: Item[] = [];
	let base10Val = GSCToBase10(val.gold, val.silver, val.copper);
	while (base10Val > 100) {
		let listIndex = randomInt(itemList.length);
		let listVal = GSCToBase10(
			itemList[listIndex].gold,
			itemList[listIndex].silver,
			itemList[listIndex].copper
		);
		if (base10Val > listVal) {
			base10Val -= listVal;
			selectedItems.push(itemList[listIndex]);
		}
	}

	// While money left > 1 gold
	//Randomly select loot, and add it to the list

	// Less than 1 gold
	//Load in the pocket lint list or give change

	let selectedItemsArray = selectedItems.map((selectedItem) => {
		return "\n" + selectedItem.name;
	});
	console.log(...selectedItemsArray);
};
