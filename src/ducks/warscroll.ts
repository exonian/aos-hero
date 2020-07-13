import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IWarscrollSlice, IStore } from '../types/store'

const initialState: IWarscrollSlice = {
  title: 'Untitled',
  wounds: 5,
  movement: 5,
  save: 4,
  bravery: 7,
}

// const setTitle = (state: IStore['warscroll'], {payload: }) => {
const setTitle: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.title = action.payload
}

export const warscrollSlice = createSlice({
  name: 'warscroll',
  initialState,
  reducers: {
    resetWarscroll: () => initialState,
    setTitle,
  },
})

export const warscrollActions = warscrollSlice.actions
export const selectWarscroll = (state: IStore): IWarscrollSlice => state.warscroll

export default warscrollSlice.reducer