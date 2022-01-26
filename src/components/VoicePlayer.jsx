import React,{ useState } from 'react';
import speakerMute from '../img/speaker-mute.png'
import speakerVolume from '../img/speaker-volume.png'

const VoicePlayer = ({sentence}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const playSentence = () => {
        setIsPlaying(true)
        var speechSynthesisUtterance = new SpeechSynthesisUtterance();
        speechSynthesisUtterance.text = sentence;

        speechSynthesisUtterance.onstart = function (event) {
            console.log('started');
        };

        speechSynthesisUtterance.onend = function (event) {
            console.log('ended');
            setIsPlaying(false)
        };
        speechSynthesis.speak(speechSynthesisUtterance)
    }

    return (
        <div>
            {(isPlaying ? <figure className="w-8 md:w-12 lg:w-9 cursor-pointer relative" style={{left: '2px'}}>
                            <img src={speakerVolume} alt="" className="w-full"/>
                        </figure> : <figure className="w-8 md:w-12 lg:w-9 cursor-pointer" onClick={()=>playSentence()}>
                            <img src={speakerMute} alt="" className="w-full"/>
                        </figure>)}
        </div>
    );
}

export { VoicePlayer };
