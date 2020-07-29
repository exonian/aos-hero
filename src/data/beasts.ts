import { TBeasts, AutomaticGrant } from "../types/data";

export const Beasts: TBeasts = {
  "Minor Beast" : {
    name: `Minor Beast`,
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
    cost: 8,
    keywords: [],
    exclusions: [`BULLGOR`, `DRAGON OGOR`],
    grants: []
  },
  "Gargantuan Beast" : {
    name: `Gargantuan Beast`,
    cost: 15,
    keywords: [`MONSTER`],
    exclusions: [`BULLGOR`, `DRAGON OGOR`],
    grants: []
  },
}
