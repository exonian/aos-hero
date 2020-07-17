import { ValueType, ActionMeta } from "react-select";
import { titleCase } from "../../utils/text";

export type TDropdownOption = { value: string; label: string }
export type TSelectOneSetValueFn = (value: ValueType<TDropdownOption>, action: ActionMeta<any>) => void

export const convertToOptions = (items: string[] = []): TDropdownOption[] => {
  return items.map(i => ({ value: i, label: titleCase(i) }))
}

export const convertArraysToOptions = (items: string[][] = []): TDropdownOption[] => {
  return items.map(i => ({ value: i.join('|'), label: titleCase(i.join(', ')) }))
}