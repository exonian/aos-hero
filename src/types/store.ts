import { TAncestry, TKeyword, TArchetype, TAbility } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeywords: TKeyword[]
  archetype: TArchetype | null
  abilities: TAbility[]
}

export interface IStore {
  warscroll: IWarscrollSlice
}