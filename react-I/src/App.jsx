import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clock from './assets/components/Clock/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Clock/>
  )
}

export default App
