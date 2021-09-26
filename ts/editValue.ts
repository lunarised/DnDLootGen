export const editValueOfItem = (name: String, val: Value) => {
	const fs = require("fs");
	let lootJSON = fs.readFileSync("./store/loot.json", "utf-8");

	let lootList: Item[] = JSON.parse(lootJSON);
	let matchList: Item[] = [];
	lootList.forEach((item) => {
		if (
			item.name
				.toLocaleUpperCase()
				.includes(name.toString().toLocaleUpperCase())
		) {
			matchList.push(item);
		}
	});
	if (matchList.length >= 2) {
		console.log(
			"There are duplicate entries for " +
				name +
				". Please be more specific with your query. First Queries found were: "
		);
		for (let i = 0; i <= Math.min(5, matchList.length - 1); i++) {
			console.log(matchList[i].name);
		}
		return;
	}
	if (matchList.length == 0) {
		console.log("Item not found in the store! Please try again");
		return;
	}
	let newItem: Item = {
		name: matchList[0].name,
		gold: val.gold,
		silver: val.silver,
		copper: val.copper,
	};
	let lootListFiltered = lootList.filter(function (value, index, arr) {
		return value.name.toLocaleLowerCase() !== name.toLowerCase();
	});
	lootListFiltered.push(newItem);
	lootJSON = JSON.stringify(lootListFiltered);
	fs.writeFileSync("./store/loot.json", lootJSON, "utf-8");
};
