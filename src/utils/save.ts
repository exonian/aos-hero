import { TAncestry, TAbility, TKeyword } from "../types/data";

interface ICalculateSave {
  ancestry: TAncestry | null;
  enhancements: TAbility[];
}

interface IEnhancement  {
  name: string
  description: string
  cost?: number
  exclusions?: TKeyword[]
  cannotRename?: boolean
  enhancement: boolean
  characteristic: string
  change: "+" | "="
  value: number
}

export const calculateSave = (args: ICalculateSave): number | null => {
  const {ancestry, enhancements} = args
  if (!ancestry) return null

  let save = ancestry.save
  const relevantEnhancements = enhancements.filter(i => i.characteristic === 'save') as IEnhancement[]
  const replacements = relevantEnhancements.filter(i => i.change === '=')
  const modifiers = relevantEnhancements.filter(i => i.change === '+')

  if (replacements.length) save = replacements[0].value

  modifiers.forEach(modifier => {
    save += modifier.value
  })

  return save
}
