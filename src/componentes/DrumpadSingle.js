import React from "react"
import '../App.css'
function DrumpadSingle(props){
	const playThis = function(){
		let audio = document.getElementById(props.item.keycode)
    	if(audio.paused){
        	audio.play()
    	}else{
        	audio.currentTime = 0
    	}
	}

	return (
			<button onClick={playThis}
			className="drum-pad" id={props.item.id}>
				<div id="button-inner-text" className="keyboard-controls">{props.item.key}</div>
				<audio className="clip" src={props.item.soundfile} id={props.item.keycode} 
				type="audio/mpeg"></audio> 
			</button>
		)
    }

export default DrumpadSingle