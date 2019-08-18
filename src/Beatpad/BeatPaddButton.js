import React, { Fragment, useState, useRef } from "react"

const BeatPaddButton = ({ item }) => {

    const [isActive, setIsActive] = useState(false);

    let audio = useRef();

    const playAudio = (event) => {
        if (audio.current) {
            audio.current.currentTime = 0
            audio.current.play();
            setIsActive(true);
        }
    }

    document.addEventListener("keydown",(event) => { 
        if (event.keyCode === item.keycode) {
           playAudio();
        }
    });

    document.addEventListener("keyup",(event) => { 
        if (event.keyCode === item.keycode) {
           setIsActive(false);
        }
    });

    return (
        <Fragment>
            <div 
                onMouseDown={playAudio} 
                onMouseUp={() => setIsActive(false)}
                className={`drum-pad ${isActive ? 'active' : null}`} 
                id={item.id}
            >
                <div id="button-inner-text" className="keyboard-controls">{item.key}</div> 
                <audio 
                    ref={audio} 
                    className="clip" 
                    src={item.soundfile} 
                    id={item.keycode} 
                    type="audio/mpeg"
                >
                </audio> 
            </div>
        </Fragment>
    )
}

export default BeatPaddButton
