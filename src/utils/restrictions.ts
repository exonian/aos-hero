import { TKeyword, TArchetypes } from "../types/data";


export const filterByRestrictions = (items: TArchetypes, keywords: TKeyword[]): TArchetypes => {
  return Object.entries(items).reduce((accum, item) => {
    const [name, entry] = item
    const restricted = entry.restrictions.some(kw => keywords.includes(kw))
    const exception = entry.restrictionExceptions && entry.restrictionExceptions.some(kw => keywords.includes(kw))
    if ( !restricted || exception ) accum[name] = entry
    return accum
  }, {} as TArchetypes)
}

