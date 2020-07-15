import warscroll, { warscrollActions, initialState } from '../../ducks/warscroll'
import { Ancestries } from '../../data/ancestries';

it('should handle setAncestryByKey', () => {
  const { setAncestryByKey } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: setAncestryByKey.type,
      payload: 'Duardin',
    })
  ).toEqual(
    {
      "ancestry": Ancestries.Duardin,
      "armyKeyword": null,
      "title": "Untitled",
    }
  )
})

it('should handle setTitle', () => {
  const { setTitle } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: setTitle.type,
      payload: 'My First Hero',
    })
  ).toEqual(
    {
      "ancestry": null,
      "armyKeyword": null,
      "title": "My First Hero",
    }
  )
})