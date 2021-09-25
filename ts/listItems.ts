export const listItemsInStore = () => {
	const itemList: Item[] = require("../store/loot.json");
	itemList.forEach((item) => {
		console.log(
			item.name,
			+" " + item.gold + " " + item.silver + " " + item.copper
		);
	});
};
