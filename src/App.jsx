import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className='bg-black text-red-800'>
    Hello World!
      </div>
    </main>
  )
}

export default App
