import { titleCase, noOp } from "../../utils/text";

export type TDropdownOption = { value: string; label: string }

type OptionConversionFn = (item: any) => string

export const convertToOptions = (
  items: string[] = [],
  valueConversion: OptionConversionFn = noOp,
  labelConversion: OptionConversionFn = titleCase,
): TDropdownOption[] => {
  return items.map(i => ({ value: valueConversion(i), label: labelConversion(i) }))
}

export const convertArraysToOptions = (items: string[][] = []): TDropdownOption[] => {
  return items.map(i => ({ value: i.join('|'), label: titleCase(i.join(', ')) }))
}