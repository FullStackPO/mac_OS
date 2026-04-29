import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './windows/Github'

const App = () => {
  return (
    <main>
      <Navbar />
      <Github />
      <Dock />
    </main>
  )
}

export default App
