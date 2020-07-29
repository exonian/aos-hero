import { TBeasts, AutomaticGrant } from "../types/data";

export const Beasts: TBeasts = {
  "Minor Beast" : {
    name: `Minor Beast`,
    beastAbilityName: `Minor Beast`,
    cost: 6,
    keywords: [],
    exclusions: [],
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
    grants: [
      {
        grantType: AutomaticGrant,
        abilityNames: ["Gargantuan Beast Wounds", "Gargantuan Beast Movement"],
      },
    ]
  },
}
