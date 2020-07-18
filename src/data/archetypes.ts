import { TArchetypes } from "../types/data";

export const Archetypes: TArchetypes = {
  "Commander" : {
    name: `Commander`,
    keywords: [],
    exclusions: [`DEATHMAGE`, `MASTERCLAN`],
    grants: [["Lead the Attack", "Lead the Defence"]],
  },
  "Acolyte" : {
    name: `Acolyte`,
    keywords: [`PRIEST`],
    exclusions: [`DAEMON`, `DEATHMAGE`, `SAURUS`, `SKAVEN`],
    exclusionExceptions: [`CLANS PESTILENS`],
    grants: ["Divine Prayers", ["Wrathful Invocation", "Shield of Faith"]],
  },
  "Mage" : {
    name: `Mage`,
    keywords: [`WIZARD`],
    exclusions: [`DUARDIN`, `KHORNE`, `SAURUS`],
    grants: [],
  },
}