import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { _postApi, useQuery } from '../helpers/helper'
import { useNavigate } from 'react-router-dom'

export default function LetterConsetFor() {
    const [form,setForm]=useState({})
    const handleChange = ({target:{name,value}})=>{
setForm((p)=>({...p,[name]:value}))
    }
    const query = useQuery()
    const file = query.get('file_no')
const navigate = useNavigate()
    const hadleSubmit = ()=>{
        _postApi(`/api/update-app-status?file_no=${file}`,{},
        (res)=>{
            if(res.success){
                alert('success');
                navigate(-1)
            }
        },(err)=>{
            console.log(err)
        }
        )
    }
  return (
    <div>
        <Card className='app_primary_card m-2 shadow p-4'>
            <center><h5>Letter Of Consent To Assign</h5></center>
        <Row>
          {/* {JSON.stringify(file)} */}
          <Col md={12}>
            <label className="input_label">Drag or upload file here</label>
            <div>
              <input
                className="input_field"
                type="file"
                name="Applicant_full_name"
                value={form.Applicant_full_name}
                onChange={handleChange}
              />
            </div>
          </Col>
          </Row>
          <Col md={3}><button className='app_btn mt-1' onClick={hadleSubmit}>Submit</button></Col>
        </Card>
    </div>
  )
}
