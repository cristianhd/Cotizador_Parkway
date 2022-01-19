import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "../style/cardCategory.css"
import Actividades from './Actividades'
import Asistencia from './Asistencia'
import Experiencias from './Experiencias'
import Hospedaje from './Hospedaje'
import Traslado from './Traslado'
import Form from "react-bootstrap/Form"

export default function CardCategory() {
    return (
        <div className='container p-3 border'>
            <Form className='d-flex flex-row p-3 justify-content-between'>
            
           <Routes>
          <Route path="/" element={<Experiencias/>}></Route>
          <Route path="/Experiencias" element={<Experiencias/>}></Route>
          <Route path="/Hospedaje" element={<Hospedaje/>}></Route>
          <Route path="/Traslados" element={<Traslado/>}></Route>
          <Route path="/Actividades" element={<Actividades/>}></Route>
          <Route path="/Asistencia" element={<Asistencia/>}></Route>
        </Routes>

            

       

        <button>Buscar</button>
            </Form>
           

        </div>
    )
}
