import { TBeasts, AutomaticGrant } from "../types/data";
import { SmallBeastWeapons, LargeBeastWeapons } from "./beastWeapons";

export const Beasts: TBeasts = {
  "Minor Beast" : {
    name: `Minor Beast`,
    beastAbilityName: `Minor Beast`,
    cost: 6,
    keywords: [],
    exclusions: [],
    weapons: SmallBeastWeapons,
    grants: [
      {
        grantType: AutomaticGrant,
        abilityNames: ["Minor Beast Wounds"],
      },
    ]
  },
  "Mounted Beast" : {
    name: `Mounted Beast`,
    beastAbilityName: `Mount`,
    cost: 8,
    keywords: [],
    exclusions: [`BULLGOR`, `DRAGON OGOR`],
    weapons: SmallBeastWeapons,
    grants: [
      {
        grantType: AutomaticGrant,
        abilityNames: ["Mounted Beast Wounds", "Mounted Beast Movement"],
      },
    ]
  },
  "Gargantuan Beast" : {
    name: `Gargantuan Beast`,
    beastAbilityName: `Mount`,
    cost: 15,
    keywords: [`MONSTER`],
    exclusions: [`BULLGOR`, `DRAGON OGOR`],
    weapons: LargeBeastWeapons,
    grants: [
      {
        grantType: AutomaticGrant,
        abilityNames: ["Gargantuan Beast Wounds", "Gargantuan Beast Movement"],
      },
    ],
    damageTable: [
      {'woundsFrom': 0, 'woundsTo': 6, 'move': 10, 'claws': 6, 'maw': 4},
      {'woundsFrom': 7, 'woundsTo': 9, 'move': 8, 'claws': 5, 'maw': 3},
      {'woundsFrom': 10, 'woundsTo': 12, 'move': 6, 'claws': 4, 'maw': 2},
      {'woundsFrom': 13, 'move': 4, 'claws': 3, 'maw': 1},
    ]
  },
}
