import { useParams } from 'react'
import React from 'react'

const Video = () => {
    const {video} = useParams()

  return (
    <div>Ramener la vidéo ici</div>
  )
}

export default Video