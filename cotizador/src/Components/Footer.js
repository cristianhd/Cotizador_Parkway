import React from 'react'
import acotur from "../assets/footer/acotur.png";
import checkIn from "../assets/footer/check-in.png";
import clubProducto from "../assets/footer/clubdeproducto.png";
import proColombia from "../assets/footer/procolombia.png";
import safeTravels from "../assets/footer/safe-travels.png";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className='group-certificate'>
                    <img src={clubProducto} alt="club-de-producto"></img>
                    <div className='c-down'>

                    <img src={acotur} alt="acotur"></img>
                    <img src={checkIn} alt="check-in"></img>
                    <img src={proColombia} alt="pro-colombia"></img>
                    <img src={safeTravels} alt="afe-travels"></img>
                    </div>
                </div>
                <div className='foot'>
                    <div className='f-top'></div>
                    <div className='group-links'></div>
                    <div className='f-down'></div>
                </div>
            </footer>
        </div>
    )
}
