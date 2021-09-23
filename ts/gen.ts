import { randomInt } from "crypto";

export const generateLoot = (val: Value): void => {
    
    const itemList: Item[] = require('../store/loot.json');
    let selectedItems: Item[] = [];
    while (val?.gold! > 1){
 
        let listIndex = randomInt(itemList.length)
        if (itemList[listIndex].gold < val.gold){
            val.gold -= itemList[listIndex].gold
            selectedItems.push(itemList[listIndex]);
        }
    }


    // While money left > 1 gold
        //Randomly select loot, and add it to the list

    // Less than 1 gold
        //Load in the pocket lint list or give change

    console.log(...selectedItems)

}