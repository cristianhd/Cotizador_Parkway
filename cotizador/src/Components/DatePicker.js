import React from 'react'
import Form from 'react-bootstrap/Form'

export default function DatePicker() {
 
  
    return (
       
         
      
        <div className="date-wrap h-100 d-flex flex-row">
          <div className="">
            <Form.Control className="" placeholder="Check-in"></Form.Control>
            <span>19-01-2022</span>
          </div>
          <div className="">
            <Form.Control className="" placeholder="Check-out"></Form.Control>
            <span>20-01-2022</span>
          </div>
        </div>
     
    )
}
