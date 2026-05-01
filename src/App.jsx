import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './windows/Github'
import Notes from './windows/Notes'
import Resume from './windows/Resume'

const App = () => {
  return (
    <main>
      <Navbar />
      <Github />
      <Notes />
      <Resume />
      <Dock />
    </main>
  )
}

export default App
