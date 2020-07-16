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
      "armyKeywords": [],
      "title": "Untitled",
      "archetype": null,
    }
  )
})

it('should handle setArmyKeywords', () => {
  const { setArmyKeywords } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: setArmyKeywords.type,
      payload: ['FYRESLAYERS'],
    })
  ).toEqual(
    {
      "ancestry": null,
      "armyKeywords": ['FYRESLAYERS'],
      "title": "Untitled",
      "archetype": null,
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
      "armyKeywords": [],
      "title": "My First Hero",
      "archetype": null,
    }
  )
})