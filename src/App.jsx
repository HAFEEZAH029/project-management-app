import { useState } from 'react'
import Aside from './Components/Aside'
import Blank from './Components/Blank'
import './App.css'

function App() {

  return (
    <div className="flex gap-5">
      <Aside />
      <main className="flex-grow">
        <Blank />
      </main>
    </div>
  )
}

export default App
