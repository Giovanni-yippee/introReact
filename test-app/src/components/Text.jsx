import React, { useContext } from 'react'
import Main from './Main'
import { TextContext } from './TextProvider'

export default function Text() {
  let {mode} = useContext(TextContext)
  return (
    <div className={mode}>
      <h1>This is Text component</h1>
      <Main/>
    </div>
  )
}
