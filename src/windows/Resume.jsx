import React from 'react'
import MacWindow from './MacWindow'
import '../resume.scss'

const Resume = ({windowName, windowState, setWindowState}) => {
  return (
      <MacWindow windowName='resume' windowState={windowState} setWindowState={setWindowState}>
        <div className="resume-pdf">
            <iframe src="/Harsh Arya Resume.pdf"></iframe>
        </div>
      </MacWindow>
  )
}

export default Resume
