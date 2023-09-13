import React from "react";
import useSound from "use-sound";
import neffex from "/music/keep_dreaming.mp3"

const PlayButton = (props) => {
 
    return (

        <button
            className="flex absolute bg-transparent cursor-pointer text-white font-bold py-2 px-4 z-10"
            onClick={props.onClick}
        >
            <img src="play-white.svg" className="h-10 w-10" />

        </button>
    );
}

export default PlayButton;