import React from "react";
import '../style.css';
import { Link } from 'react-router-dom';


export default function Mission(){
    return(
        <div className="mission">
            <div className="container">
                <div className="wrapMiss">
                <div className="my_mission">
                    <h2>JUST DO Brand Presents</h2>
                   <img className="logo"  src='images/shoes.svg' alt="movide dux"/>
                               <ul className="exploreBtn">
                               <li>
                               <Link className="li" to={'/MenProduct'}>Explore now</Link></li>
                               <li></li>
                               </ul>
                     </div>
                 </div>
            </div>
            
        </div>
        
    );

}