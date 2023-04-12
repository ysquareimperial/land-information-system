import React, { useState } from 'react'
import { Card, Col, Input, Row } from 'reactstrap'

export default function List_doc() {
    const [list,setList]=useState({

    })
    const handleChange = ({target:{name,value}})=>{
        setList((p)=>({...p,[name]:value}))
    }
  return (
    <div>
         <Card className="app_primary_card m-2 shadow p-3">
       <center> <h5 >List Documents</h5></center>
        <Row className='p-0 m-0'>
            <Col md={6}>

                <label>Document ID</label>
                <Input name='application_id' value={list.application_id} onChange={handleChange} />
            </Col>
            </Row>
            </Card>
    </div>
  )
}
