import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './windows/Github'
import Notes from './windows/Notes'
import Resume from './windows/Resume'
import Spotify from './windows/Spotify'
import Cli from './windows/Cli'
import { useState } from 'react'

const App = () => {

  const[windowState, setWindowState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
  })

  return (
    <main>
      <Navbar />
      {windowState.github && <Github />}
      {windowState.note && <Notes />}
      {windowState.resume &&  <Resume />}
      {windowState.spotify &&  <Spotify />}
      {windowState.cli &&  <Cli />}
      <Dock windowState={windowState} setWindowState={setWindowState}/>
    </main>
  )
}

export default App
