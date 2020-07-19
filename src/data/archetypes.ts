import { TArchetypes, AutomaticGrant, ChooseOneGrant } from "../types/data";

export const Archetypes: TArchetypes = {
  "Commander" : {
    name: `Commander`,
    keywords: [],
    exclusions: [`DEATHMAGE`, `MASTERCLAN`],
    grants: [
      {
        grantType: ChooseOneGrant,
        abilityNames: ["Lead the Attack", "Lead the Defence"],
      },
    ]
  },
  "Acolyte" : {
    name: `Acolyte`,
    keywords: [`PRIEST`],
    exclusions: [`DAEMON`, `DEATHMAGE`, `SAURUS`, `SKAVEN`],
    exclusionExceptions: [`CLANS PESTILENS`],
    grants: [
      {
        grantType: AutomaticGrant,
        abilityNames: ["Divine Prayers"],
      },
      {
        grantType: ChooseOneGrant,
        abilityNames: ["Wrathful Invocation", "Shield of Faith"],
      },
    ]
  },
  "Mage" : {
    name: `Mage`,
    keywords: [`WIZARD`],
    exclusions: [`DUARDIN`, `KHORNE`, `SAURUS`],
    grants: [
      {
        grantType: AutomaticGrant,
        abilityNames: ["Magic"],
      },
      {
        grantType: ChooseOneGrant,
        abilityNames: ["Aura of Protection", "Curse of Damnation", "Wildfire", "Raise Dead"],
      },
    ]
  },
}