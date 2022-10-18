import React, { useReducer, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import musicData from '../json/musicData.json'
import './Music.css'

export default function Music(props) {

  // ----- reducer hook for count ---------
  function reducer(count, action) {
    if (action.type === "prev") return count > 0 ? count - 1 : 9
    if (action.type === "next") return count < 9 ? count + 1 : 0
    if (action.type === "suffleCount") return count = Math.floor(Math.random() * 10)
  }

  const [count, dispatch] = useReducer(reducer, 0)

  // ----- state hook ----------- 
  const [anime, updateAnime] = useState('paused')
  const [anime2, updateAnime2] = useState('')
  const artistImage = musicData.music[count].artistPic
  const songName = musicData.music[count].songName
  const albumName = musicData.music[count].album
  const artistName = musicData.music[count].artist
  const newAudios = props.musicArr

  return (
    <>
      <div id='MusicPage'>
        <div id='backCont' style={{ backgroundImage: `url(${artistImage})` }} ></div>
        <div id='MusicContainerDiv'>
          <AudioPlayer src={newAudios[count]} /*src={audio}*/ onPause={() => updateAnime('paused')} onPlay={() => updateAnime('') || updateAnime2('rotating')} />
          <div className='image-Cont' style={{ backgroundImage: `url(${artistImage})`, animation: `${anime2} 10s linear infinite ${anime}` }}>
            <div id='musicLogo' style={{ animation: `${anime2} 10s linear infinite reverse ${anime}` }} ></div>
          </div>
          <div id='artistName' ><h1>{artistName}</h1></div>
          <div id='songName' ><h3>{songName}</h3></div>
          <div id='album' ><h2>{albumName}</h2></div>
          <button className='navigaterBtn' id='prev' onClick={() => updateAnime2('') || dispatch({ type: "prev" })}></button>
          <button className='navigaterBtn' id='next' onClick={() => updateAnime2('') || dispatch({ type: "next" })}></button>
          <div id='suffle' onClick={() => dispatch({ type: "suffleCount" })}></div>
        </div>
      </div>
    </>
  )
}
