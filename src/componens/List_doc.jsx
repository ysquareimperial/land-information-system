import React, { useState } from 'react'
import { Button, Card, Col, Input, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'

export default function List_doc() {
    const [list,setList]=useState({
application_id:'',
type_application:'',
document_name:"",
description:""
    })
    const handleChange = ({target:{name,value}})=>{
        setList((p)=>({...p,[name]:value}))
    }
    const [loading,setLoading]=useState(false)
    const handleSubmit = ()=>{
        setLoading(true)
        _postApi('/api/list_doc?in_query_type=Insert',
        list,
        (res)=>{
            console.log(res)
            if(res.succes){
                setLoading(false)
                setList({document_id:'',
                type_application:'',
                document_name:"",
                description:""})
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
       <center> <h5 >List Documents</h5></center>
       {/* {JSON.stringify(list)} */}
        <Row className='p-0 m-0'>
            <Col md={6}><label>Document ID</label>
                <Input name='document_id' value={list.document_id} onChange={handleChange} />
            </Col>
            <Col md={6}><label>Application Type</label>
                <Input name='type_application' value={list.type_application} onChange={handleChange} />
            </Col>
            <Col md={6}><label>Document Name</label>
                <Input name='document_name' value={list.document_name} onChange={handleChange} />
            </Col>
            <Col md={6}><label>Description</label>
                <Input name='description' value={list.description} onChange={handleChange} />
            </Col>
            </Row>
            <center><Button color='primary' className='mt-3' onClick={handleSubmit}>{loading?'...loading':'Submit'}</Button></center>

            </Card>
    </div>
  )
}
