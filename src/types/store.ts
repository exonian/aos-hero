export interface IWarscrollSlice {
  title: string
  wounds: number
  movement: number
  save: number
  bravery: number
}

export interface IStore {
  warscroll: IWarscrollSlice
}