import { replaceSpecialChars } from "./text";
import { IWarscrollSlice } from "../types/store";
import { calculateKeywords } from "./keywords";

const getSpellNamePhrase = (state: IWarscrollSlice): string => {
  const spellNames = state.abilities.reduce((accum, addedAbility) => {
    if (addedAbility.ability.spell) accum.push(addedAbility.customName)
    return accum
  }, [] as string[])
  return spellNames.length ? spellNames.reduce((accum, current, i, array) => accum + (i < array.length - 1 ? ', ' : ' and ') + current) : ''
}

  // calculateKeywords(state).includes('$1') ? '$2' : '$3'

export const replaceWarscrollValues = (text: string, state: IWarscrollSlice): string => {
  const replacedText = text
    .replace("<KNOWN_SPELLS>", getSpellNamePhrase(state))
    .replace(/< KEYWORDS\.(\w+) \? (\w+) : (\w+) >/g, function(_, keyword, valueIf, valueElse) {
      return calculateKeywords(state).includes(keyword) ? valueIf : valueElse
    })
  return replaceSpecialChars(replacedText)
}