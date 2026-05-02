import React from 'react'
import MacWindow from './MacWindow'

const Spotify = () => {
  return (
    <MacWindow>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/artist/6DARBhWbfcS9E4yJzcliqQ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
