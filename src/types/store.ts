export interface ICountSlice {
  count: number
  clicked: number
}

export interface IWarscrollSlice {
  title: string
  wounds: number
  movement: number
  save: number
  bravery: number
}

export interface IStore {
  counter: ICountSlice
  warscroll: IWarscrollSlice
}