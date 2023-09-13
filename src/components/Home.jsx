import React, { useEffect, useState } from "react"
import Intro from "./Intro";
import PlayButton from "./playButton";
import Hero from "./Hero";
import MonitorCanvas from "./Monitor";
import StarsCanvas from "./stars";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import useSound from "use-sound";
import neffex from "/music/keep_dreaming.mp3"
import ScrollAnimation from "react-animate-on-scroll";
// import { useScrollDirection } from "./scrollDirection";
// import useDetectScroll from "@smakss/react-scroll-direction";

const Home = () => {
    const [introText, setIntroText] = useState("Hi I am Naksh");
    // const scrollThreshold = 0; // Adjust this threshold as needed
    // const scrollRef = React.useRef(null);
    let scrollThreshold = 0;
    let navigate = useNavigate();
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [neffex2, { stop }] = useSound(neffex, { volume: 0.5 });
    useEffect(() => {
        // const handleScroll = () => {
        //     // console.log(useScrollDirection());
        //     // const scrollDirection = getDirectionEmoji(scrollDirection);
        //     // setIntroText(scrollDirection);
        //     // console.log(window.scrollY);
        //     // console.log(window.scrollTo(0, 0));
        //     // console.log(window.scroll(0, 0));


        // };

        // window.addEventListener('scroll', handleScroll, true);

        // Clean up the event listener when the component unmounts
        // return () => {
        //     window.removeEventListener("scroll", handleScroll, true);
        // };
    }, [introText]);
    const onClick = () => {
        // if(isPlaying==true){
        //     audio.pause();
        // }
        if(isPlaying){
            stop();
            setIsPlaying(false);
        }
        navigate("/loader");
    }
    function onClickSpaceboi() {
        console.log("scrolling");
        // scrollThreshold += window.scrollY;
        // console.log(scrollThreshold);
        // console.log(window.scroll(0, 0));
        if(introText==="Hi I am Naksh"){
            setIntroText("I like to code");
        }else{
            setIntroText("Hi I am Naksh");
        }
    }

    function onClickPlay()  {
        if (isPlaying) {
            setIsPlaying(false);
            stop();
        } else {
            setIsPlaying(true);
            neffex2();
        }
    }
    return (

        <div className="snap-y snap-mandatory scroll-smooth text-sm h-screen w-screen bg-black overflow-x-hidden justify-center " >
            <PlayButton onClick={onClickPlay}/>
            <div className="items-center snap-center" >
                <Intro text={introText} />
                < div className="flex absolute ">
                    <StarsCanvas />
                </div>
                <div onClick={onClickSpaceboi} ><Hero /></div>

            </div>

            {/* <div className="h-96"></div> */}
            <div className="snap-center" ><MonitorCanvas onClick={onClick} /></div>
        </div>
    )
}

export default Home