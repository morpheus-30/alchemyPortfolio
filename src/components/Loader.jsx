import React, { useEffect ,useState} from "react";
// import ChromeDinoGame from 'react-chrome-dino';
import { useNavigate } from "react-router-dom";


const Loader = () => {
    // console.log("hey");
    let navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [hint, setHint] = useState('hint: it is present on the previous screen!');
    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
        // if(event.target.value === 'naksh'){
        //     setHint("Um no it's not my name!");
        // }
      };
      useEffect(() => {
        if(password==='naksh'){
            setHint("um no it's not my name, you can type 'hlnt' to get a hint!")
        }else if(password==='hlnt'){
            setHint("did you play the song which was there on the previous screen? It's the singer's name!")
        }else if(password==='hint'){
            setHint("did you read the command carefully? Retype naksh and see what you had to type")
        }else if(password==='NEFFEX'){
            setHint("turn off your caps lock bro!")
        }else if(password==='neffex'){
            setHint("Ayo, now hit the login button!")
        }
        else{
            setHint("hint: it is present on the previous screen!")
        }
      }, [password]);
      const handleClick = (event) => {
        event.preventDefault();
        if(password==='neffex'){
            navigate('/terminal',{replace:true});
        }
      }

    return <div className="items-center justify-center ">
        <div className="">
        <div className="">[sudo] password for accessing naksh's info:</div>
        <input type="password" className="bg-black text-green-400 h-6 font-mono font-semibold py-1 px-1 rounded-md border border-green-400 placeholder-green-400 focus:outline-none focus:border-green-600" value={password} onChange={handlePasswordChange} onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleClick(e);
                        }
                    }} />
        <div className="w-{50px} text-gray-600">{hint}</div>
        </div>
        <div className="h-5"></div>
        <button className="bg-black text-green-400 font-mono font-semibold py-1 px-1 rounded-md border border-green-400 hover:bg-green-400 hover:text-black" onClick={handleClick}>Login</button>
    </div>
}

export default Loader;