import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './windows/Github'
import Notes from './windows/Notes'
import Resume from './windows/Resume'
import Spotify from './windows/Spotify'

const App = () => {
  return (
    <main>
      <Navbar />
      <Github />
      <Notes />
      <Resume />
      <Spotify />
      <Dock />
    </main>
  )
}

export default App
