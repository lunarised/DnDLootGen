export const addLoot = (name: String, val: Value): void => {
	const fs = require("fs");
	let lootJSON = fs.readFileSync("./store/loot.json", "utf-8");

	let lootList: Item[] = JSON.parse(lootJSON);
	let collision = false;
	lootList.forEach((item) => {
		if (item.name == name) {
			collision = true;
		}
	});
	if (!collision) {
		lootList.push({
			name: name,
			gold: val.gold,
			silver: val.silver,
			copper: val.copper,
		});

		lootJSON = JSON.stringify(lootList);
		fs.writeFileSync("./store/loot.json", lootJSON, "utf-8");
	} else {
		console.log(
			"There is already an item called ",
			name,
			", please rename your item"
		);
	}
};
