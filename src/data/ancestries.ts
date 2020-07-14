import { TAncestry } from "../types/data";

export const Ancestries: {[key: string]: TAncestry} = {
  "Aelf" : {
    name: "Aelf",
    keywords: ["ORDER", "AELF", "HERO", "<ARMY>"],
    wounds: 5,
    movement: 6,
    save: 6,
    bravery: 7,
  },
  "Stormcast Eternal" : {
    name: "Stormcast Eternal",
    keywords: ["ORDER", "CELESTIAL", "HUMAN", "STORMCAST ETERNAL", "HERO"],
    wounds: 5,
    movement: 5,
    save: 4,
    bravery: 8,
  },
}
