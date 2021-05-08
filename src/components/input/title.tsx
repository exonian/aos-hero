import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectWarscroll, warscrollActions } from "../../ducks/warscroll";
import { logRename, logSelection } from "../../utils/analytics";
import Select from "react-select";
import { convertToOptions } from "./select";
import { noOp, titleCaseSlashForBlank } from "../../utils/text";

const TitleInput: React.FC = () => {
  const { title } = useSelector(selectWarscroll)
  const { setTitle } = warscrollActions
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (event: { target: { value: any; }; }) => {
      const value = event.target.value
      dispatch(setTitle(value))
    },
    [dispatch, setTitle]
  )

  const handleBlur = useCallback(
    e => {
      const value = e.target.value.trim()
      if (!value) {
        dispatch(setTitle('Untitled'))
      }
      logRename('Title', value)
    },
    [dispatch, setTitle]
  )

  return (
    <div className="form-group col-lg-8">
      <input
        id="titleInput"
        className="form-control form-control-md"
        placeholder="Name your hero"
        type="text"
        value={title}
        onChange={handleChange}
        onBlur={handleBlur}
        tabIndex={0}
      /> 
    </div>
  )
}

const ArticleInput: React.FC = () => {
  const options = convertToOptions(["A", "An", ""], noOp, titleCaseSlashForBlank)
  const dispatch = useDispatch()
  const { article } = useSelector(selectWarscroll)
  const { setArticle } = warscrollActions
  const articleValue = convertToOptions([article], noOp, titleCaseSlashForBlank)[0]

  const handleChange = useCallback(
    (...args) => {
      const value = args[0].value
      dispatch(setArticle(value))
      logSelection('Article', value)
    },
    [dispatch, setArticle]
  )

  return (
    <div className="form-group col-lg-4">
      <Select
        id="articleInput"
        options={options}
        onChange={handleChange}
        value={articleValue}
        isSearchable={false}
      />
    </div>
  )
}

export const TitleRow: React.FC = () => {
  return (
    <>
      <label htmlFor="titleInput">Hero Name</label>
      <div className="form-row">
        <ArticleInput />
        <TitleInput />
      </div>
    </>
  )
}
