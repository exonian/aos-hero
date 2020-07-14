import { TAncestry, TKeyword } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeyword: TKeyword | null
  wounds: number
  movement: number
  save: number
  bravery: number
}

export interface IStore {
  warscroll: IWarscrollSlice
}