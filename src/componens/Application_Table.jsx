import React, { useEffect, useState } from 'react'
import { Card, Table } from 'reactstrap'
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
        
        <Table striped>
    <thead>
        <tr>
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
          <tr>
          <td>{item.Applicant_full_name}</td>
          <td>{item.Business_location}</td>
          <td>{item.Applicant_nationality}</td>
          <td>{item.State_of_origin}</td>
          <td>{item.occupation_business}</td>
          <td>{item.length_of_term_required}</td>
         
        </tr>
        ))
      }
     
    </tbody>
        </Table>
        </Card>
    </div>
  )
}
