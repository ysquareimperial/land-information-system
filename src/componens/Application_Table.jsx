import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'

export default function Application_Table() {
  const navigate = useNavigate()
  const [data,setData] =useState([])

  const getApplication = ()=>{
    _fetchApi('/api/get-application',
    (res)=>{
      console.log(res)
      setData(res.results)
    },(err)=>{
      console.log(err)
    }
    )
  }
  useEffect(()=>{
    getApplication()
  },[])
  return (
    <div>
      {/* {JSON.stringify(data[0])} */}
        <Card className='app_primary_card m-2 shadow p-4'>
        <h5 className="mb-3">List Of Application</h5>
        <button className="mt-2 app_btn col-md-2" onClick={()=>navigate('/application-form')}>
            <BsPlusLg /> New Application
          </button>
        <SearchBar />
        <Row>
          <Col md={1}>
            {/* <span>pending</span> */}
        <div style={{background:'orange',color:'white'}} className='p-1'>pending</div>
        </Col>
        <Col md={1}>
        <div style={{background:'blue',color:'white'}} className='p-1 pr-5 pl-5'>app paid</div>
        </Col>
        <Col md={1}>
        <div style={{background:'green',color:'white'}} className='p-1'>Approved</div>
        </Col>
        </Row>
        <Table striped>
    <thead>
        <tr >
            <th>Applicant Full Name</th>
            <th >Business Location</th>
            <th >Applicant Nationality</th>
            <th >State Of Origin</th>
            <th >Occupation Business</th>
            {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
            <th >Length Of Term Required</th>
            
        </tr>
    </thead>
    <tbody>
      {
        data[0]?.map((item)=>(
          <tr style={{background:item.status==='application'?'orange':item.status==='file_no_generated'?'green':item.status==='application-fee-paid'?'blue':'',color:'white'}}>
          <td style={{color:'white'}}>{item.Applicant_full_name}</td>
          <td style={{color:'white'}}>{item.Business_location}</td>
          <td style={{color:'white'}}>{item.Applicant_nationality}</td>
          <td style={{color:'white'}}>{item.State_of_origin}</td>
          <td style={{color:'white'}}>{item.occupation_business}</td>
          <td style={{color:'white'}}>{item.length_of_term_required}</td>
         
        </tr>
        ))
      }
     
    </tbody>
        </Table>
        </Card>
    </div>
  )
}
