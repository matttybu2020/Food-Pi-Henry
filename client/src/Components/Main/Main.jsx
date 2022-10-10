import React from 'react'
import video from '../Video/video.mp4'
import { Link } from "react-router-dom";
import "./Main.css"
const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="content">
        <Link to="/home"><h2>Welcome</h2></Link>
            <p>To my site.</p>
        </div>
        
    </div>
  )
}

export default Main