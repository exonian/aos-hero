import { TAbilities } from "../types/data";

export const BuyableBeastAbilities: TAbilities = {
  "Winged Beast" : {
    name: `Winged Beast`,
    description: `This model can fly.`,
    cost: 4,
  },
  "Breath Attack" : {
    name: `Breath Attack`,
    description: `In your shooting phase, you can pick 1 enemy unit within 6" of this model. Roll a number of dice equal to the number of models from that enemy unit that are within 6" of this model. For each 6, that enemy unit suffers 1 mortal wound.`,
    beastTypes: [`Gargantuan Beast`],
    cost: 4,
  },
  "Vicious Charge" : {
    name: `Vicious Charge`,
    description: `After this model makes a charge move, you can pick 1 enemy unit within 1" of this model and roll a dice. On a 2+, that enemy unit suffers D3 mortal wounds.`,
    cost: 1,
  },
  "Razor-sharp Claws" : {
    name: `Razor-sharp Claws`,
    description: `Improve the Rend characteristic of the bestial companion's Claws by 1 (to a maxmimum of -3).`,
    enhancement: true,
    target: 'claws',
    characteristic: 'rend',
    change: '+',
    value: 1,
    cost: 2,
  },
}
