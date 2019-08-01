import React from 'react'
import DrumpadSingle from './componentes/DrumpadSingle'
import drumpadData from "./componentes/drumpadData"
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: drumpadData
        }
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        // this.stopButtonCss = this.stopButtonCss.bind(this)
    } 

    // handling keypresses
    handleKeyDown(e){
        for(let i = 0; i < this.state.data.length; i++){
            if((e.which) === this.state.data[i].keycode){
                document.getElementById(e.which).click()
                document.getElementById(this.state.data[i].id).classList.toggle("drum-pad-active")
            }
        }
    }
    handleKeyUp(e){
        for(let i = 0; i < this.state.data.length; i++){
            if((e.which) === this.state.data[i].keycode){
                document.getElementById(this.state.data[i].id).classList.remove("drum-pad-active")
            }
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown, false)
        document.addEventListener("keyup", this.handleKeyUp, false)
        // document.addEventListener("play", this.stopButtonCss, false)
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress, false)
        document.removeEventListener("keyup", this.handleKeyPress, false)
        // document.removeEventListener("play", this.stopButtonCss, false)
    }

    render(){
        const drumpadMapped = this.state.data.map(item => <DrumpadSingle item={item} key={item.id}/>)
        const stopPlayback = function(){
            let sound = document.getElementsByTagName('audio');
            for(let i=0; i<sound.length; i++){sound[i].pause(); sound[i].currentTime = 0}
        }
      	return(
            <div id="drum-machine">
        	    <div id="display">
                    <div id="drum-pads">{drumpadMapped}</div>
                    <div id="drumpad-tools">
                        <button id="sidebar-stop-button" 
                        onClick={stopPlayback}>■ Stop playback
                        <div className="keyboard-controls">[space]</div>
                        </button>
                        <div class="sidebar-text">Soundbank:</div>
                        <select>
                            <option value="butterfly">Butterfly</option>
                            <option value="">FFFFF</option>
                            <option value="">YYYYYYYYYY</option>
                        </select>
                   </div>
            	</div>
            </div>
        )   
    } 
}

export default App
