import { TAncestry, TKeyword, TArchetype } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeywords: TKeyword[]
  archetype: TArchetype | null
}

export interface IStore {
  warscroll: IWarscrollSlice
}