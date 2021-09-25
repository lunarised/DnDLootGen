import { generateLoot } from "./gen";
import { addLoot } from "./add";
import { Base10ToGSC, GSCToBase10 } from "./helpers";
import { listItemsInStore } from "./listItems";

const myArgs: String[] = process.argv;
const command = myArgs[2];
let value: Value = { gold: 0, silver: 0, copper: 0 };
let item = undefined;

console.log(Base10ToGSC(3276));
console.log(GSCToBase10(32, 0, 6));
switch (command) {
	case "add":
		item = myArgs[3];
		value = {
			gold: Number(myArgs[4]),
			silver: Number(myArgs[5]),
			copper: Number(myArgs[6]),
		};
		addLoot(item, value);

		break;
	case "editValue":
		item = myArgs[3];
		value = {
			gold: Number(myArgs[4]),
			silver: Number(myArgs[5]),
			copper: Number(myArgs[6]),
		};
		break;
	case "gen":
		value = {
			gold: Number(myArgs[3]),
			silver: Number(myArgs[4]),
			copper: Number(myArgs[5]),
		};
		generateLoot(value);

		break;
	case "list":
		listItemsInStore();
		break;
}
