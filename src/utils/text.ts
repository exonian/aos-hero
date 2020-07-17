import { camelCase, startCase } from "lodash";

export const noOp = (val: string): string => val
export const titleCase = (val: string): string => startCase(camelCase(val))