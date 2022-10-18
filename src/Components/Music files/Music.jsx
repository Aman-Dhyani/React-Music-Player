import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import musicData from '../json/musicData.json'
import './Music.css'

export default function Music(props) {

  const [anime, updateAnime] = useState('paused')
  const [anime2, updateAnime2] = useState('')
  const [count, setCount] = useState(0)
  const artistImage = musicData.music[count].artistPic
  const songName = musicData.music[count].songName
  const albumName = musicData.music[count].album
  const artistName = musicData.music[count].artist
  // const audio = musicData.music[count].song 
  /* -- my Music data json (audio url) causing glitch (playing only when refresh, if you turn off pc and on the music cache get 
    empty the nyou have to assign link again ) becaus of this i had to import them manually in musicdata.js file,*/

  // BUT YOU CAN PLAY AUDIO FROM JSON IF YOU HAVE PURCHASED API
  // BUT YOU CAN PLAY AUDIO FROM JSON IF YOU HAVE PURCHASED API
  // BUT YOU CAN PLAY AUDIO FROM JSON IF YOU HAVE PURCHASED API --- you have to do only one thing remove comment from    /*src={audio}*/👇

  const newAudios = props.musicArr  // ----- manual data coming

  const suffleCount = () => {
    setCount(Math.floor(Math.random() * 10))
  }

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
          <div className='navigaterBtn' id='prev' onClick={() => updateAnime2('') || count > 0 ? setCount(count - 1) : setCount(9)}></div>
          <div className='navigaterBtn' id='next' onClick={() => updateAnime2('') || count < 9 ? setCount(count + 1) : setCount(0)}></div>

          <div id='suffle' onClick={suffleCount}></div>
        </div>
      </div>
    </>
  )
}
