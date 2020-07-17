import { TArchetype } from "../types/data";

export const Archetypes: {[key: string]: TArchetype} = {
  "Commander" : {
    name: "Commander",
    keywords: [],
    excludedKeywords: ["DEATHMAGE", "MASTERCLAN"],
  },
  "Acolyte" : {
    name: "Acolyte",
    keywords: ["PRIEST"],
    excludedKeywords: ["DAEMON", "DEATHMAGE", "SAURUS", "SKAVEN"],
  },
  "Mage" : {
    name: "Mage",
    keywords: ["WIZARD"],
    excludedKeywords: ["DUARDIN", "KHORNE", "SAURUS"],
  },
}