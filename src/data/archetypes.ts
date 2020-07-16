import { TArchetype } from "../types/data";

export const Archetypes: {[key: string]: TArchetype} = {
  "Commander" : {
    name: "Commander",
    keywords: [],
    excludedKeywords: ["DEATHMAGE", "MASTERCLAN"],
  },
  "Mage" : {
    name: "Mage",
    keywords: ["PRIEST"],
    excludedKeywords: ["DAEMON", "DEATHMAGE", "SAURUS", "SKAVEN"],
  },
  "Acolyte" : {
    name: "Acolyte",
    keywords: ["WIZARD"],
    excludedKeywords: ["DUARDIN", "KHORNE", "SAURUS"],
  },
}