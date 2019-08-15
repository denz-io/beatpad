import { default as sound01 }  from '../audiofiles/butterly/Bass-Loop-01.flac'
import { default as sound02 }  from '../audiofiles/butterly/Bass-Loop-02.flac'
import { default as sound03 }   from '../audiofiles/butterly/Wings-Vox-01.flac'
import { default as sound04 }  from '../audiofiles/butterly/Wings-Vox-02.flac'
import { default as sound05 }  from '../audiofiles/butterly/Butterfly-Kick-04.flac'
import { default as sound06 } from '../audiofiles/butterly/Butterfly-Snare-01.flac'
import { default as sound07 } from '../audiofiles/butterly/Wings-Snap-01.flac'
import { default as sound08 } from '../audiofiles/butterly/Butterfly-Hat-01.flac'
import { default as sound09 } from '../audiofiles/butterly/Bling-Bling-Snare.flac'
import { default as sound10 } from '../audiofiles/butterly/Bling-Bling-FX.flac'
import { default as sound11 } from '../audiofiles/butterly/Bass-Drop.flac'
import { default as sound12 } from '../audiofiles/butterly/Butterfly-Clap-01.flac'

import keyCode from '../AudioSetter/keyCode'

let butterflyAudio = [ 
    sound01, 
    sound02, 
    sound03, 
    sound04, 
    sound05, 
    sound06, 
    sound07, 
    sound08,
    sound09,
    sound10,
    sound11,
    sound12
]

export const butterfly = keyCode.map((res,key) => {
    return {
        ...res,
        soundfile: butterflyAudio[key]
    }
})
