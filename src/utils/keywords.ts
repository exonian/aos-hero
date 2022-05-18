import { IWarscrollSlice } from "../types/store";
import { TKeyword } from "../types/data";

export const calculateKeywords = (warscrollState: IWarscrollSlice): TKeyword[] => {
  const {ancestry, archetype, armyKeywords, beast, enhancements } = warscrollState

  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const beastKeywords = beast ? beast.beast.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []
  const abilityKeywords = enhancements.reduce((accum, addedEnhancement) => {
    if (addedEnhancement.enhancement.keywords) return accum.concat(addedEnhancement.enhancement.keywords)
    else return accum
  }, [] as TKeyword[])

  return ancestryKeywords.concat(armyKeywords, `HERO`, beastKeywords, archetypeKeywords, abilityKeywords)
}
