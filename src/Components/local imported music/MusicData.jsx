import React from 'react'
import music0 from '../sampleMusics/Taylor_Swift_-_Cruel_Summer_(Official_Audio)(128kbps).m4a'
import music1 from '../sampleMusics/Dua_Lipa_-_Levitating_Featuring_DaBaby_(Official_Music_Video).m4a'
import music2 from '../sampleMusics/Ruth_B._-_Dandelions_(Lyrics)(128kbps).m4a'
import music3 from '../sampleMusics/The_Weeknd_-_Out_of_Time_(Official_Video)(128kbps).m4a'
import music4 from '../sampleMusics/Doja_Cat_-_Kiss_Me_More_(Official_Video)_ft._SZA.m4a'
import music5 from '../sampleMusics/Dua_Lipa_-_Cool_(Official_Lyrics_Video)(128k).m4a'
import music6 from '../sampleMusics/Flo_Rida_-_Wild_Ones_ft._Sia_[Official_Video](128kbps).m4a'
import music7 from '../sampleMusics/I_Did_Something_Bad.m4a'
import music8 from '../sampleMusics/Niall_Horan_-_Nice_To_Meet_Ya_(Official)(128k).m4a'
import music9 from '../sampleMusics/The_Weeknd_-_Blinding_Lights_(Official_Video).m4a'
import Music from '../Music files/Music'

// I have no purchased music API to Get online music link , that's why i am using local data by importing music manually, all data coming from json instead of music playing url.

export default function MusicData() {

    let arr = [music0, music1, music2, music3, music4, music5, music6, music7, music8, music9]

    return (
        <>
            <Music musicArr={arr} />
        </>
    )
}
