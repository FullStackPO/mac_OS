import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './windows/Github'
import Notes from './windows/Notes'

const App = () => {
  return (
    <main>
      <Navbar />
      <Github />
      <Notes />
      <Dock />
    </main>
  )
}

export default App
