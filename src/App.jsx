import { useState } from 'react'
import './App.css'
import Advice from './Advice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center bg-slate-900 w-screen h-screen'>
      <Advice />
    </div>
  )
}

export default App
