import React, { Fragment, useRef } from "react"

const BeatPaddButton = ({ item }) => {

    let audio = useRef();

    const playAudio = () => {
        if (!audio.paused) {
            audio.currentTime = 0
        }
        audio.play();
    }

    return (
        <Fragment>
            <button 
                onClick={playAudio} 
                className="drum-pad" 
                id={item.id}
            >
                <div id="button-inner-text" className="keyboard-controls">{item.key}</div> <audio 
                    ref={(res) => audio = res} 
                    className="clip" 
                    src={item.soundfile} 
                    id={item.keycode} 
                    type="audio/mpeg"
                >
                </audio> 
            </button>
        </Fragment>
    )
}

export default BeatPaddButton
