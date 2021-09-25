# DnD 5e Loot Gen

A basic DnD 5e Drop generator

---

TODO:

- Basic all situations loot: gold-price pairing
- A smaller tid-bits table for generating smaller loot for less table clashes
- Performant

---

Usage Spec:
| command | does |
| --- | ---|
| `node lootgen -h` | Displays a help menu |
| `node lootgen add ITEM gold silver copper` | Adds an item to the collection |
| `node lootgen editValue ITEM gold silver copper ` | Edits the value of an item in the collection |
| `node lootgen gen gold silver copper` | Generates loot for the player worth the correct amount |

More usage to come as I add functionality

## potential functionality

- Add specific biome or mob support
