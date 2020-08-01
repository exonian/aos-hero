import { IWarscrollSlice } from "../types/store";
import { TKeyword } from "../types/data";

export const calculateKeywords = (warscrollState: IWarscrollSlice): TKeyword[] => {
  const {abilities, ancestry, archetype, armyKeywords, beast } = warscrollState

  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const beastKeywords = beast ? beast.beast.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []
  const abilityKeywords = abilities.reduce((accum, addedAbility) => {
    if (addedAbility.ability.keywords) return accum.concat(addedAbility.ability.keywords)
    else return accum
  }, [] as TKeyword[])

  return ancestryKeywords.concat(armyKeywords, `HERO`, beastKeywords, archetypeKeywords, abilityKeywords)
}
