import { TArchetypes } from "../types/data";

export const Archetypes: TArchetypes = {
  "Commander" : {
    name: `Commander`,
    keywords: [],
    exclusions: [`DEATHMAGE`, `MASTERCLAN`],
  },
  "Acolyte" : {
    name: `Acolyte`,
    keywords: [`PRIEST`],
    exclusions: [`DAEMON`, `DEATHMAGE`, `SAURUS`, `SKAVEN`],
    exclusionExceptions: [`CLANS PESTILENS`],
  },
  "Mage" : {
    name: `Mage`,
    keywords: [`WIZARD`],
    exclusions: [`DUARDIN`, `KHORNE`, `SAURUS`],
  },
}