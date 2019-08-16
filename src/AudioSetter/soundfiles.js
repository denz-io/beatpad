import sound01 from '../audiofiles/butterly/Bass-Loop-01.flac'
import sound02 from '../audiofiles/butterly/Bass-Loop-02.flac'
import sound03 from '../audiofiles/butterly/Wings-Vox-01.flac'
import sound04 from '../audiofiles/butterly/Wings-Vox-02.flac'
import sound05 from '../audiofiles/butterly/Butterfly-Kick-04.flac'
import sound06 from '../audiofiles/butterly/Butterfly-Snare-01.flac'
import sound07 from '../audiofiles/butterly/Wings-Snap-01.flac'
import sound08 from '../audiofiles/butterly/Butterfly-Hat-01.flac'
import sound09 from '../audiofiles/butterly/Bling-Bling-Snare.flac'
import sound10 from '../audiofiles/butterly/Bling-Bling-FX.flac'
import sound11 from '../audiofiles/butterly/Bass-Drop.flac'
import sound12 from '../audiofiles/butterly/Butterfly-Clap-01.flac'

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
