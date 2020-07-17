import { TKeyword, TArchetypes } from "../types/data";


export const filterByRestrictions = (items: TArchetypes, keywords: TKeyword[]): TArchetypes => {
  return Object.entries(items).reduce((accum, item) => {
    const [name, entry] = item
    if (!entry.restrictions.some(kw => keywords.includes(kw))) accum[name] = entry
    return accum
  }, {} as TArchetypes)
}

