export interface ICountSlice {
  count: number;
  clicked: number;
}

export interface IStore {
  counter: ICountSlice
}