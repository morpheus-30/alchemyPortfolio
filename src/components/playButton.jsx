import React from "react";
import useSound from "use-sound";
import neffex from "/music/keep_dreaming.mp3"

const PlayButton = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [neffex2, { stop }] = useSound(neffex, { volume: 0.5 });
    return (

        <button
            className="flex absolute bg-transparent cursor-pointer text-white font-bold py-2 px-4 z-10"
            onClick={() => {
                if (isPlaying) {
                    setIsPlaying(false);
                    stop();
                } else {
                    setIsPlaying(true);
                    neffex2();
                }
            }}
        >
            <img src="play-white.svg" className="h-10 w-10" />

        </button>
    );
}

export default PlayButton;