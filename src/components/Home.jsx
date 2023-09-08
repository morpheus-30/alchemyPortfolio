import React, { useEffect, useState } from "react"
import Intro from "./Intro";
import PlayButton from "./playButton";
import Hero from "./Hero";
import MonitorCanvas from "./Monitor";
import StarsCanvas from "./stars";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [introText, setIntroText] = useState("Hi I am Naksh");
    const scrollThreshold = 100; // Adjust this threshold as needed
    const scrollRef = React.useRef(null);
    let navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            // console.log("scrolling");
            setIntroText("I like to Code");

        };

        window.addEventListener('scroll', handleScroll, true);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, [introText]);
    const onClick = () => {
        
        navigate("/terminal");
    }



    function handleScroll() {
        console.log("scrolling");
    }
    return (
        <div className="snap-y snap-mandatory scroll-smooth text-sm h-screen w-screen bg-black overflow-x-hidden justify-center " >
            <PlayButton />
            <div className="items-center snap-center" >
                <Intro text={introText} />
                < div className="flex absolute ">
                    <StarsCanvas />
                </div>
                <div onScroll={handleScroll}><Hero /></div>

            </div>

            {/* <div className="h-96"></div> */}
            <div className="snap-center"><MonitorCanvas onClick={onClick} /></div>
        </div>
    )
}

export default Home