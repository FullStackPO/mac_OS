import React from 'react'
import '../dock.scss'

const Dock = ({windowState, setWindowState}) => {
  return (
    <>
    <footer>

        <div
        onClick={() => setWindowState(prev => ({ ...prev, github: true }))}
        className="icon github">
            <img src='/dock-icons/github.svg' />
        </div>
        
        <div
        onClick={() => setWindowState(prev => ({...prev, note: true}))} 
        className="icon note">
            <img src='/dock-icons/note.svg' />
        </div>

        <div
        onClick={()=>setWindowState(prev => ({...prev, resume: true}))}
        className="icon pdf">
            <img src='/dock-icons/pdf.svg' />
        </div>

        <div
        onClick={() => {window.open('https://calendar.google.com/calendar/u/0/r?pli=1', '_blank')}}
        className="icon calender">
            <img src='/dock-icons/calender.svg' />
        </div>

        <div 
        onClick={()=>setWindowState(prev => ({...prev, spotify: true}))}
        className="icon spotify">
            <img src='/dock-icons/spotify.svg' />
        </div>

        <div 
        onClick={() => {window.open("mailto:harsh@gmail.com", "_blank")}}
        className="icon mail">
            <img src='/dock-icons/mail.svg' />
        </div>

        <div
        onClick={()=>{window.open('https://www.linkedin.com/in/harsh-arya-', '_blank')}} 
        className="icon link">
            <img src='/dock-icons/link.svg' />
        </div>

        <div
        onClick={()=>setWindowState(prev => ({...prev, cli: true}))} 
        className="icon cli">
            <img src='/dock-icons/cli.svg' />
        </div>
    </footer>
    </>
  )
}

export default Dock
