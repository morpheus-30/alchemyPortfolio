import React from "react";

const Intro = (props) => {
    return (
        <div className="items-center z-50">
            <h1 className="flex absolute m-auto w-screen items-center justify-center neon text-[12rem] text-center h-80" >{props.text}</h1>
        </div>
    );
}

export default Intro;