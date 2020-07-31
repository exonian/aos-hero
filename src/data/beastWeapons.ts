import { TWeaponTypes, TWeapons } from "../types/data";
import { STAR } from "../utils/stats";


export const BeastWeaponTypes: TWeaponTypes = {
  "small-beast": {
    name: "small-beast",
    compatibleWith: ["small-beast"],
  },
  "large-beast": {
    name: "large-beast",
    compatibleWith: ["large-beast"],
  },
}

export const SmallBeastWeapons: TWeapons = {
  // Minor and mounted beasts
  "Claws" : {
    name: `Claws`,
    type: BeastWeaponTypes["small-beast"],
    range: 1,
    attacks: 2,
    toHit: 5,
    toWound: 5,
    rend: 0,
    damage: 1,
    cost: 0,
  },
  "Maw" : {
    name: `Maw`,
    type: BeastWeaponTypes["small-beast"],
    range: 1,
    attacks: 1,
    toHit: 4,
    toWound: 3,
    rend: 1,
    damage: "D3",
    cost: 0,
  },
}

export const LargeBeastWeapons: TWeapons = {
  // Gargantuan beasts
  "Claws" : {
    name: `Claws`,
    type: BeastWeaponTypes["large-beast"],
    range: 2,
    attacks: STAR,
    toHit: 4,
    toWound: 3,
    rend: 1,
    damage: 2,
    cost: 0,
  },
  "Maw" : {
    name: `Maw`,
    type: BeastWeaponTypes["large-beast"],
    range: 2,
    attacks: 2,
    toHit: 3,
    toWound: 3,
    rend: 2,
    damage: STAR,
    cost: 0,
  },
}
