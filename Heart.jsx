import React,{useState} from 'react'
import { Heart } from 'lucide-react';

export default function Hearts() {
const [State,setState]=useState("transparent");
let handleChange=()=>{
    if(State==="transparent"){
        setState("red")
    }else{
        setState("transparent")
    }
}
  return (
    <div style={{display:"flex",alignItems:"flex-end",position:"absolute",right:"-10px",margin:"45px"}}>
      <Heart  art onClick={handleChange} size={55} color="red" fill={State} />
    </div>
  )
}