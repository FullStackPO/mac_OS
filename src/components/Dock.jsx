import React from 'react'
import '../dock.scss'

const Dock = () => {
  return (
    <>
    <footer>
        <div className="icon github">
            <img src='/src/assets/dock-icons/github.svg' />
        </div>
        <div className="icon note">
            <img src='/src/assets/dock-icons/note.svg' />
        </div>
        <div className="icon pdf">
            <img src='/src/assets/dock-icons/pdf.svg' />
        </div>
        <div className="icon calender">
            <img src='/src/assets/dock-icons/calender.svg' />
        </div>
        <div className="icon spotify">
            <img src='/src/assets/dock-icons/spotify.svg' />
        </div>
        <div className="icon mail">
            <img src='/src/assets/dock-icons/mail.svg' />
        </div>
        <div className="icon link">
            <img src='/src/assets/dock-icons/link.svg' />
        </div>
        <div className="icon cli">
            <img src='/src/assets/dock-icons/cli.svg' />
        </div>
    </footer>
    </>
  )
}

export default Dock
