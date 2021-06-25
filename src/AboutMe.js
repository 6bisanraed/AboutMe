import React from 'react';
import mee from './images/mee.jpg';
import './AbtMe.css';


function AboutMe (){
    return(
        <div className = "container">
        <div className = "bg" >

            
            <div className = "myName">            
                <h1>Bisan Raed Mahdi</h1>
                <h2>CFP student</h2>
                
            </div>
            <div className = "myImage">
                <img src={mee} alt = "" />
                <p className = "who">Hi everyone ! <br/> I'm Bisan 17YO Code for Palestine student <br/> I'm from Gaza , I love listening to Japanese songs especially Anime openings and I watch Anime all day!!</p>
               <p className = "who">Favorite food</p> <ul className = "ul">
                    <li className = "favorite">Soap</li>
                    <li  className = "favorite">Pizza</li>
                    <li  className = "favorite">Shawerma</li>
                </ul>
                <p className = "who">Favorite subjects in school</p> <ul className = "ul">
                    <li className = "favorite">Math</li>
                    <li  className = "favorite">Physics</li>
                    <li  className = "favorite">   English   </li>
                </ul>

            </div>
            <div className = "link">
                <a href = "https://www.facebook.com/bisan.raed.773" className = "btn" > Here is my Facebook page! </a>
            </div>
            <div>
                
            </div>


        </div>
        </div>


    );
}

export default AboutMe;