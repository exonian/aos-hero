import { ValueType, ActionMeta } from "react-select";

export type TDropdownOption = { value: string; label: string }
export type TSelectOneSetValueFn = (value: ValueType<TDropdownOption>, action: ActionMeta<any>) => void

export const convertToOptions = (items: string[] = []): TDropdownOption[] => {
  return items.map(i => ({ value: i, label: i }))
}

export const convertArraysToOptions = (items: string[][] = []): TDropdownOption[] => {
  return items.map(i => ({ value: i.join('|'), label: i.join(', ') }))
}