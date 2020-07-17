import { titleCase } from "../../utils/text";

export type TDropdownOption = { value: string; label: string }

export const convertToOptions = (items: string[] = []): TDropdownOption[] => {
  return items.map(i => ({ value: i, label: titleCase(i) }))
}

export const convertArraysToOptions = (items: string[][] = []): TDropdownOption[] => {
  return items.map(i => ({ value: i.join('|'), label: titleCase(i.join(', ')) }))
}