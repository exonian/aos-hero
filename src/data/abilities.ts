import { TAbilities, TAbility } from "../types/data";

export const Abilities: TAbilities = {
  // Commander archetype
  "Lead the Attack" : {
    name: `Lead the Attack`,
    description: `You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit wholly within 18" of this HERO. Add 1 to hit rolls for attacks made by that unit until the end of that phase.`
  },
  "Lead the Defence" : {
    name: `Lead the Defence`,
    description: `You can use this command ability at the start of the combat phase. If you do so, pick 1 friendly unit wholly within 18" of this HERO. Add 1 to save rolls for attacks that target that unit until the end of that phase.`
  },
  // Acolyte archetype
  "Divine Prayers" : {
    name: `Divine Prayers`,
    description: `In your hero phase, this HERO can chant the following prayer. If they do so, make a prayer roll by rolling a dice. On a 1-2, the prayer is not answered. On a 3+, the prayer is answered.`
  },
  "Wrathful Invocation" : {
    name: `Wrathful Invocation`,
    description: `If this prayer is answered, pick 1 enemy unit within 18" of this HERO. That unit suffers D3 mortal wounds.`
  },
  "Shield of Faith" : {
    name: `Shield of Faith`,
    description: `If this prayer is answered, pick 1 friendly unit wholly within 12" of this HERO. Until the start of your next hero phase, roll a dice each time a wound or mortal wound is allocated to that unit. On a 6+, that wound or mortal wound is negated.`
  },
}