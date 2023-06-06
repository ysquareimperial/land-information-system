import React, { useEffect, useState } from 'react'
import { _fetchApi } from '../helpers/helper'
import { Card, Table } from 'reactstrap'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'

function ValuationTable() {
    const [data,setData]=useState([])
    const getAssign =()=>{
        _fetchApi('/api/getAssigns',
        (res)=>{
            if(res.success){
                setData(res.results[0])
            }
        },(err)=>{
            console.log(err)
        })
    }
    useEffect(
        ()=>{
            getAssign()
        },[]
    )
    const navigate = useNavigate()
  return (
    <div>
        {/* {JSON.stringify(data)} */}
           <Card className="app_primary_card m-2 shadow p-4">
            <center><h5>valuation Report</h5></center>
<SearchBar />
<Table striped borderless size="sm" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <td style={{ fontWeight: 'bold' }}>S/N</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
              <td style={{ fontWeight: 'bold' }}>Business Location</td>
              <td style={{ fontWeight: 'bold' }}>Applicant Nationality</td>
              <td style={{ fontWeight: 'bold' }}>State Of Origin</td>
              <td style={{ fontWeight: 'bold' }}>Occupation Business</td>
              {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</th> */}
              {/* <td style={{ fontWeight: 'bold' }}>Length Of Term Required</td> */}
              <td style={{ fontWeight: 'bold' }}>Type</td>
          
              <td style={{ fontWeight: 'bold' }}>
                <div style={{ textAlign: 'right' }}>Action</div>
              </td>
            </tr>
          </thead>
          {data&&data.map((item,index)=>(
 <tr>
 <td>{index + 1}</td>
 <td>{item.Applicant_full_name}</td>
 <td>{item.Business_location}</td>
 <td>{item.Applicant_nationality}</td>
 <td>{item.State_of_origin}</td>
 <td>{item.occupation_business}</td>
 {/* <td>{item.length_of_term_required}</td> */}
 <td>{item.app_status}</td>

 <td>
   <div style={{ textAlign: 'right' }}>
    <button
      className="paid"
     onClick={()=>{navigate(`/ValuationReport?file_no=${item.file_no}`)}}
    >
      Process
    </button>
  
    
   </div>
 </td>
</tr>
          ))}
        
          <tbody>

          </tbody>
          </Table>
           </Card>
    </div>
  )
}

export default ValuationTable