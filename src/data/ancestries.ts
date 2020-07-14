import { TAncestry } from "../types/data";

export const Ancestries: {[key: string]: TAncestry} = {
  "Aelf" : {
    name: "Aelf",
    keywords: ["ORDER", "AELF"],
    armyKeywords: ["DAUGHTERS OF KHAINE", "IDONETH DEEPKIN", "LUMINETH REALM-LORDS", "CITIES OF SIGMAR"],
    wounds: 5,
    movement: 6,
    save: 6,
    bravery: 7,
    cost: 3,
  },
  "Stormcast Eternal" : {
    name: "Stormcast Eternal",
    keywords: ["ORDER", "CELESTIAL", "HUMAN", "STORMCAST ETERNALS"],
    wounds: 5,
    movement: 5,
    save: 4,
    bravery: 8,
    cost: 5,
  },
}
