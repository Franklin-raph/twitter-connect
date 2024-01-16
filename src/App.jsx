import { useState } from 'react'
import './App.css'
import SecondModal from './SecondModal'
import ThirdModal from './ThirdModal'
import FirstModal from './FirstModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstModal />
      <SecondModal />
      <ThirdModal />
    </>
  )
}

export default App
