import { TAbilities } from "../types/data";

export const Abilities: TAbilities = {
  // Commander archetype
  "Lead the Attack" : {
    name: `Lead the Attack`,
    description: `You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit wholly within 18" of this HERO. Add 1 to hit rolls for attacks made by that unit until the end of that phase.`
  },
  "Lead the Defence" : {
    name: `Lead the Defence`,
    description: `You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit wholly within 18" of this HERO. Add 1 to save rolls for attacks that target that unit until the end of that phase.`,
  },
  // Acolyte archetype
  "Divine Prayers" : {
    name: `Divine Prayers`,
    description: `In your hero phase, this HERO can chant the following prayer. If they do so, make a prayer roll by rolling a dice. On a 1-2, the prayer is not answered. On a 3+, the prayer is answered.`,
  },
  "Wrathful Invocation" : {
    name: `Wrathful Invocation`,
    description: `If this prayer is answered, pick 1 enemy unit within 18" of this HERO. That unit suffers D3 mortal wounds.`,
  },
  "Shield of Faith" : {
    name: `Shield of Faith`,
    description: `If this prayer is answered, pick 1 friendly unit wholly within 12" of this HERO. Until the start of your next hero phase, roll a dice each time a wound or mortal wound is allocated to that unit. On a 6+, that wound or mortal wound is negated.`,
  },
  // Mage archetype
  "Magic" : {
    name: `Magic`,
    description: `This HERO is a WIZARD. They can attempt to cast 1 spell in your hero phase and attempt to unbind 1 spell in the enemy hero phase. They know the Arcane Bolt and Mystic Shield spells. In addition, they know any spells you have picked for them from the Spell Table.`,
    cannotRename: true
  },
  "Aura of Protection" : {
    name: `Aura of Protection`,
    description: `<NAME> has a casting value of 7. If successfully cast, until the start of your next hero phase, roll a dice each time a wound or mortal wound is allocated to a friendly unit wholly within 12" of the caster. On a 6, that wound or mortal wound is negated.`,
  },
  "Curse of Damnation" : {
    name: `Curse of Damnation`,
    description: `<NAME> has a casting value of 7. If successfully cast, pick 1 enemy unit within 12" of the caster and visible to them. That unit suffers D3 mortal wounds. In addition, subtract 1 from save rolls for attacks that target that unit until the start of your next hero phase.`,
  },
  "Wildfire" : {
    name: `Wildfire`,
    description: `<NAME> has a casting value of 6. If successfully cast, pick 1 enemy unit. Roll 1 dice for each model in that unit that is within 12" of the caster and visible to them. For each 5+, that unit suffers 1 mortal wound. If that unit has only 1 model, roll 3 dice instead of 1.`,
  },
  "Raise Dead" : {
    name: `Raise Dead`,
    description: `<NAME> has a casting value of 6. If successfully cast, pick 1 friendly unit within 12" of the caster and visible to them. You may return a number of slain models that have a combined Wounds characteristic of D3 or less to that unit.`,
  },
  "Arcane Bolt" : {
    name: `Arcane Bolt`,
    description: `Arcane Bolt has a casting value of 5. If successfully cast, pick an enemy unit within 18" of the caster that is visible to them. That unit suffers 1 mortal wound. If the casting roll was 10 or more, the unit suffers D3 mortal wounds instead`,
    cannotRename: true
  },
  "Mystic Shield" : {
    name: `Mystic Shield`,
    description: `Mystic Shield has a casting value of 6. If successfully cast, pick a friendly unit within 18" of the caster and visible to them. Re-roll save rolls of 1 for that unit until your next hero phase.`,
    cannotRename: true
  },
  // Shield
  "Shield" : {
    name: `Shield`,
    description: `Improve your hero's save characteristic by 1`,
    cost: 2,
    enhancement: true,
    characteristic: 'save',
    change: '+',
    value: 1,
  },
}