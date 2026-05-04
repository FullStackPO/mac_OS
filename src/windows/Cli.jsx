import React from 'react'
import MacWindow from './MacWindow'

const Cli = ({windowName, windowState, setWindowState}) => {

    return (
        <MacWindow windowName='cli' windowState={windowState} setWindowState={setWindowState}>
          
        </MacWindow>
    )
}

export default Cli