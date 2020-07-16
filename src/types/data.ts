import { TemplateLiteral } from "@babel/types";

export type TKeyword = string

export type TAncestry = {
  name: string
  keywords: TKeyword[]
  armyKeywords?: TKeyword[][]
  wounds: number
  movement: number
  save: number
  bravery: number
  cost: number
}

export type TArchetype = {
  name: string
  keywords: TKeyword[]
  excludedKeywords: TKeyword[]
}