import { useState } from 'react'

import './App.css'
import MyButton from './Component/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyButton text='click me baby'/>
    </>
  )
}

export default App
