import React from 'react'
import '../dock.scss'

const Dock = () => {
  return (
    <>
    <footer>
        <div className="icon github">
            <img src='/dock-icons/github.svg' />
        </div>
        <div className="icon note">
            <img src='/dock-icons/note.svg' />
        </div>
        <div className="icon pdf">
            <img src='/dock-icons/pdf.svg' />
        </div>
        <div className="icon calender">
            <img src='/dock-icons/calender.svg' />
        </div>
        <div className="icon spotify">
            <img src='/dock-icons/spotify.svg' />
        </div>
        <div className="icon mail">
            <img src='/dock-icons/mail.svg' />
        </div>
        <div className="icon link">
            <img src='/dock-icons/link.svg' />
        </div>
        <div className="icon cli">
            <img src='/dock-icons/cli.svg' />
        </div>
    </footer>
    </>
  )
}

export default Dock
