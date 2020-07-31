import { TAbilities } from "../types/data";

export const BuyableAbilities: TAbilities = {
  "Superior Speed" : {
    name: `Superior Speed`,
    description: `Add 1 to your hero's Move characteristic.`,
    enhancement: true,
    characteristic: 'movement',
    change: '+',
    value: 1,
    cost: 2,
  },
  "Superior Vitality" : {
    name: `Superior Vitality`,
    description: `Add 1 to your hero's Wounds characteristic.`,
    enhancement: true,
    characteristic: 'wounds',
    change: '+',
    value: 1,
    cost: 1,
  },
  "Superior Leadership" : {
    name: `Superior Leadership`,
    description: `Add 1 to your hero's Bravery characteristic.`,
    enhancement: true,
    characteristic: 'bravery',
    change: '+',
    value: 1,
    cost: 2,
  },
  "Extra Armour" : {
    name: `Extra Armour`,
    description: `Improve your hero's Save characteristic by 1 (to a maximum of 3+).`,
    enhancement: true,
    characteristic: 'save',
    change: '+',
    value: 1,
    cost: 2,
  },
  "Ethereal" : {
    name: `Ethereal`,
    description: `Ignore modifiers (positive or negative) when making save rolls for attacks that target this model.`,
    cost: 4,
  },
  "Fly" : {
    name: `Fly`,
    description: `This model can fly.`,
    cost: 4,
  },
}