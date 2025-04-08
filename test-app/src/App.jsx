import React, { useState } from 'react'
import './App.css'
import Text from './components/Text'
import TextProvider from './components/TextProvider'

export default function App() {
  return (
    <TextProvider>
      <Text/>
    </TextProvider>
  )
}
