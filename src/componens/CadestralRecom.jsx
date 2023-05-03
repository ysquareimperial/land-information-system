import React, { useEffect, useState } from 'react'
import { Card, Table } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { _fetchApi, useQuery } from '../helpers/helper'
export default function CadestralRecom() {
  const navigate = useNavigate()
  const [data,setData]=useState([])
   const query =useQuery()
   const type = query.get('type')
  const getList = ()=>{
    _fetchApi('/api/getBYID?status=file_no_generated',
    (res)=>{
        setData(res.results[0])
    },(err)=>{
        console.log(err)
    }
    )
  }
  useEffect(
    ()=>{
        getList() 
    },[]
  )
  
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <h5 className="mb-4">{type==='director-cadestral'?'Generate Recomendation Letter':''}</h5>
      {/* {JSON.stringify(type)} */}
      <input type='search' placeholder='Search' className='input_field mb-3'/>
      <div>
        <Table borderless striped responsive>
          <thead>
            <tr>
              <td>S/N</td>
              <th>Applicantion Number</th>
            <th>Applicant Full Name</th>
            <th >Business Location</th>
            <th >Applicant Nationality</th>
            <th >State Of Origin</th>
            <th >Occupation Business</th>
            {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
            <th >Length Of Term Required</th>
            <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item,index)=>(
                <tr>
              <td scope="row">{index+1}</td>
              <td>{item.application_id}</td>
          <td>{item.Applicant_full_name}</td>
          <td>{item.Business_location}</td>
          <td>{item.Applicant_nationality}</td>
          <td>{item.State_of_origin}</td>
          <td>{item.occupation_business}</td>
          <td>{item.length_of_term_required}</td>
              <td>
                <button
                  className="blue table_btn"
                  onClick={() => navigate(`/recommendation-letter?application_file_number=${item.file_no}&role=${type}`)}
                >
                  process
                </button>
              </td>
            </tr>
            ))}
            
          
          </tbody>
        </Table>
      </div>
    </Card>
  )
}