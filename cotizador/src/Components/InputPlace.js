import React from 'react'
import location from "../assets/destino-origen/location.svg"

export default function InputPlace({name}) {
    return (
        <div>
             <span>{name}</span>
                <div className='input-group mb-3'>
                <img src = {location} alt="svg-location"></img>
                <input type="text" placeholder={`ingrese el ${name}`}></input>
            </div>
        </div>
    )
}
