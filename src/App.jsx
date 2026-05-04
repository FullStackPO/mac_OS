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
      {windowState.github && <Github windowName='github' windowState={windowState} setWindowState={setWindowState} />}
      {windowState.note && <Notes windowName='note' windowState={windowState} setWindowState={setWindowState} />}
      {windowState.resume &&  <Resume windowName='resume' windowState={windowState} setWindowState={setWindowState} />}
      {windowState.spotify &&  <Spotify windowName='spotify' windowState={windowState} setWindowState={setWindowState} />}
      {windowState.cli &&  <Cli windowName='cli' windowState={windowState} setWindowState={setWindowState} />}
      <Dock windowState={windowState} setWindowState={setWindowState}/>
    </main>
  )
}

export default App
