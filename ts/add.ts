export const addLoot = (name: String, val: Value): void => {
const fs = require("fs");
let lootJSON = fs.readFileSync("./store/loot.json", "utf-8");

let lootList = JSON.parse(lootJSON);
lootList.push({name: name, gold: val.gold, silver: val.silver, copper: val.copper});
lootJSON = JSON.stringify(lootList);
fs.writeFileSync("./store/loot.json", lootJSON,"utf-8" );

}