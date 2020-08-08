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
    value: -1,
    cost: 2,
  },
  "Mighty Weapon" : {
    name: `Mighty Weapon`,
    description: `Add 1 to the Damage characteristic of one of your hero's weapons (cannot have a random Damage characteristic).`,
    enhancement: true,
    target: 'weapon',
    characteristic: 'damage',
    change: '+',
    value: 1,
    cost: 2,
  },
  "Sharpened Edge" : {
    name: `Sharpened Edge`,
    description: `Improve the Rend characteristic of one of your hero's weapons by 1 (to a maxmimum of -3).`,
    enhancement: true,
    target: 'weapon',
    characteristic: 'rend',
    change: '+',
    value: 1,
    cost: 2,
  },
  "Ethereal" : {
    name: `Ethereal`,
    description: `Ignore modifiers (positive or negative) when making save rolls for attacks that target this model.`,
    cost: 4,
  },
  "Ward" : {
    name: `Ward`,
    description: `Roll a dice each time a wound or mortal wound is allocated to this model. On a 6, that wound or mortal wound is negated.`,
    cost: 3,
  },
  "Fly" : {
    name: `Fly`,
    description: `This model can fly.`,
    cost: 4,
  },
  "Frenzy" : {
    name: `Frenzy`,
    description: `If the unmodified hit roll for an attack made with this model's melee weapons (not including mount weapons) is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
    cost: 3,
  },
  "Regenerate" : {
    name: `Regenerate`,
    description: `In your hero phase, you can roll a dice for this model. If you do so, on a 4+, heal up to D3 wounds allocated to this model.`,
    cost: 3,
  },
  "Battle Standard Bearer" : {
    name: `Battle Standard Bearer`,
    description: `This model gains the TOTEM keyword.`,
    enhancement: true,
    keywords: ['TOTEM'],
    cost: 1,
  },
  "Inspiring" : {
    name: `Inspiring`,
    description: `While friendly units are wholly within < KEYWORDS.TOTEM ? 18 : 12 >" of this model, they can use this model's Bravery characteristic instead of their own.`,
    cost: 1,
  },
  "Weapon Master" : {
    name: `Weapon Master`,
    description: `Improve the To Hit characteristic of one of your hero's weapons by 1.`,
    enhancement: true,
    target: 'weapon',
    characteristic: 'toHit',
    change: '+',
    value: -1,
    cost: 2,
  },
  "Superior Strength" : {
    name: `Superior Strength`,
    description: `Improve the To Wound characteristic of one of your hero's weapons by 1.`,
    enhancement: true,
    target: 'weapon',
    characteristic: 'toWound',
    change: '+',
    value: -1,
    cost: 2,
  },
  "Ferocity" : {
    name: `Ferocity`,
    description: `Add 1 to the Attacks characteristic of one of your hero's weapons.`,
    enhancement: true,
    target: 'weapon',
    characteristic: 'attacks',
    change: '+',
    value: 1,
    cost: 2,
  },
  "Consummate Commander" : {
    name: `Consummate Commander`,
    description: `If this model is part of your army, at the start of the first battle round, you receive 1 extra command point.`,
    cost: 5,
  },
  "Archmage" : {
    name: `Archmage`,
    description: `Add 1 to casting and unbinding rolls for this model.`,
    requirements: [`WIZARD`],
    cost: 3,
  },
  "Arch-priest" : {
    name: `Arch-priest`,
    description: `Add 1 to prayer rolls for this model.`,
    requirements: [`PRIEST`],
    cost: 3,
  },
  "Zealot" : {
    name: `Zealot`,
    description: `This model can run and still charge in the same turn.`,
    cost: 4,
  },
  "Decapitating Strike" : {
    name: `Decapitating Strike`,
    description: `If the unmodified wound roll for an attack made with this model's melee weapons (not including mount weapons) is 6, that attack inflicts 1 mortal wound on the target in addition to any normal damage.`,
    cost: 4,
  },
  "Deadeye" : {
    name: `Deadeye`,
    description: `If the unmodified hit roll for an attack made with this model's missile weapons (not including mount weapons) is 6, that attack inflicts 1 mortal wound on the target in addition to any normal damage.`,
    cost: 4,
  },
}