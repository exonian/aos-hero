import { TArchetypes } from "../types/data";

export const Archetypes: TArchetypes = {
  "Commander" : {
    name: "Commander",
    keywords: [],
    restrictions: ["DEATHMAGE", "MASTERCLAN"],
  },
  "Acolyte" : {
    name: "Acolyte",
    keywords: ["PRIEST"],
    restrictions: ["DAEMON", "DEATHMAGE", "SAURUS", "SKAVEN"],
  },
  "Mage" : {
    name: "Mage",
    keywords: ["WIZARD"],
    restrictions: ["DUARDIN", "KHORNE", "SAURUS"],
  },
}