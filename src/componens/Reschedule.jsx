import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function Reschedule() {
    const [schedule,setSchedule]=useState({
        name:'',
        file_no:'',
        purpose_payment:'Application Processing Fees -- FOR ASSIGNMENT',
        amount:'12000',
        rank:'',
        date:''
    })
    const  handleChange = ({target:{name,value}})=>{
        setSchedule((p)=>({...p,[name]:value}))
    }
  return (
    <div>
        <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">YES/NO Application</h5>
        {/* {JSON.stringify(schedule)} */}
        <Row>
            <Col md={4}>
                <label>Name</label>
                <input className='input_field' name='name' value={schedule.name} onChange={handleChange} />
            </Col>

            <Col md={4}>
                <label>File Number</label>
                <input className='input_field' name='file_no' value={schedule.file_no} onChange={handleChange} />
            </Col>

            <Col md={4}>
                <label>Purpose Of payment</label>
                <input className='input_field' name='purpose_payment' value={schedule.purpose_payment} onChange={handleChange}/>
            </Col>
            <Col md={4}>
                <label>Amount</label>
                <input type='number' className='input_field' name='amount' value={schedule.amount} onChange={handleChange} />
            </Col>
            <Col md={4}>
                <label>Rank</label>
                <input className='input_field' name='rank' value={schedule.rank} onChange={handleChange}/>
            </Col>
            <Col md={4}>
                <label>date</label>
                <input type='date' className='input_field' name='date' value={schedule.date} onChange={handleChange} />
            </Col>

        </Row>

        <center><button className='app_btn mt-2'>Submit</button></center>
        </Card>
    </div>
  )
}
