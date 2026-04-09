import React, { useState } from 'react';
import Night from './Night.svg';
import Town from "./town.svg";
import "./car.css"
import Road from "./road"
import { Bolt } from 'lucide-react';
import Hearts from './Heart'




export default function Toggle() {
  const [State, setState] = useState(Night);
  const [image,setImage] = useState("cover")

  const HandleColor = () => {
    if (State === Night) {
      setState(Town);
      setImage("cover")
      
    } else {
      setState(Night);
      setImage("100% 100%")
    }
  };

  return (
  <div className="background"
    style={{
      backgroundImage: `url(${State})`,
      height: "100vh",
      width: "100%",
      backgroundSize: image,
      backgroundRepeat: "repeat-x;",
      backgroundPosition: "center"
    }}
  >
    <Road/>
    <Hearts />
    <button onClick={HandleColor} style={{background:"none", outline:"none",border:"2px solid black", position:"absolute",margin:"50px", display:"flex",alignItems:"center",justifyContent:"center",padding:"10px", right:"50px"}}><Bolt/></button>
  </div>
);
}