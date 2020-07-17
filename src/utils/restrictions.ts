import { TKeyword, TArchetypes } from "../types/data";


export const filterByRestrictions = (items: TArchetypes, keywords: TKeyword[]): TArchetypes => {
  return Object.entries(items).reduce((accum, item) => {
    const [name, entry] = item
    const exclusion = entry.exclusions.some(kw => keywords.includes(kw))
    const exception = entry.exclusionExceptions && entry.exclusionExceptions.some(kw => keywords.includes(kw))
    if ( !exclusion || exception ) accum[name] = entry
    return accum
  }, {} as TArchetypes)
}

