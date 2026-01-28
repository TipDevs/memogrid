import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col h-[200px] w-[80%] max-w-[450px] items-center justify-center bg-[#ffffff00] rounded-l-lg border-l-8 border-black300 backdrop-blur-2xl shadow-md'>
        <p className='text-center text-cyan-50 max-w-[40ch]'>Welcome to react/tailwind template repository built with ️❤️ by <a href="https://x.com/TipDevsMe" className='text-[#000]'>TipDevs</a></p>
      </div>
    </>
  )
}

export default App
