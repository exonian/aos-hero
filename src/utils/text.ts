import { camelCase, startCase } from "lodash";

export const noOp = (val: string): string => val
export const titleCase = (val: string): string => startCase(camelCase(val))
export const titleCaseSlashForBlank = (val: string): string => val ? startCase(camelCase(val)) : "/"

export const replaceSpecialChars = (text: string) => {
  return text
    .replace(/&nbsp;/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
}