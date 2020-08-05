import { TKeyword } from "../types/data";

interface IRestrictedItem {
  exclusions?: TKeyword[];
  exclusionExceptions?: TKeyword[];
  requirements?: TKeyword[];
  [propName: string]: any;
}
type TRestrictedRecord = Record<string, IRestrictedItem>

export const filterByRestrictions = (items: TRestrictedRecord, keywords: TKeyword[]): TRestrictedRecord => {
  return Object.entries(items).reduce((accum, item) => {
    const [name, entry] = item
    const exclusion = entry.exclusions && entry.exclusions.some(kw => keywords.includes(kw))
    const exception = entry.exclusionExceptions && entry.exclusionExceptions.some(kw => keywords.includes(kw))
    const unmetRequirements = entry.requirements && !entry.requirements.every(kw => keywords.includes(kw))
    if ( (!exclusion || exception) && !unmetRequirements ) accum[name] = entry
    return accum
  }, {} as TRestrictedRecord)
}
