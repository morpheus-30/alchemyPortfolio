import React from "react";

const Intro = (props) => {
    return (
        <div className="items-center z-50 ">
            <h1 className="flex absolute m-auto w-screen items-center select-none justify-center neon text-[10vw] text-center h-80" >{props.text}</h1>
        </div>
    );
}

export default Intro;