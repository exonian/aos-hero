import { refreshWeapons } from "../ducks/warscroll"
import { useDispatch } from "react-redux"

export const useRefreshStoredItems = () => {
  const dispatch = useDispatch()

  dispatch(refreshWeapons())
}