import React, { useState } from 'react'
import { Button, Card, Col, Input, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'

export default function Require_documents() {
    const [docs,setDocs]=useState({
        application_id:'',
        document_id:'',
        document_name:'',
        document_object:''
    })
    const handleChange = ({target:{name,value}})=>{
        setDocs((p)=>({...p,[name]:value}))
    }
    const [loading,setLoading]=useState(false)
    const handleSubmit = ()=>{
        setLoading(true)
        _postApi('/api/required_docs?in_query_type=Insert',
        docs,
        (res)=>{
            console.log(res)
            if(res.succes){
                setLoading(false)
                setDocs({ application_id:'',
                document_id:'',
                document_name:'',
                document_object:''})
                alert('success')
            }
        }
        ),
        (err)=>{
            setLoading(false)
            console.log(err)
        }
    }
  return (
    <div>
        <Card className="app_primary_card m-2 shadow p-3">
       <center> <h5 >Documents</h5></center>
        <Row className='p-0 m-0'>
            <Col md={6}>
                <label>Application ID</label>
                <Input name='application_id' value={docs.application_id} onChange={handleChange} />
            </Col>
            <Col md={6}>
                <label>Document ID</label>
                <Input name='document_id' value={docs.document_id} onChange={handleChange} />
            </Col>
            <Col md={6}>
                <label>Documents Name</label>
                <Input name='document_name' value={docs.document_name} onChange={handleChange} />
            </Col>
            <Col md={6}>
                <label>Document Object</label>
                <Input name='document_object' value={docs.document_object} onChange={handleChange} />
            </Col>
        </Row>
        <center><Button color='primary' className='mt-3' onClick={handleSubmit}>{loading?'...loading':'Submit'}</Button></center>
      </Card>
    </div>
  )
}
