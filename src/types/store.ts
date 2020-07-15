import { TAncestry, TKeyword } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeyword: TKeyword | null
}

export interface IStore {
  warscroll: IWarscrollSlice
}