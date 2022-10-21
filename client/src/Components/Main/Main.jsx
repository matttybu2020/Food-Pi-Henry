import React from 'react'
import video from '../Video/video.mp4'
import { Link } from "react-router-dom";
import Logo from "../../Img/Logo.png"
import "./Main.css"
const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="content">
        
        <div >
          
          <Link to="/home"><img className="Logo" src={Logo} alt="" /></Link>
        </div>
           
        </div>
       
        
    </div>
  )
}

export default Main