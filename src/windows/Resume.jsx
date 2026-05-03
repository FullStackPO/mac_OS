import React from 'react'
import MacWindow from './MacWindow'
import '../resume.scss'

const Resume = () => {
  return (
      <MacWindow>
        <div className="resume-pdf">
            <iframe src="/Harsh Arya Resume.pdf"></iframe>
        </div>
      </MacWindow>
  )
}

export default Resume
