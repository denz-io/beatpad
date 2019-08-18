import React, { useState , useEffect, useCallback } from 'react'

import BeatPaddButton from './BeatPaddButton'
import { butterfly }  from '../AudioSetter/soundfiles'

const BeatPad = () => {

    const [ drumpadData, setDrumpadData ] = useState(null);
    const [ audioPack, setAudioPack ] = useState(butterfly);

    const handleAudioSetting = useCallback(() => {
        if (!drumpadData && audioPack) {
            setDrumpadData(audioPack.map((res,key) => {
                return <BeatPaddButton 
                    item={res}
                    key={res.id}
                />
            }))
        }
    }, [ drumpadData, audioPack ])

    useEffect(() => {
        handleAudioSetting();
    })

    document.addEventListener("keydown",(event) => { 
        if (event.code === 'Space') {
            stopPlayback()
        }
    });

    const stopPlayback = () => {
        audioPack.forEach(item => !document.getElementById(item.keycode).paused && document.getElementById(item.keycode).pause());
    }

    const getAudioPack = (pack) => {
       if (pack === 'butterfly') {
            return butterfly;
       }
       return null;
    }

    return(
        <div id="drum-machine">
            <div id="display" style={{ margin: "auto" }}>
                <div id="drum-pads">{drumpadData ? drumpadData : "Sorry, the audio pack is unavailable."}</div>
                <div id="drumpad-tools">
                    <button id="sidebar-stop-button" 
                    onClick={stopPlayback}>■ Stop playback
                    <div className="keyboard-controls">[space]</div>
                    </button>
                    <div className="sidebar-text">Soundbank:</div>
                    <select onChange={(event) => { 
                        setAudioPack(getAudioPack(event.target.value)) 
                        setDrumpadData(null) 
                    }}>
                        <option value="butterfly">Butterfly</option>
                        <option value="tiger">Tiger</option>
                        <option value="spooky">Spooky</option>
                    </select>
               </div>
            </div>
        </div>
    )   
}

export default BeatPad
