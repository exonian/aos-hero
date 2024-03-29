import { TWeaponTypes, TWeapons, AutomaticGrant } from "../types/data";

export const WeaponTypes: TWeaponTypes = {
  "one-handed-melee": {
    name: "one-handed-melee",
    compatibleWith: ["one-handed-melee", "one-handed-missile", "two-handed-missile", "shield"],
  },
  "one-handed-missile": {
    name: "one-handed-missile",
    compatibleWith: ["one-handed-melee"],
  },
  "two-handed-melee": {
    name: "two-handed-melee",
    compatibleWith: [],
  },
  "two-handed-missile": {
    name: "two-handed-missile",
    compatibleWith: ["one-handed-melee"],
  },
  "shield": {
    name: "shield",
    compatibleWith: ["one-handed-melee"],
  },
}

export const Weapons: TWeapons = {
  // Hero
  "Sword" : {
    name: `Sword`,
    type: WeaponTypes["one-handed-melee"],
    range: 1,
    attacks: 3,
    toHit: 3,
    toWound: 4,
    rend: 0,
    damage: 1,
    cost: 1,
  },
  "Axe" : {
    name: `Axe`,
    type: WeaponTypes["one-handed-melee"],
    range: 1,
    attacks: 3,
    toHit: 4,
    toWound: 3,
    rend: 1,
    damage: 1,
    cost: 1,
  },
  "Hammer" : {
    name: `Hammer`,
    type: WeaponTypes["one-handed-melee"],
    range: 1,
    attacks: 2,
    toHit: 4,
    toWound: 3,
    rend: 1,
    damage: 2,
    cost: 1,
  },
  "Spear" : {
    name: `Spear`,
    type: WeaponTypes["one-handed-melee"],
    range: 2,
    attacks: 3,
    toHit: 4,
    toWound: 4,
    rend: 0,
    damage: 1,
    cost: 1,
  },
  "Unarmed Strike" : {
    name: `Unarmed Strike`,
    type: WeaponTypes["one-handed-melee"],
    range: 1,
    attacks: 4,
    toHit: 4,
    toWound: 4,
    rend: 0,
    damage: 1,
    cost: 1,
  },
  "Flail" : {
    name: `Flail`,
    type: WeaponTypes["one-handed-melee"],
    range: 3,
    attacks: 2,
    toHit: 4,
    toWound: 4,
    rend: 0,
    damage: 1,
    cost: 1,
  },
  "Improvised Weapon" : {
    name: `Improvised Weapon`,
    type: WeaponTypes["one-handed-melee"],
    range: 1,
    attacks: 3,
    toHit: 4,
    toWound: 4,
    rend: 0,
    damage: 1,
    cost: 0,
  },
  "Handbow" : {
    name: `Handbow`,
    type: WeaponTypes["one-handed-missile"],
    range: 9,
    attacks: 2,
    toHit: 4,
    toWound: 4,
    rend: 0,
    damage: 1,
    cost: 1,
  },
  "Greatsword" : {
    name: `Greatsword`,
    type: WeaponTypes["two-handed-melee"],
    range: 1,
    attacks: 3,
    toHit: 3,
    toWound: 3,
    rend: 1,
    damage: 2,
    cost: 2,
  },
  "Great Axe" : {
    name: `Great Axe`,
    type: WeaponTypes["two-handed-melee"],
    range: 1,
    attacks: 3,
    toHit: 4,
    toWound: 2,
    rend: 2,
    damage: 2,
    cost: 2,
  },
  "Grandhammer" : {
    name: `Grandhammer`,
    type: WeaponTypes["two-handed-melee"],
    range: 1,
    attacks: 2,
    toHit: 4,
    toWound: 2,
    rend: 2,
    damage: 3,
    cost: 2,
  },
  "Great Spear" : {
    name: `Great Spear`,
    type: WeaponTypes["two-handed-melee"],
    range: 2,
    attacks: 3,
    toHit: 4,
    toWound: 3,
    rend: 1,
    damage: 2,
    cost: 2,
  },
  "Mage's Staff" : {
    name: `Mage's Staff`,
    type: WeaponTypes["two-handed-melee"],
    range: 1,
    attacks: 3,
    toHit: 4,
    toWound: 3,
    rend: 1,
    damage: "D3",
    cost: 1,
  },
  "Scythe" : {
    name: `Scythe`,
    type: WeaponTypes["two-handed-melee"],
    range: 2,
    attacks: 4,
    toHit: 4,
    toWound: 4,
    rend: 1,
    damage: 1,
    cost: 1,
  },
  "Bow" : {
    name: `Bow`,
    type: WeaponTypes["two-handed-missile"],
    range: 18,
    attacks: 2,
    toHit: 4,
    toWound: 4,
    rend: 0,
    damage: 2,
    cost: 2,
  },
  "Shield" : {
    name: `Shield`,
    type: WeaponTypes["shield"],
    exclusions: [`MALIGNANT`],
    grants: [
      {
        grantType: AutomaticGrant,
        abilityNames: ["Shield"],
      },
    ],
    cost: 2,
  },
}