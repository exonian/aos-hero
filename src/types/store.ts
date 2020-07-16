import { TAncestry, TKeyword } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeywords: TKeyword[]
}

export interface IStore {
  warscroll: IWarscrollSlice
}