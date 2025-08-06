import React from "react";
import '../style.css';
import { Link } from 'react-router-dom'

export default function  Navbar (){
    return(
        <div className="container">

        <ul className="navbar">
        <li>
            <Link className="li" to={''}>Home</Link></li>
        <li>
            <Link className="li" to={'Menproduct'}>Man</Link></li>
        <li>
            <Link className="li" to={'/Womenproduct'}>Women</Link></li>
        <li>
            <Link className="li" to={'/Cloths'}>Clothes</Link></li>
        {/* <li>
            <Link className="li" to={''}>Sale</Link></li> */}
        </ul>
        </div>
        
    );
}