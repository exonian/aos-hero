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
}
