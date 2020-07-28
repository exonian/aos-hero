import { IWarscrollSlice } from "../types/store";
import { TKeyword } from "../types/data";

export const calculateKeywords = (warscrollState: IWarscrollSlice): TKeyword[] => {
  const {ancestry, archetype, armyKeywords, beast } = warscrollState

  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const beastKeywords = beast ? beast.beast.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []

  return ancestryKeywords.concat(armyKeywords, `HERO`, beastKeywords, archetypeKeywords)
}
