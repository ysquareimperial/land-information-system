import React, { useEffect, useState } from 'react'
import { Card, Table } from 'reactstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { _fetchApi } from '../helpers/helper'
export default function GrantTable() {
  const navigate = useNavigate()
  const [data,setData]=useState([])

  const getList = ()=>{
    _fetchApi('/api/getCadestral?status=approved',
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
  const location =useLocation()
  const rout = location.pathname === '/survey-table'?'SurveyReport':'letter-of-grant'
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <h5 className="mb-4">{rout==='letter-of-grant'?'Generate Letter Of Grant':rout ==='SurveyReport'?'Survey Report':''}</h5>
      {/* {JSON.stringify(data)} */}
      <input type='search' placeholder='Search' className='input_field mb-3'/>
      <div>
        <Table borderless striped responsive>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Applicant File No</td>
              <td>Location</td>
              <td>Plot No</td>
              <td>Plan No</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item,index)=>(
                <tr>
              <td scope="row">{index+1}</td>
              <td>{item.application_file_number}</td>
              <td>{item.location}</td>
              <td>{item.plot_no}</td>
              <td>{item.plan_no}</td>
              <td>
                {
                  item.grant_status==='generated'?  <button
                  className="blue app_btn "
                  
                  // onClick={() => navigate(`/${rout}?application_file_number=${item.application_file_number}`)}
                >
                  View
                </button>:  <button
                  className="blue app_btn "
                  
                  onClick={() => navigate(`/${rout}?application_file_number=${item.application_file_number}`)}
                >
                  Process
                </button>
                }
                {/* <button
                  className="blue app_btn "
                  
                  onClick={() => navigate(`/${rout}?application_file_number=${item.application_file_number}`)}
                >
                  Process
                </button> */}
              </td>
            </tr>
            ))}
            
          
          </tbody>
        </Table>
      </div>
    </Card>
  )
}