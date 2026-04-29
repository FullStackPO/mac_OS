import React from 'react'
import MacWindow from './MacWindow'
import projects from '../assets/gitData'
import '../github.scss'

const Github = () => {
  return (
    <MacWindow>
        <div className='cards'>
            {projects.map((elem, idx)=>{
            return (
                <div className='card'>
                    <img src={elem.image} alt="" />
                    <h3>{elem.name}</h3>
                    <h5>{elem.description}</h5>
                    <div className='tech'>
                        {elem.techStack.map((e, idx)=>{
                        return <p key={idx}>{e}</p>
                    })}
                    </div>
                    <div className='urls'>
                        <a href={elem.githubLink}>Repository</a>
                        <a href={elem.liveLink}>Link</a>
                    </div>
                </div>
            )
        })}
        </div>
    </MacWindow>
  )
}

export default Github
